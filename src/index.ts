import DatePickerProvider from "./DatePickerProvider";
import DaySlots from "./components/daySlots/DaySlots";
import {
  TDaySlots,
  TDaySlotsDayRendererArgs,
} from "./components/daySlots/types";
import DaysOfWeekHeader from "./components/daysOfWeekHeader/DaysOfWeekHeader";
import {
  TDaysOfWeekHeader,
  TDaysOfWeekHeaderRendererArgs,
} from "./components/daysOfWeekHeader/types";
import Header from "./components/header/Header";
import { THeaderProps } from "./components/header/types";
import Title from "./components/title/Title";
import { TTitleProps } from "./components/title/types";
import { useDatePickerContext } from "./hooks/useDatePickerContext";
import { TPickerContext } from "./store/pickerContext";

export default DatePickerProvider;

/* ---------------------------- export components --------------------------- */
export { DaySlots, DaysOfWeekHeader, Header, Title, useDatePickerContext };

/* ------------------------------ export types ------------------------------ */
export * from "./types";
export type {
  TDaySlots,
  TDaySlotsDayRendererArgs,
  TDaysOfWeekHeader,
  TDaysOfWeekHeaderRendererArgs,
  THeaderProps,
  TPickerContext,
  TTitleProps,
};
