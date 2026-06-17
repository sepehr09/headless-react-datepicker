export type THeaderProps = {
  /**
   * Number of months the previous/next arrows move per click. Set to `2` when
   * showing two calendars side-by-side so both move together.
   * @default 1
   */
  navigationStep?: number;

  /**
   * the root css styles of the header
   */
  rootStyles?: React.CSSProperties;

  /**
   * the root className of the header
   */
  rootClassName?: string;

  /**
   * css styles of the previous button (left button)
   */
  prevButtonStyles?: React.CSSProperties;

  /**
   * className of the previous button (left button)
   */
  prevButtonClassName?: string;

  /**
   * css styles of the next button (right button)
   */
  nextButtonStyles?: React.CSSProperties;

  /**
   * className of the next button (right button)
   */
  nextButtonClassName?: string;

  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;

  /**
   * className of the month select dropdown
   */
  monthSelectClassName?: string;

  /**
   * css styles of the month select dropdown
   */
  monthSelectStyles?: React.CSSProperties;

  /**
   * className of the month Options in the dropdown
   */
  monthOptionClassName?: string;

  /**
   * css styles of the month Options in the dropdown
   */
  monthOptionStyles?: React.CSSProperties;

  /**
   * className the selected option in the month dropdown
   */
  monthSelectedOptionClassName?: string;

  /**
   * css styles the selected option in the month dropdown
   */
  monthSelectedOptionStyles?: React.CSSProperties;

  /**
   *  className of the year select dropdown
   */
  yearSelectClassName?: string;

  /**
   * css styles of the year select dropdown
   */
  yearSelectStyles?: React.CSSProperties;

  /**
   * className of the year Options in the dropdown
   */
  yearOptionClassName?: string;

  /**
   * css styles of the year Options in the dropdown
   */
  yearOptionStyles?: React.CSSProperties;

  /**
   * className the selected option in the year dropdown
   */
  yearSelectedOptionClassName?: string;

  /**
   * css styles the selected option in the year dropdown
   */
  yearSelectedOptionStyles?: React.CSSProperties;
};

/* -------------------------------------------------------------------------- */
/*            Standalone header parts (compose them in any order)             */
/* -------------------------------------------------------------------------- */

/**
 * Props for the standalone `HeaderPrevButton` / `HeaderNextButton` arrows.
 * They share the same class hooks and behaviour as the arrows inside `Header`,
 * but can be placed anywhere so you can build a header with a custom layout
 * (e.g. both arrows on the right, month/year on the left).
 */
export type THeaderArrowProps = {
  /**
   * Number of months the arrow moves per click. Set to `2` when showing two
   * calendars side-by-side so both move together.
   * @default 1
   */
  navigationStep?: number;

  /**
   * className of the arrow button
   */
  className?: string;

  /**
   * css styles of the arrow button
   */
  styles?: React.CSSProperties;

  /**
   * Replace the default chevron icon.
   */
  icon?: React.ReactNode;
};

/**
 * Props for the standalone `HeaderMonthSelect` dropdown.
 */
export type THeaderMonthSelectProps = {
  /**
   * className of the month select dropdown
   */
  className?: string;

  /**
   * css styles of the month select dropdown
   */
  styles?: React.CSSProperties;

  /**
   * className of the month Options in the dropdown
   */
  optionClassName?: string;

  /**
   * css styles of the month Options in the dropdown
   */
  optionStyles?: React.CSSProperties;

  /**
   * className the selected option in the month dropdown
   */
  selectedOptionClassName?: string;

  /**
   * css styles the selected option in the month dropdown
   */
  selectedOptionStyles?: React.CSSProperties;
};

/**
 * Props for the standalone `HeaderYearSelect` dropdown.
 */
export type THeaderYearSelectProps = {
  /**
   * className of the year select dropdown
   */
  className?: string;

  /**
   * css styles of the year select dropdown
   */
  styles?: React.CSSProperties;

  /**
   * className of the year Options in the dropdown
   */
  optionClassName?: string;

  /**
   * css styles of the year Options in the dropdown
   */
  optionStyles?: React.CSSProperties;

  /**
   * className the selected option in the year dropdown
   */
  selectedOptionClassName?: string;

  /**
   * css styles the selected option in the year dropdown
   */
  selectedOptionStyles?: React.CSSProperties;
};
