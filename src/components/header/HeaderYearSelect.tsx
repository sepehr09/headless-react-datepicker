import { useContext } from "react";
import {
  HEADER_YEAR_OPTION,
  HEADER_YEAR_OPTION_SELECTED,
  HEADER_YEAR_SELECT,
} from "../../constants/classNames";
import { PickerContext } from "../../store/pickerContext";
import { classJoin } from "../../utils/classJoin";
import { THeaderYearSelectProps } from "./types";

/**
 * Standalone year `<select>` dropdown extracted from `Header`. Render it on its
 * own to build a header with a custom layout (e.g. month/year on the left,
 * arrows on the right). It shares the same class hooks and behaviour as the year
 * dropdown inside `Header`.
 *
 * @see HeaderPrevButton
 */
function HeaderYearSelect({
  className,
  styles,
  optionClassName,
  optionStyles,
  selectedOptionClassName,
  selectedOptionStyles,
}: THeaderYearSelectProps) {
  const { goToYear, yearInTheCalendar, yearsList } = useContext(PickerContext);

  return (
    <select
      onChange={(v) => {
        goToYear(parseInt(v.target.value, 10));
      }}
      className={classJoin(HEADER_YEAR_SELECT, className)}
      style={styles}
      value={yearInTheCalendar}
    >
      {yearsList?.map((year) => (
        <option
          key={year}
          value={year}
          style={{
            ...optionStyles,
            ...(year === yearInTheCalendar ? selectedOptionStyles : {}),
          }}
          className={classJoin(
            HEADER_YEAR_OPTION,
            year === yearInTheCalendar && HEADER_YEAR_OPTION_SELECTED,
            optionClassName,
            year === yearInTheCalendar ? selectedOptionClassName : ""
          )}
        >
          {year}
        </option>
      ))}
    </select>
  );
}

export default HeaderYearSelect;
