import type { Meta, StoryObj } from "@storybook/react-vite";
import DatePickerProvider from "../DatePickerProvider";
import {
  RenderControlledDatePicker,
  RenderCustomIconsDatePicker,
  RenderDatePicker,
} from "./_shared";
import { baseMeta } from "./constants";
import { basicSource, controlledSource, source } from "./_source";

/** Clean snippet for the custom-chevron story (the SVGs that replace the arrows). */
const customIconsSource = source(
  ["Title", "Header", "WeekDays", "DaySlots"],
  `<Title />
<Header
  leftIcon={
    <svg width="22" height="22" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  }
  rightIcon={
    <svg width="22" height="22" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  }
/>
<WeekDays />
<DaySlots />`,
);

const meta = {
  title: "Example/Calendar",
  ...baseMeta,
} satisfies Meta<typeof DatePickerProvider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SingleSelection: Story = {
  render: RenderDatePicker,
  parameters: basicSource,
  args: {
    isRange: false,
    initialValue: new Date(),
    calendar: "gregory",
    config: {
      locale: "en-US",
      weekStartsOn: "monday",
      showOtherDays: false,
      otherDaysSelectable: false,
      weekdayFormat: "short",
      dayFormat: "numeric",
      weekends: ["saturday", "sunday"],
      weekendSelectable: true,

      // yearRangeFrom: 1330,
      // yearRangeTo: 1400,
      // minDate: new Date("2024-01-01T00:00:00.000Z"),
      // maxDate: new Date(),
    },
  },
};

export const RangeSelection: Story = {
  render: RenderDatePicker,
  parameters: basicSource,
  args: {
    isRange: true,
    initialValue: [new Date("2024-02-06"), new Date("2024-02-08")],
    calendar: "gregory",
    config: {
      locale: "en-US",
      weekStartsOn: "monday",
      showOtherDays: false,
      otherDaysSelectable: false,
      weekdayFormat: "narrow",
      dayFormat: "numeric",
      weekends: ["saturday", "sunday"],
    },
  },
};

/**
 * Replace the default header chevrons with your own icons via `Header`'s
 * `leftIcon` / `rightIcon` props (any `ReactNode` — SVG, emoji, icon component).
 */
export const CustomIcons: Story = {
  render: RenderCustomIconsDatePicker,
  parameters: customIconsSource,
  args: {
    isRange: false,
    initialValue: new Date(),
    calendar: "gregory",
    config: {
      locale: "en-US",
      weekStartsOn: "monday",
      showOtherDays: false,
      otherDaysSelectable: false,
      weekdayFormat: "short",
      dayFormat: "numeric",
      weekends: ["saturday", "sunday"],
      weekendSelectable: true,
    },
  },
};

export const ControlledComponent: Story = {
  render: RenderControlledDatePicker,
  parameters: controlledSource,
  args: {
    isRange: false,
    initialValue: new Date("2024-02-06"),
    calendar: "gregory",
    config: {
      locale: "en-US",
      weekStartsOn: "monday",
      showOtherDays: false,
      otherDaysSelectable: false,
      weekdayFormat: "short",
      dayFormat: "numeric",
      weekends: ["saturday", "sunday"],
      weekendSelectable: true,
    },
  },
};
