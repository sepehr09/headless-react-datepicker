import type { Meta, StoryObj } from "@storybook/react";
import { ReactNode, useState } from "react";
import DatePickerProvider from "../DatePickerProvider";
import DaySlots from "../components/daySlots/DaySlots";
import Header from "../components/header/Header";
import Title from "../components/title/Title";
import WeekDays from "../components/weekDays/WeekDays";
import { TDatePickerOnChange, TDatePickerProps } from "../types";
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

const Card = ({ children }: { children: ReactNode }) => {
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
      {children}
    </div>
  );
};

const RenderDatePicker = <T extends boolean>(props: TDatePickerProps<T>) => {
  return (
    <Card>
      <DatePickerProvider {...props}>
        <Title />
        <Header
          monthSelectStyles={{
            backgroundColor: "#f0f0f0",
            color: "#000",
            padding: "5px",
            borderRadius: "5px",
          }}
          yearSelectStyles={{
            backgroundColor: "#f0f0f0",
            color: "#000",
            padding: "5px",
            borderRadius: "5px",
          }}
        />
        <WeekDays />
        <DaySlots />
      </DatePickerProvider>
    </Card>
  );
};

const RenderControlledDatePicker = <T extends boolean>(
  props: TDatePickerProps<T>
) => {
  const [value, setValue] = useState(props?.initialValue);

  const onChange: TDatePickerOnChange<T> = (e) => {
    props?.onChange?.(e);
    console.log("onChange: ", e);
    setValue(e);
  };

  return (
    <>
      <Card>
        <DatePickerProvider
          {...props}
          initialValue={value}
          value={value}
          onChange={onChange}
        >
          <Title />
          <Header
            monthSelectStyles={{
              backgroundColor: "#f0f0f0",
              color: "#000",
              padding: "5px",
              borderRadius: "5px",
            }}
            yearSelectStyles={{
              backgroundColor: "#f0f0f0",
              color: "#000",
              padding: "5px",
              borderRadius: "5px",
            }}
          />
          <WeekDays />
          <DaySlots
            onClickSlot={(v) => {
              console.log("onClickSlot", v);
            }}
          />
        </DatePickerProvider>
      </Card>
      <div style={{ width: 300, margin: "auto" }}>
        <button
          onClick={() =>
            setValue(
              (props.isRange
                ? [new Date("2024-06-24"), new Date("2024-06-28")]
                : new Date("2024-06-24")) as TDatePickerProps<T>["value"]
            )
          }
          style={{ background: "#ddd", padding: 7, borderRadius: 7 }}
        >
          Set Custom Value to 2024-06-24
        </button>
      </div>
    </>
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

export const Persian: Story = {
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

      // yearRangeFrom: 1330,
      // yearRangeTo: 1400,
      // minDate: new Date("2024-01-01T00:00:00.000Z"),
      // maxDate: new Date(),
    },
  },
};

export const GregoryInFa_IR: Story = {
  render: RenderDatePicker,
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

      // yearRangeFrom: 1330,
      // yearRangeTo: 1400,
      // minDate: new Date("2024-01-01T00:00:00.000Z"),
      // maxDate: new Date(),
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
      // yearRangeFrom: 1330,
      // yearRangeTo: 1400,
      // minDate: new Date("2024-01-01T00:00:00.000Z"),
      // maxDate: new Date(),
    },
  },
};
export const Holidays: Story = {
  render: RenderDatePicker,
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
      holidays: [
        new Date("2024-02-08"),
        new Date("2024-02-09"),
        new Date("2024-02-10"),
        new Date("2024-02-12"),
        new Date("2024-02-21"),
        new Date("2024-02-27"),
      ],
      holidaySelectable: false,
      // yearRangeFrom: 1330,
      // yearRangeTo: 1400,
      // minDate: new Date("2024-01-01T00:00:00.000Z"),
      // maxDate: new Date(),
    },
  },
};
