export type TTimeParts = {
  hours: number;
  minutes: number;
  seconds: number;
};

/**
 * Read the local time parts (hours/minutes/seconds) of a date.
 */
export function getTimeParts(date: Date): TTimeParts {
  return {
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
  };
}

/**
 * Return a new `Date` on the same calendar day as `date` but with the given
 * time parts applied. Any part left `undefined` keeps its current value.
 * Milliseconds are zeroed so selections stay clean.
 */
export function setTimeParts(date: Date, parts: Partial<TTimeParts>): Date {
  const next = new Date(date);
  next.setHours(
    parts.hours ?? next.getHours(),
    parts.minutes ?? next.getMinutes(),
    parts.seconds ?? next.getSeconds(),
    0
  );
  return next;
}

/**
 * Wrap a value into the inclusive range `[0, max]` (e.g. minutes/seconds wrap
 * `0..59`, 24-hour hours wrap `0..23`). Going below `0` wraps to the top and
 * going above `max` wraps back to `0`.
 */
export function wrap(value: number, max: number): number {
  const span = max + 1;
  return ((value % span) + span) % span;
}

/* -------------------------------------------------------------------------- */
/*                              12-hour helpers                               */
/* -------------------------------------------------------------------------- */

export type TPeriod = "AM" | "PM";

/**
 * Convert a 24-hour hour (`0..23`) into its 12-hour parts.
 * @example to12Hour(0)  // { hours12: 12, period: "AM" }
 * @example to12Hour(13) // { hours12: 1,  period: "PM" }
 */
export function to12Hour(hours24: number): {
  hours12: number;
  period: TPeriod;
} {
  const period: TPeriod = hours24 < 12 ? "AM" : "PM";
  const hours12 = hours24 % 12 === 0 ? 12 : hours24 % 12;
  return { hours12, period };
}

/**
 * Convert 12-hour parts back into a 24-hour hour (`0..23`).
 * @example from12Hour(12, "AM") // 0
 * @example from12Hour(1, "PM")  // 13
 */
export function from12Hour(hours12: number, period: TPeriod): number {
  const base = hours12 % 12; // 12 -> 0
  return period === "PM" ? base + 12 : base;
}
