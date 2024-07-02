import { fireEvent, render, screen } from "@testing-library/react";
import DatePickerProvider from "../../DatePickerProvider";
import DaySlots from "./DaySlots";

describe("DaySlots component", () => {
  /**
   * August 2024
   * (2024-08-01T00:00:00.000Z )
   *
   * Sat | Sun | Mon | Tue | Wed | Thu | Fri
   *  -  |  -  |  -  |  -  |  -  |  1  |  2
   *  3  |  4  |  5  |  6  |  7  |  8  |  9
   * 10  | 11  | 12  | 13  | 14  | 15  | 16
   * 17  | 18  | 19  | 20  | 21  | 22  | 23
   * 24  | 25  | 26  | 27  | 28  | 29  | 30
   * 31  |  -  |  -  |  -  |  -  |  -  |  -
   */

  it("August 2024 should have 31 days", () => {
    const { container } = render(
      <DatePickerProvider initialValue={new Date("2024-08-01T00:00:00.000Z")}>
        <DaySlots
          parentClassName="parentClassName"
          slotClassName="slotClassName"
        />
      </DatePickerProvider>
    );

    const parentElement = container.querySelector(".parentClassName");
    const slotElements = container.querySelectorAll(".slotClassName");

    expect(parentElement).toBeInTheDocument();

    // August 2024 should have 31 days
    expect(slotElements).toHaveLength(31);
  });

  it("August 2024 should have 42 children including space for other days of the week", () => {
    const { container } = render(
      <DatePickerProvider initialValue={new Date("2024-08-01T00:00:00.000Z")}>
        <DaySlots
          parentClassName="parentClassName"
          slotClassName="slotClassName"
        />
      </DatePickerProvider>
    );

    const parentElement = container.querySelector(".parentClassName");

    expect(parentElement).toBeInTheDocument();

    // should have 42 children
    // (5 days before the month starts because week starts on Saturday)
    // (1-31 days of the month)
    // (6 days after the month ends)
    expect(parentElement?.children).toHaveLength(42);
  });

  it("should onChange have been called when click on days", () => {
    const mockOnChange = vitest.fn();

    const { container } = render(
      <DatePickerProvider
        defaultStartDate={new Date("2024-08-01T00:00:00.000Z")}
        onChange={mockOnChange}
      >
        <DaySlots
          parentClassName="parentClassName"
          slotClassName="slotClassName"
        />
      </DatePickerProvider>
    );

    const slotElements = container.querySelectorAll(".slotClassName");

    fireEvent.click(slotElements[0]);

    // expect the onchange prop to be called and return the date
    expect(mockOnChange).toHaveBeenCalledWith(
      new Date("2024-08-01T00:00:00.000Z")
    );
  });

  it("should nothing happens when click on weekends when weekendSelectable is false", () => {
    const mockOnChange = vitest.fn();

    const { container } = render(
      <DatePickerProvider
        initialValue={new Date("2024-08-01T00:00:00.000Z")}
        onChange={mockOnChange}
        config={{ weekendSelectable: false, weekends: ["saturday", "sunday"] }}
      >
        <DaySlots
          parentClassName="parentClassName"
          slotClassName="slotClassName"
        />
      </DatePickerProvider>
    );

    const slotElements = container.querySelectorAll(".slotClassName");

    fireEvent.click(slotElements[3]); // August 4, 2024 (Sunday)

    // expect the onchange prop to NOT been called
    expect(mockOnChange).not.toHaveBeenCalled();
  });

  it("should onChange have been called when click on days in Range calendar", () => {
    const mockOnChange = vitest.fn();

    const { container } = render(
      <DatePickerProvider
        // initialValue={new Date("2024-08-01T00:00:00.000Z")}
        defaultStartDate={new Date("2024-08-01T00:00:00.000Z")}
        onChange={mockOnChange}
        isRange
      >
        <DaySlots
          parentClassName="parentClassName"
          slotClassName="slotClassName"
        />
      </DatePickerProvider>
    );

    const slotElements = container.querySelectorAll(".slotClassName");

    fireEvent.click(slotElements[0]); // August 1, 2024

    // expect the onchange prop to be called and return the date
    expect(mockOnChange).toHaveBeenCalledWith([
      new Date("2024-08-01T00:00:00.000Z"),
    ]);

    fireEvent.click(slotElements[6]); // August 7, 2024

    // expect the onchange prop to be called and return the date
    expect(mockOnChange).toHaveBeenCalledWith([
      new Date("2024-08-01T00:00:00.000Z"),
      new Date("2024-08-07T00:00:00.000Z"),
    ]);
  });

  it("should select days normally when allowBackwardRange is true in range picker", () => {
    const mockOnChange = vitest.fn();

    const { container } = render(
      <DatePickerProvider
        // initialValue={new Date("2024-08-01T00:00:00.000Z")}
        defaultStartDate={new Date("2024-08-01T00:00:00.000Z")}
        onChange={mockOnChange}
        isRange
        config={{ allowBackwardRange: true }}
      >
        <DaySlots
          parentClassName="parentClassName"
          slotClassName="slotClassName"
        />
      </DatePickerProvider>
    );

    const slotElements = container.querySelectorAll(".slotClassName");

    fireEvent.click(slotElements[6]); // August 7, 2024

    // expect the onchange prop to be called and return the date
    expect(mockOnChange).toHaveBeenCalledWith([
      new Date("2024-08-07T00:00:00.000Z"),
    ]);

    fireEvent.click(slotElements[5]); // August 6, 2024

    // expect the onchange prop to be called and return the date
    expect(mockOnChange).toHaveBeenCalledWith([
      new Date("2024-08-06T00:00:00.000Z"),
      new Date("2024-08-07T00:00:00.000Z"),
    ]);
  });

  it("should prevent select days before first date when allowBackwardRange is false in range picker", () => {
    const mockOnChange = vitest.fn();

    const { container } = render(
      <DatePickerProvider
        // initialValue={new Date("2024-08-01T00:00:00.000Z")}
        defaultStartDate={new Date("2024-08-01T00:00:00.000Z")}
        onChange={mockOnChange}
        isRange
        config={{ allowBackwardRange: false }}
      >
        <DaySlots
          parentClassName="parentClassName"
          slotClassName="slotClassName"
        />
      </DatePickerProvider>
    );

    const slotElements = container.querySelectorAll(".slotClassName");

    fireEvent.click(slotElements[6]); // August 7, 2024

    // expect the onchange prop to be called and return the date
    expect(mockOnChange).toHaveBeenCalledWith([
      new Date("2024-08-07T00:00:00.000Z"),
    ]);

    fireEvent.click(slotElements[5]); // August 6, 2024

    // expect the onchange prop to be called and return the date
    expect(mockOnChange).toHaveBeenCalledWith([
      new Date("2024-08-06T00:00:00.000Z"),
    ]);
  });

  it("should className and styles to be applied on selected day (single picker)", () => {
    const mockOnChange = vitest.fn();

    const { container } = render(
      <DatePickerProvider
        defaultStartDate={new Date("2024-08-01T00:00:00.000Z")}
        onChange={mockOnChange}
      >
        <DaySlots
          parentStyles={{ backgroundColor: "#e0e0e0" }}
          slotParentClassName="slotParentClassName"
          selectedParentClassName="selectedParentClassName"
          selectedClassName="selectedClassName"
          selectedParentStyles={{ backgroundColor: "#e1e1e1" }}
          selectedStyles={{ backgroundColor: "#e2e2e2" }}
        />
      </DatePickerProvider>
    );

    const slotParentElements = container.querySelectorAll(
      ".slotParentClassName"
    );

    const selectedSlot = slotParentElements[0].firstChild!; // August 1, 2024

    /* ------------------------------ click on slot ----------------------------- */
    fireEvent.click(selectedSlot!); // August 1, 2024

    // selectedParent
    expect(slotParentElements[0]).toHaveClass("selectedParentClassName");
    expect(slotParentElements[0]).toHaveStyle("background-color: #e1e1e1");

    // selected slot
    expect(selectedSlot).toHaveClass("selectedClassName");
    expect(selectedSlot).toHaveStyle("background-color: #e2e2e2");
  });

  it("should className and styles to be applied on selected days (range picker)", () => {
    const mockOnChange = vitest.fn();

    const { container } = render(
      <DatePickerProvider
        defaultStartDate={new Date("2024-08-01T00:00:00.000Z")}
        onChange={mockOnChange}
        isRange
      >
        <DaySlots
          parentClassName="parentClassName"
          parentStyles={{ backgroundColor: "#e0e0e0" }}
          slotParentClassName="slotParentClassName"
          slotParentStyles={{ textAlign: "center" }}
          selectedClassName="selectedClassName"
          selectedStyles={{ backgroundColor: "#e1e1e1" }}
          startOfRangeClassName="startOfRangeClassName"
          startOfRangeStyles={{ borderColor: "#e2e2e2" }}
          endOfRangeClassName="endOfRangeClassName"
          endOfRangeStyles={{ borderColor: "#e3e3e3" }}
          selectedParentClassName="selectedParentClassName"
          selectedParentStyles={{ color: "#e4e4e4" }}
          inSelectedRangeParentClassName="inSelectedRangeParentClassName"
          inSelectedRangeParentStyles={{ borderWidth: "1.5px" }}
          inSelectedRangeClassName="inSelectedRangeClassName"
          inSelectedRangeStyles={{ borderStyle: "dashed" }}
        />
      </DatePickerProvider>
    );

    const parentElement = container.querySelector(".parentClassName");
    const slotParentElements = container.querySelectorAll(
      ".slotParentClassName"
    );

    const startOfRange = slotParentElements[0].firstChild!; // August 1, 2024

    const middleOfRange = [
      slotParentElements[1],
      slotParentElements[2],
      slotParentElements[3],
      slotParentElements[4],
    ]; // August 2, 2024 - August 5, 2024

    const endOfRange = slotParentElements[5].firstChild!; // August 6, 2024

    fireEvent.click(startOfRange!);
    fireEvent.click(endOfRange!);

    screen.debug();

    /* ------------------------------- classNames ------------------------------- */
    // parent element
    expect(parentElement).toHaveStyle("background-color: #e0e0e0");

    // slotParents
    slotParentElements.forEach((slotParent) => {
      expect(slotParent).toHaveClass("slotParentClassName");
      expect(slotParent).toHaveStyle("text-align: center");
    });

    // startOfRange
    expect(startOfRange.parentElement).toHaveClass("selectedParentClassName");
    expect(startOfRange.parentElement).toHaveStyle("color: #e4e4e4");
    expect(startOfRange).toHaveClass("selectedClassName");
    expect(startOfRange).toHaveClass("startOfRangeClassName");
    expect(startOfRange).toHaveStyle("background-color: #e1e1e1"); // selectedStyles
    expect(startOfRange).toHaveStyle("border-color: #e2e2e2"); // startOfRangeStyles

    // endOfRange
    expect(endOfRange.parentElement).toHaveClass("selectedParentClassName");
    expect(endOfRange.parentElement).toHaveStyle("color: #e4e4e4");
    expect(endOfRange).toHaveClass("selectedClassName");
    expect(endOfRange).toHaveClass("endOfRangeClassName");
    expect(endOfRange).toHaveStyle("background-color: #e1e1e1"); // selectedStyles
    expect(endOfRange).toHaveStyle("border-color: #e3e3e3"); // endOfRangeStyles

    middleOfRange.forEach((middle) => {
      // parent element
      expect(middle).toHaveClass("inSelectedRangeParentClassName");
      expect(middle).toHaveStyle("border-width: 1.5px"); // inSelectedRangeParentStyles

      // slot element
      expect(middle.firstChild).toHaveClass("inSelectedRangeClassName");
      expect(middle.firstChild).toHaveStyle("border-style: dashed"); // inSelectedRangeStyles
    });
  });
});
