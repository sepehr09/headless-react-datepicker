import type { Meta, StoryObj } from "@storybook/react-vite";
import DatePickerProvider from "../DatePickerProvider";
import DaySlots from "../components/daySlots/DaySlots";
import Header from "../components/header/Header";
import HeaderMonthSelect from "../components/header/HeaderMonthSelect";
import HeaderNextButton from "../components/header/HeaderNextButton";
import HeaderPrevButton from "../components/header/HeaderPrevButton";
import HeaderYearSelect from "../components/header/HeaderYearSelect";
import PanelHeader from "../components/panelHeader/PanelHeader";
import PanelHeaderBody from "../components/panelHeader/PanelHeaderBody";
import PanelHeaderLabel from "../components/panelHeader/PanelHeaderLabel";
import PanelHeaderNextButton from "../components/panelHeader/PanelHeaderNextButton";
import PanelHeaderPrevButton from "../components/panelHeader/PanelHeaderPrevButton";
import PanelHeaderProvider from "../components/panelHeader/PanelHeaderProvider";
import TimePicker from "../components/timePicker/TimePicker";
import Title from "../components/title/Title";
import WeekDays from "../components/weekDays/WeekDays";
import { baseMeta } from "./constants";
import { componentSource } from "./_source";

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
  parameters: componentSource(["Title"], `<Title />`),
  render: (args) => (
    <DatePickerProvider {...args}>
      <Title />
    </DatePickerProvider>
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
  parameters: componentSource(["Header"], `<Header />`),
  render: (args) => (
    <DatePickerProvider {...args}>
      <Header />
    </DatePickerProvider>
  ),
  args: baseArgs,
};

/**
 * `HeaderPrevButton` is the standalone "previous month" arrow from `Header`.
 * Render it on its own (in any layout) — it shares the same state and class
 * hooks as the arrow inside `Header`.
 */
export const HeaderPrevButtonOnly: Story = {
  name: "HeaderPrevButton",
  parameters: componentSource(["HeaderPrevButton"], `<HeaderPrevButton />`),
  render: (args) => (
    <DatePickerProvider {...args}>
      <HeaderPrevButton />
    </DatePickerProvider>
  ),
  args: baseArgs,
};

/**
 * `HeaderNextButton` is the standalone "next month" arrow from `Header`.
 */
export const HeaderNextButtonOnly: Story = {
  name: "HeaderNextButton",
  parameters: componentSource(["HeaderNextButton"], `<HeaderNextButton />`),
  render: (args) => (
    <DatePickerProvider {...args}>
      <HeaderNextButton />
    </DatePickerProvider>
  ),
  args: baseArgs,
};

/**
 * `HeaderMonthSelect` is the standalone month `<select>` dropdown from `Header`.
 */
export const HeaderMonthSelectOnly: Story = {
  name: "HeaderMonthSelect",
  parameters: componentSource(["HeaderMonthSelect"], `<HeaderMonthSelect />`),
  render: (args) => (
    <DatePickerProvider {...args}>
      <HeaderMonthSelect />
    </DatePickerProvider>
  ),
  args: baseArgs,
};

/**
 * `HeaderYearSelect` is the standalone year `<select>` dropdown from `Header`.
 */
