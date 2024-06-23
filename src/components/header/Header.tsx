import { useContext } from "react";
import { PickerContext } from "../../store/pickerContext";
import { classJoin } from "../../utils/classJoin";
import ChevronLeft from "../icons/ChevronLeft";
import ChevronRight from "../icons/ChevronRight";
import { THeaderProps } from "./types";

function Header({
  leftIcon,
  rightIcon,
  monthSelectClassName,
  monthSelectStyles,
  monthOptionClassName,
  monthOptionStyles,
  monthSelectedOptionClassName,
  monthSelectedOptionStyles,
  yearSelectClassName,
  yearSelectStyles,
  yearOptionClassName,
  yearOptionStyles,
  yearSelectedOptionClassName,
  yearSelectedOptionStyles,
}: THeaderProps) {
  const {
    goToNextMonth,
    goToPrevMonth,
    goToMonth,
    goToYear,
    monthInTheCalendar,
    yearInTheCalendar,
    monthsList,
    yearsList,
  } = useContext(PickerContext);

  return (
    <div className="rhmdp-flex rhmdp-items-center rhmdp-justify-between rhmdp-py-4 rhmdp-select-none">
      <div
        className="rhmdp-cursor-pointer"
        role="button"
        tabIndex={0}
        aria-label="Previous Month"
        onClick={() => goToPrevMonth?.()}
        onKeyDown={(e) => {
          if (e.key === "Enter") goToPrevMonth?.();
        }}
      >
        {leftIcon || <ChevronLeft />}
      </div>
      <select
        onChange={(v) => {
          goToMonth(parseInt(v.target.value, 10));
        }}
        style={monthSelectStyles}
        className={monthSelectClassName}
      >
        {monthsList?.map((month) => (
          <option
            key={month.value}
            value={month.value}
            selected={month.value === monthInTheCalendar}
            style={{
              ...monthOptionStyles,
              ...(month.value === monthInTheCalendar
                ? monthSelectedOptionStyles
                : {}),
            }}
            className={classJoin([
              monthOptionClassName,
              month.value === monthInTheCalendar
                ? monthSelectedOptionClassName
                : "",
            ])}
          >
            {month.label}
          </option>
        ))}
      </select>

      <select
        onChange={(v) => {
          goToYear(parseInt(v.target.value, 10));
        }}
        className={yearSelectClassName}
        style={yearSelectStyles}
      >
        {yearsList?.map((year) => {
          return (
            <option
              key={year}
              value={year}
              selected={year === yearInTheCalendar}
              style={{
                ...yearOptionStyles,
                ...(year === yearInTheCalendar ? yearSelectedOptionStyles : {}),
              }}
              className={classJoin([
                yearOptionClassName,
                year === yearInTheCalendar ? yearSelectedOptionClassName : "",
              ])}
            >
              {year}
            </option>
          );
        })}
      </select>
      <div
        className="rhmdp-cursor-pointer"
        aria-label="Previous Month"
        role="button"
        tabIndex={0}
        onClick={() => goToNextMonth?.()}
        onKeyDown={(e) => {
          if (e.key === "Enter") goToNextMonth?.();
        }}
      >
        {rightIcon || <ChevronRight />}
      </div>
    </div>
  );
}

export default Header;
