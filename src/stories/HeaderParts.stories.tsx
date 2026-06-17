import type { Meta, StoryObj } from "@storybook/react-vite";
import DatePickerProvider from "../DatePickerProvider";
import DaySlots from "../components/daySlots/DaySlots";
import HeaderMonthSelect from "../components/header/HeaderMonthSelect";
import HeaderNextButton from "../components/header/HeaderNextButton";
import HeaderPrevButton from "../components/header/HeaderPrevButton";
import HeaderYearSelect from "../components/header/HeaderYearSelect";
import WeekDays from "../components/weekDays/WeekDays";
import { baseMeta } from "./constants";
import { Card } from "./_shared";
import { source } from "./_source";

/** Standalone header parts: month + year selects left, both arrows right. */
const headerCustomLayoutSource = source(
  [
    "HeaderMonthSelect",
    "HeaderYearSelect",
    "HeaderPrevButton",
    "HeaderNextButton",
    "WeekDays",
    "DaySlots",
  ],
  `<div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
  {/* left: month + year dropdowns */}
  <div style={{ display: "flex", gap: 4 }}>
    <HeaderMonthSelect />
    <HeaderYearSelect />
  </div>

  {/* right: both arrows next to each other */}
  <div style={{ display: "flex", gap: 4 }}>
    <HeaderPrevButton />
    <HeaderNextButton />
  </div>
</div>
<WeekDays />
<DaySlots />`,
);

/**
 * The pieces that make up `Header` — the prev/next **arrows** and the **month**
 * and **year** `<select>` dropdowns — are also exported on their own as
 * `HeaderPrevButton`, `HeaderNextButton`, `HeaderMonthSelect` and
 * `HeaderYearSelect`.
 *
 * Render them individually to compose a header in **any order / layout** while
 * the standard `Header` keeps working unchanged. Every part reads from the same
 * shared `DatePickerProvider` state and uses the same `rhmdp-header__*` class
 * hooks, so existing CSS / theming carries over.
 *
 * The example below puts the month & year on the **left** and both arrows
 * together on the **right**.
 */
const meta = {
  title: "Example/Calendar/Header",
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
    weekdayFormat: "short",
    dayFormat: "numeric",
    weekends: ["saturday", "sunday"],
    weekendSelectable: true,
  },
};

/**
 * A custom header layout built from the standalone parts: month + year selects
 * on the left, prev/next arrows side-by-side on the right.
 */
export const CustomLayout: Story = {
  name: "Custom layout (selects left, arrows right)",
  parameters: headerCustomLayoutSource,
  render: (args) => (
    <Card>
      <DatePickerProvider {...args}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 16,
          }}
        >
          {/* left: month + year dropdowns */}
          <div style={{ display: "flex", gap: 4 }}>
            <HeaderMonthSelect />
            <HeaderYearSelect />
          </div>

          {/* right: both arrows next to each other */}
          <div style={{ display: "flex", gap: 4 }}>
            <HeaderPrevButton />
            <HeaderNextButton />
          </div>
        </div>
        <WeekDays />
        <DaySlots />
      </DatePickerProvider>
    </Card>
  ),
  args: baseArgs,
};
