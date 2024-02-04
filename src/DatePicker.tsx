import { addDays, subDays, toDate } from "date-fns";
import { useMemo, useState } from "react";
import DaysOfWeekHeader from "./components/DaysOfWeekHeader";
import Header from "./components/Header";
import MonthDatesSlots from "./components/MonthDatesSlots";
import { PickerContext } from "./store/pickerContext";
import { TDatePickerProps } from "./types";
import { getMonthSlots } from "./utils/datePicker";

function DatePicker(props: TDatePickerProps) {
  const {
    initialValue,
    defaultStartDate,
    config,
    isRange,
    calendar = "gregory",
  } = props;
  const { weekStartsOn = 6 } = config || {};

  const [currentDate, setCurrentDate] = useState<Date>(
    defaultStartDate ||
      (initialValue
        ? toDate(
            Array.isArray(initialValue)
              ? initialValue?.[0]?.toISOString()
              : initialValue?.toISOString()
          )
        : toDate(new Date()))
  );
  const [selectedDay, setSelectedDay] = useState<Date | Date[] | undefined>(
    initialValue
      ? Array.isArray(initialValue)
        ? initialValue?.map((v) => toDate(v?.toISOString()))
        : toDate(initialValue?.toISOString())
      : undefined
  );

  console.log({ selectedDay });

  // console.group("");
  // console.log("selectedDay", selectedDay);
  // console.log("currentDate", currentDate);
  // console.groupEnd();

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

  const onClickSlot = (date: Date) => {
    if (isRange) {
      if (!selectedDay?.length || selectedDay.length === 2) {
        setSelectedDay([date]);
      } else {
        setSelectedDay(
          [selectedDay[0], date].sort((a, b) => new Date(a) - new Date(b))
        );
      }
    } else {
      setSelectedDay(date);
    }
  };

  return (
    <PickerContext.Provider
      value={{
        ...props,
        goToNextMonth,
        goToPrevMonth,
        goToDate,
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
      <div className="rhjd-w-fit" dir="rtl">
        <Header />
        <DaysOfWeekHeader />
        <MonthDatesSlots />
      </div>
    </PickerContext.Provider>
  );
}

export default DatePicker;
