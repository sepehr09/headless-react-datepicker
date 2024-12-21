import type { Meta, StoryObj } from "@storybook/react";
import DatePickerProvider from "../DatePickerProvider";
import DaySlots from "../components/daySlots/DaySlots";
import Header from "../components/header/Header";
import Title from "../components/title/Title";
import WeekDays from "../components/weekDays/WeekDays";
import { argTypes } from "./constants";

const meta = {
  title: "Example/Theming",
  component: DatePickerProvider,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
    deepControls: { enabled: true },
  },
  argTypes: argTypes,
} satisfies Meta<typeof DatePickerProvider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example1: Story = {
  render: (props) => {
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
          {...{
            isRange: false,
            initialValue: new Date(),
            calendar: "gregory",
            config: {
              weekStartsOn: "monday",
              weekdayFormat: "short",
              weekends: ["saturday", "sunday"],
            },
          }}
          {...props}
          onChange={(e) => {
            console.log("onChange: ", e);
          }}
        >
          <Title style={{ color: "#443f70", fontWeight: "300" }} />

          <Header
            monthSelectStyles={{
              backgroundColor: "#f0f0f0",
              color: "#000",
              padding: "4px",
              borderRadius: "5px",
              outline: "none",
            }}
            yearSelectStyles={{
              backgroundColor: "#f0f0f0",
              color: "#000",
              padding: "4px",
              borderRadius: "5px",
              outline: "none",
            }}
          />
          <WeekDays style={{ fontWeight: 400 }} />
          <DaySlots
            slotStyles={{
              borderRadius: "50%",
              fontWeight: "300",
            }}
            selectedStyles={{
              borderRadius: "50%",
              backgroundColor: "#783aeb",
              fontWeight: "500",
              color: "#fff",
            }}
            selectedParentStyles={{
              borderRadius: "50%",
            }}
            weekendStyles={{
              fontStyle: "italic",
            }}
          />
        </DatePickerProvider>
      </div>
    );
  },
};

export const Example2: Story = {
  render: (props) => {
    return (
      <div
        style={{
          background: "#fff",
          boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
          width: "350px",
          borderRadius: "0px",
          margin: "30px auto",
          padding: "10px",
        }}
      >
        <DatePickerProvider
          {...{
            isRange: true,
            initialValue: [new Date("2024-05-15"), new Date("2024-05-18")],
            calendar: "gregory",
            config: {
              weekStartsOn: "monday",
              weekdayFormat: "short",
              weekends: ["saturday", "sunday"],
            },
          }}
          {...props}
          onChange={(e) => {
            console.log("onChange: ", e);
          }}
        >
          <Title />
          <Header
            monthSelectStyles={{
              backgroundColor: "#f0f0f0",
              color: "#000",
              padding: "4px",
              borderRadius: "5px",
              outline: "none",
            }}
            yearSelectStyles={{
              backgroundColor: "#f0f0f0",
              color: "#000",
              padding: "4px",
              borderRadius: "5px",
              outline: "none",
            }}
          />
          <WeekDays style={{ fontWeight: 400 }} />
          <DaySlots
            slotStyles={{
              fontWeight: "300",
            }}
            selectedStyles={{
              borderRadius: "10px",
              backgroundColor: "#303030",
              fontWeight: "500",
            }}
            startOfRangeParentStyles={{
              borderTopLeftRadius: "10px",
              borderBottomLeftRadius: "10px",
            }}
            endOfRangeParentStyles={{
              borderTopRightRadius: "10px",
              borderBottomRightRadius: "10px",
            }}
            inSelectedRangeParentStyles={{
              backgroundColor: "#a8adb4",
            }}
            inSelectedRangeStyles={{
              color: "#fff",
            }}
            slotParentStyles={{
              padding: "3px",
            }}
          />
        </DatePickerProvider>
      </div>
    );
  },
};

export const Example3: Story = {
  render: (props) => {
    return (
      <div
        style={{
          background: "#fff",
          boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
          width: "300px",
          borderRadius: "0px",
          margin: "30px auto",
          padding: "10px",
          border: "1px solid #acb5be",
        }}
      >
        <DatePickerProvider
          {...{
            isRange: true,
            initialValue: [new Date("2024-05-15"), new Date("2024-05-18")],
            calendar: "gregory",
            config: {
              weekStartsOn: "monday",
              weekdayFormat: "short",
              weekends: ["saturday", "sunday"],
            },
          }}
          {...props}
          onChange={(e) => {
            console.log("onChange: ", e);
          }}
        >
          <Title />
          <Header
            monthSelectStyles={{
              backgroundColor: "#f0f0f0",
              color: "#000",
              padding: "4px",
              borderRadius: "5px",
              outline: "none",
            }}
            yearSelectStyles={{
              backgroundColor: "#f0f0f0",
              color: "#000",
              padding: "4px",
              borderRadius: "5px",
              outline: "none",
            }}
          />
          <WeekDays
            style={{
              fontWeight: 300,
              marginBottom: "4px",
              color: "#7a7a7a",
            }}
          />
          <DaySlots
            parentStyles={{
              gap: "2px",
            }}
            slotParentStyles={{
              border: "1px solid #c7cbcf",
            }}
            slotStyles={{
              fontWeight: "300",
              borderRadius: 0,
            }}
            selectedStyles={{
              backgroundColor: "#d80202",
              fontWeight: "500",
            }}
            // selectedParentStyles={{
            //   borderColor: "#303030",
            // }}
            startOfRangeParentStyles={{
              borderRadius: 0,
            }}
            endOfRangeParentStyles={{
              borderRadius: 0,
            }}
            inSelectedRangeParentStyles={{
              backgroundColor: "#ff9a9a",
            }}
            inSelectedRangeStyles={{
              color: "#fff",
            }}
          />
        </DatePickerProvider>
      </div>
    );
  },
};

