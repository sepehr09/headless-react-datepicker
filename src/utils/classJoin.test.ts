import { describe, expect, it } from "vitest";
import { classJoin } from "./classJoin";

describe("classJoin", () => {
  it("should join multiple classes", () => {
    expect(classJoin("a", "b", "c")).toBe("a b c");
  });

  it("should remove exact duplicates", () => {
    expect(classJoin("a a a")).toBe("a");
    expect(classJoin("a b", "a")).toBe("a b");
  });

  it("should keep non-conflicting utilities that share a prefix", () => {
    // text color and text size don't conflict, both must be kept
    expect(classJoin("text-green-500", "text-2xl")).toBe(
      "text-green-500 text-2xl"
    );
  });

  it("should keep conflicting utilities (cascade resolves them, not us)", () => {
    expect(classJoin("bg-blue-600", "bg-blue-700")).toBe(
      "bg-blue-600 bg-blue-700"
    );
  });

  it("should ignore falsy values", () => {
    expect(classJoin("a", false, "b", undefined, "c")).toBe("a b c");
  });

  it("should trim the result", () => {
    expect(classJoin(" a ", " b ", " c ")).toBe("a b c");
  });
});
