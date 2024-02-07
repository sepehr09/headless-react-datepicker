import { Temporal } from "@js-temporal/polyfill";
import { toDate } from "date-fns";
import { useContext } from "react";
import { PickerContext } from "../store/pickerContext";
import ChevronLeft from "./icons/ChevronLeft";
import ChevronRight from "./icons/ChevronRight";

function Header() {
  const {
    goToNextMonth,
    goToPrevMonth,
    goToDate,
    calendar = "persian",
    monthInTheCalendar,
    yearInTheCalendar,
    monthsList,
    yearsList,
  } = useContext(PickerContext);

  const handleGoToMonth = (month: number) => {
    const newDate = Temporal.PlainDate.from({
      year: yearInTheCalendar,
      month: month,
      day: 1,
      calendar: calendar,
    }).getISOFields();

    goToDate?.(
      toDate(`${newDate.isoYear}-${newDate.isoMonth}-${newDate.isoDay}`)
    );
  };

  const handleGoToYear = (year: number) => {
    const newDate = Temporal.PlainDate.from({
      year: year,
      month: monthInTheCalendar,
      day: 1,
      calendar: calendar,
    }).getISOFields();

    goToDate?.(
      toDate(`${newDate.isoYear}-${newDate.isoMonth}-${newDate.isoDay}`)
    );
  };

  return (
    <div className="rhmdp-flex rhmdp-items-center rhmdp-justify-between rhmdp-p-4 rhmdp-select-none">
      <div className="rhmdp-cursor-pointer" onClick={() => goToPrevMonth?.()}>
        <ChevronLeft />
      </div>
      <select
        onChange={(v) => {
          handleGoToMonth(parseInt(v.target.value, 10));
        }}
      >
        {monthsList?.map((month) => (
          <option
            key={month.value}
            value={month.value}
            selected={month.value === monthInTheCalendar}
          >
            {month.label}
          </option>
        ))}
      </select>

      <select
        onChange={(v) => {
          handleGoToYear(parseInt(v.target.value, 10));
        }}
      >
        {yearsList?.map((year) => {
          return (
            <option
              key={year}
              value={year}
              selected={year === yearInTheCalendar}
            >
              {year}
            </option>
          );
        })}
      </select>
      <div className="rhmdp-cursor-pointer" onClick={() => goToNextMonth?.()}>
        <ChevronRight />
      </div>
    </div>
  );
}

export default Header;
