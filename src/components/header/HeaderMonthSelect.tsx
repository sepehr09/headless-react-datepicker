import { useContext } from "react";
import {
  HEADER_MONTH_OPTION,
  HEADER_MONTH_OPTION_SELECTED,
  HEADER_MONTH_SELECT,
} from "../../constants/classNames";
import { PickerContext } from "../../store/pickerContext";
import { classJoin } from "../../utils/classJoin";
import { THeaderMonthSelectProps } from "./types";

/**
 * Standalone month `<select>` dropdown extracted from `Header`. Render it on its
 * own to build a header with a custom layout (e.g. month/year on the left,
 * arrows on the right). It shares the same class hooks and behaviour as the
 * month dropdown inside `Header`.
 *
 * @see HeaderPrevButton
 */
function HeaderMonthSelect({
  className,
  styles,
  optionClassName,
  optionStyles,
  selectedOptionClassName,
  selectedOptionStyles,
}: THeaderMonthSelectProps) {
  const { goToMonth, monthInTheCalendar, monthsList } =
    useContext(PickerContext);

  return (
    <select
      onChange={(v) => {
        goToMonth(parseInt(v.target.value, 10));
      }}
      style={styles}
      className={classJoin(HEADER_MONTH_SELECT, className)}
      value={monthInTheCalendar}
    >
      {monthsList?.map((month) => (
        <option
          key={month.value}
          value={month.value}
          style={{
            ...optionStyles,
            ...(month.value === monthInTheCalendar ? selectedOptionStyles : {}),
          }}
          className={classJoin(
            HEADER_MONTH_OPTION,
            month.value === monthInTheCalendar && HEADER_MONTH_OPTION_SELECTED,
            optionClassName,
            month.value === monthInTheCalendar ? selectedOptionClassName : ""
          )}
        >
          {month.label}
        </option>
      ))}
    </select>
  );
}

export default HeaderMonthSelect;
