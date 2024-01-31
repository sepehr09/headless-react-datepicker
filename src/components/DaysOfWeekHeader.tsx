import { addDays } from "date-fns";
import { useContext } from "react";
import { PickerContext } from "../store/pickerContext";

function DaysOfWeekHeader() {
  const { startDateIncludeOtherDays, config } = useContext(PickerContext);
  const { locale, weekdayFormat } = config || {};

  return (
    <div className="rhjd-grid rhjd-grid-cols-7">
      {Array.from({ length: 7 }).map((_, index) => {
        const dayOfWeek =
          startDateIncludeOtherDays &&
          addDays(startDateIncludeOtherDays, index);

        const title = new Intl.DateTimeFormat(locale, {
          weekday: weekdayFormat,
        }).format(dayOfWeek);

        return (
          <div key={index} className={`rhjd-text-center rhjd-font-bold`}>
            {title}
          </div>
        );
      })}
    </div>
  );
}

export default DaysOfWeekHeader;
