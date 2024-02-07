import type { Meta, StoryObj } from "@storybook/react";
import DatePickerProvider from "../DatePickerProvider";
import DaysOfWeekHeader from "../components/DaysOfWeekHeader";
import Header from "../components/Header";
import Title from "../components/Title";
import DaySlots from "../components/daySlots/DaySlots";
import { TDatePickerProps } from "../types";

const meta = {
  title: "Example/DatePicker",
  component: DatePickerProvider,
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
  },
} satisfies Meta<typeof DatePickerProvider>;

export default meta;
type Story = StoryObj<typeof meta>;

const RenderDatePicker = (props: TDatePickerProps) => {
  return (
    <div
      style={{
        background: "#fff",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        width: "300px",
        borderRadius: "10px",
        margin: "30px auto",
        padding: "10px",
      }}
    >
      <DatePickerProvider {...props}>
        <Title />
        <Header />
        <DaysOfWeekHeader />
        <DaySlots  />
      </DatePickerProvider>
    </div>
  );
};

export const SDP: Story = {
  render: RenderDatePicker,
  args: {
    isRange: false,
    initialValue: new Date("2024-02-06T20:00:00.000Z"),
    calendar: "persian",
    config: {
      locale: "fa-IR",
      weekStartsOn: "saturday",
      showOtherDays: false,
      otherDaysSelectable: false,
      weekdayFormat: "narrow",
      dayFormat: "numeric",
      weekends: ["saturday", "friday"],
      weekendSelectable: false,
      // yearRangeFrom: 1330,
      // yearRangeTo: 1400,
      // minDate: new Date("2024-01-01T00:00:00.000Z"),
      // maxDate: new Date(),
    },
  },
};

export const RDP: Story = {
  render: RenderDatePicker,
  args: {
    isRange: true,
    initialValue: [new Date("2024-02-06"), new Date("2024-02-08")],
    calendar: "persian",
    config: {
      locale: "fa-IR",
      weekStartsOn: "saturday",
      showOtherDays: false,
      otherDaysSelectable: false,
      weekdayFormat: "narrow",
      dayFormat: "numeric",
      // yearRangeFrom: 1330,
      // yearRangeTo: 1400,
      // minDate: new Date("2024-01-01T00:00:00.000Z"),
      // maxDate: new Date(),
    },
  },
};
