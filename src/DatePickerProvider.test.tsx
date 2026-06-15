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

describe("DatePickerProvider", () => {
  describe("initial value", () => {
    it("uses a single initialValue for both selection and displayed month", () => {
      const { result } = renderProvider({
        initialValue: new Date("2024-07-15T00:00:00.000Z"),
      });

      expect(result.current.selectedDay).toEqual(
        new Date("2024-07-15T00:00:00.000Z")
      );
      expect(result.current.monthInTheCalendar).toBe(7);
      expect(result.current.yearInTheCalendar).toBe(2024);
    });

    it("uses the first date of an array initialValue for the displayed month", () => {
      const { result } = renderProvider({
        isRange: true,
        initialValue: [
          new Date("2024-03-10T00:00:00.000Z"),
          new Date("2024-03-20T00:00:00.000Z"),
        ],
      });

      expect(result.current.selectedDay).toEqual([
        new Date("2024-03-10T00:00:00.000Z"),
        new Date("2024-03-20T00:00:00.000Z"),
      ]);
      expect(result.current.monthInTheCalendar).toBe(3);
    });

    it("prefers defaultStartDate over initialValue for the displayed month", () => {
      const { result } = renderProvider({
        initialValue: new Date("2024-07-15T00:00:00.000Z"),
        defaultStartDate: new Date("2024-01-01T00:00:00.000Z"),
      });

      expect(result.current.monthInTheCalendar).toBe(1);
      expect(result.current.selectedDay).toEqual(
        new Date("2024-07-15T00:00:00.000Z")
      );
    });
  });

  describe("navigation", () => {
    it("goToNextMonth moves forward by one month", () => {
      const { result } = renderProvider({
        defaultStartDate: new Date("2024-01-15T00:00:00.000Z"),
      });

      act(() => result.current.goToNextMonth());
      expect(result.current.monthInTheCalendar).toBe(2);
    });

    it("goToNextMonth respects an explicit step", () => {
      const { result } = renderProvider({
        defaultStartDate: new Date("2024-01-15T00:00:00.000Z"),
      });

      act(() => result.current.goToNextMonth(2));
      expect(result.current.monthInTheCalendar).toBe(3);
    });

    it("goToPrevMonth moves backward by one month", () => {
      const { result } = renderProvider({
        defaultStartDate: new Date("2024-03-15T00:00:00.000Z"),
      });

      act(() => result.current.goToPrevMonth());
      expect(result.current.monthInTheCalendar).toBe(2);
    });

    it("goToNextMonth is a no-op once yearRangeTo is reached", () => {
      const { result } = renderProvider({
        defaultStartDate: new Date("2024-12-01T00:00:00.000Z"),
        config: { yearRangeTo: 2024 },
      });

      expect(result.current.monthInTheCalendar).toBe(12);
      act(() => result.current.goToNextMonth());
      expect(result.current.monthInTheCalendar).toBe(12);
      expect(result.current.yearInTheCalendar).toBe(2024);
    });

    it("goToPrevMonth is a no-op once yearRangeFrom is reached", () => {
      const { result } = renderProvider({
        defaultStartDate: new Date("2020-01-01T00:00:00.000Z"),
        config: { yearRangeFrom: 2020 },
      });

      expect(result.current.monthInTheCalendar).toBe(1);
      act(() => result.current.goToPrevMonth());
      expect(result.current.monthInTheCalendar).toBe(1);
      expect(result.current.yearInTheCalendar).toBe(2020);
    });

    it("goToDate jumps to the given date", () => {
      const { result } = renderProvider({
        defaultStartDate: new Date("2024-01-01T00:00:00.000Z"),
      });

      act(() =>
        result.current.goToDate(new Date("2025-06-10T00:00:00.000Z"))
      );
      expect(result.current.monthInTheCalendar).toBe(6);
      expect(result.current.yearInTheCalendar).toBe(2025);
    });

    it("goToMonth changes only the month", () => {
      const { result } = renderProvider({
        defaultStartDate: new Date("2024-01-15T00:00:00.000Z"),
      });

      act(() => result.current.goToMonth(9));
      expect(result.current.monthInTheCalendar).toBe(9);
      expect(result.current.yearInTheCalendar).toBe(2024);
    });

    it("goToYear changes only the year", () => {
      const { result } = renderProvider({
        defaultStartDate: new Date("2024-05-15T00:00:00.000Z"),
      });

      act(() => result.current.goToYear(2030));
      expect(result.current.yearInTheCalendar).toBe(2030);
      expect(result.current.monthInTheCalendar).toBe(5);
    });

    it("goToCurrentMonth returns to the current month", () => {
      const { result } = renderProvider({
        defaultStartDate: new Date("2000-01-01T00:00:00.000Z"),
      });

      act(() => result.current.goToCurrentMonth());
      const now = new Date();
      expect(result.current.monthInTheCalendar).toBe(now.getMonth() + 1);
      expect(result.current.yearInTheCalendar).toBe(now.getFullYear());
    });
  });

  describe("single selection", () => {
    it("selects a day and fires onChange", () => {
      const onChange = vi.fn();
      const { result } = renderProvider({
        defaultStartDate: new Date("2024-07-01T00:00:00.000Z"),
        onChange,
      });

      const date = new Date("2024-07-10T00:00:00.000Z");
      act(() => result.current.handleClickSlot(date));

      expect(onChange).toHaveBeenCalledWith(date);
      expect(result.current.selectedDay).toEqual(date);
    });
  });

  describe("range selection", () => {
    it("picks a start then an end and sorts them", () => {
      const onChange = vi.fn();
      const { result } = renderProvider({
        isRange: true,
        defaultStartDate: new Date("2024-07-01T00:00:00.000Z"),
        onChange,
      });

      const start = new Date("2024-07-10T00:00:00.000Z");
      const end = new Date("2024-07-20T00:00:00.000Z");

      act(() => result.current.handleClickSlot(start));
      expect(result.current.selectedDay).toEqual([start]);

      act(() => result.current.handleClickSlot(end));
      expect(result.current.selectedDay).toEqual([start, end]);
      expect(onChange).toHaveBeenLastCalledWith([start, end]);
    });

    it("restarts the range when a backward end is picked without allowBackwardRange", () => {
      const { result } = renderProvider({
        isRange: true,
        defaultStartDate: new Date("2024-07-01T00:00:00.000Z"),
      });

      const start = new Date("2024-07-20T00:00:00.000Z");
      const earlier = new Date("2024-07-10T00:00:00.000Z");

      act(() => result.current.handleClickSlot(start));
      act(() => result.current.handleClickSlot(earlier));

      expect(result.current.selectedDay).toEqual([earlier]);
    });

    it("allows a backward range when allowBackwardRange is set", () => {
      const { result } = renderProvider({
        isRange: true,
        defaultStartDate: new Date("2024-07-01T00:00:00.000Z"),
        config: { allowBackwardRange: true },
      });

      const start = new Date("2024-07-20T00:00:00.000Z");
      const earlier = new Date("2024-07-10T00:00:00.000Z");

      act(() => result.current.handleClickSlot(start));
      act(() => result.current.handleClickSlot(earlier));

      expect(result.current.selectedDay).toEqual([earlier, start]);
    });

    it("starts a new range after a complete one is selected", () => {
      const { result } = renderProvider({
        isRange: true,
        defaultStartDate: new Date("2024-07-01T00:00:00.000Z"),
      });

      const start = new Date("2024-07-10T00:00:00.000Z");
      const end = new Date("2024-07-20T00:00:00.000Z");
      const next = new Date("2024-07-25T00:00:00.000Z");

      act(() => result.current.handleClickSlot(start));
      act(() => result.current.handleClickSlot(end));
      act(() => result.current.handleClickSlot(next));

      expect(result.current.selectedDay).toEqual([next]);
    });
  });

  describe("hover", () => {
    it("only previews a hovered date while a range is in progress", () => {
      const { result } = renderProvider({
        isRange: true,
        defaultStartDate: new Date("2024-07-01T00:00:00.000Z"),
      });

      const hovered = new Date("2024-07-15T00:00:00.000Z");

      // no range started yet => hover ignored
      act(() => result.current.handleHoverSlot(hovered));
      expect(result.current.hoveredDate).toBeUndefined();

      // start a range, then hover is previewed
      act(() =>
        result.current.handleClickSlot(new Date("2024-07-10T00:00:00.000Z"))
      );
      act(() => result.current.handleHoverSlot(hovered));
      expect(result.current.hoveredDate).toEqual(hovered);

      // clearing always works
      act(() => result.current.handleHoverSlot(undefined));
      expect(result.current.hoveredDate).toBeUndefined();
    });
  });

  describe("controlled value", () => {
    it("reflects the value prop and updates the displayed month when it changes", () => {
      const { result } = renderHook(() => useDatePickerContext(), {
        wrapper: createWrapper({
          value: new Date("2024-07-15T00:00:00.000Z"),
        }),
      });

      expect(result.current.selectedDay).toEqual(
        new Date("2024-07-15T00:00:00.000Z")
      );
      expect(result.current.monthInTheCalendar).toBe(7);
    });

    it("does not mutate internal state on click when controlled, but still fires onChange", () => {
      const onChange = vi.fn();
      const value = new Date("2024-07-15T00:00:00.000Z");
      const { result } = renderProvider({ value, onChange });

      const clicked = new Date("2024-07-20T00:00:00.000Z");
      act(() => result.current.handleClickSlot(clicked));

      expect(onChange).toHaveBeenCalledWith(clicked);
      // selectedDay stays tied to the controlled value prop
      expect(result.current.selectedDay).toEqual(value);
    });
  });

  describe("yearsList", () => {
    it("defaults to the 20 years up to the displayed year", () => {
      const { result } = renderProvider({
        initialValue: new Date(2024, 0, 1),
      });

      const years = result.current.yearsList!;
      expect(years[0]).toBe(2004);
      expect(years[years.length - 1]).toBe(2024);
    });

    it("stays frozen to the initial window when navigating (no range set)", () => {
      const { result } = renderProvider({
        initialValue: new Date(2024, 0, 1),
      });

      // pick the oldest year currently shown
      const oldest = result.current.yearsList![0];
      expect(oldest).toBe(2004);

      act(() => result.current.goToYear(oldest));

      // the list does not slide — it remains the initial window
      const years = result.current.yearsList!;
      expect(years[0]).toBe(2004);
      expect(years.at(-1)).toBe(2024);
    });

    it("stays fixed to the configured range regardless of navigation", () => {
      const { result } = renderProvider({
        initialValue: new Date(2024, 0, 1),
        config: { yearRangeFrom: 2000, yearRangeTo: 2030 },
      });

      expect(result.current.yearsList![0]).toBe(2000);
      expect(result.current.yearsList!.at(-1)).toBe(2030);

      act(() => result.current.goToYear(2005));

      // a configured range is absolute, so it must not slide
      expect(result.current.yearsList![0]).toBe(2000);
      expect(result.current.yearsList!.at(-1)).toBe(2030);
    });
  });
});
