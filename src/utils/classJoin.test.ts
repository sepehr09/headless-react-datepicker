import { describe, expect, it } from "vitest";
import { classJoin } from "./classJoin";

describe("classJoin", () => {
  it("should join multiple classes", () => {
    expect(classJoin(["a", "b", "c"])).toBe("a b c");
  });

  it("should ignore falsy values", () => {
    expect(classJoin(["a", false, "b", undefined, "c"])).toBe("a b c");
  });

  // it("should trim the result", () => {
  //   expect(classJoin([" a ", " b ", " c "])).toBe("a b c");
  // });
});
