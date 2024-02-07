import { Day, isSameDay, isToday, isWithinInterval } from "date-fns";
import { ReactNode, useContext } from "react";
import { bindWeekDayToNumber } from "../constants/weekdays";
import { PickerContext } from "../store/pickerContext";
import { classJoin } from "../utils/classJoin";
import { IsSameMonth } from "../utils/jalali";

export type TDaySlotsDayRendererArgs = {
  date: Date;
  /**
   * based on calendar config.dayFormat
   */
  formattedDay?: string;
  IsToday: boolean;
  isSelectable: boolean;
  isDisabled: boolean;
  isInSelectedRange: boolean;
  isStartOfRange: boolean;
  isEndOfRange: boolean;
  isInWeekend: boolean;
  isSelected: boolean;
  handleClickSlot: (date: Date) => void;
};

export type TDaySlots = {
  dayRenderer?: (args: TDaySlotsDayRendererArgs) => ReactNode;
};

function DaySlots({ dayRenderer }: TDaySlots) {
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

        const isSameMonth =
          monthInTheCalendar &&
          calendar &&
          IsSameMonth(date, monthInTheCalendar, calendar);

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
          !isSameMonth;

        const isInWeekend = !!weekends
          ?.map((w) => bindWeekDayToNumber[w])
          .includes(date.getDay() as Day);

        const isSelectable = !!(
          !isDisabled ||
          (isSameMonth && otherDaysSelectable)
        );

        const formattedDay = dayFormatter(date);

        if (!showOtherDays && !isSameMonth) return <div />;

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
              "rhmdp-p-1 rhmdp-border rhmdp-border-transparent",
              IsToday ? "rhmdp-text-blue-600" : "",
              isSelectable ? "rhmdp-cursor-pointer" : "rhmdp-cursor-default",
              isDisabled ? "rhmdp-text-gray-400" : "",
              isInSelectedRange ? "rhmdp-bg-[#EAEAEC]" : "",
              isStartOfRange ? "rhmdp-rounded-s-xl" : "",
              isEndOfRange ? "rhmdp-rounded-e-xl" : "",
              isInWeekend ? "rhmdp-text-red-500" : "",
            ])}
          >
            <div
              onClick={() => handleClickSlot?.(date)}
              className={classJoin([
                "rhmdp-p-2",
                isSelected
                  ? "rhmdp-bg-blue-600 rhmdp-text-white rhmdp-rounded-xl rhmdp-h-full"
                  : "",
              ])}
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
