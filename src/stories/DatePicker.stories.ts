import type { Meta, StoryObj } from "@storybook/react";
import DatePicker from "../DatePicker";

const meta = {
  title: "Example/DatePicker",
  component: DatePicker,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
    deepControls: { enabled: true },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  argTypes: {
    config: {
      control: "null",
    },
    // @ts-expect-error [values are typed]
    "config.locale": {
      control: "select",
      options: ["fa-IR", "en-US", "ar-EG", "hi-IN"],
    },
    "config.weekStartsOn": {
      control: "select",
      options: {
        Monday: 1,
        Tuesday: 2,
        Wednesday: 3,
        Thursday: 4,
        Friday: 5,
        Saturday: 6,
        Sunday: 7,
      },
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
  },
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SDP: Story = {
  args: {
    isRange: false,
    initialValue: new Date("2024-02-06T20:00:00.000Z"),
    calendar: "persian",
    config: {
      locale: "fa-IR",
      weekStartsOn: 6,
      showOtherDays: false,
      otherDaysSelectable: false,
      weekdayFormat: "narrow",
      dayFormat: "numeric",
    },
  },
};

export const RDP: Story = {
  args: {
    isRange: true,
    initialValue: [new Date("2024-02-06"), new Date("2024-02-08")],
    calendar: "persian",
    config: {
      locale: "fa-IR",
      weekStartsOn: 6,
      showOtherDays: false,
      otherDaysSelectable: false,
      weekdayFormat: "narrow",
      dayFormat: "numeric",
    },
  },
};
