import { addDays } from "date-fns";
import { ReactNode, useContext } from "react";
import { PickerContext } from "../store/pickerContext";
import { TDay } from "../types";

export type TDaysOfWeekHeaderRendererArgs = {
  /**
   * based on calendar config.weekdayFormat
   */
  formattedTitle: string;
  weekIndex: number;
  weekDay: TDay;
};

export type TDaysOfWeekHeader = {
  renderer?: (args: TDaysOfWeekHeaderRendererArgs) => ReactNode;
};

function DaysOfWeekHeader({ renderer }: TDaysOfWeekHeader) {
  const { startDateIncludeOtherDays, config } = useContext(PickerContext);
  const { locale, weekdayFormat } = config || {};

  return (
    <div className="rhmdp-grid rhmdp-grid-cols-7">
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
          <div key={index} className={`rhmdp-text-center rhmdp-font-bold`}>
            {formattedTitle}
          </div>
        );
      })}
    </div>
  );
}

export default DaysOfWeekHeader;
