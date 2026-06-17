import { Temporal } from "@js-temporal/polyfill";
import { describe, expect, it } from "vitest";
import { normalizeTemporal } from "./temporal";

describe("normalizeTemporal", () => {
  it("should return gregory formatted string", () => {
    const newDate = Temporal.PlainDate.from({
      year: 2024,
      month: 1,
      day: 1,
      calendar: "gregory",
    }).getISOFields();

    expect(normalizeTemporal(newDate)).toBe("2024-01-01");
  });
  it("should return gregory formatted string", () => {
    const newDate = Temporal.PlainDate.from({
      year: 1403,
      month: 1,
      day: 1,
      calendar: "persian",
    }).getISOFields();

    expect(normalizeTemporal(newDate)).toBe("2024-03-20");
  });

  it("zero-pads single-digit year, month and day", () => {
    const newDate = Temporal.PlainDate.from({
      year: 5,
      month: 3,
      day: 7,
      calendar: "gregory",
    }).getISOFields();

    expect(normalizeTemporal(newDate)).toBe("05-03-07");
  });
});
