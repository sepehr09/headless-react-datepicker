import { useContext, useMemo } from "react";
import { PickerContext } from "../store/pickerContext";
import { getAllMonths } from "../utils/datePicker";

function Header() {
  const {
    goToNextMonth,
    goToPrevMonth,
    goToMonth,
    firstDayOfMonth,
    calendar = "persian",
    config,
    monthInTheCalendar,
    yearInTheCalendar,
  } = useContext(PickerContext);

  const { locale } = config || {};

  const formattedDate = Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "short",
    calendar,
  }).format(firstDayOfMonth);

  const allMonths = useMemo(
    () => getAllMonths({ locale: locale!, calendar }),
    [calendar, locale]
  );

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
            goToMonth?.(parseInt(v.target.value, 10));
          }}
        >
          {allMonths.map((month) => (
            <option
              key={month.value}
              value={month.value}
              selected={month.value === monthInTheCalendar}
            >
              {month.label}
            </option>
          ))}
        </select>
        <div className="rhjd-cursor-pointer" onClick={() => goToPrevMonth?.()}>
          prev {">"}
        </div>
      </div>
    </div>
  );
}

export default Header;
