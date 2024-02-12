import { ReactNode } from "react";
import { TDay } from "../../types";

export type TWeekDaysRendererArgs = {
  /**
   * based on calendar config.weekdayFormat
   */
  formattedTitle: string;
  weekIndex: number;
  weekDay: TDay;
};

export type TWeekDaysProps = {
  renderer?: (args: TWeekDaysRendererArgs) => ReactNode;
  className?: string;
  rootClassName?: string;
};
