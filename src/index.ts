import DatePickerProvider from "./DatePickerProvider";
import DaysOfWeekHeader, {
  TDaysOfWeekHeader,
  TDaysOfWeekHeaderRendererArgs,
} from "./components/DaysOfWeekHeader";
import Header from "./components/Header";
import Title, { TTitleProps } from "./components/Title";
import DaySlots, {
  TDaySlots,
  TDaySlotsDayRendererArgs,
} from "./components/daySlots/DaySlots";
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
  TPickerContext,
  TTitleProps,
};
