import { useContext } from "react";
import { PickerContext } from "../../store/pickerContext";
import { TITLE } from "../../constants/classNames";
import { classJoin } from "../../utils/classJoin";
import { addCalendarMonths } from "../../utils/datePicker";
import { TTitleProps } from "./types";

function Title({
  yearFormat = "numeric",
  monthFormat = "short",
  monthOffset,
  className,
  style,
}: TTitleProps) {
  const {
    goToCurrentMonth,
    firstDayOfMonth,
    calendar = "persian",
    config,
  } = useContext(PickerContext);

  const { locale } = config || {};

  /**
   * When `monthOffset` is set, show the title of a month other than the one in
   * the context (offset by `monthOffset` months) so it can label a
   * side-by-side calendar.
   */
  const displayedDate =
    monthOffset && firstDayOfMonth
      ? addCalendarMonths(firstDayOfMonth, monthOffset, calendar)
      : firstDayOfMonth;

  const formattedDate = Intl.DateTimeFormat(locale, {
    year: yearFormat,
    month: monthFormat,
    calendar,
  }).format(displayedDate);

  return (
    <div
      className={classJoin(TITLE, className)}
      style={style}
      tabIndex={0}
      onClick={goToCurrentMonth}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          goToCurrentMonth();
        }
      }}
      aria-label="Go to current month"
    >
      {formattedDate}
    </div>
  );
}

export default Title;
