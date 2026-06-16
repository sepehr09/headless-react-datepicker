import type { Meta, StoryObj } from "@storybook/react-vite";
import DatePickerProvider from "../DatePickerProvider";
import { RenderDatePicker } from "./_shared";
import { rtlDecorator } from "./rtlDecorator";
import { baseMeta } from "./constants";

const meta = {
  title: "Example/Localization",
  ...baseMeta,
} satisfies Meta<typeof DatePickerProvider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Persian: Story = {
  render: RenderDatePicker,
  decorators: [rtlDecorator],
  args: {
    isRange: false,
    initialValue: new Date("2025-04-17T00:00:00"),
    calendar: "persian",
    config: {
      locale: "fa-IR",
      weekStartsOn: "saturday",
      showOtherDays: false,
      otherDaysSelectable: false,
      weekdayFormat: "narrow",
      dayFormat: "numeric",
      weekends: ["thursday", "friday"],
    },
  },
};

export const Islamic: Story = {
  render: RenderDatePicker,
  args: {
    isRange: false,
    initialValue: new Date("2024-02-06"),
    calendar: "islamic-umalqura",
    config: {
      locale: "ar-EG",
      weekStartsOn: "saturday",
      showOtherDays: false,
      otherDaysSelectable: false,
      weekdayFormat: "narrow",
      dayFormat: "numeric",
      weekends: ["friday", "saturday"],
    },
  },
};

export const GregoryInFa_IR: Story = {
  render: RenderDatePicker,
  decorators: [rtlDecorator],
  args: {
    isRange: false,
    initialValue: new Date("2025-04-17T00:00:00"),
    calendar: "gregory",
    config: {
      locale: "fa-IR",
      weekStartsOn: "saturday",
      showOtherDays: false,
      otherDaysSelectable: false,
      weekdayFormat: "narrow",
      dayFormat: "numeric",
      weekends: ["thursday", "friday"],
    },
  },
};

export const PersianInEn_US: Story = {
  render: RenderDatePicker,
  args: {
    isRange: false,
    initialValue: new Date("2025-04-17T00:00:00"),
    calendar: "persian",
    config: {
      locale: "en-US",
      weekStartsOn: "saturday",
      showOtherDays: false,
      otherDaysSelectable: false,
      weekdayFormat: "narrow",
      dayFormat: "numeric",
      weekends: ["thursday", "friday"],
    },
  },
};
