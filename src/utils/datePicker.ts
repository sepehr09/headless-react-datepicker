import { Temporal } from "@js-temporal/polyfill";
import { defaultWeekStartsOn } from "../constants/defaults";
import { bindWeekDayToNumber } from "../constants/weekdays";
import { TCalendar, TDay } from "../types";
import { eachDayOfInterval, endOfWeek, startOfWeek } from "./dateUtils";

/**
 * Build the gregorian `Date` at local midnight on the first day of the given
 * month/year in `calendar`. Constructed from numeric components (not a parsed
 * date string) so it is unambiguously local time regardless of the host
 * timezone — see the note on `addCalendarMonths`.
 */
export function firstDayOfCalendarMonth(
  year: number,
  month: number,
  calendar: TCalendar
): Date {
  const { isoYear, isoMonth, isoDay } = Temporal.PlainDate.from({
    year,
    month,
    day: 1,
    calendar,
  }).getISOFields();

  return new Date(isoYear, isoMonth - 1, isoDay);
}

/**
 * Add (or subtract) a number of months to a date, respecting the given
 * calendar (e.g. persian, islamic, ...). Returns the gregorian `Date` that
 * lands on the first day of the resulting month in that calendar.
 *
 * Useful for rendering side-by-side calendars where the second calendar shows
 * the month after the first one.
 *
 * @example
 * // Show the month after the currently displayed persian month:
 * addCalendarMonths(firstDayOfMonth, 1, "persian")
 */
export function addCalendarMonths(
  date: Date,
  months: number,
  calendar: TCalendar
): Date {
  const { year, month } = getMonthInfo(date, calendar);

  const shifted = Temporal.PlainDate.from({
    year,
    month,
    day: 1,
    calendar,
  })
    .add({ months })
    .getISOFields();

  return new Date(shifted.isoYear, shifted.isoMonth - 1, shifted.isoDay);
}

export function getMonthInfo(date: Date, calendar: TCalendar) {
  const startDate = new Date(new Date(date).setHours(0, 0, 0, 0));

  const locale = "en-US";
  const n = "numeric";

  let gStartDate = new Date(startDate);
  let gregoryDays = 0;
  let totalDays = 0;
  let calendarDays = 0;

  for (let i = 0; i < 32; i++) {
    calendarDays = parseInt(
      new Intl.DateTimeFormat(locale, { day: n, calendar }).format(gStartDate),
      10
    );

    if (+calendarDays > totalDays) {
      totalDays = calendarDays;
      gregoryDays++;
    } else break;

    gStartDate = new Date(gStartDate.setDate(gStartDate.getDate() + 1));
  }

  const gStartT = new Date(startDate);
  gStartT.setDate(gStartT.getDate() + gregoryDays - 1);
  gStartT.setDate(gStartT.getDate() - totalDays + 1);

  const gEndT = new Date(startDate);
  gEndT.setDate(gEndT.getDate() + gregoryDays - 1);

  return {
    monthLength: totalDays,
    startOfMonth: gStartT,
    endOfMonth: gEndT,
    day: parseInt(
      new Intl.DateTimeFormat(locale, { day: n, calendar }).format(startDate),
      10
    ),
    month: parseInt(
      new Intl.DateTimeFormat(locale, {
        month: "numeric",
        calendar,
      }).format(startDate),
      10
    ),
    year: parseInt(
      new Intl.DateTimeFormat(locale, { year: n, calendar })
        .format(startDate)
        .split(" ")[0],
      10
    ),
  };
}

export function getMonthSlots({
  currentDate,
  calendar,
  weekStartsOn = defaultWeekStartsOn,
}: {
  currentDate: Date;
  weekStartsOn: TDay;
  calendar: TCalendar;
}): {
  daysOfMonth: Date[];
  startDateIncludeOtherDays: Date;
  endDateIncludeOtherDays: Date;
  firstDayOfMonth: Date;
  lastDayOfMonth: Date;
  monthInTheCalendar: number;
  totalDaysInTheCalendar: number;
  yearInTheCalendar: number;
} {
  const {
    startOfMonth,
    endOfMonth,
    month,
    monthLength,
    year: yearBasedCalendar,
  } = getMonthInfo(currentDate, calendar);

  const startDateIncludeOtherDays = startOfWeek(
    startOfMonth,
    bindWeekDayToNumber[weekStartsOn]
  );

  const endDateIncludeOtherDays = endOfWeek(
    endOfMonth,
    bindWeekDayToNumber[weekStartsOn]
  );

  const daysOfMonth = eachDayOfInterval(
    startDateIncludeOtherDays,
    endDateIncludeOtherDays
  );

  return {
    daysOfMonth,
    startDateIncludeOtherDays,
    endDateIncludeOtherDays,
    firstDayOfMonth: startOfMonth,
    lastDayOfMonth: endOfMonth,
    monthInTheCalendar: month,
    totalDaysInTheCalendar: monthLength,
    yearInTheCalendar: yearBasedCalendar,
  };
}
