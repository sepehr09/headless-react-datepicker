import { createContext } from "react";
import { TDatePickerProps, TMonthListItem } from "../types";
import { TTimeParts } from "../utils/time";

export type TPickerContext<IsRange extends boolean> = {
  /**
   * Function to navigate to the next month
   * @param step number of months to move forward (default: 1)
   */
  goToNextMonth: (step?: number) => void;

  /**
   * Function to navigate to the previous month
   * @param step number of months to move backward (default: 1)
   */
  goToPrevMonth: (step?: number) => void;

  /**
   * Function to navigate to a specific date
   * @param date
   */
  goToDate: (date: Date) => void;

  /**
   * Function to navigate to the current month
   */
  goToCurrentMonth: () => void;

  /**
   * Local month based on desire calendar
   * @example 1 // means Jan (gregory calendar)
   * @example 1 // means Farvardin (persian calendar)
   */
  goToMonth: (month: number) => void;

  /**
   * Handle go to year based on desire calendar
   * @example 2020
   * @example 1395 // (persian calendar)
   */
  goToYear: (year: number) => void;

  /**
   * All the dates of the month rendered in the calendar
   * @type {Date[]}
   */
  daysOfMonth?: Date[];

  /**
   * End date of the month rendered in the calendar
   * include previous month days (if in the week)
   * @type {Date}
   */
  startDateIncludeOtherDays?: Date;

  /**
   * Start date of the month rendered in the calendar
   * include next month days (if in the week)
   * @type {Date}
   */
  endDateIncludeOtherDays?: Date;

  /**
   * First day of the month
   * @type {Date}
   */
  firstDayOfMonth?: Date;

  /**
   * Last day of the month
   * @type {Date}
   */
  lastDayOfMonth?: Date;

  /**
   * The selected day in the calendar
   * @type {Date | Date[] | undefined}
   */
  selectedDay?: Date | Date[] | undefined;

  /**
   * The date currently being hovered while picking a range. Shared across all
   * `DaySlots` so the hovered range preview spans side-by-side calendars.
   * @type {Date | undefined}
   */
  hoveredDate?: Date | undefined;

  /**
   * Callback when a day slot is hovered while picking a range. Pass `undefined`
   * to clear the hover. Shared across side-by-side calendars.
   * @param date the hovered date, or `undefined` to clear
   */
  handleHoverSlot?: (date: Date | undefined) => void;

  /**
   * Callback function when a date is clicked
   * @param date
   * @returns
   */
  handleClickSlot?: (date: Date) => void;

  /**
   * Update the time (hours/minutes/seconds) of the current selection while
   * keeping its calendar day. Any part left out keeps its current value. For a
   * range picker, `index` chooses which end to update (`0` = start, `1` = end).
   * If nothing is selected yet, the time is applied to the day currently shown
   * in the calendar.
   * @param time the time parts to set
   * @param index which end of a range to update (default `0`)
   */
  handleChangeTime?: (time: Partial<TTimeParts>, index?: number) => void;

  /**
   * Current month in the calendar
   * based on desired calendar
   * @type {number}
   * @example // if calendar is persian, monthInTheCalendar will return 11 which is the 11th persian month
   */
  monthInTheCalendar?: number;

  /**
   * Indicate the total days in the month
   * @example 31
   * @type {number}
   */
  totalDaysInTheCalendar?: number;

  /**
   * Current year in the desire calendar
   * @example // if calendar is persian, yearInTheCalendar will return 1400 which is the 1400th persian year
   */
  yearInTheCalendar?: number;

  /**
   * List of all month based on culture
   */
  monthsList?: TMonthListItem[];

  /**
   * List of all years based on yearRangeFrom and yearRangeTo
   */
  yearsList?: number[];
} & Omit<TDatePickerProps<IsRange>, "children">;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const PickerContext = createContext<TPickerContext<any>>({
  goToNextMonth: () => {},
  goToPrevMonth: () => {},
  goToDate: () => {},
  goToCurrentMonth: () => {},
  goToMonth: () => {},
  goToYear: () => {},
  monthsList: undefined,
});
