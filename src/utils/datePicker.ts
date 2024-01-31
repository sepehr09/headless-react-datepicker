import { Day, eachDayOfInterval, endOfWeek, startOfWeek } from "date-fns";
import { TCalendar } from "../types";

export function getMonthInfo(date: Date, calendar: TCalendar) {
  const startDate = new Date(date);
  const locale = "en-US";
  const n = "numeric";

  let gStartDate = new Date(startDate);
  let gregoryDays = 0;
  let totalDays = 0;
  let calendarDays = 0;

  for (let i = 0; i < 32; i++) {
    calendarDays = Number(
      new Intl.DateTimeFormat(locale, { day: n, calendar }).format(gStartDate)
    );
    if (+calendarDays > totalDays) {
      totalDays = calendarDays;
      gregoryDays++;
    } else break;
    gStartDate = new Date(gStartDate.setUTCDate(gStartDate.getUTCDate() + 1));
  }

  const gStartT = new Date(startDate);
  gStartT.setUTCDate(gStartT.getUTCDate() + gregoryDays - 1);

  const gEndT = new Date(startDate);
  gEndT.setUTCDate(gEndT.getUTCDate() + gregoryDays - 1);

  return {
    totalDaysInTheCalendar: totalDays,
    gregoryMonthStartsOn: new Date(
      gStartT.setUTCDate(gStartT.getUTCDate() - totalDays + 1)
    ),
    gregoryMonthEndsOn: new Date(gEndT),
    dayInTheCalendar: parseInt(
      new Intl.DateTimeFormat(locale, { day: n, calendar }).format(startDate),
      10
    ),
    monthInTheCalendar: parseInt(
      new Intl.DateTimeFormat(locale, {
        month: "numeric",
        calendar,
      }).format(startDate),
      10
    ),
    yearInTheCalendar: parseInt(
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
  weekStartsOn = 6,
}: {
  currentDate: Date;
  weekStartsOn: Day;
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
    gregoryMonthStartsOn,
    gregoryMonthEndsOn,
    monthInTheCalendar,
    totalDaysInTheCalendar,
    yearInTheCalendar,
  } = getMonthInfo(currentDate, calendar);

  const startDateIncludeOtherDays = startOfWeek(gregoryMonthStartsOn, {
    weekStartsOn,
  });
  const endDateIncludeOtherDays = endOfWeek(gregoryMonthEndsOn, {
    weekStartsOn,
  });

  const daysOfMonth = eachDayOfInterval({
    start: startDateIncludeOtherDays,
    end: endDateIncludeOtherDays,
  });

  return {
    daysOfMonth,
    startDateIncludeOtherDays,
    endDateIncludeOtherDays,
    firstDayOfMonth: gregoryMonthStartsOn,
    lastDayOfMonth: gregoryMonthEndsOn,
    monthInTheCalendar,
    totalDaysInTheCalendar,
    yearInTheCalendar,
  };
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

  // const months = [];
  // const startDate = new Date(1970, 0, 1);

  // const month = [Array.from({ length: 12 }, (_, i) => i + 1)].reduce(
  //   (acc, cur) => {
  //     const prevValue = acc[acc.length - 1];
  //     const date = prevValue?.date ? addDays(prevValue.date, 1) : startDate;

  //     const {
  //       gregoryMonthStartsOn,
  //       gregoryMonthEndsOn,
  //       monthInTheCalendar,
  //       totalDaysInTheCalendar,
  //       yearInTheCalendar,
  //     } = getMonthInfo(date, calendar);

  //     cur.forEach((month) => {
  //       acc.push({
  //         date: gregoryMonthEndsOn,
  //         month: monthInTheCalendar,
  //         monthLabel: new Intl.DateTimeFormat(locale, {
  //           month: monthFormat,
  //           calendar,
  //         }).format(date),
  //       });
  //     });
  //     return acc;
  //   },
  //   [] as {
  //     date: Date;
  //     month: number;
  //     monthLabel: string;
  //   }[]
  // );

  // console.log(month);

  // for (let month = 0; month < 12; month++) {
  //   const currentMonth = new Date(addMonths(startDate, month));
  //   const formatter = new Intl.DateTimeFormat(locale, {
  //     month: monthFormat,
  //     calendar,
  //   });
  //   const monthNumberFormatter = new Intl.DateTimeFormat("en-US", {
  //     month: "numeric",
  //     calendar,
  //   });
  //   // monthNames.push(formatter.format(new Date(2000, month, 1)));
  //   const monthName = formatter.format(currentMonth);
  //   const monthNumber = monthNumberFormatter.format(currentMonth);
  //   months.push({ number: parseInt(monthNumber, 10), name: monthName });
  // }
  // return months.sort((a, b) => a.number - b.number);
}

export function convertToSpecificCalendar(inputDate, targetCalendar) {
  // Ensure inputDate is a valid Date object
  if (!(inputDate instanceof Date)) {
    throw new Error("Invalid date format");
  }

  // Check if the targetCalendar is supported
  const supportedCalendars = Intl.DateTimeFormat().resolvedOptions().calendar;
  if (targetCalendar !== supportedCalendars) {
    throw new Error(`Calendar "${targetCalendar}" is not supported`);
  }

  // Format the input date using the specified calendar
  const formattedDate = inputDate.toLocaleDateString("en", {
    calendar: targetCalendar,
  });

  return formattedDate;
}

// Example usage:
const gregorianDate = new Date(2024, 0, 30); // January 30, 2024
const targetCalendar = "islamic"; // Islamic calendar

try {
  const convertedDate = convertToSpecificCalendar(
    gregorianDate,
    targetCalendar
  );
  console.log(`Converted date to ${targetCalendar} calendar: ${convertedDate}`);
} catch (error) {
  console.error(error.message);
}
