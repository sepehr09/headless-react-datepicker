import {
  CSSProperties,
  KeyboardEvent,
  ReactNode,
  useContext,
  useMemo,
  useRef,
} from "react";
import { defaultWeekStartsOn } from "../../constants/defaults";
import { bindWeekDayToNumber } from "../../constants/weekdays";
import { PickerContext } from "../../store/pickerContext";
import { Day } from "../../types";
import {
  DAY_SLOTS,
  DAY_SLOTS_CELL,
  DAY_SLOTS_CELL_DISABLED,
  DAY_SLOTS_CELL_EMPTY,
  DAY_SLOTS_CELL_FIRST_OF_MONTH,
  DAY_SLOTS_CELL_HOLIDAY,
  DAY_SLOTS_CELL_IN_HOVERED_RANGE,
  DAY_SLOTS_CELL_IN_RANGE,
  DAY_SLOTS_CELL_OTHER_MONTH,
  DAY_SLOTS_CELL_RANGE_END,
  DAY_SLOTS_CELL_RANGE_START,
  DAY_SLOTS_CELL_SELECTABLE,
  DAY_SLOTS_CELL_SELECTED,
  DAY_SLOTS_CELL_TODAY,
  DAY_SLOTS_CELL_WEEKEND,
  DAY_SLOTS_DAY,
  DAY_SLOTS_DAY_DISABLED,
  DAY_SLOTS_DAY_FIRST_OF_MONTH,
  DAY_SLOTS_DAY_HOLIDAY,
  DAY_SLOTS_DAY_IN_HOVERED_RANGE,
  DAY_SLOTS_DAY_IN_RANGE,
  DAY_SLOTS_DAY_OTHER_MONTH,
  DAY_SLOTS_DAY_RANGE_END,
  DAY_SLOTS_DAY_RANGE_START,
  DAY_SLOTS_DAY_SELECTABLE,
  DAY_SLOTS_DAY_SELECTED,
  DAY_SLOTS_DAY_TODAY,
  DAY_SLOTS_DAY_WEEKEND,
  DAY_SLOTS_PLACEHOLDER,
} from "../../constants/classNames";
import { classJoin } from "../../utils/classJoin";
import { addCalendarMonths, getMonthSlots } from "../../utils/datePicker";
import {
  isSameDay,
  isToday,
  isWithinInterval,
  startOfDay,
} from "../../utils/dateUtils";
import { IsSameMonth } from "../../utils/jalali";
import { TDaySlots } from "./types";

