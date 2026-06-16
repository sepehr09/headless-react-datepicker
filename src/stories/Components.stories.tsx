import type { Meta, StoryObj } from "@storybook/react";
import DatePickerProvider from "../DatePickerProvider";
import DaySlots from "../components/daySlots/DaySlots";
import Header from "../components/header/Header";
import PanelHeader from "../components/panelHeader/PanelHeader";
import TimePicker from "../components/timePicker/TimePicker";
import Title from "../components/title/Title";
import WeekDays from "../components/weekDays/WeekDays";
import { baseMeta } from "./constants";
import { Card } from "./_shared";

/**
 * The library is **headless** and built from small, independent pieces. Every
 * component below shares a single `DatePickerProvider` for state, so you can
 * compose just the parts you need.
 *
 * This section renders each component **on its own** so you can see at a glance
 * what every building block looks like and does. Compose them together (see the
 * `Calendar` section) to build a full date picker.
 */
const meta = {
  title: "Example/Components",
  ...baseMeta,
} satisfies Meta<typeof DatePickerProvider>;

export default meta;
type Story = StoryObj<typeof meta>;

const baseArgs: Story["args"] = {
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
};

/**
 * `Title` shows the current month and year for the calendar, formatted to the
 * active `locale` and `calendar`. Use `monthOffset` to show a neighbouring
 * month's title (handy for side-by-side calendars).
 */
export const TitleOnly: Story = {
  name: "Title",
  render: (args) => (
    <Card>
      <DatePickerProvider {...args}>
        <Title />
      </DatePickerProvider>
    </Card>
  ),
  args: baseArgs,
};

/**
 * `Header` provides month/year navigation: prev/next arrows plus `<select>`
 * dropdowns to jump to any month or year. Arrow icons and every dropdown can be
 * fully restyled.
 */
export const HeaderOnly: Story = {
  name: "Header",
  render: (args) => (
    <Card>
      <DatePickerProvider {...args}>
        <Header />
      </DatePickerProvider>
    </Card>
  ),
  args: baseArgs,
};

/**
 * `PanelHeader` is a self-contained alternative to `Header`. Instead of
 * dropdowns it shows the month/year pickers **inside** the calendar area:
 * clicking the month opens a 12-month grid, clicking the year opens a paginated
 * year grid. Wrap your day-view (`WeekDays` / `DaySlots`) as its children.
 */
export const PanelHeaderOnly: Story = {
  name: "Panel Header",
  render: (args) => (
    <Card>
      <DatePickerProvider {...args}>
        <PanelHeader />
      </DatePickerProvider>
    </Card>
  ),
  args: baseArgs,
};

/**
 * `WeekDays` renders the weekday header row (Mon, Tue, …), formatted to the
 * active `locale`/`calendar` and respecting `weekStartsOn`. Each cell exposes
 * weekday and weekend class hooks for styling.
 */
export const WeekDaysOnly: Story = {
  name: "WeekDays",
  render: (args) => (
    <Card>
      <DatePickerProvider {...args}>
        <WeekDays />
      </DatePickerProvider>
    </Card>
  ),
  args: baseArgs,
};

/**
 * `DaySlots` is the grid of day cells for the current month. It handles
 * selection, range hover, today/weekend/holiday/disabled state, and exposes a
 * `dayRenderer` plus rich class hooks for full control.
 */
export const DaySlotsOnly: Story = {
  name: "DaySlots",
  render: (args) => (
    <Card>
      <DatePickerProvider {...args}>
        <DaySlots />
      </DatePickerProvider>
    </Card>
  ),
  args: baseArgs,
};

/**
 * `TimePicker` edits the time portion (hours/minutes, optional seconds and an
 * AM/PM toggle) of the currently selected day. Here it's shown standalone with
 * seconds and a 12-hour clock enabled.
 */
export const TimePickerOnly: Story = {
  name: "TimePicker",
  render: (args) => (
    <Card>
      <DatePickerProvider {...args}>
        <TimePicker showSeconds use12Hours />
      </DatePickerProvider>
    </Card>
  ),
  args: baseArgs,
};
