import { Temporal } from "@js-temporal/polyfill";
import type { TCalendar } from "../types";

type TCalendarDateFields = {
  year: number;
  month: number;
  day: number;
  calendar: TCalendar;
};

type TISODateFields = Pick<TCalendarDateFields, "year" | "month" | "day">;

/**
 * Adds or subtracts months while preserving the date's original calendar.
 *
 * @param dateFields - The date and calendar to shift.
 * @param months - The number of months to add; use a negative value to subtract.
 * @returns The shifted date fields in the original calendar.
 */
export function addMonthsToCalendarDate(
  dateFields: TCalendarDateFields,
  months: number,
): TCalendarDateFields {
  const shiftedDate = Temporal.PlainDate.from(dateFields).add({ months });

  return {
    year: shiftedDate.year,
    month: shiftedDate.month,
    day: shiftedDate.day,
    calendar: dateFields.calendar,
  };
}

/**
 * Converts calendar-specific date fields to their ISO 8601 equivalent.
 *
 * @param dateFields - The date fields and their source calendar.
 * @returns The equivalent ISO year, month, and day.
 */
export function calendarDateToISO(
  dateFields: TCalendarDateFields,
): TISODateFields {
  const { year, month, day } = Temporal.PlainDate.from(
    dateFields,
  ).withCalendar("iso8601");

  return { year, month, day };
}

/***
 * @returns i.e: '2024-09-28'
 */
export function normalizeTemporal(dateFields: TCalendarDateFields) {
  const {
    year: isoYear,
    month: isoMonth,
    day: isoDay,
  } = calendarDateToISO(dateFields);

  const year = isoYear < 10 ? `0${isoYear}` : isoYear;
  const month = isoMonth < 10 ? `0${isoMonth}` : isoMonth;
  const day = isoDay < 10 ? `0${isoDay}` : isoDay;

  return `${year}-${month}-${day}`;
}
