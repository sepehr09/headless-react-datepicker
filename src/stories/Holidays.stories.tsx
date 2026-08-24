import type { Meta, StoryObj } from "@storybook/react-vite";
import DatePickerProvider from "../DatePickerProvider";
import { RenderDatePicker } from "./_shared";
import { baseMeta } from "./constants";
import { createLocalDate } from "./dates";
import { basicSource } from "./_source";

const meta = {
  title: "Example/Calendar/Holidays",
  ...baseMeta,
} satisfies Meta<typeof DatePickerProvider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Holidays: Story = {
  render: RenderDatePicker,
  parameters: basicSource,
  args: {
    isRange: false,
    initialValue: createLocalDate(2024, 2, 6),
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
        createLocalDate(2024, 2, 8),
        createLocalDate(2024, 2, 9),
        createLocalDate(2024, 2, 10),
        createLocalDate(2024, 2, 12),
        createLocalDate(2024, 2, 21),
        createLocalDate(2024, 2, 27),
      ],
      holidaySelectable: false,
    },
  },
};
