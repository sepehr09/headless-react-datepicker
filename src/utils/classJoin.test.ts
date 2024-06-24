import { describe, expect, it } from "vitest";
import { classJoin } from "./classJoin";

describe("classJoin", () => {
  it("should join multiple classes", () => {
    expect(classJoin("a", "b", "c")).toBe("a b c");
  });

  it("should remove duplicates", () => {
    expect(classJoin("a a a")).toBe("a");
  });

  it("should remove duplicates even with rhmdp- prefix", () => {
    expect(classJoin("bg-blue-600", "bg-blue-700")).toBe("bg-blue-700");
  });

  it("should remove duplicates even with rhmdp- prefix", () => {
    expect(classJoin("rhmdp-bg-blue-600", "bg-blue-700")).toBe("bg-blue-700");
  });

  it("should remove duplicates even with rhmdp- prefix, but respect last value", () => {
    expect(classJoin("bg-blue-700", "rhmdp-bg-blue-600")).toBe(
      "rhmdp-bg-blue-600"
    );
  });

  it("should ignore falsy values", () => {
    expect(classJoin("a", false, "b", undefined, "c")).toBe("a b c");
  });

  it("should trim the result", () => {
    expect(classJoin(" a ", " b ", " c ")).toBe("a b c");
  });
});
