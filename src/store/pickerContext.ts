import { createContext } from "react";
import { TDatePickerProps, TMonthListItem } from "../types";

export type TPickerContext = {
  /**
   * Function to navigate to the next month
   */
  goToNextMonth: () => void;

  /**
   * Function to navigate to the previous month
   */
  goToPrevMonth: () => void;

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
   * Callback function when a date is clicked
   * @param date
   * @returns
   */
  onClickSlot?: (date: Date) => void;

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
} & Omit<TDatePickerProps, "children">;

export const PickerContext = createContext<TPickerContext>({
  goToNextMonth: () => {},
  goToPrevMonth: () => {},
  goToDate: () => {},
  goToCurrentMonth: () => {},
  goToMonth: () => {},
  goToYear: () => {},
  monthsList: undefined,
});
