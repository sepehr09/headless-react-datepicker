import { fireEvent, getByLabelText, render } from "@testing-library/react";
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

  it("August 2024 should have 31 + 11 days if showOtherDays is true", () => {
    const { container } = render(
      <DatePickerProvider
        initialValue={new Date("2024-08-01T00:00:00.000Z")}
        config={{ showOtherDays: true }}
      >
        <DaySlots
          parentClassName="parentClassName"
          slotClassName="slotClassName"
        />
      </DatePickerProvider>
    );

    const parentElement = container.querySelector(".parentClassName");
    const slotElements = container.querySelectorAll(".slotClassName");

    expect(parentElement).toBeInTheDocument();

    // August 2024 should have 31 days + 5 days before the month starts + 6 days after the month ends
    expect(slotElements).toHaveLength(42);
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

  it("should className and styles to be applied on slots and parents", () => {
    const mockOnChange = vitest.fn();

    const { container } = render(
      <DatePickerProvider
        defaultStartDate={new Date("2024-08-01T00:00:00.000Z")}
        onChange={mockOnChange}
      >
        <DaySlots
          parentStyles={{ backgroundColor: "#e0e0e0" }}
          slotParentClassName="slotParentClassName"
          slotParentStyles={{ backgroundColor: "#e1e1e1" }}
          slotClassName="slotClassName"
          slotStyles={{ backgroundColor: "#e2e2e2" }}
        />
      </DatePickerProvider>
    );

    const slotParentElements = container.querySelectorAll(
      ".slotParentClassName"
    );

    slotParentElements.forEach((slotParent) => {
      // parent element
      expect(slotParent).toHaveClass("slotParentClassName");
      expect(slotParent).toHaveStyle("background-color: #e1e1e1"); // slotParentStyles

      // slot element
      expect(slotParent.firstChild).toHaveClass("slotClassName");
      expect(slotParent.firstChild).toHaveStyle("background-color: #e2e2e2"); // slotStyles
    });
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
          slotParentClassName="slotParentClassName"
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

  it("should className and styles to be applied on weekends", () => {
    const mockOnChange = vitest.fn();

    const { container } = render(
      <DatePickerProvider
        defaultStartDate={new Date("2024-08-01T00:00:00.000Z")}
        onChange={mockOnChange}
        config={{
          weekendSelectable: false,
          weekends: ["saturday", "sunday"],
        }}
      >
        <DaySlots
          parentStyles={{ backgroundColor: "#e0e0e0" }}
          slotParentClassName="slotParentClassName"
          weekendParentClassName="weekendParentClassName"
          disableParentClassName="disableParentClassName"
          weekendParentStyles={{ backgroundColor: "#e1e1e1" }}
          weekendClassName="weekendClassName"
          weekendStyles={{ backgroundColor: "#e2e2e2" }}
        />
      </DatePickerProvider>
    );

    const slotParentElements = container.querySelectorAll(
      ".slotParentClassName"
    );

    const weekends = [
      slotParentElements[2], // August 3, 2024 (Saturday)
      slotParentElements[3], // August 4, 2024 (Sunday)
      slotParentElements[9], // August 10, 2024 (Saturday)
      slotParentElements[10], // August 11, 2024 (Sunday)
      slotParentElements[16], // August 17, 2024 (Saturday)
      slotParentElements[17], // August 18, 2024 (Sunday)
      slotParentElements[23], // August 24, 2024 (Saturday)
      slotParentElements[24], // August 25, 2024 (Sunday)
      slotParentElements[30], // August 31, 2024 (Saturday)
    ];

    weekends.forEach((weekend) => {
      // parent element
      expect(weekend).toHaveClass("weekendParentClassName");
      expect(weekend).toHaveStyle("background-color: #e1e1e1"); // weekendParentStyles

      // slot element
      expect(weekend.firstChild).toHaveClass("weekendClassName");
      expect(weekend.firstChild).toHaveStyle("background-color: #e2e2e2"); // weekendStyles
    });
  });

  it("should minDate and maxDate classNames applied", () => {
    const mockOnChange = vitest.fn();

    const { container } = render(
      <DatePickerProvider
        defaultStartDate={new Date("2024-08-01T00:00:00.000Z")}
        onChange={mockOnChange}
        config={{
          minDate: new Date("2024-08-05T00:00:00.000Z"),
          maxDate: new Date("2024-08-25T00:00:00.000Z"),
        }}
      >
        <DaySlots
          parentStyles={{ backgroundColor: "#e0e0e0" }}
          slotParentClassName="slotParentClassName"
          disableParentClassName="disableParentClassName"
          disableClassName="disableClassName"
          disableParentStyles={{ backgroundColor: "#e1e1e1" }}
          disableStyles={{ color: "#e2e2e2" }}
        />
      </DatePickerProvider>
    );

    const slotParentElements = container.querySelectorAll(
      ".slotParentClassName"
    );

    const disableDays = [
      slotParentElements[0], // August 1, 2024
      slotParentElements[1], // August 2, 2024
      slotParentElements[2], // August 3, 2024
      slotParentElements[3], // August 4, 2024
      slotParentElements[26], // August 27, 2024
      slotParentElements[27], // August 28, 2024
      slotParentElements[28], // August 29, 2024
      slotParentElements[29], // August 30, 2024
      slotParentElements[30], // August 31, 2024
    ];

    disableDays.forEach((disableDay) => {
      // parent element
      expect(disableDay).toHaveClass("disableParentClassName");
      expect(disableDay).toHaveStyle("background-color: #e1e1e1"); // disableParentStyles

      // slot element
      expect(disableDay.firstChild).toHaveClass("disableClassName");
      expect(disableDay.firstChild).toHaveStyle("color: #e2e2e2"); // disableStyles
    });
  });

  it("should minDate and maxDate click disabled", () => {
    const mockOnChange = vitest.fn();

    const { container } = render(
      <DatePickerProvider
        defaultStartDate={new Date("2024-08-01T00:00:00.000Z")}
        onChange={mockOnChange}
        config={{
          minDate: new Date("2024-08-05T00:00:00.000Z"),
          maxDate: new Date("2024-08-25T00:00:00.000Z"),
        }}
      >
        <DaySlots
          parentStyles={{ backgroundColor: "#e0e0e0" }}
          slotParentClassName="slotParentClassName"
          disableParentClassName="disableParentClassName"
          disableClassName="disableClassName"
        />
      </DatePickerProvider>
    );

    const slotParentElements = container.querySelectorAll(
      ".slotParentClassName"
    );

    const disableDays = [
      slotParentElements[0], // August 1, 2024
      slotParentElements[1], // August 2, 2024
      slotParentElements[2], // August 3, 2024
      slotParentElements[3], // August 4, 2024
      slotParentElements[26], // August 27, 2024
      slotParentElements[27], // August 28, 2024
      slotParentElements[28], // August 29, 2024
      slotParentElements[29], // August 30, 2024
      slotParentElements[30], // August 31, 2024
    ];

    disableDays.forEach((disableDay) => {
      // slot element
      expect(disableDay.firstChild).toHaveClass("disableClassName");
      fireEvent.click(disableDay.firstChild!);

      // expect the onchange prop to NOT been called
      expect(mockOnChange).not.toHaveBeenCalled();
    });
  });

  it("should otherDays has disabled className and click disabled if otherDaysSelectable is false", () => {
    const mockOnChange = vitest.fn();

    const { container } = render(
      <DatePickerProvider
        initialValue={new Date("2024-08-01T00:00:00.000Z")}
        config={{ showOtherDays: true, otherDaysSelectable: false }}
        onChange={mockOnChange}
      >
        <DaySlots
          slotClassName="slotClassName"
          slotParentClassName="slotParentClassName"
          disableParentClassName="disableParentClassName"
          disableClassName="disableClassName"
          disableParentStyles={{ backgroundColor: "#e0e0e0" }}
          disableStyles={{ color: "#e1e1e1" }}
        />
      </DatePickerProvider>
    );

    const slotParentElements = container.querySelectorAll(
      ".slotParentClassName"
    );

    const otherDays = [
      slotParentElements[0], // July 27, 2024
      slotParentElements[1], // July 28, 2024
      slotParentElements[2], // July 29, 2024
      slotParentElements[3], // July 30, 2024
      slotParentElements[4], // July 31, 2024
      slotParentElements[36], // September 1, 2024
      slotParentElements[37], // September 2, 2024
      slotParentElements[38], // September 3, 2024
      slotParentElements[39], // September 4, 2024
      slotParentElements[40], // September 5, 2024
      slotParentElements[41], // September 6, 2024
    ];

    otherDays.forEach((otherDay) => {
      // slot parent element
      expect(otherDay).toHaveClass("disableParentClassName");
      expect(otherDay).toHaveStyle("background-color: #e0e0e0"); // disableParentStyles

      // slot element
      expect(otherDay.firstChild).toHaveClass("disableClassName");
      expect(otherDay.firstChild).toHaveStyle("color: #e1e1e1"); // disableStyles
      fireEvent.click(otherDay.firstChild!);

      // expect the onchange prop to NOT been called
      expect(mockOnChange).not.toHaveBeenCalled();
    });
  });

  it("should dayRenderer be called and props works", () => {
    const mockDayRenderer = vitest.fn();

    render(
      <DatePickerProvider
        initialValue={new Date("2024-08-01T00:00:00.000Z")}
        config={{ showOtherDays: true, otherDaysSelectable: false }}
      >
        <DaySlots dayRenderer={mockDayRenderer} />
      </DatePickerProvider>
    );

    expect(mockDayRenderer).toHaveBeenCalledTimes(42);
    expect(mockDayRenderer).toHaveBeenNthCalledWith(42, {
      IsToday: false,
      isToday: false,
      date: new Date("2024-09-06T00:00:00.000Z"),
      formattedDay: "6",
      handleClickSlot: expect.any(Function),
      handleKeyDown: expect.any(Function),
      isDisabled: true,
      isEndOfRange: false,
      isInHoveredRange: false,
      isInSelectedRange: false,
      isInWeekend: false,
      isInHoliday: false,
      isSelectable: false,
      isSelected: false,
      isStartOfRange: false,
      isOtherMonth: true,
    });
  });

  it("should up, down, left, right arrow keys works when focus on selected slot", () => {
    const mockOnChange = vitest.fn();

    const { container } = render(
      <DatePickerProvider
        initialValue={new Date("2024-08-01T00:00:00.000Z")}
        config={{ showOtherDays: true, otherDaysSelectable: false }}
        onChange={mockOnChange}
      >
        <DaySlots
          slotClassName="slotClassName"
          selectedClassName="selectedClassName"
          slotParentClassName="slotParentClassName"
        />
      </DatePickerProvider>
    );

    const selectedSlot = getByLabelText(container, "August 1, 2024");

    selectedSlot.focus();
    expect(selectedSlot).toHaveFocus();

    /* ------------------------------- arrow right ------------------------------ */
    fireEvent.keyDown(selectedSlot, { key: "ArrowRight" });

    const nextSlot = getByLabelText(container, "August 2, 2024");
    expect(nextSlot).toHaveFocus();

    /* -------------------------------- hit enter ------------------------------- */
    fireEvent.keyDown(document.activeElement!, { key: "Enter" });

    expect(mockOnChange).toHaveBeenCalledWith(
      new Date("2024-08-02T00:00:00.000Z")
    );

    /* ------------------------------- arrow left ------------------------------- */
    fireEvent.keyDown(nextSlot, { key: "ArrowLeft" });

    const previousSlot = getByLabelText(container, "August 1, 2024");
    expect(previousSlot).toHaveFocus();

    /* ------------------------------- arrow down ------------------------------- */
    fireEvent.keyDown(previousSlot, { key: "ArrowDown" });

    const downSlot = getByLabelText(container, "August 8, 2024");
    expect(downSlot).toHaveFocus();

    /* -------------------------------- arrow up -------------------------------- */
    fireEvent.keyDown(downSlot, { key: "ArrowUp" });

    const upSlot = getByLabelText(container, "August 1, 2024");
    expect(upSlot).toHaveFocus();
  });
});
