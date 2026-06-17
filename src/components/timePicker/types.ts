import { CSSProperties, ReactNode } from "react";
import { TPeriod } from "../../utils/time";

export type TTimePickerUnit = "hours" | "minutes" | "seconds";

export type TTimePickerRendererArgs = {
  /**
   * The date whose time is being edited (the active selection), or `undefined`
   * when nothing is selected yet.
   */
  date: Date | undefined;

  /**
   * Hour in 24-hour form (`0..23`).
   */
  hours: number;

  /**
   * Minute (`0..59`).
   */
  minutes: number;

  /**
   * Second (`0..59`).
   */
  seconds: number;

  /**
   * Hour in 12-hour form (`1..12`). Only meaningful when `use12Hours` is set.
   */
  hours12: number;

  /**
   * `"AM"` | `"PM"` for the current hour.
   */
  period: TPeriod;

  /**
   * Whether the picker is in 12-hour mode.
   */
  use12Hours: boolean;

  /**
   * Whether the seconds column is shown.
   */
  showSeconds: boolean;

  /**
   * Localized time string for the active time (e.g. `"09:30"`, `"09:30:00"` or
   * `"09:30 AM"`). Digits and the AM/PM label follow the calendar `locale`.
   */
  formatted: string;

  /**
   * Set the hour (24-hour value, wraps `0..23`).
   */
  setHours: (hours: number) => void;

  /**
   * Set the minute (wraps `0..59`).
   */
  setMinutes: (minutes: number) => void;

  /**
   * Set the second (wraps `0..59`).
   */
  setSeconds: (seconds: number) => void;

  /**
   * Set AM/PM, keeping the displayed 12-hour value.
   */
  setPeriod: (period: TPeriod) => void;

  /**
   * Step a unit up by one with wrap-around.
   */
  increment: (unit: TTimePickerUnit) => void;

  /**
   * Step a unit down by one with wrap-around.
   */
  decrement: (unit: TTimePickerUnit) => void;
};

export type TTimePickerProps = {
  /**
   * Which end of a range to edit (`0` = start, `1` = end). Ignored for single
   * pickers.
   * @default 0
   */
  index?: number;

  /**
   * Use a 12-hour clock with an AM/PM toggle instead of a 24-hour clock.
   * @default false
   */
  use12Hours?: boolean;

  /**
   * Show a seconds column.
   * @default false
   */
  showSeconds?: boolean;

  /**
   * Make the value in each column a native `<select>` dropdown (in addition to
   * the stepper arrows), so the user can also pick a value directly from a list
   * by clicking the value. Set to `false` for a plain, non-interactive value.
   * @default true
   */
  dropdown?: boolean;

  /**
   * Custom renderer. If provided, the built-in stepper UI is ignored and you
   * render everything yourself from the given args.
   */
  renderer?: (args: TTimePickerRendererArgs) => ReactNode;

  /**
   * Replace the increment (up) arrow icon.
   */
  upIcon?: ReactNode;

  /**
   * Replace the decrement (down) arrow icon.
   */
  downIcon?: ReactNode;

  /* ------------------------------- styling -------------------------------- */

  /** className of the time picker root row */
  rootClassName?: string;
  /** css styles of the time picker root row */
  rootStyles?: CSSProperties;

  /** className of a single unit column (hours / minutes / seconds / period) */
  columnClassName?: string;
  /** css styles of a single unit column */
  columnStyles?: CSSProperties;

  /** className of both stepper buttons */
  buttonClassName?: string;
  /** css styles of both stepper buttons */
  buttonStyles?: CSSProperties;

  /** className of the up (increment) stepper button */
  upButtonClassName?: string;
  /** css styles of the up (increment) stepper button */
  upButtonStyles?: CSSProperties;

  /** className of the down (decrement) stepper button */
  downButtonClassName?: string;
  /** css styles of the down (decrement) stepper button */
  downButtonStyles?: CSSProperties;

  /** className of the value in the middle of a column (the text or `<select>`) */
  valueClassName?: string;
  /** css styles of the value in the middle of a column (the text or `<select>`) */
  valueStyles?: CSSProperties;

  /** className of the `<option>`s in the value dropdown (when `dropdown`) */
  optionClassName?: string;
  /** css styles of the `<option>`s in the value dropdown (when `dropdown`) */
  optionStyles?: CSSProperties;

  /** className of the ":" separators between columns */
  separatorClassName?: string;
  /** css styles of the ":" separators between columns */
  separatorStyles?: CSSProperties;

  /** className of the AM/PM toggle column */
  periodClassName?: string;
  /** css styles of the AM/PM toggle column */
  periodStyles?: CSSProperties;
};
