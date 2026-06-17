import type { Meta, StoryObj } from "@storybook/react-vite";
import DatePickerProvider from "../DatePickerProvider";
import { RenderDualDatePicker } from "./_shared";
import { rtlDecorator } from "./rtlDecorator";
import { baseMeta } from "./constants";
import { source } from "./_source";

/** Two months driven by one provider; one header moves both (2 per click). */
const dualSource = source(
  ["Title", "Header", "WeekDays", "DaySlots"],
  `{/* one header navigates both months (2 months per click) */}
<Header navigationStep={2} />

<div style={{ display: "flex", gap: 24 }}>
  {/* current month */}
  <div>
    <Title />
    <WeekDays />
    <DaySlots />
  </div>

  {/* next month */}
  <div>
    <Title monthOffset={1} />
    <WeekDays />
    <DaySlots monthOffset={1} />
  </div>
</div>`,
);

const meta = {
  title: "Example/Side by Side Calendars",
  ...baseMeta,
} satisfies Meta<typeof DatePickerProvider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TwoCalendarsSideBySide: Story = {
  render: RenderDualDatePicker,
  parameters: dualSource,
  args: {
    isRange: true,
    initialValue: [new Date("2024-02-06"), new Date("2024-03-10")],
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

export const TwoCalendarsPersian: Story = {
  render: RenderDualDatePicker,
  decorators: [rtlDecorator],
  parameters: dualSource,
  args: {
    isRange: true,
    initialValue: [
      new Date("2025-04-17T00:00:00"),
      new Date("2025-05-20T00:00:00"),
    ],
    calendar: "persian",
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
