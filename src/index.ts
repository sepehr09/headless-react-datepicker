import DatePickerProvider from "./DatePickerProvider";
import DaySlots from "./components/daySlots/DaySlots";
import {
  TDaySlots,
  TDaySlotsDayRendererArgs,
} from "./components/daySlots/types";
import Header from "./components/header/Header";
import HeaderMonthSelect from "./components/header/HeaderMonthSelect";
import HeaderNextButton from "./components/header/HeaderNextButton";
import HeaderPrevButton from "./components/header/HeaderPrevButton";
import HeaderYearSelect from "./components/header/HeaderYearSelect";
import {
  THeaderArrowProps,
  THeaderMonthSelectProps,
  THeaderProps,
  THeaderYearSelectProps,
} from "./components/header/types";
import PanelHeader from "./components/panelHeader/PanelHeader";
import PanelHeaderBody from "./components/panelHeader/PanelHeaderBody";
import PanelHeaderLabel from "./components/panelHeader/PanelHeaderLabel";
import PanelHeaderNextButton from "./components/panelHeader/PanelHeaderNextButton";
import PanelHeaderPrevButton from "./components/panelHeader/PanelHeaderPrevButton";
import PanelHeaderProvider from "./components/panelHeader/PanelHeaderProvider";
import {
  TPanelHeaderArrowProps,
  TPanelHeaderBodyProps,
  TPanelHeaderLabelProps,
  TPanelHeaderProps,
  TPanelHeaderProviderProps,
  TPanelView,
} from "./components/panelHeader/types";
import TimePicker from "./components/timePicker/TimePicker";
import {
  TTimePickerProps,
  TTimePickerRendererArgs,
  TTimePickerUnit,
} from "./components/timePicker/types";
import Title from "./components/title/Title";
import { TTitleProps } from "./components/title/types";
import WeekDays from "./components/weekDays/WeekDays";
import {
  TWeekDaysProps,
  TWeekDaysRendererArgs,
} from "./components/weekDays/types";
import { useDatePickerContext } from "./hooks/useDatePickerContext";
import { TPickerContext } from "./store/pickerContext";
import { TPeriod, TTimeParts } from "./utils/time";

export default DatePickerProvider;

/* ---------------------------- export components --------------------------- */
export {
  DaySlots,
  Header,
  HeaderMonthSelect,
  HeaderNextButton,
  HeaderPrevButton,
  HeaderYearSelect,
  PanelHeader,
  PanelHeaderBody,
  PanelHeaderLabel,
  PanelHeaderNextButton,
  PanelHeaderPrevButton,
  PanelHeaderProvider,
  TimePicker,
  Title,
  WeekDays,
  useDatePickerContext,
};

/* ------------------------------ export types ------------------------------ */
export * from "./types";
export type {
  TDaySlots,
  TDaySlotsDayRendererArgs,
  THeaderArrowProps,
  THeaderMonthSelectProps,
  THeaderProps,
  THeaderYearSelectProps,
  TPanelHeaderArrowProps,
  TPanelHeaderBodyProps,
  TPanelHeaderLabelProps,
  TPanelHeaderProps,
  TPanelHeaderProviderProps,
  TPanelView,
  TPeriod,
  TPickerContext,
  TTimeParts,
  TTimePickerProps,
  TTimePickerRendererArgs,
  TTimePickerUnit,
  TTitleProps,
  TWeekDaysProps,
  TWeekDaysRendererArgs,
};
