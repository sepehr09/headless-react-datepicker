import { describe, expect, it } from "vitest";
import { addCalendarMonths, getMonthInfo, getMonthSlots } from "./datePicker";

describe("getMonthInfo", () => {
  it("gregory", () => {
    expect(
      getMonthInfo(new Date("2024-03-25T00:00:00.000Z"), "gregory")
    ).toEqual({
      startOfMonth: new Date("2024-03-01T00:00:00.000Z"),
      endOfMonth: new Date("2024-03-31T00:00:00.000Z"),
      day: 25,
      month: 3,
      year: 2024,
      monthLength: 31,
    });
  });

  it("persian", () => {
    expect(
      getMonthInfo(new Date("2024-03-25T00:00:00.000Z"), "persian")
    ).toEqual({
      startOfMonth: new Date("2024-03-20T00:00:00.000Z"),
      endOfMonth: new Date("2024-04-19T00:00:00.000Z"),
      day: 6,
      month: 1,
      year: 1403,
      monthLength: 31,
    });
  });
});

describe("addCalendarMonths", () => {
  it("gregory: adds a month (first day of next month)", () => {
    expect(
      addCalendarMonths(new Date("2024-01-15T00:00:00.000Z"), 1, "gregory")
    ).toEqual(new Date("2024-02-01T00:00:00.000Z"));
  });

  it("gregory: subtracts a month", () => {
    expect(
      addCalendarMonths(new Date("2024-03-15T00:00:00.000Z"), -1, "gregory")
    ).toEqual(new Date("2024-02-01T00:00:00.000Z"));
  });

  it("gregory: crosses a year boundary", () => {
    expect(
      addCalendarMonths(new Date("2024-12-10T00:00:00.000Z"), 1, "gregory")
    ).toEqual(new Date("2025-01-01T00:00:00.000Z"));
  });

  it("persian: adds a month respecting the persian calendar", () => {
    // 2024-03-25 is Farvardin 1403 (month 1); +1 month => Ordibehesht 1403,
    // which starts on 2024-04-20.
    expect(
      addCalendarMonths(new Date("2024-03-25T00:00:00.000Z"), 1, "persian")
    ).toEqual(new Date("2024-04-20T00:00:00.000Z"));
  });
});

describe("getMonthSlots", () => {
  it("gregory: returns the month metadata", () => {
    const result = getMonthSlots({
      currentDate: new Date("2024-07-15T00:00:00.000Z"),
      weekStartsOn: "monday",
      calendar: "gregory",
    });

    expect(result.monthInTheCalendar).toBe(7);
    expect(result.yearInTheCalendar).toBe(2024);
    expect(result.totalDaysInTheCalendar).toBe(31);
    expect(result.firstDayOfMonth).toEqual(
      new Date("2024-07-01T00:00:00.000Z")
    );
    expect(result.lastDayOfMonth).toEqual(new Date("2024-07-31T00:00:00.000Z"));
  });

  it("defaults weekStartsOn when it is not provided", () => {
    const result = getMonthSlots({
      currentDate: new Date("2024-07-15T00:00:00.000Z"),
      calendar: "gregory",
    } as Parameters<typeof getMonthSlots>[0]);

    expect(result.monthInTheCalendar).toBe(7);
    expect(result.daysOfMonth.length).toBeGreaterThanOrEqual(28);
  });
});
