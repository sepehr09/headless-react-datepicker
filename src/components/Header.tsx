import { Intl, Temporal } from "@js-temporal/polyfill";
import { toDate } from "date-fns";
import { useContext, useMemo } from "react";
import { PickerContext } from "../store/pickerContext";
import { getAllMonths } from "../utils/datePicker";

function Header() {
  const {
    goToNextMonth,
    goToPrevMonth,
    goToDate,
    firstDayOfMonth,
    calendar = "persian",
    config,
    monthInTheCalendar,
    yearInTheCalendar,
  } = useContext(PickerContext);

  const { locale, yearRangeFrom, yearRangeTo } = config || {};

  const formattedDate = Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "short",
    calendar,
  }).format(firstDayOfMonth);

  const allMonths = useMemo(
    () => getAllMonths({ locale: locale!, calendar }),
    [calendar, locale]
  );

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
    <div>
      {/* Render Month Name */}
      <h2 className="rhjd-text-2xl rhjd-font-bold rhjd-mb-4">
        {monthInTheCalendar} {yearInTheCalendar}
      </h2>

      <div className="rhjd-flex rhjd-items-center rhjd-justify-between rhjd-p-4 rhjd-select-none">
        <div className="rhjd-cursor-pointer" onClick={() => goToNextMonth?.()}>
          {"<"} next
        </div>
        <select
          onChange={(v) => {
            handleGoToMonth(parseInt(v.target.value, 10));
          }}
        >
          {allMonths.map((month) => (
            <option
              key={month.value}
              value={month.value}
              selected={month.value === monthInTheCalendar}
            >
              {month.label} ({month.value})
            </option>
          ))}
        </select>

        <select
          onChange={(v) => {
            handleGoToYear(parseInt(v.target.value, 10));
          }}
        >
          {Array.from({
            length:
              (yearRangeTo || yearInTheCalendar)! -
              (yearRangeFrom || yearInTheCalendar - 20)! +
              1,
          }).map((_, i) => {
            const year = (yearRangeFrom || yearInTheCalendar - 20)! + i;
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
        <div className="rhjd-cursor-pointer" onClick={() => goToPrevMonth?.()}>
          prev {">"}
        </div>
      </div>
    </div>
  );
}

export default Header;
