import DatePickerProvider from "./DatePickerProvider";
import DaySlots, { TDaySlotsDayRendererArgs } from "./components/DaySlots";
import DaysOfWeekHeader from "./components/DaysOfWeekHeader";
import Header from "./components/Header";
import Title, { TTitleProps } from "./components/Title";
import { useDatePickerContext } from "./hooks/useDatePickerContext";
import { TPickerContext } from "./store/pickerContext";

export default DatePickerProvider;

/* ---------------------------- export components --------------------------- */
export { DaySlots, DaysOfWeekHeader, Header, Title, useDatePickerContext };

/* ------------------------------ export types ------------------------------ */
export * from "./types";
export type { TDaySlotsDayRendererArgs, TPickerContext, TTitleProps };
