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
