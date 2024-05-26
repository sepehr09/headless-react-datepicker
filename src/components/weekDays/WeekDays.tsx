import { useContext } from "react";
import { defaultWeekStartsOn } from "../../constants/defaults";
import { bindWeekDayToNumber } from "../../constants/weekdays";
import { PickerContext } from "../../store/pickerContext";
import { TDay } from "../../types";
import { classJoin } from "../../utils/classJoin";
import { getWeekDayName } from "../../utils/dateUtils";
import { TWeekDaysProps } from "./types";

function WeekDays({ renderer, className, rootClassName }: TWeekDaysProps) {
  const { config } = useContext(PickerContext);
  const {
    locale,
    weekdayFormat,
    weekStartsOn = defaultWeekStartsOn,
  } = config || {};

  return (
    <div className={classJoin(["rhmdp-grid rhmdp-grid-cols-7", rootClassName])}>
      {Array.from({ length: 7 }).map((_, index) => {
        const dayIndex = (index + bindWeekDayToNumber[weekStartsOn]) % 7;

        const formattedTitle = getWeekDayName(dayIndex, {
          locale,
          weekdayFormat: weekdayFormat,
        });

        const weekDay = getWeekDayName(dayIndex, {
          locale: "en-US",
          weekdayFormat: "long",
        })?.toLowerCase() as TDay;

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

export default WeekDays;
