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

    console.log("calendarDays: ", calendarDays);

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

  console.group("%c getMonthSlots", "background-color:green;");
  console.log("startDate:          ", startDate);
  console.log("gStartT:            ", gStartT);
  console.log("gEndT:              ", gEndT);
  console.log("totalDays:          ", totalDays);
  console.log("gregoryDays:        ", gregoryDays);
  console.groupEnd();

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

  // console.group("%c getMonthSlots", "background-color:red;");
  // console.log("currentDate:              ", currentDate);
  // console.log("startOfMonth:             ", startOfMonth);
  // console.log("endOfMonth:               ", endOfMonth);
  // console.log("startDateIncludeOtherDays:", startDateIncludeOtherDays);
  // console.log("endDateIncludeOtherDays:  ", endDateIncludeOtherDays);
  // // console.log("day:              ", day);
  // // console.log("month:            ", month);
  // // console.log("yearBasedCalendar:", yearBasedCalendar);
  // // console.log("monthLength:      ", monthLength);
  // // console.log("daysOfMonth:      ", daysOfMonth);
  // console.log("daysOfMonth:              ", daysOfMonth);
  // console.groupEnd();

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
