import { Temporal } from "@js-temporal/polyfill";
import type { TCalendar } from "../types";

type TCalendarDateFields = {
  year: number;
  month: number;
  day: number;
  calendar: TCalendar;
};

type TISODateFields = Pick<TCalendarDateFields, "year" | "month" | "day">;

export function calendarDateToISO(
  dateFields: TCalendarDateFields,
  monthsToAdd = 0,
): TISODateFields {
  const date = Temporal.PlainDate.from(dateFields);
  const shiftedDate =
    monthsToAdd === 0 ? date : date.add({ months: monthsToAdd });
  const { year, month, day } = shiftedDate.withCalendar("iso8601");

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
