import { Temporal } from "@js-temporal/polyfill";
import { useEffect, useMemo, useState } from "react";
import { defaultWeekStartsOn } from "./constants/defaults";
import { PickerContext } from "./store/pickerContext";
import { TDatePickerProps } from "./types";
import { getMonthSlots } from "./utils/datePicker";
import { addDays, getAllMonths, subDays } from "./utils/dateUtils";
import { normalizeTemporal } from "./utils/temporal";

function DatePickerProvider<IsRange extends boolean>(
  props: TDatePickerProps<IsRange>
) {
  const {
    initialValue,
    defaultStartDate,
    config,
    isRange,
    calendar = "gregory",
    children,
    onChange,
  } = props;

  const {
    weekdayFormat = "narrow",
    weekStartsOn = defaultWeekStartsOn,
    locale = "en-US",
    dayFormat = "numeric",
    yearRangeFrom,
    yearRangeTo,
    allowBackwardRange,
  } = config || {};

  const [currentDate, setCurrentDate] = useState<Date>(
    defaultStartDate ||
      (initialValue
        ? new Date(
            Array.isArray(initialValue)
              ? initialValue?.[0].toISOString()
              : initialValue.toISOString()
          )
        : new Date(new Date().toISOString()))
  );
  const [selectedDay, setSelectedDay] = useState<Date[] | Date | undefined>(
    initialValue
      ? Array.isArray(initialValue)
        ? initialValue?.map((v) => new Date(v))
        : new Date(initialValue)
      : undefined
  );

  useEffect(() => {
    if (selectedDay !== undefined) {
      onChange?.(selectedDay! as IsRange extends true ? Date[] : Date);
    }
  }, [onChange, selectedDay]);

  const {
    startDateIncludeOtherDays,
    endDateIncludeOtherDays,
    firstDayOfMonth,
    lastDayOfMonth,
    daysOfMonth,
    monthInTheCalendar,
    totalDaysInTheCalendar,
    yearInTheCalendar,
  } = useMemo(
    () =>
      getMonthSlots({
        currentDate,
        weekStartsOn,
        calendar,
      }),
    [currentDate, calendar, weekStartsOn]
  );

  const goToNextMonth = () => {
    // prevent go to next month if config.yearRangeTo	is reached
    if (
      yearRangeTo &&
      yearInTheCalendar === yearRangeTo &&
      monthInTheCalendar === 12
    ) {
      return;
    }

    const updatedDate = addDays(daysOfMonth[daysOfMonth?.length - 1], 1);
    setCurrentDate(updatedDate);
  };

  const goToPrevMonth = () => {
    // prevent go to previous month if config.yearRangeFrom	is reached
    if (
      yearRangeFrom &&
      yearInTheCalendar === yearRangeFrom &&
      monthInTheCalendar === 1
    ) {
      return;
    }

    const updatedDate = subDays(daysOfMonth[0], 1);
    setCurrentDate(updatedDate);
  };

  const goToDate = (date: Date) => {
    setCurrentDate(date);
  };

  const goToCurrentMonth = () => {
    setCurrentDate(new Date(new Date().setHours(0, 0, 0, 0)));
  };

  const handleClickSlot = (date: Date) => {
    if (isRange) {
      if (selectedDay !== undefined && !Array.isArray(selectedDay)) return;

      if (
        !selectedDay?.length ||
        selectedDay.length === 2 ||
        (!allowBackwardRange &&
          new Date(selectedDay[0]).getTime() > new Date(date).getTime())
      ) {
        // FROM
        setSelectedDay([date]);
      } else {
        // To
        setSelectedDay(
          [selectedDay[0], date].sort(
            (a, b) => new Date(a).getTime() - new Date(b).getTime()
          )
        );
      }
    } else {
      setSelectedDay(date);
    }
  };

  /**
   * Local month based on desire calendar
   * @example 1 // means Jan (gregory calendar)
   * @example 1 // means Farvardin (persian calendar)
   */
  const goToMonth = (month: number) => {
    const newDate = Temporal.PlainDate.from({
      year: yearInTheCalendar,
      month: month,
      day: 1,
      calendar: calendar,
    }).getISOFields();

    const date = new Date(`${normalizeTemporal(newDate)}T00:00:00`);
    goToDate?.(date);
  };

  /**
   * Handle go to year based on desire calendar
   * @example 2020
   * @example 1395 // (persian calendar)
   */
  const goToYear = (year: number) => {
    const newDate = Temporal.PlainDate.from({
      year: year,
      month: monthInTheCalendar,
      day: 1,
      calendar: calendar,
    }).getISOFields();

    const date = new Date(`${normalizeTemporal(newDate)}T00:00:00`);
    goToDate?.(date);
  };

  const monthsList = useMemo(
    () => getAllMonths({ locale: locale!, calendar }),
    [calendar, locale]
  );

  const yearsList = useMemo(
    () =>
      Array.from({
        length:
          (yearRangeTo || yearInTheCalendar)! -
          (yearRangeFrom || (yearInTheCalendar || 0) - 20)! +
          1,
      }).map((_, i) => (yearRangeFrom || (yearInTheCalendar || 0) - 20)! + i),
    [yearRangeFrom, yearRangeTo, calendar]
  );

  return (
    <PickerContext.Provider
      value={{
        ...props,
        calendar: calendar,
        config: {
          ...config,
          weekdayFormat,
          dayFormat,
          locale,
          weekStartsOn,
        },
        onChange: onChange! as (value: Date[] | Date) => void,
        goToNextMonth,
        goToPrevMonth,
        goToDate,
        goToCurrentMonth,
        goToMonth,
        goToYear,
        handleClickSlot,
        monthsList,
        yearsList,
        daysOfMonth,
        startDateIncludeOtherDays,
        endDateIncludeOtherDays,
        firstDayOfMonth,
        lastDayOfMonth,
        selectedDay,
        monthInTheCalendar,
        totalDaysInTheCalendar,
        yearInTheCalendar,
      }}
    >
      {children}
    </PickerContext.Provider>
  );
}

export default DatePickerProvider;
