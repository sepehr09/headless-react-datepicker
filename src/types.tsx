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

/**
 * The day of the week type alias. Unlike the date (the number of days since
 * the beginning of the month), which begins with 1 and is dynamic (can go up to
 * 28, 30, or 31), the day starts with 0 and static (always ends at 6). Look at
 * it as an index in an array where Sunday is the first element and Saturday
 * is the last.
 */
export type Day = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export type TMonthListItem = {
  label: string;
  value: number;
};

export type TDatePickerOnChange<IsRange extends boolean = false> = (
  value: IsRange extends true ? Date[] : Date
) => void;

export type TDatePickerValue<IsRange extends boolean = false> =
  | (IsRange extends true ? Date[] : Date)
  | undefined;

export type TDatePickerProps<IsRange extends boolean = false> = {
  children?: React.ReactNode;

  /**
   * The initial value of the date picker.
   */
  initialValue?: TDatePickerValue<IsRange>;

  /**
   * The value of the date picker (controlled mode)
   */
  value?: TDatePickerValue<IsRange>;

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
  isRange?: IsRange;

  /**
   * The calendar to use.
   * @default "gregory"
   */
  calendar?: TCalendar;

  /**
   * on calendar selected date change
   */
  onChange?: TDatePickerOnChange<IsRange>;
};

export type TCalendarConfig = {
  /**
   * The first day of the week.
   * @default "Saturday"
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

  /**
   * If user select a date before the previous selected date, it will be considered as a range or start from beginning.
   * @default false
   */
  allowBackwardRange?: boolean;
};
