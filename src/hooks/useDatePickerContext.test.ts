import { renderHook } from "@testing-library/react";
import DatePickerProvider from "../DatePickerProvider";
import { useDatePickerContext } from "./useDatePickerContext";

describe("useDatePickerContext", () => {
  it("should return the context value", () => {
    const { result } = renderHook(() => useDatePickerContext(), {
      wrapper: DatePickerProvider,
      initialProps: {
        defaultStartDate: new Date("2024-08-01T00:00:00.000Z"),
      },
    });

    expect(result.current.yearsList).toEqual([
      2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015,
      2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024,
    ]);

    expect(result.current.monthsList).toEqual([
      { label: "January", value: 1 },
      { label: "February", value: 2 },
      { label: "March", value: 3 },
      { label: "April", value: 4 },
      { label: "May", value: 5 },
      { label: "June", value: 6 },
      { label: "July", value: 7 },
      { label: "August", value: 8 },
      { label: "September", value: 9 },
      { label: "October", value: 10 },
      { label: "November", value: 11 },
      { label: "December", value: 12 },
    ]);

    expect(result.current.yearsList).toEqual([
      2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015,
      2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024,
    ]);

    expect(result.current.calendar).toEqual("gregory");
    expect(result.current.monthInTheCalendar).toEqual(7);
    expect(result.current.yearInTheCalendar).toEqual(2024);
    expect(result.current.totalDaysInTheCalendar).toEqual(31);
    expect(result.current.firstDayOfMonth).toEqual(
      new Date("2024-07-01T00:00:00.000Z")
    );
    expect(result.current.lastDayOfMonth).toEqual(
      new Date("2024-07-31T00:00:00.000Z")
    );
    expect(result.current.startDateIncludeOtherDays).toEqual(
      new Date("2024-06-29T00:00:00.000Z")
    );
    expect(result.current.endDateIncludeOtherDays).toEqual(
      new Date("2024-08-02T23:59:59.000Z")
    );
    expect(result.current.daysOfMonth).toEqual([
      new Date("2024-06-29T00:00:00.000Z"),
      new Date("2024-06-30T00:00:00.000Z"),
      new Date("2024-07-01T00:00:00.000Z"),
      new Date("2024-07-02T00:00:00.000Z"),
      new Date("2024-07-03T00:00:00.000Z"),
      new Date("2024-07-04T00:00:00.000Z"),
      new Date("2024-07-05T00:00:00.000Z"),
      new Date("2024-07-06T00:00:00.000Z"),
      new Date("2024-07-07T00:00:00.000Z"),
      new Date("2024-07-08T00:00:00.000Z"),
      new Date("2024-07-09T00:00:00.000Z"),
      new Date("2024-07-10T00:00:00.000Z"),
      new Date("2024-07-11T00:00:00.000Z"),
      new Date("2024-07-12T00:00:00.000Z"),
      new Date("2024-07-13T00:00:00.000Z"),
      new Date("2024-07-14T00:00:00.000Z"),
      new Date("2024-07-15T00:00:00.000Z"),
      new Date("2024-07-16T00:00:00.000Z"),
      new Date("2024-07-17T00:00:00.000Z"),
      new Date("2024-07-18T00:00:00.000Z"),
      new Date("2024-07-19T00:00:00.000Z"),
      new Date("2024-07-20T00:00:00.000Z"),
      new Date("2024-07-21T00:00:00.000Z"),
      new Date("2024-07-22T00:00:00.000Z"),
      new Date("2024-07-23T00:00:00.000Z"),
      new Date("2024-07-24T00:00:00.000Z"),
      new Date("2024-07-25T00:00:00.000Z"),
      new Date("2024-07-26T00:00:00.000Z"),
      new Date("2024-07-27T00:00:00.000Z"),
      new Date("2024-07-28T00:00:00.000Z"),
      new Date("2024-07-29T00:00:00.000Z"),
      new Date("2024-07-30T00:00:00.000Z"),
      new Date("2024-07-31T00:00:00.000Z"),
      new Date("2024-08-01T00:00:00.000Z"),
      new Date("2024-08-02T00:00:00.000Z"),
    ]);

    expect(result.current.onChange).toBeInstanceOf(Function);
    expect(result.current.goToNextMonth).toBeInstanceOf(Function);
    expect(result.current.goToPrevMonth).toBeInstanceOf(Function);
    expect(result.current.goToDate).toBeInstanceOf(Function);
    expect(result.current.goToCurrentMonth).toBeInstanceOf(Function);
    expect(result.current.goToMonth).toBeInstanceOf(Function);
    expect(result.current.goToYear).toBeInstanceOf(Function);
    expect(result.current.handleClickSlot).toBeInstanceOf(Function);
  });
});
