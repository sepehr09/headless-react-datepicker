import { Temporal } from "@js-temporal/polyfill";
import { useCallback, useEffect, useMemo, useState } from "react";
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
    value,
    initialValue,
    defaultStartDate,
    config,
    isRange,
    calendar = "gregory",
    children,
    onChange: onChangeProp,
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

  const finalInitialValue = useMemo(() => {
    if (initialValue) {
      return Array.isArray(initialValue)
        ? initialValue.map((v) => new Date(v))
        : new Date(initialValue);
    }
    return undefined;
  }, [initialValue]);

  const finalInitialDate = useMemo(() => {
    if (defaultStartDate) {
      return new Date(defaultStartDate);
    }

    if (initialValue) {
      return Array.isArray(initialValue)
        ? new Date(initialValue?.[0].toISOString())
        : new Date(initialValue.toISOString());
    }

    return new Date(new Date().toISOString());
  }, [defaultStartDate, initialValue]);

  /**
   * used to show the month in the calendar
   */
  const [currentDate, setCurrentDate] = useState<Date>(finalInitialDate);

  /**
   * internal value (selected day or range of days)
   */
  const [internalValue, setInternalValue] = useState<Date[] | Date | undefined>(
    finalInitialValue
  );

  const finalValue = value || internalValue;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onChange = useCallback(
    (onChangeProp as TDatePickerProps<IsRange>["onChange"]) || (() => {}),
    []
  ); // Memoize the onChange function

  /**
   * Update internalValue if `value` prop is changed (controlled component)
   */
  useEffect(() => {
    if (value) {
      // prevent loop if value is same as selectedDay
      if (
        internalValue &&
        (Array.isArray(internalValue)
          ? internalValue?.[0]?.toISOString() ===
              (value as Date[])?.[0].toISOString() &&
            internalValue?.[1]?.toISOString() ===
              (value as Date[])?.[1]?.toISOString()
          : internalValue?.toISOString() === (value as Date)?.toISOString())
      ) {
        return;
      }

      const finalValue = value
        ? Array.isArray(value)
          ? value?.map((v) => new Date(v))
          : new Date(value)
        : undefined;

      setInternalValue(finalValue);

      if (!defaultStartDate) {
        setCurrentDate(
          finalValue
            ? Array.isArray(finalValue)
              ? finalValue[1]
              : finalValue
            : new Date(new Date().toISOString())
        );
      }
    }
  }, [value]);

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

  const getSingleSelectionValue = (date: Date) => {
    return date;
  };

  const getRangeSelectionValue = (date: Date) => {
    if (internalValue !== undefined && !Array.isArray(internalValue)) return;

    // Range (from)
    if (
      !internalValue?.length ||
      internalValue.length === 2 ||
      (!allowBackwardRange &&
        new Date(internalValue[0]).getTime() > new Date(date).getTime())
    ) {
      return [date];
    }

    // Range (To)
    return [internalValue[0], date].sort(
      (a, b) => new Date(a).getTime() - new Date(b).getTime()
    );
  };

  const getFinalValue = (date: Date) => {
    if (!isRange) {
      return getSingleSelectionValue(date);
    }

    return getRangeSelectionValue(date);
  };

  /**
   * Handle click on a day slot
   */
  const handleClickSlot = (date: Date) => {
    const finalValue = getFinalValue(date);

    if (finalValue === undefined) return;

    /**
     * call onChange event
     */
    onChange?.(finalValue! as IsRange extends true ? Date[] : Date);

    if (!value) {
      setInternalValue(finalValue);
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
        selectedDay: finalValue,
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
