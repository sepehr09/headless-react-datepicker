import { addDays } from "date-fns";
import { useContext } from "react";
import { PickerContext } from "../../store/pickerContext";
import { TDay } from "../../types";
import { classJoin } from "../../utils/classJoin";
import { TDaysOfWeekHeader } from "./types";

function DaysOfWeekHeader({
  renderer,
  className,
  rootClassName,
}: TDaysOfWeekHeader) {
  const { startDateIncludeOtherDays, config } = useContext(PickerContext);
  const { locale, weekdayFormat } = config || {};

  return (
    <div className={classJoin(["rhmdp-grid rhmdp-grid-cols-7", rootClassName])}>
      {Array.from({ length: 7 }).map((_, index) => {
        const dayOfWeek =
          startDateIncludeOtherDays &&
          addDays(startDateIncludeOtherDays, index);

        const formattedTitle = new Intl.DateTimeFormat(locale, {
          weekday: weekdayFormat,
        }).format(dayOfWeek);

        const weekDay = new Intl.DateTimeFormat("en-US", {
          weekday: "long",
        })
          .format(dayOfWeek)
          ?.toLowerCase() as TDay;

        if (renderer !== undefined && typeof renderer === "function") {
          return renderer({
            formattedTitle,
            weekIndex: index,
            weekDay,
          });
        }

        return (
          <div
            key={index}
            className={classJoin([
              `rhmdp-text-center rhmdp-font-bold`,
              className,
            ])}
          >
            {formattedTitle}
          </div>
        );
      })}
    </div>
  );
}

export default DaysOfWeekHeader;
