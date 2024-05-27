import { defaultWeekStartsOn } from "../constants/defaults";
import { bindWeekDayToNumber } from "../constants/weekdays";
import { TCalendar, TDay } from "../types";
import { eachDayOfInterval, endOfWeek, startOfWeek } from "./dateUtils";

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
