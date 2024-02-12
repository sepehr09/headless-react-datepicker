import { Day, isSameDay, isToday, isWithinInterval } from "date-fns";
import { useContext } from "react";
import { bindWeekDayToNumber } from "../../constants/weekdays";
import { PickerContext } from "../../store/pickerContext";
import { classJoin } from "../../utils/classJoin";
import { IsSameMonth } from "../../utils/jalali";
import { TDaySlots } from "./types";

function DaySlots({
  dayRenderer,
  slotParentClassName,
  slotClassName,
  slotParentStyles,
  slotStyles,

  todayStyles,
  todayClassName,
  todayParentStyles,
  todayParentClassName,

  disableStyles,
  disableClassName,
  disableParentStyles,
  disableParentClassName,

  weekendStyles,
  weekendClassName,
  weekendParentStyles,
  weekendParentClassName,

  selectedStyles,
  selectedClassName,
  selectedParentStyles,
  selectedParentClassName,

  selectableStyles,
  selectableClassName,
  selectableParentStyles,
  selectableParentClassName,

  inSelectedRangeStyles,
  inSelectedRangeClassName,
  inSelectedRangeParentStyles,
  inSelectedRangeParentClassName,

  startOfRangeStyles,
  startOfRangeClassName,
  startOfRangeParentStyles,
  startOfRangeParentClassName,

  endOfRangeStyles,
  endOfRangeClassName,
  endOfRangeParentStyles,
  endOfRangeParentClassName,
}: TDaySlots) {
  const {
    daysOfMonth,
    config,
    selectedDay,
    onClickSlot,
    calendar,
    monthInTheCalendar,
  } = useContext(PickerContext);
  const {
    locale,
    showOtherDays,
    otherDaysSelectable,
    dayFormat,
    minDate,
    maxDate,
    weekends,
    weekendSelectable,
  } = config || {};

  const dayFormatter = (day: Date) => {
    return new Intl.DateTimeFormat(locale, {
      day: dayFormat,
      calendar,
    }).format(day);
  };

  const IsSelected = (date: Date) => {
    if (Array.isArray(selectedDay)) {
      return (
        isSameDay(date, selectedDay[0]) ||
        isSameDay(date, selectedDay[selectedDay?.length - 1])
      );
    }
    return selectedDay && isSameDay(date, selectedDay);
  };

  const IsRangeSelected = (date: Date) => {
    if (Array.isArray(selectedDay)) {
      return isWithinInterval(date, {
        start: selectedDay[0].setHours(0, 0, 0, 0),
        end: selectedDay[selectedDay?.length - 1].setHours(0, 0, 0, 0),
      });
    }
    return false;
  };

  const handleClickSlot = (date: Date) => {
    const isSameMonth =
      monthInTheCalendar &&
      calendar &&
      IsSameMonth(date, monthInTheCalendar, calendar);

    const isInWeekend = weekends
      ?.map((w) => bindWeekDayToNumber[w])
      .includes(date.getDay() as Day);

    if (!isSameMonth && !otherDaysSelectable) return;

    if (minDate && date < minDate) return;

    if (maxDate && date > maxDate) return;

    if (isInWeekend && !weekendSelectable) return;

    onClickSlot?.(date);
  };

  return (
    <div className="rhmdp-grid rhmdp-grid-cols-7 *:rhmdp-text-center">
      {daysOfMonth?.map((date) => {
        const IsToday = isToday(date);

        const isOtherMonth = !(
          monthInTheCalendar &&
          calendar &&
          IsSameMonth(date, monthInTheCalendar, calendar)
        );

        const isSelected = !!IsSelected(date);

        const isInSelectedRange = IsRangeSelected(date);

        const isStartOfRange =
          Array.isArray(selectedDay) && isSameDay(date, selectedDay?.[0]);

        const isEndOfRange =
          Array.isArray(selectedDay) &&
          isSameDay(date, selectedDay?.[selectedDay?.length - 1]);

        const isDisabled =
          (minDate && date < minDate) ||
          (maxDate && date > maxDate) ||
          isOtherMonth;

        const isInWeekend = !!weekends
          ?.map((w) => bindWeekDayToNumber[w])
          .includes(date.getDay() as Day);

        const isSelectable = !!(isInWeekend
          ? weekendSelectable
          : isOtherMonth
          ? otherDaysSelectable
          : !isDisabled);

        const formattedDay = dayFormatter(date);

        if (!showOtherDays && isOtherMonth) return <div />;

        if (dayRenderer !== undefined && typeof dayRenderer === "function") {
          return dayRenderer({
            date,
            formattedDay,
            IsToday,
            isSelectable,
            isDisabled,
            isInSelectedRange,
            isStartOfRange,
            isEndOfRange,
            isInWeekend,
            isSelected,
            handleClickSlot,
          });
        }

        return (
          <div
            key={date.toString()}
            className={classJoin([
              "rhmdp-border rhmdp-border-transparent",
              IsToday &&
                classJoin(["rhmdp-text-blue-600", todayParentClassName]),
              isSelectable
                ? classJoin(["rhmdp-cursor-pointer", selectableParentClassName])
                : "rhmdp-cursor-default",
              isDisabled &&
                classJoin(["rhmdp-text-gray-400", disableParentClassName]),
              isInSelectedRange &&
                classJoin([
                  "rhmdp-bg-[#EAEAEC]",
                  inSelectedRangeParentClassName,
                ]),
              isStartOfRange &&
                classJoin(["rhmdp-rounded-s-lg", startOfRangeParentClassName]),
              isEndOfRange &&
                classJoin(["rhmdp-rounded-e-lg", endOfRangeParentClassName]),
              isInWeekend &&
                classJoin(["rhmdp-text-red-500", weekendParentClassName]),
              isSelected && classJoin([selectedParentClassName]),
              slotParentClassName,
            ])}
            style={{
              ...(IsToday && todayParentStyles),
              ...(isDisabled && disableParentStyles),
              ...(isInWeekend && weekendParentStyles),
              ...(isSelected && selectedParentStyles),
              ...(isSelectable && selectableParentStyles),
              ...(isInSelectedRange && inSelectedRangeParentStyles),
              ...(isStartOfRange && startOfRangeParentStyles),
              ...(isEndOfRange && endOfRangeParentStyles),
              ...(slotParentStyles && slotParentStyles),
            }}
          >
            <div
              onClick={() => handleClickSlot?.(date)}
              className={classJoin([
                "rhmdp-p-2 rhmdp-rounded-lg",
                IsToday && classJoin([todayClassName]),
                isSelectable &&
                  classJoin([
                    !isSelected && "hover:rhmdp-bg-gray-300",
                    selectableClassName,
                  ]),
                isDisabled && classJoin([disableClassName]),
                isInSelectedRange && classJoin([inSelectedRangeClassName]),
                isStartOfRange && classJoin([startOfRangeClassName]),
                isEndOfRange && classJoin([endOfRangeClassName]),
                isInWeekend && classJoin([weekendClassName]),
                isSelected &&
                  classJoin([
                    "rhmdp-bg-blue-600 hover:rhmdp-bg-blue-600 rhmdp-text-white rhmdp-h-full",
                    selectedClassName,
                  ]),
                slotClassName,
              ])}
              style={{
                ...(IsToday && todayStyles),
                ...(isDisabled && disableStyles),
                ...(isInWeekend && weekendStyles),
                ...(isSelected && selectedStyles),
                ...(isSelectable && selectableStyles),
                ...(isInSelectedRange && inSelectedRangeStyles),
                ...(isStartOfRange && startOfRangeStyles),
                ...(isEndOfRange && endOfRangeStyles),
                ...(slotStyles && slotStyles),
              }}
            >
              {formattedDay}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default DaySlots;
