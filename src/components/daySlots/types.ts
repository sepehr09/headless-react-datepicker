import { CSSProperties, ReactNode } from "react";

export type TDaySlotsDayRendererArgs = {
  date: Date;
  /**
   * based on calendar config.dayFormat
   */
  formattedDay: string;
  IsToday: boolean;
  isSelectable: boolean;
  isDisabled: boolean;
  isInSelectedRange: boolean;
  isStartOfRange: boolean;
  isEndOfRange: boolean;
  isInWeekend: boolean;
  isSelected: boolean;
  handleClickSlot: (date: Date) => void;
};

export type TDaySlots = {
  dayRenderer?: (args: TDaySlotsDayRendererArgs) => ReactNode;
  onClickSlot?: (date: Date) => void;

  parentClassName?: string;
  parentStyles?: CSSProperties;

  slotParentClassName?: string;
  slotClassName?: string;
  slotParentStyles?: CSSProperties;
  slotStyles?: CSSProperties;

  todayStyles?: CSSProperties;
  todayClassName?: string;
  todayParentStyles?: CSSProperties;
  todayParentClassName?: string;

  disableStyles?: CSSProperties;
  disableClassName?: string;
  disableParentStyles?: CSSProperties;
  disableParentClassName?: string;

  weekendStyles?: CSSProperties;
  weekendClassName?: string;
  weekendParentStyles?: CSSProperties;
  weekendParentClassName?: string;

  selectedStyles?: CSSProperties;
  selectedClassName?: string;
  selectedParentStyles?: CSSProperties;
  selectedParentClassName?: string;

  selectableStyles?: CSSProperties;
  selectableClassName?: string;
  selectableParentStyles?: CSSProperties;
  selectableParentClassName?: string;

  inSelectedRangeStyles?: CSSProperties;
  inSelectedRangeClassName?: string;
  inSelectedRangeParentStyles?: CSSProperties;
  inSelectedRangeParentClassName?: string;

  startOfRangeStyles?: CSSProperties;
  startOfRangeClassName?: string;
  startOfRangeParentStyles?: CSSProperties;
  startOfRangeParentClassName?: string;

  endOfRangeStyles?: CSSProperties;
  endOfRangeClassName?: string;
  endOfRangeParentStyles?: CSSProperties;
  endOfRangeParentClassName?: string;
};
