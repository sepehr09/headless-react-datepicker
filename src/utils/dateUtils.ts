import { TCalendar } from "../types";

export function LocalToUTCDate(date: Date) {
  return new Date(
    Date.UTC(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
      date.getMilliseconds()
    )
  );
}

export function eachDayOfInterval(startDate: Date, endDate: Date) {
  // Convert input dates to Date objects if they are not already
  const start = new Date(startDate);
  const end = new Date(endDate);

  // Ensure the start date is before or equal to the end date
  if (start > end) {
    throw new Error("Start date must be before or equal to end date");
  }

  const dates = [];
  const currentDate = start;

  while (currentDate <= end) {
    dates.push(new Date(currentDate)); // Add a copy of the current date to the array
    currentDate.setDate(currentDate.getDate() + 1); // Move to the next day
  }

  return dates;
}

export function startOfWeek(date: Date, weekStartsOn: number | undefined = 0) {
  // If weekStartsOn is not provided, default to Sunday (0)
  weekStartsOn = weekStartsOn !== undefined ? weekStartsOn : 0;

  // Get the day of the week of the provided date
  const dayOfWeek = date.getDay();

  // Calculate the difference in days between the provided date and the desired start of the week
  const diff = (dayOfWeek - weekStartsOn + 7) % 7;

  // Adjust the date to the start of the week
  const startOfWeekDate = new Date(date);
  startOfWeekDate.setDate(date.getDate() - diff);
  startOfWeekDate.setHours(0, 0, 0, 0); // reset time to midnight

  return startOfWeekDate;
}

export function endOfWeek(date: Date, weekStartsOn: number | undefined = 0) {
  // Get the start of the week date
  const start = startOfWeek(date, weekStartsOn);

  // Calculate the end of the week by adding 6 days to the start of the week
  const endOfWeekDate = new Date(start);
  endOfWeekDate.setDate(start.getDate() + 6);
  endOfWeekDate.setHours(23, 59, 59, 0); // reset time to midnight

  return endOfWeekDate;
}

export function getAllMonths({
  locale,
  calendar,
  monthFormat = "long",
}: {
  locale: string;
  calendar: TCalendar;
  monthFormat?: "numeric" | "2-digit" | "long" | "short" | "narrow" | undefined;
}): {
  label: string;
  value: number;
}[] {
  const format = new Intl.DateTimeFormat(locale, {
    month: monthFormat,
    calendar,
  }).format;
  const valueFormat = new Intl.DateTimeFormat("en-US", {
    month: "numeric",
    calendar,
  }).format;

  return [...Array(12).keys()]
    .map((m) => ({
      label: format(new Date(Date.UTC(2021, (m + 1) % 12))),
      value: parseInt(valueFormat(new Date(Date.UTC(2021, (m + 1) % 12))), 10),
    }))
    .sort((a, b) => a.value - b.value);
}

export function getWeekDayName(
  dayNumber: number,
  {
    locale,
    weekdayFormat,
  }: {
    locale?: string;
    weekdayFormat?: "long" | "short" | "narrow" | undefined;
  } = {
    locale: "en-US",
    weekdayFormat: "narrow",
  }
) {
  // Ensure the day number is between 0 and 6
  if (dayNumber < 0 || dayNumber > 6) {
    throw new Error("Day number must be between 0 and 6");
  }

  // Create a date object for the specified day of the week
  // January 4, 1970 is a Sunday (0), so we add the day number to it
  const date = new Date(1970, 0, 4 + dayNumber);

  // Use Intl.DateTimeFormat to get the day name
  const dayName = new Intl.DateTimeFormat(locale, {
    weekday: weekdayFormat,
  }).format(date);

  return dayName;
}

/**
 * @package https://github.com/date-fns/date-fns
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param amount - The amount of days to be added.
 *
 * @returns The new date with the days added
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */
export function addDays(date: Date | number | string, amount: number): Date {
  const _date = new Date(date);
  if (isNaN(amount)) return new Date(date);
  if (!amount) {
    // If 0 days, no-op to avoid changing times in the hour before end of DST
    return _date;
  }
  _date.setDate(_date.getDate() + amount);
  return _date;
}

export function subDays<DateType extends Date>(
  date: DateType | number | string,
  amount: number
): Date {
  return addDays(date, -amount);
}

/**
 * @package https://github.com/date-fns/date-fns
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The start of a day
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */
export function startOfDay<DateType extends Date>(
  date: DateType | number | string
): Date {
  const _date = new Date(date);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

/**
 * @package https://github.com/date-fns/date-fns
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The first date to check
 * @param dateRight - The second date to check

 * @returns The dates are in the same day (and year and month)
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 *
 * @example
 * // Are 4 September and 4 October in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
 * //=> false
 *
 * @example
 * // Are 4 September, 2014 and 4 September, 2015 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
 * //=> false
 */
export function isSameDay<DateType extends Date>(
  dateLeft: DateType | number | string,
  dateRight: DateType | number | string
): boolean {
  const dateLeftStartOfDay = startOfDay(dateLeft);
  const dateRightStartOfDay = startOfDay(dateRight);

  return +dateLeftStartOfDay === +dateRightStartOfDay;
}

/**
 * @package https://github.com/date-fns/date-fns
 * @name isToday
 * @category Day Helpers
 * @summary Is the given date today?
 * @pure false
 *
 * @description
 * Is the given date today?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check
 *
 * @returns The date is today
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * const result = isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */
export function isToday<DateType extends Date>(
  date: DateType | number | string
): boolean {
  return isSameDay(date, new Date());
}

export interface Interval<DateType extends Date = Date> {
  /** The start of the interval. */
  start: DateType | number | string;
  /** The end of the interval. */
  end: DateType | number | string;
}

/**
 * @package https://github.com/date-fns/date-fns
 * @name isWithinInterval
 * @category Interval Helpers
 * @summary Is the given date within the interval?
 *
 * @description
 * Is the given date within the interval? (Including start and end.)
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check
 * @param interval - The interval to check
 *
 * @returns The date is within the interval
 *
 * @example
 * // For the date within the interval:
 * isWithinInterval(new Date(2014, 0, 3), {
 *   start: new Date(2014, 0, 1),
 *   end: new Date(2014, 0, 7)
 * })
 * //=> true
 *
 * @example
 * // For the date outside of the interval:
 * isWithinInterval(new Date(2014, 0, 10), {
 *   start: new Date(2014, 0, 1),
 *   end: new Date(2014, 0, 7)
 * })
 * //=> false
 *
 * @example
 * // For date equal to interval start:
 * isWithinInterval(date, { start, end: date })
 * // => true
 *
 * @example
 * // For date equal to interval end:
 * isWithinInterval(date, { start: date, end })
 * // => true
 */
export function isWithinInterval<DateType extends Date>(
  date: DateType | number | string,
  interval: Interval<Date>
): boolean {
  const time = +new Date(date);
  const [startTime, endTime] = [
    +new Date(interval.start),
    +new Date(interval.end),
  ].sort((a, b) => a - b);

  return time >= startTime && time <= endTime;
}
