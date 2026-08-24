/**
 * Create deterministic Storybook fixtures in local time.
 *
 * JavaScript's numeric `Date` constructor uses a zero-based month, while the
 * month accepted here is one-based to match the date as people write it.
 * Midnight is the default so date-only stories never inherit an accidental
 * time of day. Stories that demonstrate `TimePicker` can pass a time explicitly.
 */
export const createLocalDate = (
  year: number,
  month: number,
  day: number,
  hours = 0,
  minutes = 0,
  seconds = 0,
) => new Date(year, month - 1, day, hours, minutes, seconds, 0);
