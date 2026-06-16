import type { Meta } from "@storybook/react-vite";
import type { InputType } from "storybook/internal/types";
import DatePickerProvider from "../DatePickerProvider";

export const argTypes: Record<string, InputType> = {
  config: {
    control: false,
  },
  "config.locale": {
    control: "select",
    options: ["fa-IR", "en-US", "ar-EG", "hi-IN"],
  },
  "config.weekStartsOn": {
    control: "select",
    options: [
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
      "sunday",
    ],
  },
  "config.weekdayFormat": {
    control: "select",
    options: ["long", "short", "narrow"],
  },
  "config.showOtherDays": {
    control: "boolean",
  },
  "config.otherDaysSelectable": {
    control: "boolean",
  },
  "config.dayFormat": {
    control: "select",
    options: ["numeric", "2-digit"],
  },
  "config.yearRangeFrom": {
    control: "number",
  },
  "config.yearRangeTo": {
    control: "number",
  },
  "config.minDate": {
    control: "date",
  },
  "config.maxDate": {
    control: "date",
  },
  "config.weekends": {
    control: "check",
    options: [
      "saturday",
      "sunday",
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
    ],
  },
  "config.weekendSelectable": {
    control: "boolean",
  },
  "config.holidaySelectable": {
    control: "boolean",
  },
  "config.allowBackwardRange": {
    control: "boolean",
  },
};

/**
 * Shared meta fields used by every story group. Each `*.stories.tsx` file
 * spreads this and only adds its own `title` so the sidebar groups stay
 * consistent (same controls, layout and autodocs).
 */
export const baseMeta = {
  component: DatePickerProvider,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
    deepControls: { enabled: true },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  argTypes: argTypes,
} satisfies Omit<Meta<typeof DatePickerProvider>, "title">;
