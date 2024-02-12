import { ReactNode } from "react";
import { TDay } from "../../types";

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
  className?: string;
  rootClassName?: string;
};