export const HeaderYearSelectOnly: Story = {
  name: "HeaderYearSelect",
  parameters: componentSource(["HeaderYearSelect"], `<HeaderYearSelect />`),
  render: (args) => (
    <DatePickerProvider {...args}>
      <HeaderYearSelect />
    </DatePickerProvider>
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
  parameters: componentSource(["PanelHeader"], `<PanelHeader />`),
  render: (args) => (
    <DatePickerProvider {...args}>
      <PanelHeader />
    </DatePickerProvider>
  ),
  args: baseArgs,
};

/**
 * `PanelHeaderLabel` is the standalone center label from `PanelHeader` — the
 * month/year text that toggles the month/year grids. The standalone panel parts
 * share view state, so wrap them in a `PanelHeaderProvider`.
 */
export const PanelHeaderLabelOnly: Story = {
  name: "PanelHeaderLabel",
  parameters: componentSource(
    ["PanelHeaderProvider", "PanelHeaderLabel"],
    `<PanelHeaderProvider>\n  <PanelHeaderLabel />\n</PanelHeaderProvider>`,
  ),
  render: (args) => (
    <DatePickerProvider {...args}>
      <PanelHeaderProvider>
        <PanelHeaderLabel />
      </PanelHeaderProvider>
    </DatePickerProvider>
  ),
  args: baseArgs,
};

/**
 * `PanelHeaderPrevButton` is the standalone "previous" arrow from `PanelHeader`
 * (its action follows the active view). Wrap it in a `PanelHeaderProvider`.
 */
export const PanelHeaderPrevButtonOnly: Story = {
  name: "PanelHeaderPrevButton",
  parameters: componentSource(
    ["PanelHeaderProvider", "PanelHeaderPrevButton"],
    `<PanelHeaderProvider>\n  <PanelHeaderPrevButton />\n</PanelHeaderProvider>`,
  ),
  render: (args) => (
    <DatePickerProvider {...args}>
      <PanelHeaderProvider>
        <PanelHeaderPrevButton />
      </PanelHeaderProvider>
    </DatePickerProvider>
  ),
  args: baseArgs,
};

/**
 * `PanelHeaderNextButton` is the standalone "next" arrow from `PanelHeader`.
 * Wrap it in a `PanelHeaderProvider`.
 */
export const PanelHeaderNextButtonOnly: Story = {
  name: "PanelHeaderNextButton",
  parameters: componentSource(
    ["PanelHeaderProvider", "PanelHeaderNextButton"],
    `<PanelHeaderProvider>\n  <PanelHeaderNextButton />\n</PanelHeaderProvider>`,
  ),
  render: (args) => (
    <DatePickerProvider {...args}>
      <PanelHeaderProvider>
        <PanelHeaderNextButton />
      </PanelHeaderProvider>
    </DatePickerProvider>
  ),
  args: baseArgs,
};

/**
 * `PanelHeaderBody` is the standalone body from `PanelHeader`: it shows the
 * day-view content (its children) and swaps it for the month/year grids while
 * navigating. Wrap it in a `PanelHeaderProvider`.
 */
export const PanelHeaderBodyOnly: Story = {
  name: "PanelHeaderBody",
  parameters: componentSource(
    [
      "PanelHeaderProvider",
      "PanelHeaderLabel",
      "PanelHeaderBody",
      "WeekDays",
      "DaySlots",
    ],
    `<PanelHeaderProvider>
  <PanelHeaderLabel />
  <PanelHeaderBody>
    <WeekDays />
    <DaySlots />
  </PanelHeaderBody>
</PanelHeaderProvider>`,
  ),
  render: (args) => (
    <DatePickerProvider {...args}>
      <PanelHeaderProvider>
        <PanelHeaderLabel />
        <PanelHeaderBody>
          <WeekDays />
          <DaySlots />
        </PanelHeaderBody>
      </PanelHeaderProvider>
    </DatePickerProvider>
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
  parameters: componentSource(["WeekDays"], `<WeekDays />`),
  render: (args) => (
    <DatePickerProvider {...args}>
      <WeekDays />
    </DatePickerProvider>
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
  parameters: componentSource(["DaySlots"], `<DaySlots />`),
  render: (args) => (
    <DatePickerProvider {...args}>
      <DaySlots />
    </DatePickerProvider>
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
  parameters: componentSource(
    ["TimePicker"],
    `<TimePicker showSeconds use12Hours />`,
  ),
  render: (args) => (
    <DatePickerProvider {...args}>
      <TimePicker showSeconds use12Hours />
    </DatePickerProvider>
  ),
  args: baseArgs,
};
