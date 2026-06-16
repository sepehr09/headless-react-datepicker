import type { Meta, StoryObj } from "@storybook/react";
import DatePickerProvider from "../DatePickerProvider";
import DaySlots from "../components/daySlots/DaySlots";
import PanelHeaderBody from "../components/panelHeader/PanelHeaderBody";
import PanelHeaderLabel from "../components/panelHeader/PanelHeaderLabel";
import PanelHeaderNextButton from "../components/panelHeader/PanelHeaderNextButton";
import PanelHeaderPrevButton from "../components/panelHeader/PanelHeaderPrevButton";
import PanelHeaderProvider from "../components/panelHeader/PanelHeaderProvider";
import WeekDays from "../components/weekDays/WeekDays";
import { Card, RenderPanelDatePicker } from "./_shared";
import { rtlDecorator } from "./rtlDecorator";
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

export const PanelMonthYearPickerPersian: Story = {
  render: RenderPanelDatePicker,
  decorators: [rtlDecorator],
  args: {
    isRange: false,
    initialValue: new Date(),
    calendar: "persian",
    config: {
      locale: "fa-IR",
      weekStartsOn: "saturday",
      showOtherDays: false,
      otherDaysSelectable: false,
      weekdayFormat: "narrow",
      dayFormat: "numeric",
      weekends: ["thursday", "friday"],
      weekendSelectable: true,
    },
  },
};

const partsArgs: Story["args"] = {
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
 * The pieces of `PanelHeader` — the prev/next **arrows**, the center **label**
 * (month/year that toggles the views) and the **body** (day content swapped for
 * the month/year grids) — are also exported on their own as
 * `PanelHeaderPrevButton`, `PanelHeaderNextButton`, `PanelHeaderLabel` and
 * `PanelHeaderBody`.
 *
 * Because these parts share local view state (days / months / years + paging),
 * wrap them in a `PanelHeaderProvider`. Inside it you can lay them out in **any
 * order**; the default `PanelHeader` is just this same composition. Every part
 * keeps the same `rhmdp-panelHeader__*` class hooks, so existing CSS / theming
 * carries over.
 *
 * The example below puts the month/year **label on the left** and both arrows
 * together on the **right**. Clicking the label still opens the month/year grids
 * in the body, just like the default `PanelHeader`.
 */
export const CustomLayout: Story = {
  name: "Custom layout (label left, arrows right)",
  render: (args) => (
    <Card>
      <DatePickerProvider {...args}>
        <PanelHeaderProvider>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 8,
            }}
          >
            {/* left: month / year label */}
            <PanelHeaderLabel />

            {/* right: both arrows next to each other */}
            <div style={{ display: "flex", gap: 4 }}>
              <PanelHeaderPrevButton />
              <PanelHeaderNextButton />
            </div>
          </div>

          <PanelHeaderBody>
            <WeekDays />
            <DaySlots />
          </PanelHeaderBody>
        </PanelHeaderProvider>
      </DatePickerProvider>
    </Card>
  ),
  args: partsArgs,
};
