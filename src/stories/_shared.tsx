import { ReactNode, useState } from "react";
import DatePickerProvider from "../DatePickerProvider";
import DaySlots from "../components/daySlots/DaySlots";
import Header from "../components/header/Header";
import PanelHeader from "../components/panelHeader/PanelHeader";
import Title from "../components/title/Title";
import WeekDays from "../components/weekDays/WeekDays";
import { TDatePickerOnChange, TDatePickerProps } from "../types";

export const Card = ({ children }: { children: ReactNode }) => {
  return (
    <div
      style={{
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

const selectStyles = {
  backgroundColor: "#f0f0f0",
  color: "#000",
  padding: "5px",
  borderRadius: "5px",
};

export const RenderDatePicker = <T extends boolean>(
  props: TDatePickerProps<T>
) => {
  return (
    <Card>
      <DatePickerProvider {...props}>
        <Title />
        <Header
          monthSelectStyles={selectStyles}
          yearSelectStyles={selectStyles}
        />
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
          <Header
            monthSelectStyles={selectStyles}
            yearSelectStyles={selectStyles}
          />
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
        <Header
          navigationStep={2}
          monthSelectStyles={selectStyles}
          yearSelectStyles={selectStyles}
        />

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
