import { CSSProperties, ReactNode, useState } from "react";
import DatePickerProvider from "../DatePickerProvider";
import DaySlots from "../components/daySlots/DaySlots";
import Header from "../components/header/Header";
import PanelHeader from "../components/panelHeader/PanelHeader";
import TimePicker from "../components/timePicker/TimePicker";
import { TTimePickerProps } from "../components/timePicker/types";
import Title from "../components/title/Title";
import WeekDays from "../components/weekDays/WeekDays";
import { TDatePickerOnChange, TDatePickerProps } from "../types";

/**
 * Demo theming through the library's own `--rhmdp-*` CSS variables instead of
 * inline `*Styles` props. Set on a wrapper, they cascade into every calendar
 * part rendered inside — e.g. the `Header` month/year `<select>` dropdowns read
 * `--rhmdp-header-select-bg` / `--rhmdp-header-select-text`.
 */
export const calendarVars: CSSProperties = {
  "--rhmdp-header-select-bg": "#f0f0f0",
  "--rhmdp-header-select-text": "#000",
  "--rhmdp-header-select-radius": "5px",
  "--rhmdp-header-select-padding": "5px",
} as CSSProperties;

export const Card = ({ children }: { children: ReactNode }) => {
  return (
    <div
      style={{
        ...calendarVars,
        background: "#fff",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
        width: "300px",
        borderRadius: "0px",
        margin: "30px auto",
        padding: "10px",
      }}
    >
      {children}
    </div>
  );
};

export const RenderDatePicker = <T extends boolean>(
  props: TDatePickerProps<T>
) => {
  return (
    <Card>
      <DatePickerProvider {...props}>
        <Title />
        <Header />
        <WeekDays />
        <DaySlots />
      </DatePickerProvider>
    </Card>
  );
};

export const RenderControlledDatePicker = <T extends boolean>(
  props: TDatePickerProps<T>
) => {
  const [value, setValue] = useState(props?.initialValue);

  const onChange: TDatePickerOnChange<T> = (e) => {
    props?.onChange?.(e);
    console.log("onChange: ", e);
    setValue(e);
  };

  return (
    <>
      <Card>
        <DatePickerProvider
          {...props}
          initialValue={value}
          value={value}
          onChange={onChange}
        >
          <Title />
          <Header />
          <WeekDays />
          <DaySlots
            onClickSlot={(v) => {
              console.log("onClickSlot", v);
            }}
          />
        </DatePickerProvider>
      </Card>
      <div style={{ width: 300, margin: "auto" }}>
        <button
          onClick={() =>
            setValue(
              (props.isRange
                ? [new Date("2024-06-24"), new Date("2024-06-28")]
                : new Date("2024-06-24")) as TDatePickerProps<T>["value"]
            )
          }
          style={{ background: "#ddd", padding: 7, borderRadius: 7 }}
        >
          Set Custom Value to 2024-06-24
        </button>
      </div>
    </>
  );
};

/**
 * Two calendars side-by-side (Airbnb-style). A single shared state drives both
 * months: the left calendar shows the current month, the right one shows the
 * next month (`monthOffset={1}`). The `Header` navigation moves both at once and
 * range selection / hover spans across the two calendars.
 */
export const RenderDualDatePicker = <T extends boolean>(
  props: TDatePickerProps<T>
) => {
  return (
    <div
      style={{
        ...calendarVars,
        background: "#fff",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
        width: "640px",
        borderRadius: "8px",
        margin: "30px auto",
        padding: "16px",
      }}
    >
      <DatePickerProvider {...props}>
        {/* Single header navigates both months together (2 months per click) */}
        <Header navigationStep={2} />

        <div style={{ display: "flex", gap: "24px" }}>
          {/* Left calendar: current month */}
          <div style={{ flex: 1 }}>
            <Title style={{ textAlign: "center" }} />
            <WeekDays />
            <DaySlots />
          </div>

          {/* Right calendar: next month */}
          <div style={{ flex: 1 }}>
            <Title monthOffset={1} style={{ textAlign: "center" }} />
            <WeekDays />
            <DaySlots monthOffset={1} />
          </div>
        </div>
      </DatePickerProvider>
    </div>
  );
};

/**
 * A calendar plus a `TimePicker`. The selected value now carries a time of day,
 * and picking a different day keeps the chosen time. Pass `timePickerProps`
 * (e.g. `{ use12Hours: true, showSeconds: true }`) to configure the clock. The
 * chosen date+time is shown below so you can see it update live.
 */
export const RenderDateTimePicker = <T extends boolean>(
  props: TDatePickerProps<T> & { timePickerProps?: TTimePickerProps }
) => {
  const { timePickerProps, ...providerProps } = props;
  const [value, setValue] = useState<TDatePickerProps<T>["value"]>(
    providerProps.initialValue
  );

  const onChange: TDatePickerOnChange<T> = (e) => {
    providerProps?.onChange?.(e);
    setValue(e);
  };

  const format = (d: Date) =>
    new Intl.DateTimeFormat(providerProps.config?.locale || "en-US", {
      dateStyle: "medium",
      timeStyle: timePickerProps?.showSeconds ? "medium" : "short",
      calendar: providerProps.calendar,
      hour12: timePickerProps?.use12Hours,
    }).format(d);

  const label = Array.isArray(value)
    ? value.map(format).join("  —  ")
    : value
      ? format(value)
      : "—";

  return (
    <Card>
      <DatePickerProvider {...providerProps} onChange={onChange}>
        <Title />
        <Header />
        <WeekDays />
        <DaySlots />
        <div
          style={{
            borderTop: "1px solid #eee",
            marginTop: 8,
            paddingTop: 8,
          }}
        >
          <TimePicker {...timePickerProps} />
        </div>
        <div
          style={{
            textAlign: "center",
            marginTop: 8,
            fontSize: 14,
            color: "#444",
          }}
        >
          {label}
        </div>
      </DatePickerProvider>
    </Card>
  );
};

/**
 * `PanelHeader` is a built-in, self-contained alternative to `Header`. Instead
 * of `<select>` dropdowns it shows the month/year pickers inside the calendar
 * area (a 12-month grid and a paginated year grid). Wrap the day-view content
 * as its children and it swaps them in/out while navigating.
 */
export const RenderPanelDatePicker = <T extends boolean>(
  props: TDatePickerProps<T>
) => {
  return (
    <Card>
      <DatePickerProvider {...props}>
        <PanelHeader>
          <WeekDays />
          <DaySlots />
        </PanelHeader>
      </DatePickerProvider>
    </Card>
  );
};