export const Example4: Story = {
  render: (props) => {
    return (
      <div
        style={{
          background: "#333333",
          boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
          width: "360px",
          borderRadius: "12px",
          margin: "30px auto",
          padding: "17px",
        }}
      >
        <DatePickerProvider
          {...{
            isRange: true,
            initialValue: [new Date("2024-05-15"), new Date("2024-05-18")],
            calendar: "gregory",
            config: {
              weekStartsOn: "monday",
              weekdayFormat: "short",
              weekends: ["saturday", "sunday"],
            },
          }}
          {...props}
          onChange={(e) => {
            console.log("onChange: ", e);
          }}
        >
          <Title style={{ color: "#fff" }} />
          <Header
            monthSelectStyles={{
              backgroundColor: "#636363",
              color: "#fff",
              padding: "4px",
              borderRadius: "5px",
              outline: "none",
            }}
            yearSelectStyles={{
              backgroundColor: "#636363",
              color: "#fff",
              padding: "4px",
              borderRadius: "5px",
              outline: "none",
            }}
            prevButtonStyles={{
              color: "#fff",
            }}
            nextButtonStyles={{
              color: "#fff",
            }}
          />
          <WeekDays
            style={{
              fontWeight: 300,
              marginBottom: "4px",
              color: "#7a7a7a",
            }}
          />
          <DaySlots
            slotStyles={{
              color: "#fff",
              fontWeight: "300",
            }}
            slotParentStyles={{
              border: "0",
              padding: "4px",
            }}
            weekendStyles={{
              color: "#ff4794",
            }}
            selectedStyles={{
              backgroundColor: "#ff4794",
              fontWeight: "500",
            }}
            endOfRangeStyles={{
              color: "#ffffff",
            }}
            startOfRangeStyles={{
              color: "#ffffff",
            }}
            inSelectedRangeParentStyles={{
              backgroundColor: "#6b6b6b",
            }}
            inHoveredRangeParentStyles={{
              backgroundColor: "#525252",
            }}
          />
        </DatePickerProvider>
      </div>
    );
  },
};

export const Example5: Story = {
  render: (props) => {
    return (
      <div
        style={{
          background: "#fff",
          boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
          width: "300px",
          borderRadius: "0px",
          margin: "30px auto",
          padding: "10px",
          border: "1px solid #acb5be",
        }}
      >
        <DatePickerProvider
          {...{
            isRange: true,
            initialValue: [new Date("2024-05-15"), new Date("2024-05-18")],
            calendar: "gregory",
            config: {
              weekStartsOn: "monday",
              weekdayFormat: "short",
              weekends: ["saturday", "sunday"],
              showOtherDays: true,
            },
          }}
          {...props}
          onChange={(e) => {
            console.log("onChange: ", e);
          }}
        >
          <Title
            style={{
              fontWeight: 200,
              fontSize: "1.2em",
              marginBottom: "10px",
              textAlign: "center",
              borderRadius: "7px",
              letterSpacing: "16px",
              textTransform: "uppercase",
              color: "#5c5c5c",
            }}
          />
          <Header
            monthSelectStyles={{
              backgroundColor: "#f0f0f0",
              color: "#000",
              padding: "4px",
              borderRadius: "5px",
              outline: "none",
            }}
            yearSelectStyles={{
              backgroundColor: "#f0f0f0",
              color: "#000",
              padding: "4px",
              borderRadius: "5px",
              outline: "none",
            }}
            rootStyles={{
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1) inset",
              borderRadius: "7px",
              marginBottom: "10px",
              padding: "10px",
              backgroundColor: "#fdfdfd",
            }}
          />
          <WeekDays
            style={{
              fontWeight: 300,
              marginBottom: "4px",
              color: "#7a7a7a",
            }}
          />
          <DaySlots
            parentStyles={{
              gap: "1px",
              backgroundColor: "#d6dadf",
              border: "1px solid #d6dadf",
            }}
            slotParentStyles={{
              // border: "1px solid #c7cbcf",
              backgroundColor: "#fff",
              border: 0,
            }}
            slotStyles={{
              fontWeight: "300",
              borderRadius: 0,
              color: "#494949",
            }}
            selectedStyles={{
              backgroundColor: "#a4fc00",
              fontWeight: "500",
            }}
            weekendStyles={{
              color: "#ff0000",
            }}
            // selectedParentStyles={{
            //   borderColor: "#303030",
            // }}
            startOfRangeParentStyles={{
              borderRadius: 0,
            }}
            endOfRangeParentStyles={{
              borderRadius: 0,
            }}
            startOfRangeStyles={{
              color: "#288f00",
            }}
            endOfRangeStyles={{
              color: "#288f00",
            }}
            inSelectedRangeParentStyles={{
              backgroundColor: "#e7ffb9",
            }}
            inHoveredRangeParentStyles={{
              backgroundColor: "#ecf8d5",
            }}
            inSelectedRangeStyles={{
              color: "#000000",
            }}
          />
        </DatePickerProvider>
      </div>
    );
  },
};
