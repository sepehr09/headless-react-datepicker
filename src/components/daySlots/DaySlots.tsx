import { ReactNode, useContext } from "react";
import { defaultWeekStartsOn } from "../../constants/defaults";
import { bindWeekDayToNumber } from "../../constants/weekdays";
import { PickerContext } from "../../store/pickerContext";
import { Day } from "../../types";
import { classJoin } from "../../utils/classJoin";
import { isSameDay, isToday, isWithinInterval } from "../../utils/dateUtils";
import { IsSameMonth } from "../../utils/jalali";
import { TDaySlots } from "./types";

function DaySlots(props: TDaySlots) {
  const {
    dayRenderer,
    parentClassName,
    parentStyles,
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
  } = props;

  const {
    daysOfMonth,
    config,
    selectedDay,
    handleClickSlot,
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
    weekendSelectable = true,
    weekStartsOn = defaultWeekStartsOn,
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

  const onClickSlot = (date: Date) => {
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

    handleClickSlot?.(date);
  };

  const diff =
    daysOfMonth?.[0]?.getDay() &&
    (daysOfMonth?.[0]?.getDay() - bindWeekDayToNumber[weekStartsOn] + 7) % 7;

  return (
    <div
      className={classJoin([
        "rhmdp-grid rhmdp-grid-cols-7 *:rhmdp-text-center",
        parentClassName,
      ])}
      style={parentStyles}
    >
      {!!diff &&
        Array.from({ length: diff }, (_, i) => i).reduce<ReactNode[]>(
          (acc) => [...acc, <div key={acc.length} style={{ height: 42 }} />],
          []
        )}
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
            handleClickSlot: onClickSlot,
          });
        }

        return (
          <div
            key={date.toString()}
            className={classJoin([
              "rhmdp-border rhmdp-border-transparent",
              slotParentClassName,
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
              onClick={() => onClickSlot?.(date)}
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
                    "rhmdp-bg-blue-500 hover:rhmdp-bg-blue-500 rhmdp-text-white rhmdp-h-full",
                    selectedClassName,
                  ]),
                slotClassName,
              ])}
              style={{
                ...(slotStyles && slotStyles),
                ...(IsToday && todayStyles),
                ...(isDisabled && disableStyles),
                ...(isInWeekend && weekendStyles),
                ...(isSelectable && selectableStyles),
                ...(isStartOfRange && startOfRangeStyles),
                ...(isEndOfRange && endOfRangeStyles),
                ...(isSelected && selectedStyles),
                ...(isInSelectedRange && inSelectedRangeStyles),
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
