import { useContext } from "react";
import { defaultWeekStartsOn } from "../../constants/defaults";
import { bindWeekDayToNumber } from "../../constants/weekdays";
import { PickerContext } from "../../store/pickerContext";
import { TDay } from "../../types";
import {
  WEEK_DAYS,
  WEEK_DAYS_DAY,
  WEEK_DAYS_DAY_WEEKEND,
} from "../../constants/classNames";
import { classJoin } from "../../utils/classJoin";
import { getWeekDayName } from "../../utils/dateUtils";
import { TWeekDaysProps } from "./types";

function WeekDays({
  renderer,
  className,
  rootClassName,
  style,
  rootStyle,
}: TWeekDaysProps) {
  const { config } = useContext(PickerContext);
  const {
    locale,
    weekdayFormat,
    weekStartsOn = defaultWeekStartsOn,
    weekends,
  } = config || {};

  return (
    <div
      className={classJoin(WEEK_DAYS, rootClassName)}
      style={rootStyle}
    >
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

        const isWeekend = !!weekends?.includes(weekDay);

        return (
          <div
            key={index}
            className={classJoin(
              WEEK_DAYS_DAY,
              `${WEEK_DAYS_DAY}--${weekDay}`,
              isWeekend && WEEK_DAYS_DAY_WEEKEND,
              className
            )}
            style={style}
          >
            {formattedTitle}
          </div>
        );
      })}
    </div>
  );
}

export default WeekDays;
