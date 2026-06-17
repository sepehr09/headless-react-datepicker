import { Temporal } from "@js-temporal/polyfill";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { defaultWeekStartsOn } from "./constants/defaults";
import { PickerContext } from "./store/pickerContext";
import { TDatePickerProps } from "./types";
import {
  addCalendarMonths,
  firstDayOfCalendarMonth,
  getMonthInfo,
  getMonthSlots,
} from "./utils/datePicker";
import { getAllMonths, startOfDay } from "./utils/dateUtils";
import { normalizeTemporal } from "./utils/temporal";
import { getTimeParts, setTimeParts, TTimeParts } from "./utils/time";

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
      const first = (
        Array.isArray(initialValue) ? initialValue[0] : initialValue
      ) as Date | undefined;
      if (first) return new Date(first);
    }

    return new Date();
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

  /**
   * The date currently being hovered while picking a range. Kept here (rather
   * than in each `DaySlots`) so the hovered range preview is shared across
   * side-by-side calendars.
   */
  const [hoveredDate, setHoveredDate] = useState<Date | undefined>(undefined);

  const finalValue = value || internalValue;

  /**
   * Keep a stable `onChange` identity (so it can safely live in context) while
   * always invoking the latest handler the consumer passed — avoids capturing a
   * stale closure when `onChange` is an inline/recreated function.
   */
  const onChangeRef = useRef(onChangeProp);
  onChangeRef.current = onChangeProp;
  const onChange = useCallback(
    (val: IsRange extends true ? Date[] : Date) => onChangeRef.current?.(val),
    []
  );

  /**
   * Update internalValue if `value` prop is changed (controlled component).
   * Intentionally keyed only on `value`: `internalValue`/`defaultStartDate` are
   * read inside but must NOT retrigger this effect (doing so would loop).
   */
  useEffect(() => {
    if (value) {
      // prevent loop if value is same as selectedDay
      if (
        internalValue &&
        (Array.isArray(internalValue)
          ? internalValue?.[0]?.toISOString() ===
              (value as Date[])?.[0]?.toISOString() &&
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
              ? finalValue[1] || finalValue[0]
              : finalValue
            : new Date(new Date().toISOString())
        );
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  const goToNextMonth = (step = 1) => {
    let updatedDate = addCalendarMonths(firstDayOfMonth, step, calendar);

    // Clamp to `yearRangeTo` (December of that year). Done against the target
    // rather than the current month so multi-month steps can't overshoot the
    // configured upper bound.
    if (yearRangeTo) {
      const { year } = getMonthInfo(updatedDate, calendar);
      if (year > yearRangeTo) {
        updatedDate = firstDayOfCalendarMonth(yearRangeTo, 12, calendar);
      }
    }

    setCurrentDate(updatedDate);
  };

  const goToPrevMonth = (step = 1) => {
    let updatedDate = addCalendarMonths(firstDayOfMonth, -step, calendar);

    // Clamp to `yearRangeFrom` (January of that year). Done against the target
    // rather than the current month so multi-month steps can't overshoot the
    // configured lower bound.
    if (yearRangeFrom) {
      const { year } = getMonthInfo(updatedDate, calendar);
      if (year < yearRangeFrom) {
        updatedDate = firstDayOfCalendarMonth(yearRangeFrom, 1, calendar);
      }
    }

    setCurrentDate(updatedDate);
  };

  const goToDate = (date: Date) => {
    setCurrentDate(date);
  };

  const goToCurrentMonth = () => {
    setCurrentDate(new Date(new Date().setHours(0, 0, 0, 0)));
  };

  const getSingleSelectionValue = (date: Date) => {
    // Carry over a previously-picked time so changing the day keeps the time.
    if (internalValue && !Array.isArray(internalValue)) {
      return setTimeParts(date, getTimeParts(internalValue));
    }
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
      // Carry over the previous start's time onto the new start.
      const prevStart = internalValue?.[0];
      return [prevStart ? setTimeParts(date, getTimeParts(prevStart)) : date];
    }

    // Range (To) — carry over the previous end's time onto the new end.
    const prevEnd = internalValue?.[1];
    const end = prevEnd ? setTimeParts(date, getTimeParts(prevEnd)) : date;
    return [internalValue[0], end].sort(
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
   * Handle hovering a day slot while picking a range. Kept here so the hovered
   * range preview is shared across side-by-side calendars. Pass `undefined` to
   * clear the hover.
   */
  const handleHoverSlot = (date: Date | undefined) => {
    // only preview a hovered range while the first date of a range has been
    // picked but the second one hasn't.
    const isRangeInProgress =
      Array.isArray(finalValue) && !!finalValue[0] && !finalValue[1];

    if (date && !isRangeInProgress) return;

    setHoveredDate(date);
  };

  /**
   * Update the time (hours/minutes/seconds) of the current selection while
   * keeping its calendar day. For a range picker, `index` chooses which end to
   * update (`0` = start, `1` = end). If nothing is selected yet, the time is
   * applied to the day currently shown in the calendar (at midnight).
   */
  const handleChangeTime = (time: Partial<TTimeParts>, index = 0) => {
    let nextValue: Date | Date[];

    if (isRange) {
      const current = Array.isArray(internalValue) ? [...internalValue] : [];
      // Fill any earlier end that hasn't been picked yet, so setting the end's
      // time before a start exists can't leave a hole (`[undefined, date]`).
      for (let i = 0; i < index; i++) {
        if (!current[i]) current[i] = startOfDay(currentDate);
      }
      const base = current[index] ?? startOfDay(currentDate);
      current[index] = setTimeParts(base, time);
      // Keep the range ordered: editing one end's time past the other (e.g. on
      // the same day) must not deliver an inverted `[start > end]` to onChange.
      if (current[0] && current[1]) {
        current.sort((a, b) => new Date(a).getTime() - new Date(b).getTime());
      }
      nextValue = current;
    } else {
      const base =
        internalValue && !Array.isArray(internalValue)
          ? internalValue
          : startOfDay(currentDate);
      nextValue = setTimeParts(base, time);
    }

    onChange?.(nextValue as IsRange extends true ? Date[] : Date);

    if (!value) {
      setInternalValue(nextValue);
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

  /**
   * The selectable years. When no explicit range is configured it defaults to
   * the 20 years up to the initially displayed year. This list is intentionally
   * frozen: it is computed once (keyed only on the configured range / calendar)
   * and does NOT slide as the user navigates, so `yearInTheCalendar` is read but
   * left out of the deps on purpose.
   */
  const yearsList = useMemo(() => {
    const from = yearRangeFrom ?? (yearInTheCalendar || 0) - 20;
    const to = yearRangeTo ?? yearInTheCalendar ?? 0;
    const length = Math.max(0, to - from + 1);
    return Array.from({ length }, (_, i) => from + i);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [yearRangeFrom, yearRangeTo, calendar]);

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
        hoveredDate,
        handleHoverSlot,
        handleChangeTime,
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
