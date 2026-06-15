import type { Meta, StoryObj } from "@storybook/react";
import DatePickerProvider from "../DatePickerProvider";
import {
  TTimePickerProps,
  TTimePickerRendererArgs,
} from "../components/timePicker/types";
import { RenderDateTimePicker } from "./_shared";
import { baseMeta } from "./constants";

const meta = {
  title: "Example/TimePicker",
  ...baseMeta,
} satisfies Meta<typeof DatePickerProvider>;

export default meta;
type Story = StoryObj<typeof meta>;

const baseConfig = {
  locale: "en-US",
  weekStartsOn: "monday",
  weekdayFormat: "short",
  dayFormat: "numeric",
} as const;

/** Build a `render` that wires the calendar args to a configured `TimePicker`. */
const withTimePicker =
  (timePickerProps?: TTimePickerProps): Story["render"] =>
  (args) =>
    RenderDateTimePicker({ ...args, timePickerProps });

/**
 * Example of a fully custom `TimePicker` UI built from the `renderer` args —
 * editable number inputs instead of the built-in steppers/dropdowns, with a
 * live preview of the formatted value. The component owns its markup entirely;
 * the library just hands it the current parts and the setters.
 */
const MyCustomClock = ({
  hours,
  minutes,
  setHours,
  setMinutes,
  formatted,
}: TTimePickerRendererArgs) => {
  const inputStyle: React.CSSProperties = {
    width: 56,
    padding: "6px 8px",
    textAlign: "center",
    fontSize: 18,
    fontWeight: 700,
    border: "1px solid #d4d4d8",
    borderRadius: 8,
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 8,
        padding: 12,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
        <input
          type="number"
          min={0}
          max={23}
          value={hours}
          onChange={(e) => setHours(Number(e.target.value))}
          aria-label="hours"
          style={inputStyle}
        />
        <span style={{ fontSize: 18, fontWeight: 700 }}>:</span>
        <input
          type="number"
          min={0}
          max={59}
          value={minutes}
          onChange={(e) => setMinutes(Number(e.target.value))}
          aria-label="minutes"
          style={inputStyle}
        />
      </div>
      <span
        style={{
          fontSize: 12,
          color: "#fff",
          background: "#3b82f6",
          borderRadius: 999,
          padding: "2px 10px",
        }}
      >
        {formatted}
      </span>
    </div>
  );
};

/**
 * Default 24-hour clock with hours + minutes. Pick a day, then step the time.
 * Changing the day keeps the chosen time.
 */
export const HoursAndMinutes: Story = {
  render: withTimePicker(),
  args: {
    isRange: false,
    initialValue: new Date(new Date().setHours(9, 30, 0, 0)),
    calendar: "gregory",
    config: baseConfig,
  },
};

/**
 * 12-hour clock with an AM/PM toggle.
 */
export const TwelveHour: Story = {
  render: withTimePicker({ use12Hours: true }),
  args: {
    isRange: false,
    initialValue: new Date(new Date().setHours(14, 15, 0, 0)),
    calendar: "gregory",
    config: baseConfig,
  },
};

/**
 * Hours, minutes and seconds.
 */
export const WithSeconds: Story = {
  render: withTimePicker({ showSeconds: true }),
  args: {
    isRange: false,
    initialValue: new Date(new Date().setHours(9, 30, 45, 0)),
    calendar: "gregory",
    config: baseConfig,
  },
};

/**
 * A fully custom UI via the `renderer` prop — the consumer renders its own
 * component (here, editable number inputs) and the library only supplies the
 * time parts and setters.
 */
export const CustomRenderer: Story = {
  render: withTimePicker({
    renderer: (args) => <MyCustomClock {...args} />,
  }),
  args: {
    isRange: false,
    initialValue: new Date(new Date().setHours(9, 30, 0, 0)),
    calendar: "gregory",
    config: baseConfig,
  },
};