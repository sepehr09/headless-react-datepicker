import type { Meta } from "@storybook/react-vite";
import type { InputType } from "storybook/internal/types";
import DatePickerProvider from "../DatePickerProvider";

export const argTypes: Record<string, InputType> = {
  // `children` is the composed calendar parts and `value` is driven internally
  // by the demo stories — neither is meaningfully editable, so hide them.
  children: {
    table: { disable: true },
  },
  value: {
    table: { disable: true },
  },
  calendar: {
    control: "select",
    options: [
      "gregory",
      "persian",
      "islamic",
      "islamic-umalqura",
      "islamic-tbla",
      "islamic-civil",
      "islamic-rgsa",
      "iso8601",
      "japanese",
      "islamicc",
      "roc",
      "chinese",
      "indian",
      "buddhist",
      "coptic",
      "dangi",
      "ethioaa",
      "ethiopic",
      "hebrew",
    ],
  },
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
    // Only has an effect when other-month days are actually rendered.
    if: { arg: "config.showOtherDays", truthy: true },
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
    // Only relevant when the calendar actually has holidays.
    if: { arg: "config.holidays", truthy: true },
  },
  "config.allowBackwardRange": {
    control: "boolean",
    // Backward ranges only apply to range pickers.
    if: { arg: "isRange", truthy: true },
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
