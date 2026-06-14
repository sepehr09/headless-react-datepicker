import DatePickerProvider from "./DatePickerProvider";
import DaySlots from "./components/daySlots/DaySlots";
import {
  TDaySlots,
  TDaySlotsDayRendererArgs,
} from "./components/daySlots/types";
import Header from "./components/header/Header";
import { THeaderProps } from "./components/header/types";
import PanelHeader from "./components/panelHeader/PanelHeader";
import { TPanelHeaderProps, TPanelView } from "./components/panelHeader/types";
import Title from "./components/title/Title";
import { TTitleProps } from "./components/title/types";
import WeekDays from "./components/weekDays/WeekDays";
import {
  TWeekDaysProps,
  TWeekDaysRendererArgs,
} from "./components/weekDays/types";
import { useDatePickerContext } from "./hooks/useDatePickerContext";
import { TPickerContext } from "./store/pickerContext";

export default DatePickerProvider;

/* ---------------------------- export components --------------------------- */
export { DaySlots, Header, PanelHeader, Title, WeekDays, useDatePickerContext };

/* ------------------------------ export types ------------------------------ */
export * from "./types";
export type {
  TDaySlots,
  TDaySlotsDayRendererArgs,
  THeaderProps,
  TPanelHeaderProps,
  TPanelView,
  TPickerContext,
  TTitleProps,
  TWeekDaysProps,
  TWeekDaysRendererArgs,
};
