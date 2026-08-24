import { describe, expect, it } from "vitest";
import { addMonthsToCalendarDate, normalizeTemporal } from "./temporal";

describe("addMonthsToCalendarDate", () => {
  it("adds months without converting the calendar", () => {
    expect(
      addMonthsToCalendarDate(
        { year: 1403, month: 1, day: 1, calendar: "persian" },
        1,
      ),
    ).toEqual({ year: 1403, month: 2, day: 1, calendar: "persian" });
  });
});

describe("normalizeTemporal", () => {
  it("should return gregory formatted string", () => {
    const newDate = {
      year: 2024,
      month: 1,
      day: 1,
      calendar: "gregory",
    } as const;

    expect(normalizeTemporal(newDate)).toBe("2024-01-01");
  });
  it("should return gregory formatted string", () => {
    const newDate = {
      year: 1403,
      month: 1,
      day: 1,
      calendar: "persian",
    } as const;

    expect(normalizeTemporal(newDate)).toBe("2024-03-20");
  });

  it("zero-pads single-digit year, month and day", () => {
    const newDate = {
      year: 5,
      month: 3,
      day: 7,
      calendar: "gregory",
    } as const;

    expect(normalizeTemporal(newDate)).toBe("05-03-07");
  });
});
