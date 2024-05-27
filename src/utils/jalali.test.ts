import { describe, expect, it } from "vitest";
import { IsSameMonth } from "./jalali";

describe("IsSameMonth", () => {
  it("should return true if the date is in the same month based on desire calendar", () => {
    expect(
      IsSameMonth(new Date("2024-03-20T00:00:00.000Z"), 3, "gregory")
    ).toBe(true);
    expect(
      IsSameMonth(new Date("2024-03-20T00:00:00.000Z"), 1, "persian")
    ).toBe(true);
  });
});
