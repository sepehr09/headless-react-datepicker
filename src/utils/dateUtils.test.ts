import { describe, expect, it } from "vitest";
import {
  LocalToUTCDate,
  addDays,
  eachDayOfInterval,
  endOfWeek,
  getAllMonths,
  getWeekDayName,
  startOfWeek,
  subDays,
} from "./dateUtils";

describe("LocalToUTCDate", () => {
  it("converts a local date to UTC", () => {
    const localDate = new Date("2022-07-25T14:30:00.000Z"); // July 25, 2022 2:30:00 PM
    const utcDate = LocalToUTCDate(localDate);

    expect(utcDate.getUTCFullYear()).toBe(2022);
    expect(utcDate.getUTCMonth()).toBe(6); // July (7) is month 6 (0-based index)
    expect(utcDate.getUTCDate()).toBe(25);
    expect(utcDate.getUTCHours()).toBe(14);
    expect(utcDate.getUTCMinutes()).toBe(30);
    expect(utcDate.getUTCSeconds()).toBe(0);
    expect(utcDate.getUTCMilliseconds()).toBe(0);
  });
});

describe("eachDayOfInterval", () => {
  it("converts a local date to UTC", () => {
    const start = new Date("2022-07-25T14:30:00.000Z");
    const end = new Date("2022-07-27T14:30:00.000Z");

    const utcDate = eachDayOfInterval(start, end);

    expect(utcDate).toEqual([
      new Date("2022-07-25T14:30:00.000Z"),
      new Date("2022-07-26T14:30:00.000Z"),
      new Date("2022-07-27T14:30:00.000Z"),
    ]);
  });
});

describe("startOfWeek", () => {
  it("get startOFWeek", () => {
    const desireDate = new Date("2024-05-23T14:30:00.000Z");
    const startOfWeekDate = startOfWeek(desireDate, 6); // Start of week, with Saturday as the start of the week (6)

    expect(startOfWeekDate.getUTCFullYear()).toBe(2024);
    expect(startOfWeekDate.getUTCMonth()).toBe(4); // May (5) is month 6 (0-based index)
    expect(startOfWeekDate.getUTCDate()).toBe(18);
    expect(startOfWeekDate.getUTCHours()).toBe(0);
    expect(startOfWeekDate.getUTCMinutes()).toBe(0);
    expect(startOfWeekDate.getUTCSeconds()).toBe(0);
    expect(startOfWeekDate.getUTCMilliseconds()).toBe(0);
  });
});

describe("endOfWeek", () => {
  it("get endOfWeek", () => {
    const desireDate = new Date("2024-05-23T14:30:00.000Z");
    const endOfWeekDate = endOfWeek(desireDate, 6); // Start of week, with Saturday as the start of the week (6)

    expect(endOfWeekDate.getUTCFullYear()).toBe(2024);
    expect(endOfWeekDate.getUTCMonth()).toBe(4); // May (5) is month 6 (0-based index)
    expect(endOfWeekDate.getUTCDate()).toBe(24);
    expect(endOfWeekDate.getUTCHours()).toBe(23);
    expect(endOfWeekDate.getUTCMinutes()).toBe(59);
    expect(endOfWeekDate.getUTCSeconds()).toBe(59);
    expect(endOfWeekDate.getUTCMilliseconds()).toBe(0);
  });
});

describe("getAllMonths", () => {
  it("gregory", () => {
    expect(getAllMonths({ locale: "en-US", calendar: "gregory" })).toEqual([
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
  });

  it("persian", () => {
    expect(getAllMonths({ locale: "fa-IR", calendar: "persian" })).toEqual([
      { label: "فروردین", value: 1 },
      { label: "اردیبهشت", value: 2 },
      { label: "خرداد", value: 3 },
      { label: "تیر", value: 4 },
      { label: "مرداد", value: 5 },
      { label: "شهریور", value: 6 },
      { label: "مهر", value: 7 },
      { label: "آبان", value: 8 },
      { label: "آذر", value: 9 },
      { label: "دی", value: 10 },
      { label: "بهمن", value: 11 },
      { label: "اسفند", value: 12 },
    ]);
  });
});

describe("getWeekDayName", () => {
  it("getWeekDayName", () => {
    expect(getWeekDayName(0, { weekdayFormat: "long" })).toBe("Sunday");
    expect(getWeekDayName(1, { weekdayFormat: "long" })).toBe("Monday");
    expect(getWeekDayName(2, { weekdayFormat: "long" })).toBe("Tuesday");
    expect(getWeekDayName(3, { weekdayFormat: "long" })).toBe("Wednesday");
    expect(getWeekDayName(4, { weekdayFormat: "long" })).toBe("Thursday");
    expect(getWeekDayName(5, { weekdayFormat: "long" })).toBe("Friday");
    expect(getWeekDayName(6, { weekdayFormat: "long" })).toBe("Saturday");
  });
});

describe("addDays", () => {
  it("adds the given number of days", () => {
    const result = addDays(new Date(2014, 8 /* Sep */, 1), 10);
    expect(result).toEqual(new Date(2014, 8 /* Sep */, 11));
  });

  it("accepts a timestamp", () => {
    const result = addDays(new Date(2014, 8 /* Sep */, 1).getTime(), 10);
    expect(result).toEqual(new Date(2014, 8 /* Sep */, 11));
  });

  it("does not mutate the original date", () => {
    const date = new Date(2014, 8 /* Sep */, 1);
    addDays(date, 11);
    expect(date).toEqual(new Date(2014, 8 /* Sep */, 1));
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = addDays(new Date(NaN), 10);
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });
});

describe("subDays", () => {
  it("subtracts the given number of days", () => {
    const result = subDays(new Date(2014, 8 /* Sep */, 1), 10);
    expect(result).toEqual(new Date(2014, 7 /* Aug */, 22));
  });

  it("accepts a timestamp", () => {
    const result = subDays(new Date(2014, 8 /* Sep */, 1).getTime(), 10);
    expect(result).toEqual(new Date(2014, 7 /* Aug */, 22));
  });

  it("does not mutate the original date", () => {
    const date = new Date(2014, 8 /* Sep */, 1);
    subDays(date, 11);
    expect(date).toEqual(new Date(2014, 8 /* Sep */, 1));
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = subDays(new Date(NaN), 10);
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });
});