function DaySlots(props: TDaySlots) {
  const {
    dayRenderer,
    onClickSlot: onClickSlotProp,
    monthOffset,
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
    daysOfMonth: contextDaysOfMonth,
    config,
    selectedDay,
    handleClickSlot,
    calendar,
    monthInTheCalendar: contextMonthInTheCalendar,
    firstDayOfMonth: contextFirstDayOfMonth,
    hoveredDate: hoveredItem,
    handleHoverSlot,
  } = useContext(PickerContext);

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

  /**
   * When `monthOffset` is provided, this calendar renders a month other than
   * the one in the context (offset by `monthOffset` months) so multiple
   * calendars can be shown side-by-side. The shared state (selection, hover,
   * navigation) still lives in the context, so everything stays in sync.
   */
  const offsetSlots = useMemo(() => {
    if (!monthOffset || !contextFirstDayOfMonth || !calendar) return undefined;
    return getMonthSlots({
      currentDate: addCalendarMonths(
        contextFirstDayOfMonth,
        monthOffset,
        calendar
      ),
      calendar,
      weekStartsOn,
    });
  }, [monthOffset, contextFirstDayOfMonth, calendar, weekStartsOn]);

  const daysOfMonth = offsetSlots?.daysOfMonth ?? contextDaysOfMonth;
  const monthInTheCalendar =
    offsetSlots?.monthInTheCalendar ?? contextMonthInTheCalendar;
  const firstDayOfMonth =
    offsetSlots?.firstDayOfMonth ?? contextFirstDayOfMonth;

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
        // `startOfDay` returns a new Date so we never mutate the stored
        // selection (which would wipe the time set via `TimePicker`).
        start: startOfDay(selectedDay[0]),
        end: startOfDay(selectedDay[selectedDay.length - 1]),
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
    if (
      startOfDay(hoveredItem) < startOfDay(selectedDay[0]) &&
      !allowBackwardRange
    ) {
      return false;
    }

    // `startOfDay` returns a new Date so we never mutate the stored selection
    // or the hovered date (which would wipe their time portion).
    return isWithinInterval(date, {
      start: startOfDay(selectedDay[0]),
      end: startOfDay(hoveredItem),
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
    handleHoverSlot?.(date);
  };

  const handleMouseLeave = () => {
    if (!hoveredItem) return;

    handleHoverSlot?.(undefined);
  };

  return (
    <div
      className={classJoin(
        DAY_SLOTS,
        parentClassName
      )}
      role="presentation"
      style={parentStyles}
      ref={gridRef}
    >
      {!!diff &&
        Array.from({ length: diff }, (_, i) => i).reduce<ReactNode[]>(
          (acc) => [
            ...acc,
            <div
              key={acc.length}
              className={DAY_SLOTS_PLACEHOLDER}
              style={{ height: 42 }}
            />,
          ],
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

        if (!showOtherDays && isOtherMonth)
          return (
            <div
              key={date.getTime()}
              className={classJoin(DAY_SLOTS_CELL, DAY_SLOTS_CELL_EMPTY)}
            />
          );

        /* -------------------------------------------------------------------------- */
        /*                     render custom component if provided                    */
        /* -------------------------------------------------------------------------- */
        if (dayRenderer !== undefined && typeof dayRenderer === "function") {
          return dayRenderer({
            date,
            formattedDay,
            IsToday, // For backwards compatibility
            isToday: IsToday,
            isSelectable,
            isDisabled,
            isInSelectedRange,
            isInHoveredRange,
            isStartOfRange,
            isEndOfRange,
            isInWeekend,
            isInHoliday,
            isSelected,
            isOtherMonth,
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

        // State text color, range fills and rounded range-ends are all styled
        // from `src/styles.css` via the BEM modifier classes below (the day
        // cell's color priority — other-month > disabled > holiday > weekend >
        // today > base — is encoded by the rule order there).
        const parentClassNames = classJoin(
          DAY_SLOTS_CELL,
          slotParentClassName,
          IsToday && DAY_SLOTS_CELL_TODAY,
          IsToday && todayParentClassName,
          isSelectable && DAY_SLOTS_CELL_SELECTABLE,
          isSelectable && selectableParentClassName,
          isSelected && DAY_SLOTS_CELL_SELECTED,
          isSelected && selectedParentClassName,
          isInSelectedRange && DAY_SLOTS_CELL_IN_RANGE,
          isInSelectedRange && inSelectedRangeParentClassName,
          isInHoveredRange && DAY_SLOTS_CELL_IN_HOVERED_RANGE,
          isInHoveredRange && inHoveredRangeParentClassName,
          isStartOfRange && DAY_SLOTS_CELL_RANGE_START,
          isStartOfRange && startOfRangeParentClassName,
          isEndOfRange && DAY_SLOTS_CELL_RANGE_END,
          isEndOfRange && endOfRangeParentClassName,
          isInWeekend && DAY_SLOTS_CELL_WEEKEND,
          isInWeekend && weekendParentClassName,
          isInHoliday && DAY_SLOTS_CELL_HOLIDAY,
          isInHoliday && holidayParentClassName,
          isOtherMonth && DAY_SLOTS_CELL_OTHER_MONTH,
          isFirstDayOfMonth && DAY_SLOTS_CELL_FIRST_OF_MONTH,
          isDisabled && DAY_SLOTS_CELL_DISABLED,
          isDisabled && disableParentClassName
        );

        const dayClassNames = classJoin(
          DAY_SLOTS_DAY,
          slotClassName,
          IsToday && DAY_SLOTS_DAY_TODAY,
          IsToday && todayClassName,
          isSelectable && DAY_SLOTS_DAY_SELECTABLE,
          isSelectable && selectableClassName,
          isSelected && DAY_SLOTS_DAY_SELECTED,
          isSelected && selectedClassName,
          isInSelectedRange && DAY_SLOTS_DAY_IN_RANGE,
          isInSelectedRange && inSelectedRangeClassName,
          isInHoveredRange && DAY_SLOTS_DAY_IN_HOVERED_RANGE,
          isInHoveredRange && inHoveredRangeClassName,
          isStartOfRange && DAY_SLOTS_DAY_RANGE_START,
          isStartOfRange && startOfRangeClassName,
          isEndOfRange && DAY_SLOTS_DAY_RANGE_END,
          isEndOfRange && endOfRangeClassName,
          isInWeekend && DAY_SLOTS_DAY_WEEKEND,
          isInWeekend && weekendClassName,
          isInHoliday && DAY_SLOTS_DAY_HOLIDAY,
          isInHoliday && holidayClassName,
          isOtherMonth && DAY_SLOTS_DAY_OTHER_MONTH,
          isFirstDayOfMonth && DAY_SLOTS_DAY_FIRST_OF_MONTH,
          isDisabled && DAY_SLOTS_DAY_DISABLED,
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
