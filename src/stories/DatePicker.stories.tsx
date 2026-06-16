import type { Meta, StoryObj } from "@storybook/react-vite";
import DatePickerProvider from "../DatePickerProvider";
import {
  RenderControlledDatePicker,
  RenderCustomIconsDatePicker,
  RenderDatePicker,
} from "./_shared";
import { baseMeta } from "./constants";

const meta = {
  title: "Example/Calendar",
  ...baseMeta,
} satisfies Meta<typeof DatePickerProvider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SingleSelection: Story = {
  render: RenderDatePicker,
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
