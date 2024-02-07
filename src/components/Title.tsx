import { useContext } from "react";
import { PickerContext } from "../store/pickerContext";

export type TTitleProps = {
  yearFormat?: "numeric" | "2-digit";
  monthFormat?: "numeric" | "2-digit" | "long" | "short" | "narrow";
};

function Title({ yearFormat = "numeric", monthFormat = "short" }: TTitleProps) {
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
      className="rhmdp-text-2xl rhmdp-font-bold rhmdp-mb-4 rhmdp-cursor-pointer"
      onClick={goToCurrentMonth}
    >
      {formattedDate}
    </div>
  );
}

export default Title;
