import { fireEvent, render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import DatePickerProvider from "../../DatePickerProvider";
import TimePicker from "./TimePicker";

describe("TimePicker component", () => {
  it("renders the selected time as dropdowns of zero-padded hours:minutes (24h)", () => {
    const { getByLabelText, queryByLabelText } = render(
      <DatePickerProvider initialValue={new Date(2024, 6, 15, 9, 30, 0)}>
        <TimePicker />
      </DatePickerProvider>
    );

    expect((getByLabelText("hours") as HTMLSelectElement).value).toBe("9");
    expect((getByLabelText("minutes") as HTMLSelectElement).value).toBe("30");
    // option labels are zero-padded / localized
    expect(
      getByLabelText("hours").querySelector("option[value='9']")?.textContent
    ).toBe("09");
    // seconds column is hidden by default
    expect(queryByLabelText("seconds")).toBeNull();
  });

  it("lets the user pick a value directly from the native dropdown", () => {
    const { getByLabelText } = render(
      <DatePickerProvider initialValue={new Date(2024, 6, 15, 9, 30, 0)}>
        <TimePicker />
      </DatePickerProvider>
    );

    fireEvent.change(getByLabelText("hours"), { target: { value: "15" } });
    expect((getByLabelText("hours") as HTMLSelectElement).value).toBe("15");

    fireEvent.change(getByLabelText("minutes"), { target: { value: "5" } });
    expect((getByLabelText("minutes") as HTMLSelectElement).value).toBe("5");
  });

  it("renders a plain (non-interactive) value when dropdown is false", () => {
    const { getByLabelText } = render(
      <DatePickerProvider initialValue={new Date(2024, 6, 15, 9, 30, 0)}>
        <TimePicker dropdown={false} />
      </DatePickerProvider>
    );

    const hours = getByLabelText("hours");
    expect(hours.tagName).toBe("DIV");
    expect(hours.textContent).toBe("09");
  });

  it("increments and decrements hours with wrap-around", () => {
    const { getByLabelText } = render(
      <DatePickerProvider initialValue={new Date(2024, 6, 15, 23, 0, 0)}>
        <TimePicker />
      </DatePickerProvider>
    );

    // 23 -> wraps to 00
    fireEvent.click(getByLabelText("Increase hours"));
    expect((getByLabelText("hours") as HTMLSelectElement).value).toBe("0");

    // 00 -> wraps back to 23
    fireEvent.click(getByLabelText("Decrease hours"));
    expect((getByLabelText("hours") as HTMLSelectElement).value).toBe("23");
  });

  it("wraps minutes 59 -> 00 independently of hours", () => {
    const { getByLabelText } = render(
      <DatePickerProvider initialValue={new Date(2024, 6, 15, 9, 59, 0)}>
        <TimePicker />
      </DatePickerProvider>
    );

    fireEvent.click(getByLabelText("Increase minutes"));
    expect((getByLabelText("minutes") as HTMLSelectElement).value).toBe("0");
    expect((getByLabelText("hours") as HTMLSelectElement).value).toBe("9");
  });

  it("wraps minutes 00 -> 59 on decrement, leaving hours untouched", () => {
    const { getByLabelText } = render(
      <DatePickerProvider initialValue={new Date(2024, 6, 15, 9, 0, 0)}>
        <TimePicker />
      </DatePickerProvider>
    );

    fireEvent.click(getByLabelText("Decrease minutes"));
    expect((getByLabelText("minutes") as HTMLSelectElement).value).toBe("59");
    expect((getByLabelText("hours") as HTMLSelectElement).value).toBe("9");
  });

  it("shows a seconds column when showSeconds is set", () => {
    const { getByLabelText } = render(
      <DatePickerProvider initialValue={new Date(2024, 6, 15, 9, 30, 45)}>
        <TimePicker showSeconds />
      </DatePickerProvider>
    );

    expect((getByLabelText("seconds") as HTMLSelectElement).value).toBe("45");
    fireEvent.click(getByLabelText("Increase seconds"));
    expect((getByLabelText("seconds") as HTMLSelectElement).value).toBe("46");
  });

  it("decrements seconds and selects a second directly from the dropdown", () => {
    const { getByLabelText } = render(
      <DatePickerProvider initialValue={new Date(2024, 6, 15, 9, 30, 0)}>
        <TimePicker showSeconds />
      </DatePickerProvider>
    );

    // 00 -> wraps back to 59
    fireEvent.click(getByLabelText("Decrease seconds"));
    expect((getByLabelText("seconds") as HTMLSelectElement).value).toBe("59");

    // pick a value directly from the native dropdown
    fireEvent.change(getByLabelText("seconds"), { target: { value: "25" } });
    expect((getByLabelText("seconds") as HTMLSelectElement).value).toBe("25");
    // hours/minutes are untouched
    expect((getByLabelText("hours") as HTMLSelectElement).value).toBe("9");
    expect((getByLabelText("minutes") as HTMLSelectElement).value).toBe("30");
  });

  it("renders 12-hour mode with an AM/PM toggle", () => {
    const { getByLabelText, getAllByLabelText } = render(
      <DatePickerProvider initialValue={new Date(2024, 6, 15, 13, 5, 0)}>
        <TimePicker use12Hours />
      </DatePickerProvider>
    );

    // 13:00 -> 1 PM
    expect((getByLabelText("hours") as HTMLSelectElement).value).toBe("1");
    expect((getByLabelText("AM/PM") as HTMLSelectElement).value).toBe("PM");

    // toggling flips to AM (1 AM)
    fireEvent.click(getAllByLabelText("Toggle AM/PM")[0]);
    expect((getByLabelText("AM/PM") as HTMLSelectElement).value).toBe("AM");
  });

  it("changes the period directly from the AM/PM dropdown", () => {
    const { getByLabelText } = render(
      <DatePickerProvider initialValue={new Date(2024, 6, 15, 1, 5, 0)}>
        <TimePicker use12Hours />
      </DatePickerProvider>
    );

    // 01:05 -> 1 AM
    expect((getByLabelText("hours") as HTMLSelectElement).value).toBe("1");
    expect((getByLabelText("AM/PM") as HTMLSelectElement).value).toBe("AM");

    // selecting PM from the dropdown shifts the 24h value to 13:00
    fireEvent.change(getByLabelText("AM/PM"), { target: { value: "PM" } });
    expect((getByLabelText("AM/PM") as HTMLSelectElement).value).toBe("PM");
    // the 12-hour display stays 1, but the underlying hour is now 13 (PM)
    expect((getByLabelText("hours") as HTMLSelectElement).value).toBe("1");
  });

  it("selects an hour directly in 12-hour mode keeping the period", () => {
    const { getByLabelText } = render(
      <DatePickerProvider initialValue={new Date(2024, 6, 15, 13, 0, 0)}>
        <TimePicker use12Hours />
      </DatePickerProvider>
    );

    // 13:00 -> 1 PM; choosing "5" keeps PM -> 17:00
    fireEvent.change(getByLabelText("hours"), { target: { value: "5" } });
    expect((getByLabelText("hours") as HTMLSelectElement).value).toBe("5");
    expect((getByLabelText("AM/PM") as HTMLSelectElement).value).toBe("PM");
  });

  it("targets the chosen end of a range via the index prop", () => {
    const { getByLabelText } = render(
      <DatePickerProvider
        isRange
        initialValue={[
          new Date(2024, 6, 10, 9, 0, 0),
          new Date(2024, 6, 20, 18, 0, 0),
        ]}
      >
        <TimePicker index={1} />
      </DatePickerProvider>
    );

    // index 1 = end of range = 18:00
    expect((getByLabelText("hours") as HTMLSelectElement).value).toBe("18");
  });

  it("uses a custom renderer when provided, bypassing the default UI", () => {
    const { getByTestId, queryByLabelText } = render(
      <DatePickerProvider initialValue={new Date(2024, 6, 15, 9, 30, 0)}>
        <TimePicker
          renderer={({ formatted, increment }) => (
            <button data-testid="custom" onClick={() => increment("hours")}>
              {formatted}
            </button>
          )}
        />
      </DatePickerProvider>
    );

    const custom = getByTestId("custom");
    expect(custom.textContent).toBe("09:30");
    // default stepper UI is not rendered
    expect(queryByLabelText("Increase hours")).toBeNull();

    fireEvent.click(custom);
    expect(custom.textContent).toBe("10:30");
  });
});
