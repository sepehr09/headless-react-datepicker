import {
  CSSProperties,
  KeyboardEvent,
  ReactNode,
  useContext,
  useRef,
  useState,
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

    holidayStyles,
    holidayClassName,
    holidayParentStyles,
    holidayParentClassName,

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

    inHoveredRangeStyles,
    inHoveredRangeClassName,
    inHoveredRangeParentStyles,
    inHoveredRangeParentClassName,

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
    firstDayOfMonth,
  } = useContext(PickerContext);

  const [hoveredItem, setHoveredItem] = useState<Date | undefined>(undefined);

  const {
    locale,
    showOtherDays,
    otherDaysSelectable,
    dayFormat,
    minDate,
    maxDate,
    weekends,
    holidays,
    weekendSelectable = true,
    holidaySelectable = false,
    weekStartsOn = defaultWeekStartsOn,
    allowBackwardRange,
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

  const IsOtherMonth = (date: Date) => {
    return !(
      monthInTheCalendar &&
      calendar &&
      IsSameMonth(date, monthInTheCalendar, calendar)
    );
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
    if (Array.isArray(selectedDay) && selectedDay?.[0] && selectedDay?.[1]) {
      return isWithinInterval(date, {
        start: selectedDay[0].setHours(0, 0, 0, 0),
        end: selectedDay[selectedDay?.length - 1].setHours(0, 0, 0, 0),
      });
    }
    return false;
  };

  const IsStartOfRange = (date: Date) => {
    return Array.isArray(selectedDay) && isSameDay(date, selectedDay?.[0]);
  };

  const IsEndOfRange = (date: Date) => {
    return (
      Array.isArray(selectedDay) &&
      selectedDay.length === 2 &&
      isSameDay(date, selectedDay?.[selectedDay?.length - 1])
    );
  };

  const IsDisabled = (date: Date, isOtherMonth: boolean) => {
    return (
      (minDate && date < minDate) || (maxDate && date > maxDate) || isOtherMonth
    );
  };

  /**
   * (otherDays and weekends) can be Enabled but NOT Selectable
   */
  const IsSelectable = ({
    isInWeekend,
    isInHoliday,
    isOtherMonth,
    isDisabled,
  }: {
    isInWeekend: boolean;
    isInHoliday: boolean;
    isOtherMonth: boolean;
    isDisabled: boolean;
  }): boolean => {
    if (isOtherMonth) {
      if (isInHoliday) {
        return holidaySelectable;
      }
      if (isInWeekend) {
        return weekendSelectable;
      }
      return otherDaysSelectable || false;
    }
    if (isInHoliday) {
      return holidaySelectable;
    }
    if (isInWeekend) {
      return weekendSelectable;
    }
    return !isDisabled;
  };

  const IsInWeekend = (date: Date) => {
    return !!weekends
      ?.map((w) => bindWeekDayToNumber[w])
      .includes(date.getDay() as Day);
  };

  const IsInHoliday = (date: Date) => {
    return !!holidays?.some((a) => isSameDay(date, a));
  };

  const IsFirstDayOfMonth = (date: Date) => {
    return firstDayOfMonth && isSameDay(date, firstDayOfMonth);
  };

  const IsInHoveredRange = (date: Date) => {
    if (!hoveredItem) return false;

    if (
      !Array.isArray(selectedDay) ||
      (Array.isArray(selectedDay) && selectedDay?.[0] && selectedDay?.[1])
    ) {
      return false;
    }

    // check if hovered date is before the selected date
    if (hoveredItem < selectedDay?.[0] && !allowBackwardRange) return false;

    return isWithinInterval(date, {
      start: selectedDay[0].setHours(0, 0, 0, 0),
      end: hoveredItem.setHours(0, 0, 0, 0),
    });
  };

  const onClickSlot = (date: Date) => {
    const isSameMonth =
      monthInTheCalendar &&
      calendar &&
      IsSameMonth(date, monthInTheCalendar, calendar);

    const isInWeekend = IsInWeekend(date);
    const isInHoliday = IsInHoliday(date);

    if (!isSameMonth && !otherDaysSelectable) return;
    if (minDate && date < minDate) return;
    if (maxDate && date > maxDate) return;
    if (isInWeekend && !weekendSelectable) return;
    if (isInHoliday && !holidaySelectable) return;

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

  const handleMouseEnter = (date: Date) => {
    if (
      !Array.isArray(selectedDay) ||
      (Array.isArray(selectedDay) && selectedDay?.[0] && selectedDay?.[1])
    ) {
      return;
    }

    setHoveredItem(date);
  };

  const handleMouseLeave = () => {
    if (!hoveredItem) return;

    setHoveredItem(undefined);
  };

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
        const isOtherMonth = IsOtherMonth(date);
        const isSelected = !!IsSelected(date);
        const isInSelectedRange = IsRangeSelected(date);
        const isInHoveredRange = IsInHoveredRange(date);
        const isStartOfRange = IsStartOfRange(date);
        const isEndOfRange = IsEndOfRange(date);
        const isDisabled = IsDisabled(date, isOtherMonth);
        const isInWeekend = IsInWeekend(date);
        const isInHoliday = IsInHoliday(date);
        const isFirstDayOfMonth = IsFirstDayOfMonth(date);
        const isSelectable = IsSelectable({
          isInWeekend,
          isInHoliday,
          isOtherMonth,
          isDisabled,
        });

        const formattedDay = dayFormatter(date);
        const ariaFormattedDay = ariaDayFormatter(date);

        if (!showOtherDays && isOtherMonth) return <div key={date.getTime()} />;

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
            isInHoveredRange,
            isStartOfRange,
            isEndOfRange,
            isInWeekend,
            isInHoliday,
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
          ...(isInHoveredRange && inHoveredRangeParentStyles),
          ...(isStartOfRange && startOfRangeParentStyles),
          ...(isEndOfRange && endOfRangeParentStyles),
          ...(isInWeekend && weekendParentStyles),
          ...(isInHoliday && holidayParentStyles),
          ...(isDisabled && disableParentStyles),
        };

        const dayStyles: CSSProperties = {
          ...(slotStyles && slotStyles),
          ...(IsToday && todayStyles),
          ...(isSelectable && selectableStyles),
          ...(isSelected && selectedStyles),
          ...(isInSelectedRange && inSelectedRangeStyles),
          ...(isInHoveredRange && inHoveredRangeStyles),
          ...(isInWeekend && weekendStyles),
          ...(isInHoliday && holidayStyles),
          ...(isStartOfRange && startOfRangeStyles),
          ...(isEndOfRange && endOfRangeStyles),
          ...(isDisabled && disableStyles),
        };

        const parentClassNames = classJoin(
          "rhmdp-border rhmdp-border-transparent rhmdp-h-max",
          slotParentClassName,
          IsToday && "rhmdp-text-blue-600",
          IsToday && todayParentClassName,
          isSelectable && selectableParentClassName,
          isSelected && selectedParentClassName,
          isInSelectedRange && "rhmdp-bg-[#EAEAEC]",
          isInSelectedRange && inSelectedRangeParentClassName,
          isInHoveredRange && "rhmdp-bg-[#EAEAEC]",
          isInHoveredRange && inHoveredRangeParentClassName,
          isStartOfRange && "rhmdp-rounded-s-lg",
          isStartOfRange && startOfRangeParentClassName,
          isEndOfRange && "rhmdp-rounded-e-lg",
          isEndOfRange && endOfRangeParentClassName,
          isInWeekend && "rhmdp-text-red-500",
          isInWeekend && weekendParentClassName,
          isInHoliday && "rhmdp-text-red-500",
          isInHoliday && holidayParentClassName,
          isDisabled && "rhmdp-text-gray-400",
          isDisabled && disableParentClassName
        );

        const dayClassNames = classJoin(
          "rhmdp-p-2 rhmdp-rounded-lg rhmdp-h-full",
          slotClassName,
          IsToday && todayClassName,
          isSelectable ? "rhmdp-cursor-pointer" : "rhmdp-cursor-not-allowed",
          isSelectable && !isSelected && "hover:rhmdp-bg-gray-300",
          isSelectable && selectableClassName,
          isSelected &&
            "rhmdp-bg-blue-500 hover:rhmdp-bg-blue-500 rhmdp-text-white",
          isSelected && selectedClassName,
          isInSelectedRange && inSelectedRangeClassName,
          isInHoveredRange && inHoveredRangeClassName,
          isStartOfRange && startOfRangeClassName,
          isEndOfRange && endOfRangeClassName,
          isInWeekend && weekendClassName,
          isInHoliday && holidayClassName,
          isDisabled && disableClassName
        );

        return (
          <div
            key={date.getTime()}
            className={parentClassNames}
            style={parentStyles}
            onMouseEnter={() => handleMouseEnter(date)}
            onMouseLeave={handleMouseLeave}
          >
            <div
              role="button"
              tabIndex={IsToday || isSelected || isFirstDayOfMonth ? 0 : -1}
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
