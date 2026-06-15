import { useContext } from "react";
import {
  HEADER,
  HEADER_MONTH_OPTION,
  HEADER_MONTH_OPTION_SELECTED,
  HEADER_MONTH_SELECT,
  HEADER_NEXT_BUTTON,
  HEADER_PREV_BUTTON,
  HEADER_YEAR_OPTION,
  HEADER_YEAR_OPTION_SELECTED,
  HEADER_YEAR_SELECT,
} from "../../constants/classNames";
import { PickerContext } from "../../store/pickerContext";
import { classJoin } from "../../utils/classJoin";
import ChevronLeft from "../icons/ChevronLeft";
import ChevronRight from "../icons/ChevronRight";
import { THeaderProps } from "./types";

function Header({
  navigationStep = 1,
  rootClassName,
  rootStyles,
  prevButtonStyles,
  nextButtonStyles,
  prevButtonClassName,
  nextButtonClassName,
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
    <div
      className={classJoin(
        HEADER,
        "rhmdp-flex rhmdp-items-center rhmdp-justify-between rhmdp-py-4 rhmdp-select-none",
        rootClassName
      )}
      style={rootStyles}
    >
      <div
        className={classJoin(
          HEADER_PREV_BUTTON,
          "rhmdp-cursor-pointer",
          prevButtonClassName
        )}
        style={prevButtonStyles}
        role="button"
        tabIndex={0}
        aria-label="Previous Month"
        onClick={() => goToPrevMonth?.(navigationStep)}
        onKeyDown={(e) => {
          if (e.key === "Enter") goToPrevMonth?.(navigationStep);
        }}
      >
        {leftIcon || <ChevronLeft />}
      </div>
      <select
        onChange={(v) => {
          goToMonth(parseInt(v.target.value, 10));
        }}
        style={monthSelectStyles}
        className={classJoin(HEADER_MONTH_SELECT, monthSelectClassName)}
        value={monthInTheCalendar}
      >
        {monthsList?.map((month) => (
          <option
            key={month.value}
            value={month.value}
            style={{
              ...monthOptionStyles,
              ...(month.value === monthInTheCalendar
                ? monthSelectedOptionStyles
                : {}),
            }}
            className={classJoin(
              HEADER_MONTH_OPTION,
              month.value === monthInTheCalendar && HEADER_MONTH_OPTION_SELECTED,
              monthOptionClassName,
              month.value === monthInTheCalendar
                ? monthSelectedOptionClassName
                : ""
            )}
          >
            {month.label}
          </option>
        ))}
      </select>

      <select
        onChange={(v) => {
          goToYear(parseInt(v.target.value, 10));
        }}
        className={classJoin(HEADER_YEAR_SELECT, yearSelectClassName)}
        style={yearSelectStyles}
        value={yearInTheCalendar}
      >
        {yearsList?.map((year) => {
          return (
            <option
              key={year}
              value={year}
              style={{
                ...yearOptionStyles,
                ...(year === yearInTheCalendar ? yearSelectedOptionStyles : {}),
              }}
              className={classJoin(
                HEADER_YEAR_OPTION,
                year === yearInTheCalendar && HEADER_YEAR_OPTION_SELECTED,
                yearOptionClassName,
                year === yearInTheCalendar ? yearSelectedOptionClassName : ""
              )}
            >
              {year}
            </option>
          );
        })}
      </select>
      <div
        className={classJoin(
          HEADER_NEXT_BUTTON,
          "rhmdp-cursor-pointer",
          nextButtonClassName
        )}
        style={nextButtonStyles}
        aria-label="Next Month"
        role="button"
        tabIndex={0}
        onClick={() => goToNextMonth?.(navigationStep)}
        onKeyDown={(e) => {
          if (e.key === "Enter") goToNextMonth?.(navigationStep);
        }}
      >
        {rightIcon || <ChevronRight />}
      </div>
    </div>
  );
}

export default Header;
