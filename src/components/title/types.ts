export type TTitleProps = {
  /**
   * @default "numeric"
   */
  yearFormat?: "numeric" | "2-digit";

  /**
   * @default "short"
   */
  monthFormat?: "numeric" | "2-digit" | "long" | "short" | "narrow";

  /**
   * Render the title of a different month than the one currently in the
   * calendar, offset by this number of months. Useful for showing two (or more)
   * calendars side-by-side (Airbnb-style).
   * @example 1 // title of the month after the current one
   * @default 0
   */
  monthOffset?: number;

  /**
   * className of the title
   */
  className?: string;

  /**
   * style of the title
   */
  style?: React.CSSProperties;
};
