export type THeaderProps = {
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
