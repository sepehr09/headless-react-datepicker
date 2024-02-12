export type TCalendar =
  /**
   * @default "gregory"
   */
  | "gregory"
  | "persian"
  | "islamic"
  | "islamic-umalqura"
  | "islamic-tbla"
  | "islamic-civil"
  | "islamic-rgsa"
  | "iso8601"
  | "japanese"
  | "islamicc"
  | "roc"
  | "chinese"
  | "indian"
  | "buddhist"
  | "coptic"
  | "dangi"
  | "ethioaa"
  | "ethiopic"
  | "hebrew";

export type TDay =
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday"
  | "sunday";

export type TMonthListItem = {
  label: string;
  value: number;
};

export type TDatePickerProps = {
  /**
   * The initial value of the date picker.
   */
  initialValue?: Date | Date[];

  /**
   * The default start date. Useful when you want to be on different month or year despite the initial value.
   * @default initialValue || new Date()
   */
  defaultStartDate?: Date;

  /**
   * The configuration for the date picker.
   * @type TCalendarConfig
   */
  config?: TCalendarConfig;

  /**
   * Indicates whether the date picker is a range picker.
   * @default false
   */
  isRange?: boolean;

  /**
   * The calendar to use.
   * @default "gregory"
   */
  calendar?: TCalendar;
  children?: React.ReactNode;
};

export type TCalendarConfig = {
  /**
   * The first day of the week.
   * @default "monday"
   */
  weekStartsOn?: TDay;

  /**
   * The locale to use.
   * @default "en-US"
   */
  locale?: string;

  /**
   * Show other days from the previous and next month or not.
   * @default false
   */
  showOtherDays?: boolean;

  /**
   * Allow selecting other days from the previous and next month or not.
   * @default false
   */
  otherDaysSelectable?: boolean;

  /**
   * @default "narrow"
   */
  weekdayFormat?: "long" | "short" | "narrow" | undefined;

  /**
   * @default "numeric"
   */
  dayFormat?: "numeric" | "2-digit" | undefined;

  /**
   * @default "last 10 years"
   */
  yearRangeFrom?: number;

  /**
   * @default "Current year"
   */
  yearRangeTo?: number;

  /**
   * Prevent selecting dates before this date.
   */
  maxDate?: Date;

  /**
   * Prevent selecting dates after this date.
   */
  minDate?: Date;

  /**
   * Specify which days of the week are holidays.
   */
  weekends?: TDay[];

  /**
   * Allow selecting weekends or not.
   * @default true
   */
  weekendSelectable?: boolean;
};
