import { ReactNode } from "react";

/**
 * The three views the panel can switch between.
 */
export type TPanelView = "days" | "months" | "years";

export type TPanelHeaderProps = {
  /**
   * The day view content (typically `<WeekDays />` and `<DaySlots />`).
   * It is shown when the panel is in the `"days"` view and replaced by the
   * month/year grids in the other views.
   */
  children?: ReactNode;

  /**
   * How many years are shown per page in the year grid. The prev/next arrows
   * move the visible range by this amount.
   * @default 12
   */
  yearsPerPage?: number;

  /**
   * Replace the previous (left) arrow icon.
   */
  leftIcon?: ReactNode;

  /**
   * Replace the next (right) arrow icon.
   */
  rightIcon?: ReactNode;

  /**
   * the root className of the panel header
   */
  rootClassName?: string;

  /**
   * the root css styles of the panel header
   */
  rootStyles?: React.CSSProperties;

  /**
   * className of the previous button (left button)
   */
  prevButtonClassName?: string;

  /**
   * css styles of the previous button (left button)
   */
  prevButtonStyles?: React.CSSProperties;

  /**
   * className of the next button (right button)
   */
  nextButtonClassName?: string;

  /**
   * css styles of the next button (right button)
   */
  nextButtonStyles?: React.CSSProperties;

  /**
   * className of the center label(s) (month name / year that toggle the views)
   */
  labelClassName?: string;

  /**
   * css styles of the center label(s)
   */
  labelStyles?: React.CSSProperties;

  /**
   * className of the month/year grid container
   */
  gridClassName?: string;

  /**
   * css styles of the month/year grid container
   */
  gridStyles?: React.CSSProperties;

  /**
   * className of a single month/year cell
   */
  cellClassName?: string;

  /**
   * css styles of a single month/year cell
   */
  cellStyles?: React.CSSProperties;

  /**
   * className of the currently selected month/year cell
   */
  selectedCellClassName?: string;

  /**
   * css styles of the currently selected month/year cell
   */
  selectedCellStyles?: React.CSSProperties;
};

/* -------------------------------------------------------------------------- */
/*         Standalone panel-header parts (compose them in any order)          */
/* -------------------------------------------------------------------------- */

/**
 * Props for `PanelHeaderProvider`, which holds the shared view state for the
 * standalone panel-header parts.
 */
export type TPanelHeaderProviderProps = {
  /** The parts to wrap (arrows / label / body), in any layout. */
  children?: ReactNode;

  /**
   * How many years are shown per page in the year grid. The prev/next arrows
   * move the visible range by this amount.
   * @default 12
   */
  yearsPerPage?: number;
};

/**
 * Props for the standalone `PanelHeaderPrevButton` / `PanelHeaderNextButton`
 * arrows.
 */
export type TPanelHeaderArrowProps = {
  /** className of the arrow button */
  className?: string;

  /** css styles of the arrow button */
  styles?: React.CSSProperties;

  /** Replace the default chevron icon. */
  icon?: ReactNode;
};

/**
 * Props for the standalone `PanelHeaderLabel`.
 */
export type TPanelHeaderLabelProps = {
  /** className of the center label(s) */
  className?: string;

  /** css styles of the center label(s) */
  styles?: React.CSSProperties;
};

/**
 * Props for the standalone `PanelHeaderBody` (day content / month grid / year
 * grid).
 */
export type TPanelHeaderBodyProps = {
  /** The day-view content, shown in the `"days"` view (e.g. WeekDays/DaySlots). */
  children?: ReactNode;

  /** className of the month/year grid container */
  gridClassName?: string;

  /** css styles of the month/year grid container */
  gridStyles?: React.CSSProperties;

  /** className of a single month/year cell */
  cellClassName?: string;

  /** css styles of a single month/year cell */
  cellStyles?: React.CSSProperties;

  /** className of the currently selected month/year cell */
  selectedCellClassName?: string;

  /** css styles of the currently selected month/year cell */
  selectedCellStyles?: React.CSSProperties;
};
