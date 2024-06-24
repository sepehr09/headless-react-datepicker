import { useContext } from "react";
import { PickerContext } from "../../store/pickerContext";
import { classJoin } from "../../utils/classJoin";
import { TTitleProps } from "./types";

function Title({
  yearFormat = "numeric",
  monthFormat = "short",
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

  const formattedDate = Intl.DateTimeFormat(locale, {
    year: yearFormat,
    month: monthFormat,
    calendar,
  }).format(firstDayOfMonth);

  return (
    <div
      className={classJoin(
        "rhmdp-text-2xl rhmdp-font-bold rhmdp-cursor-pointer",
        className
      )}
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
