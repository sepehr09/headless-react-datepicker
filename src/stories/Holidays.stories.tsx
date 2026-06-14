import type { Meta, StoryObj } from "@storybook/react";
import DatePickerProvider from "../DatePickerProvider";
import { RenderDatePicker } from "./_shared";
import { baseMeta } from "./constants";

const meta = {
  title: "Example/Calendar/Holidays",
  ...baseMeta,
} satisfies Meta<typeof DatePickerProvider>;

export default meta;
type Story = StoryObj<typeof meta>;

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
    },
  },
};
