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
   * className of the title
   */
  className?: string;

  /**
   * style of the title
   */
  style?: React.CSSProperties;
};
