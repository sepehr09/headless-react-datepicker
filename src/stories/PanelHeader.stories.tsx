import type { Meta, StoryObj } from "@storybook/react";
import DatePickerProvider from "../DatePickerProvider";
import { RenderPanelDatePicker } from "./_shared";
import { baseMeta } from "./constants";

const meta = {
  title: "Example/Calendar/Panel Header",
  ...baseMeta,
} satisfies Meta<typeof DatePickerProvider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PanelMonthYearPicker: Story = {
  render: RenderPanelDatePicker,
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
    },
  },
};
