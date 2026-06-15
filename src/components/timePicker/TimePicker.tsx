import { CSSProperties, ReactNode, useContext } from "react";
import {
  TIME_PICKER,
  TIME_PICKER_BUTTON,
  TIME_PICKER_BUTTON_DOWN,
  TIME_PICKER_BUTTON_UP,
  TIME_PICKER_COLUMN,
  TIME_PICKER_OPTION,
  TIME_PICKER_SEPARATOR,
  TIME_PICKER_VALUE,
} from "../../constants/classNames";
import { PickerContext } from "../../store/pickerContext";
import { classJoin } from "../../utils/classJoin";
import { from12Hour, getTimeParts, to12Hour, TPeriod, wrap } from "../../utils/time";
import ChevronDown from "../icons/ChevronDown";
import ChevronUp from "../icons/ChevronUp";
import { TTimePickerProps, TTimePickerUnit } from "./types";

type TOption = { value: string; label: string };

function TimePicker({
  index = 0,
  use12Hours = false,
  showSeconds = false,
  dropdown = true,
  renderer,
  upIcon,
  downIcon,
  rootClassName,
  rootStyles,
  columnClassName,
  columnStyles,
  buttonClassName,
  buttonStyles,
  upButtonClassName,
  upButtonStyles,
  downButtonClassName,
  downButtonStyles,
  valueClassName,
  valueStyles,
  optionClassName,
  optionStyles,
  separatorClassName,
  separatorStyles,
  periodClassName,
  periodStyles,
}: TTimePickerProps) {
  const { selectedDay, handleChangeTime, config } = useContext(PickerContext);
  const { locale } = config || {};

  /**
   * The date whose time is being edited. For a range picker, `index` picks the
   * start (`0`) or end (`1`).
   */
  const activeDate = Array.isArray(selectedDay)
    ? selectedDay[index]
    : selectedDay;

  const { hours, minutes, seconds } = activeDate
    ? getTimeParts(activeDate)
    : { hours: 0, minutes: 0, seconds: 0 };

  const { hours12, period } = to12Hour(hours);

  /* ------------------------------ formatting ------------------------------ */

  const numberFormatter = new Intl.NumberFormat(locale, {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
  const fmt = (n: number) => numberFormatter.format(n);

  /**
   * Localized AM/PM label (e.g. "AM", "ق.ظ"). Derived from `Intl` so it follows
   * the calendar `locale`.
   */
  const periodLabel = (p: TPeriod) => {
    const probe = new Date(2021, 0, 1, p === "AM" ? 6 : 18);
    const part = new Intl.DateTimeFormat(locale, {
      hour: "numeric",
      hour12: true,
    })
      .formatToParts(probe)
      .find((x) => x.type === "dayPeriod");
    return part?.value ?? p;
  };

  const displayedHour = use12Hours ? hours12 : hours;

  const formatted =
    [fmt(displayedHour), fmt(minutes), ...(showSeconds ? [fmt(seconds)] : [])].join(
      ":"
    ) + (use12Hours ? ` ${periodLabel(period)}` : "");

  /* ------------------------------- setters -------------------------------- */

  const setHours = (h: number) =>
    handleChangeTime?.({ hours: wrap(h, 23) }, index);
  const setMinutes = (m: number) =>
    handleChangeTime?.({ minutes: wrap(m, 59) }, index);
  const setSeconds = (s: number) =>
    handleChangeTime?.({ seconds: wrap(s, 59) }, index);
  const setPeriod = (p: TPeriod) =>
    handleChangeTime?.({ hours: from12Hour(hours12, p) }, index);

  const increment = (unit: TTimePickerUnit) => {
    if (unit === "hours") setHours(hours + 1);
    else if (unit === "minutes") setMinutes(minutes + 1);
    else setSeconds(seconds + 1);
  };
  const decrement = (unit: TTimePickerUnit) => {
    if (unit === "hours") setHours(hours - 1);
    else if (unit === "minutes") setMinutes(minutes - 1);
    else setSeconds(seconds - 1);
  };

  /* ------------------------------- renderer ------------------------------- */

  if (renderer !== undefined && typeof renderer === "function") {
    return renderer({
      date: activeDate,
      hours,
      minutes,
      seconds,
      hours12,
      period,
      use12Hours,
      showSeconds,
      formatted,
      setHours,
      setMinutes,
      setSeconds,
      setPeriod,
      increment,
      decrement,
    });
  }

  /* ----------------------------- default (UI) ----------------------------- */

  const numberOptions = (count: number, start: number): TOption[] =>
    Array.from({ length: count }, (_, i) => {
      const n = i + start;
      return { value: String(n), label: fmt(n) };
    });

  const hourOptions = use12Hours
    ? numberOptions(12, 1)
    : numberOptions(24, 0);
  const minuteOptions = numberOptions(60, 0);
  const secondOptions = numberOptions(60, 0);
  const periodOptions: TOption[] = [
    { value: "AM", label: periodLabel("AM") },
    { value: "PM", label: periodLabel("PM") },
  ];

  const onSelectHour = (value: string) => {
    const n = parseInt(value, 10);
    if (use12Hours) setHours(from12Hour(n, period));
    else setHours(n);
  };

  const renderColumn = (
    key: string,
    label: string,
    display: string,
    selectValue: string,
    options: TOption[],
    onSelect: (value: string) => void,
    onUp: () => void,
    onDown: () => void,
    extraColumnClassName?: string,
    extraColumnStyles?: CSSProperties,
    upAriaLabel = `Increase ${label}`,
    downAriaLabel = `Decrease ${label}`
  ): ReactNode => (
    <div
      key={key}
      className={classJoin(
        TIME_PICKER_COLUMN,
        `${TIME_PICKER_COLUMN}--${key}`,
        "rhmdp-flex rhmdp-flex-col rhmdp-items-center rhmdp-select-none",
        columnClassName,
        extraColumnClassName
      )}
      style={{ ...columnStyles, ...extraColumnStyles }}
    >
      <button
        type="button"
        aria-label={upAriaLabel}
        onClick={onUp}
        className={classJoin(
          TIME_PICKER_BUTTON,
          TIME_PICKER_BUTTON_UP,
          "rhmdp-flex rhmdp-justify-center rhmdp-cursor-pointer rhmdp-rounded hover:rhmdp-bg-gray-200",
          buttonClassName,
          upButtonClassName
        )}
        style={{ ...buttonStyles, ...upButtonStyles }}
      >
        {upIcon || <ChevronUp />}
      </button>

      {dropdown ? (
        <select
          aria-label={label}
          value={selectValue}
          onChange={(e) => onSelect(e.target.value)}
          className={classJoin(
            TIME_PICKER_VALUE,
            "rhmdp-py-1 rhmdp-text-xl rhmdp-font-bold rhmdp-tabular-nums rhmdp-text-center rhmdp-bg-transparent rhmdp-appearance-none rhmdp-cursor-pointer",
            valueClassName
          )}
          style={valueStyles}
        >
          {options.map((o) => (
            <option
              key={o.value}
              value={o.value}
              className={classJoin(TIME_PICKER_OPTION, optionClassName)}
              style={optionStyles}
            >
              {o.label}
            </option>
          ))}
        </select>
      ) : (
        <div
          className={classJoin(
            TIME_PICKER_VALUE,
            "rhmdp-py-1 rhmdp-text-xl rhmdp-font-bold rhmdp-tabular-nums",
            valueClassName
          )}
          style={valueStyles}
          aria-label={label}
          aria-live="polite"
        >
          {display}
        </div>
      )}

      <button
        type="button"
        aria-label={downAriaLabel}
        onClick={onDown}
        className={classJoin(
          TIME_PICKER_BUTTON,
          TIME_PICKER_BUTTON_DOWN,
          "rhmdp-flex rhmdp-justify-center rhmdp-cursor-pointer rhmdp-rounded hover:rhmdp-bg-gray-200",
          buttonClassName,
          downButtonClassName
        )}
        style={{ ...buttonStyles, ...downButtonStyles }}
      >
        {downIcon || <ChevronDown />}
      </button>
    </div>
  );

  const renderSeparator = (key: string): ReactNode => (
    <div
      key={key}
      aria-hidden="true"
      className={classJoin(
        TIME_PICKER_SEPARATOR,
        "rhmdp-text-xl rhmdp-font-bold",
        separatorClassName
      )}
      style={separatorStyles}
    >
      :
    </div>
  );

  const togglePeriod = () => setPeriod(period === "AM" ? "PM" : "AM");

  return (
    <div
      className={classJoin(
        TIME_PICKER,
        "rhmdp-flex rhmdp-items-center rhmdp-justify-center rhmdp-gap-2 rhmdp-py-2",
        rootClassName
      )}
      style={rootStyles}
      role="group"
      aria-label="Time picker"
    >
      {renderColumn(
        "hours",
        "hours",
        fmt(displayedHour),
        String(use12Hours ? hours12 : hours),
        hourOptions,
        onSelectHour,
        () => increment("hours"),
        () => decrement("hours")
      )}

      {renderSeparator("sep-1")}

      {renderColumn(
        "minutes",
        "minutes",
        fmt(minutes),
        String(minutes),
        minuteOptions,
        (v) => setMinutes(parseInt(v, 10)),
        () => increment("minutes"),
        () => decrement("minutes")
      )}

      {showSeconds && renderSeparator("sep-2")}
      {showSeconds &&
        renderColumn(
          "seconds",
          "seconds",
          fmt(seconds),
          String(seconds),
          secondOptions,
          (v) => setSeconds(parseInt(v, 10)),
          () => increment("seconds"),
          () => decrement("seconds")
        )}

      {use12Hours &&
        renderColumn(
          "period",
          "AM/PM",
          periodLabel(period),
          period,
          periodOptions,
          (v) => setPeriod(v as TPeriod),
          togglePeriod,
          togglePeriod,
          periodClassName,
          periodStyles,
          "Toggle AM/PM",
          "Toggle AM/PM"
        )}
    </div>
  );
}

export default TimePicker;
