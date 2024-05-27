import type { Meta, StoryObj } from "@storybook/react";
import DatePickerProvider from "../DatePickerProvider";
import DaySlots from "../components/daySlots/DaySlots";
import Header from "../components/header/Header";
import Title from "../components/title/Title";
import WeekDays from "../components/weekDays/WeekDays";
import { TDatePickerProps } from "../types";
import { argTypes } from "./constants";

const meta = {
  title: "Example/Calendar",
  component: DatePickerProvider,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
    deepControls: { enabled: true },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  argTypes: argTypes,
} satisfies Meta<typeof DatePickerProvider>;

export default meta;
type Story = StoryObj<typeof meta>;

const RenderDatePicker = <T extends boolean>(props: TDatePickerProps<T>) => {
  return (
    <div
      style={{
        background: "#fff",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
        width: "300px",
        borderRadius: "0px",
        margin: "30px auto",
        padding: "10px",
      }}
    >
      <DatePickerProvider
        {...props}
        onChange={(e) => {
          props?.onChange?.(e);
          console.log("onChange: ", e);
        }}
      >
        <Title />
        <Header
          monthSelectStyles={{
            backgroundColor: "#f0f0f0",
            color: "#000",
            padding: "5px",
            borderRadius: "5px",
            outline: "none",
          }}
          yearSelectStyles={{
            backgroundColor: "#f0f0f0",
            color: "#000",
            padding: "5px",
            borderRadius: "5px",
            outline: "none",
          }}
        />
        <WeekDays />
        <DaySlots />
      </DatePickerProvider>
    </div>
  );
};

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
      // yearRangeFrom: 1330,
      // yearRangeTo: 1400,
      // minDate: new Date("2024-01-01T00:00:00.000Z"),
      // maxDate: new Date(),
    },
  },
};

export const SingleSelectionPersian: Story = {
  render: RenderDatePicker,
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

      // yearRangeFrom: 1330,
      // yearRangeTo: 1400,
      // minDate: new Date("2024-01-01T00:00:00.000Z"),
      // maxDate: new Date(),
    },
  },
};

export const SingleSelectionIslamic: Story = {
  render: RenderDatePicker,
  args: {
    isRange: true,
    initialValue: [new Date("2024-02-06"), new Date("2024-02-08")],
    calendar: "islamic-umalqura",
    config: {
      locale: "ar-EG",
      weekStartsOn: "saturday",
      showOtherDays: false,
      otherDaysSelectable: false,
      weekdayFormat: "narrow",
      dayFormat: "numeric",
      weekends: ["friday", "saturday"],

      // yearRangeFrom: 1330,
      // yearRangeTo: 1400,
      // minDate: new Date("2024-01-01T00:00:00.000Z"),
      // maxDate: new Date(),
    },
  },
};
