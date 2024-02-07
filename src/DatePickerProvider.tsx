import { addDays, subDays, toDate } from "date-fns";
import { useMemo, useState } from "react";
import { PickerContext } from "./store/pickerContext";
// import "./styles.css";
import { TDatePickerProps } from "./types";
import { getAllMonths, getMonthSlots } from "./utils/datePicker";

function DatePickerProvider(props: TDatePickerProps) {
  const {
    initialValue,
    defaultStartDate,
    config,
    isRange,
    calendar = "gregory",
    children,
  } = props;
  const {
    weekdayFormat = "narrow",
    weekStartsOn = "saturday",
    locale = "en-US",
    dayFormat = "numeric",
    yearRangeFrom,
    yearRangeTo,
  } = config || {};

  const [currentDate, setCurrentDate] = useState<Date>(
    defaultStartDate ||
      (initialValue
        ? toDate(
            Array.isArray(initialValue)
              ? initialValue?.[0].toISOString()
              : initialValue.toISOString()
          )
        : toDate(new Date().toISOString()))
  );
  const [selectedDay, setSelectedDay] = useState<Date | Date[] | undefined>(
    initialValue
      ? Array.isArray(initialValue)
        ? initialValue?.map((v) => toDate(v))
        : toDate(initialValue)
      : undefined
  );

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
    const updatedDate = addDays(daysOfMonth[daysOfMonth?.length - 1], 1);
    setCurrentDate(updatedDate);
  };

  const goToPrevMonth = () => {
    const updatedDate = subDays(daysOfMonth[0], 1);
    setCurrentDate(updatedDate);
  };

  const goToDate = (date: Date) => {
    setCurrentDate(date);
  };

  const goToCurrentMonth = () => {
    setCurrentDate(new Date(new Date().setHours(0, 0, 0, 0)));
  };

  const onClickSlot = (date: Date) => {
    if (isRange) {
      if (!Array.isArray(selectedDay)) return;

      if (!selectedDay?.length || selectedDay.length === 2) {
        setSelectedDay([date]);
      } else {
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
        goToNextMonth,
        goToPrevMonth,
        goToDate,
        goToCurrentMonth,
        monthsList,
        yearsList,
        daysOfMonth,
        startDateIncludeOtherDays,
        endDateIncludeOtherDays,
        firstDayOfMonth,
        lastDayOfMonth,
        selectedDay,
        onClickSlot: onClickSlot,
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
