/* eslint-disable @typescript-eslint/no-explicit-any */
import { act, renderHook } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import DatePickerProvider from "./DatePickerProvider";
import { useDatePickerContext } from "./hooks/useDatePickerContext";

const createWrapper = (props: any) => {
  return function CreatedWrapper({ children }: any) {
    return <DatePickerProvider {...props}>{children}</DatePickerProvider>;
  };
};

const renderProvider = (props: any = {}) =>
  renderHook(() => useDatePickerContext(), {
    wrapper: createWrapper(props),
  });

describe("DatePickerProvider — time", () => {
  describe("handleChangeTime (single)", () => {
    it("sets the time of the selected day, keeping the day", () => {
      const onChange = vi.fn();
      const { result } = renderProvider({
        initialValue: new Date(2024, 6, 15, 0, 0, 0),
        onChange,
      });

      act(() => result.current.handleChangeTime?.({ hours: 14, minutes: 30 }));

      const selected = result.current.selectedDay as Date;
      expect(selected.getDate()).toBe(15);
      expect(selected.getHours()).toBe(14);
      expect(selected.getMinutes()).toBe(30);
      expect(onChange).toHaveBeenCalled();
    });

    it("updates one part without disturbing the others", () => {
      const { result } = renderProvider({
        initialValue: new Date(2024, 6, 15, 9, 30, 45),
      });

      act(() => result.current.handleChangeTime?.({ minutes: 5 }));

      const selected = result.current.selectedDay as Date;
      expect(selected.getHours()).toBe(9);
      expect(selected.getMinutes()).toBe(5);
      expect(selected.getSeconds()).toBe(45);
    });

    it("falls back to the displayed day (at midnight) when nothing is selected", () => {
      const { result } = renderProvider({
        defaultStartDate: new Date(2024, 6, 20, 0, 0, 0),
      });

      act(() => result.current.handleChangeTime?.({ hours: 8 }));

      const selected = result.current.selectedDay as Date;
      expect(selected.getDate()).toBe(20);
      expect(selected.getHours()).toBe(8);
      expect(selected.getMinutes()).toBe(0);
    });
  });

  describe("handleChangeTime (range)", () => {
    it("updates the chosen end of the range by index", () => {
      const { result } = renderProvider({
        isRange: true,
        initialValue: [
          new Date(2024, 6, 10, 0, 0, 0),
          new Date(2024, 6, 20, 0, 0, 0),
        ],
      });

      act(() => result.current.handleChangeTime?.({ hours: 18 }, 1));

      const [start, end] = result.current.selectedDay as Date[];
      expect(start.getHours()).toBe(0);
      expect(end.getDate()).toBe(20);
      expect(end.getHours()).toBe(18);
    });

    it("keeps the range ordered when the start's time is set past the end (same day)", () => {
      const onChange = vi.fn();
      const { result } = renderProvider({
        isRange: true,
        initialValue: [
          new Date(2024, 6, 15, 9, 0, 0),
          new Date(2024, 6, 15, 17, 0, 0),
        ],
        onChange,
      });

      // push the start (index 0) to 20:00, later than the end's 17:00
      act(() => result.current.handleChangeTime?.({ hours: 20 }, 0));

      const [start, end] = result.current.selectedDay as Date[];
      // the two ends are re-sorted so start is never after end
      expect(start.getTime()).toBeLessThanOrEqual(end.getTime());
      expect(start.getHours()).toBe(17);
      expect(end.getHours()).toBe(20);

      // onChange receives the ordered range, not an inverted one
      const delivered = onChange.mock.lastCall?.[0] as Date[];
      expect(delivered[0].getTime()).toBeLessThanOrEqual(
        delivered[1].getTime()
      );
    });

    it("keeps the range ordered when the end's time is set before the start (same day)", () => {
      const { result } = renderProvider({
        isRange: true,
        initialValue: [
          new Date(2024, 6, 15, 9, 0, 0),
          new Date(2024, 6, 15, 17, 0, 0),
        ],
      });

      // pull the end (index 1) back to 06:00, earlier than the start's 09:00
      act(() => result.current.handleChangeTime?.({ hours: 6 }, 1));

      const [start, end] = result.current.selectedDay as Date[];
      expect(start.getTime()).toBeLessThanOrEqual(end.getTime());
      expect(start.getHours()).toBe(6);
      expect(end.getHours()).toBe(9);
    });

    it("does not leave a hole when the end's time is set before a start exists", () => {
      const { result } = renderProvider({
        isRange: true,
        defaultStartDate: new Date(2024, 6, 20, 0, 0, 0),
      });

      // set the end (index 1) while nothing is selected yet
      act(() => result.current.handleChangeTime?.({ hours: 18 }, 1));

      const value = result.current.selectedDay as Date[];
      // index 0 is backfilled (not undefined) so consumers never see a hole
      expect(value[0]).toBeInstanceOf(Date);
      expect(value[1]).toBeInstanceOf(Date);
      expect(value[1].getHours()).toBe(18);
    });
  });

  describe("time preservation on day change", () => {
    it("keeps the previously-picked time when a new day is clicked (single)", () => {
      const { result } = renderProvider({
        initialValue: new Date(2024, 6, 15, 0, 0, 0),
      });

      // pick a time, then click a different day
      act(() => result.current.handleChangeTime?.({ hours: 14, minutes: 30 }));
      act(() =>
        result.current.handleClickSlot?.(new Date(2024, 6, 18, 0, 0, 0))
      );

      const selected = result.current.selectedDay as Date;
      expect(selected.getDate()).toBe(18);
      expect(selected.getHours()).toBe(14);
      expect(selected.getMinutes()).toBe(30);
    });

    it("keeps each end's time when re-picking a range", () => {
      const { result } = renderProvider({
        isRange: true,
        initialValue: [
          new Date(2024, 6, 10, 0, 0, 0),
          new Date(2024, 6, 20, 0, 0, 0),
        ],
      });

      // give the start a time
      act(() => result.current.handleChangeTime?.({ hours: 9 }, 0));
      // re-start the range on a new day (a completed range starts over)
      act(() =>
        result.current.handleClickSlot?.(new Date(2024, 6, 12, 0, 0, 0))
      );

      const [newStart] = result.current.selectedDay as Date[];
      expect(newStart.getDate()).toBe(12);
      expect(newStart.getHours()).toBe(9);
    });
  });
});
