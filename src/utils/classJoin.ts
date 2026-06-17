/**
 * Combines multiple classNames into a single string.
 *
 * Falsy values (so `condition && "class"` works) are ignored and exact
 * duplicates are removed. It intentionally does NOT resolve tailwind conflicts
 * (e.g. `text-sm` vs `text-lg`) — non-conflicting utilities that share a prefix
 * like `text-green-500` and `text-2xl` are all kept, and conflicting ones are
 * left for the cascade to resolve. Components must therefore avoid emitting two
 * conflicting utilities for the same element themselves.
 */
export const classJoin = (
  ...classes: (string | false | undefined | null)[]
): string => {
  const seen = new Set<string>();

  for (const group of classes) {
    if (!group) continue;
    for (const className of group.split(" ")) {
      const trimmed = className.trim();
      if (trimmed) seen.add(trimmed);
    }
  }

  return Array.from(seen).join(" ");
};
