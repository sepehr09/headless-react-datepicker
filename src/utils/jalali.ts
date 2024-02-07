import { TCalendar } from "../types";

export const IsSameMonth = (
  date1: Date,
  month: number,
  calendar: TCalendar
) => {
  const date1Month = Intl.DateTimeFormat("en-US", {
    month: "2-digit",
    calendar,
  }).format(date1);

  return parseInt(date1Month, 10) === month;
};
