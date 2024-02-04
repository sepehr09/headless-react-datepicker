import { createContext } from "react";
import { TDatePickerProps } from "../types";

export type TPickerContext = {
  goToNextMonth?: () => void;
  goToPrevMonth?: () => void;
  goToDate?: (date: Date) => void;
  daysOfMonth?: Date[];
  startDateIncludeOtherDays?: Date;
  endDateIncludeOtherDays?: Date;
  firstDayOfMonth?: Date;
  lastDayOfMonth?: Date;
  selectedDay?: Date | Date[] | undefined;
  onClickSlot?: (date: Date) => void;
  monthInTheCalendar?: number;
  totalDaysInTheCalendar?: number;
  yearInTheCalendar?: number;
} & TDatePickerProps;

export const PickerContext = createContext<TPickerContext>({
  calendar: "gregory",
  config: {
    weekdayFormat: "narrow",
    dayFormat: "numeric",
    locale: "en-US",
  },
});
