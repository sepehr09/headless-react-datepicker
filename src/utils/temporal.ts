import { Temporal } from "@js-temporal/polyfill";

/***
 * @returns i.e: '2024-09-28'
 */
export function normalizeTemporal(newDate: Temporal.PlainDateISOFields) {
  const { isoYear, isoMonth, isoDay } = newDate;

  const year = isoYear < 10 ? `0${isoYear}` : isoYear;
  const month = isoMonth < 10 ? `0${isoMonth}` : isoMonth;
  const day = isoDay < 10 ? `0${isoDay}` : isoDay;

  return `${year}-${month}-${day}`;
}
