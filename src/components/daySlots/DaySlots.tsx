import {
  CSSProperties,
  KeyboardEvent,
  ReactNode,
  useContext,
  useRef,
} from "react";
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
    onClickSlot: onClickSlotProp,
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

  const gridRef = useRef<HTMLDivElement>(null);

  const dayFormatter = (day: Date) => {
    return new Intl.DateTimeFormat(locale, {
      day: dayFormat,
      calendar,
    }).format(day);
  };

  const ariaDayFormatter = (day: Date) => {
    return new Intl.DateTimeFormat(locale, {
      year: "numeric",
      month: "long",
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
    onClickSlotProp?.(date);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>, date?: Date) => {
    if (event.key === "Enter" && date) onClickSlot?.(date);

    const grid = gridRef.current;
    if (!grid) return;

    const activeElement = document.activeElement as HTMLElement;
    if (!activeElement || !grid.contains(activeElement)) return;

    const items = Array.from(
      grid.querySelectorAll("[role='button']")
    ) as HTMLElement[];
    const currentIndex = items.indexOf(activeElement);

    const columns = 7;

    let nextIndex;
    switch (event.key) {
      case "ArrowRight":
        nextIndex = (currentIndex + 1) % items.length;
        break;
      case "ArrowLeft":
        nextIndex = (currentIndex - 1 + items.length) % items.length;
        break;
      case "ArrowDown":
        nextIndex = (currentIndex + columns) % items.length;
        if (nextIndex >= items.length) nextIndex -= items.length;
        break;
      case "ArrowUp":
        nextIndex = (currentIndex - columns + items.length) % items.length;
        if (nextIndex < 0) nextIndex += items.length;
        break;
      default:
        return;
    }

    items[nextIndex]?.focus();
  };

  const diff =
    daysOfMonth?.[0]?.getDay() &&
    (daysOfMonth?.[0]?.getDay() - bindWeekDayToNumber[weekStartsOn] + 7) % 7;

  return (
    <div
      className={classJoin(
        "rhmdp-grid rhmdp-grid-cols-7 *:rhmdp-text-center",
        parentClassName
      )}
      role="presentation"
      style={parentStyles}
      ref={gridRef}
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

        /**
         * (otherDays and weekends) can be Enabled but NOT Selectable
         */
        const isSelectable = !!(isInWeekend
          ? weekendSelectable
          : isOtherMonth
          ? otherDaysSelectable
          : !isDisabled);

        const formattedDay = dayFormatter(date);
        const ariaFormattedDay = ariaDayFormatter(date);

        if (!showOtherDays && isOtherMonth) return <div />;

        /* -------------------------------------------------------------------------- */
        /*                     render custom component if provided                    */
        /* -------------------------------------------------------------------------- */
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
            handleKeyDown,
          });
        }

        const parentStyles: CSSProperties = {
          ...(slotParentStyles && slotParentStyles),
          ...(IsToday && todayParentStyles),
          ...(isSelectable && selectableParentStyles),
          ...(isSelected && selectedParentStyles),
          ...(isInSelectedRange && inSelectedRangeParentStyles),
          ...(isStartOfRange && startOfRangeParentStyles),
          ...(isEndOfRange && endOfRangeParentStyles),
          ...(isInWeekend && weekendParentStyles),
          ...(isDisabled && disableParentStyles),
        };

        const dayStyles: CSSProperties = {
          ...(slotStyles && slotStyles),
          ...(IsToday && todayStyles),
          ...(isSelectable && selectableStyles),
          ...(isSelected && selectedStyles),
          ...(isInSelectedRange && inSelectedRangeStyles),
          ...(isStartOfRange && startOfRangeStyles),
          ...(isEndOfRange && endOfRangeStyles),
          ...(isInWeekend && weekendStyles),
          ...(isDisabled && disableStyles),
        };

        const parentClassNames = classJoin(
          "rhmdp-border rhmdp-border-transparent",
          slotParentClassName,
          IsToday && "rhmdp-text-blue-600",
          IsToday && todayParentClassName,
          isSelectable ? "rhmdp-cursor-pointer" : "rhmdp-cursor-default",
          isSelectable && selectableParentClassName,
          isSelected && selectedParentClassName,
          isInSelectedRange && "rhmdp-bg-[#EAEAEC]",
          isInSelectedRange && inSelectedRangeParentClassName,
          isStartOfRange && "rhmdp-rounded-s-lg",
          isStartOfRange && startOfRangeParentClassName,
          isEndOfRange && "rhmdp-rounded-e-lg",
          isEndOfRange && endOfRangeParentClassName,
          isInWeekend && "rhmdp-text-red-500",
          isInWeekend && weekendParentClassName,
          isDisabled && "rhmdp-text-gray-400",
          isDisabled && disableParentClassName
        );

        const dayClassNames = classJoin(
          "rhmdp-p-2 rhmdp-rounded-lg",
          slotClassName,
          IsToday && todayClassName,
          isSelectable && !isSelected && "hover:rhmdp-bg-gray-300",
          isSelectable && selectableClassName,
          isSelected &&
            "rhmdp-bg-blue-500 hover:rhmdp-bg-blue-500 rhmdp-text-white rhmdp-h-full",
          isSelected && selectedClassName,
          isInSelectedRange && inSelectedRangeClassName,
          isStartOfRange && startOfRangeClassName,
          isEndOfRange && endOfRangeClassName,
          isInWeekend && weekendClassName,
          isDisabled && disableClassName
        );

        return (
          <div
            key={date.toString()}
            className={parentClassNames}
            style={parentStyles}
          >
            <div
              role="button"
              tabIndex={IsToday || isSelected ? 0 : -1}
              aria-disabled={isDisabled || !isSelectable}
              aria-label={`${ariaFormattedDay}`}
              onClick={() => onClickSlot?.(date)}
              onKeyDown={(e) => {
                handleKeyDown(e, date);
              }}
              className={dayClassNames}
              style={dayStyles}
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
