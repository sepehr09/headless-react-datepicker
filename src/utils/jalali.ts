import { TCalendar } from "../types";

export const IsSameMonth = (date1: Date, date2: Date, calendar: TCalendar) => {
  const date1Month = Intl.DateTimeFormat("en-US", {
    month: "2-digit",
    calendar,
  }).format(date1);

  const date2Month = Intl.DateTimeFormat("en-US", {
    month: "2-digit",
    calendar,
  }).format(date2);

  return date1Month === date2Month;
};
