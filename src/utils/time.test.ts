import { describe, expect, it } from "vitest";
import {
  from12Hour,
  getTimeParts,
  setTimeParts,
  to12Hour,
  wrap,
} from "./time";

describe("time utils", () => {
  describe("getTimeParts", () => {
    it("reads the local hours/minutes/seconds", () => {
      const date = new Date(2024, 6, 10, 9, 30, 15);
      expect(getTimeParts(date)).toEqual({
        hours: 9,
        minutes: 30,
        seconds: 15,
      });
    });
  });

  describe("setTimeParts", () => {
    it("applies time parts while keeping the calendar day", () => {
      const date = new Date(2024, 6, 10, 9, 30, 15);
      const next = setTimeParts(date, { hours: 14, minutes: 5 });

      expect(next.getFullYear()).toBe(2024);
      expect(next.getMonth()).toBe(6);
      expect(next.getDate()).toBe(10);
      expect(next.getHours()).toBe(14);
      expect(next.getMinutes()).toBe(5);
      // unspecified parts are preserved
      expect(next.getSeconds()).toBe(15);
    });

    it("zeroes milliseconds and does not mutate the input", () => {
      const date = new Date(2024, 6, 10, 9, 30, 15, 123);
      const next = setTimeParts(date, { hours: 1 });

      expect(next.getMilliseconds()).toBe(0);
      // input untouched
      expect(date.getHours()).toBe(9);
    });

    it("keeps a part set to 0 (does not treat 0 as missing)", () => {
      const date = new Date(2024, 6, 10, 9, 30, 15);
      const next = setTimeParts(date, { hours: 0, minutes: 0, seconds: 0 });

      expect(next.getHours()).toBe(0);
      expect(next.getMinutes()).toBe(0);
      expect(next.getSeconds()).toBe(0);
    });
  });

  describe("wrap", () => {
    it("wraps above the max back to 0", () => {
      expect(wrap(24, 23)).toBe(0);
      expect(wrap(60, 59)).toBe(0);
    });

    it("wraps below 0 to the top", () => {
      expect(wrap(-1, 23)).toBe(23);
      expect(wrap(-1, 59)).toBe(59);
    });

    it("leaves in-range values unchanged", () => {
      expect(wrap(13, 23)).toBe(13);
      expect(wrap(0, 59)).toBe(0);
    });
  });

  describe("to12Hour", () => {
    it("maps midnight to 12 AM", () => {
      expect(to12Hour(0)).toEqual({ hours12: 12, period: "AM" });
    });

    it("maps noon to 12 PM", () => {
      expect(to12Hour(12)).toEqual({ hours12: 12, period: "PM" });
    });

    it("maps afternoon hours to PM", () => {
      expect(to12Hour(13)).toEqual({ hours12: 1, period: "PM" });
      expect(to12Hour(23)).toEqual({ hours12: 11, period: "PM" });
    });

    it("maps morning hours to AM", () => {
      expect(to12Hour(9)).toEqual({ hours12: 9, period: "AM" });
    });
  });

  describe("from12Hour", () => {
    it("maps 12 AM back to 0", () => {
      expect(from12Hour(12, "AM")).toBe(0);
    });

    it("maps 12 PM back to 12", () => {
      expect(from12Hour(12, "PM")).toBe(12);
    });

    it("round-trips with to12Hour for every hour", () => {
      for (let h = 0; h < 24; h++) {
        const { hours12, period } = to12Hour(h);
        expect(from12Hour(hours12, period)).toBe(h);
      }
    });
  });
});
