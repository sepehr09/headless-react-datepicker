import { describe, expect, it } from "vitest";
import { getMonthInfo } from "./datePicker";

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
