import { isSameDay, isToday, isWithinInterval } from "date-fns";
import { useContext } from "react";
import { PickerContext } from "../store/pickerContext";
import { IsSameMonth } from "../utils/jalali";

function MonthDatesSlots() {
  const {
    daysOfMonth,
    firstDayOfMonth,
    config,
    selectedDay,
    onClickSlot,
    calendar,
  } = useContext(PickerContext);
  const {
    locale,
    showOtherDays,
    otherDaysSelectable,
    dayFormat,
    minDate,
    maxDate,
  } = config || {};

  const dayFormatter = (day) => {
    if (calendar === "persian") {
      return new Intl.DateTimeFormat(locale, {
        day: dayFormat,
        calendar,
      }).format(day);
    } else {
      return new Intl.DateTimeFormat(locale, {
        day: dayFormat,
        calendar,
      }).format(day);
    }
  };

  const IsSelected = (date: Date) => {
    if (Array.isArray(selectedDay)) {
      return (
        isSameDay(date, selectedDay[0]) ||
        isSameDay(date, selectedDay[selectedDay?.length - 1])
      );
    }
    return isSameDay(date, selectedDay);
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
    const isSameMonth = IsSameMonth(date, firstDayOfMonth, calendar);

    if (!isSameMonth && !otherDaysSelectable) return;

    if (minDate && date < minDate) return;

    if (maxDate && date > maxDate) return;

    onClickSlot?.(date);
  };

  return (
    <div className="rhjd-grid rhjd-grid-cols-7 *:rhjd-text-center">
      {daysOfMonth?.map((date) => {
        const IsToday = isToday(date);
        const isSameMonth =
          firstDayOfMonth &&
          calendar &&
          IsSameMonth(date, firstDayOfMonth, calendar);
        const isSelected = IsSelected(date);
        const isRangeSelected = IsRangeSelected(date);
        const isStartOfRange =
          Array.isArray(selectedDay) && isSameDay(date, selectedDay?.[0]);
        const isEndOfRange =
          Array.isArray(selectedDay) &&
          isSameDay(date, selectedDay?.[selectedDay?.length - 1]);
        const isDisabled =
          (minDate && date < minDate) ||
          (maxDate && date > maxDate) ||
          !isSameMonth;

        if (!showOtherDays && !isSameMonth) return <div />;

        return (
          <div
            key={date.toString()}
            className={`rhjd-p-1 rhjd-border rhjd-border-transparent 
            ${
              IsToday && !isRangeSelected
                ? "rhjd-text-[#1477FF] rhjd-border-blue-300 rhjd-rounded-full"
                : ""
            }
            ${
              isDisabled || (!isSameMonth && !otherDaysSelectable)
                ? "rhjd-cursor-default"
                : "rhjd-cursor-pointer"
            }
            ${isDisabled ? "rhjd-text-gray-400" : ""}
            ${isRangeSelected ? "rhjd-bg-[#EAEAEC]" : ""}
            ${isStartOfRange ? "rhjd-rounded-s-xl" : ""}
            ${isEndOfRange ? "rhjd-rounded-e-xl" : ""}
            `}
          >
            <div
              onClick={() => handleClickSlot?.(date)}
              className={`rhjd-py-2 rhjd-px-3 ${
                isSelected
                  ? "rhjd-bg-[#1477FF] rhjd-text-white rhjd-rounded-xl rhjd-h-full"
                  : ""
              }`}
            >
              {dayFormatter(date)}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MonthDatesSlots;
