import { Day } from "date-fns";

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
export type TDatePickerProps = {
  defaultStartDate?: Date;
  initialValue?: Date | Date[];
  config?: TCalendarConfig;
  isRange?: boolean;
  calendar?: TCalendar;
};

export type TDay = Day;

export type TCalendarConfig = {
  /**
   * The first day of the week.
   * - 1 = Monday
   * - 2 = Tuesday
   * - 3 = Wednesday
   * - 4 = Thursday
   * - 5 = Friday
   * - 6 = Saturday
   * - 7 = Sunday
   * @default 6
   */
  weekStartsOn?: TDay;

  /**
   * @default "en-US"
   */
  locale?: string;

  /**
   * @default false
   */
  showOtherDays?: boolean;

  /**
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
};
