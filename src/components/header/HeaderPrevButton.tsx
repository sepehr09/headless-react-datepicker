import { useContext } from "react";
import { HEADER_PREV_BUTTON } from "../../constants/classNames";
import { PickerContext } from "../../store/pickerContext";
import { classJoin } from "../../utils/classJoin";
import ChevronLeft from "../icons/ChevronLeft";
import { THeaderArrowProps } from "./types";

/**
 * Standalone "previous month" arrow extracted from `Header`. Render it on its
 * own to build a header with a custom layout (e.g. both arrows together on one
 * side). It shares the same `rhmdp-header__prevButton` class hook and behaviour
 * as the arrow inside `Header`.
 *
 * @example
 * <DatePickerProvider>
 *   <div style={{ display: "flex", justifyContent: "space-between" }}>
 *     <div>
 *       <HeaderMonthSelect />
 *       <HeaderYearSelect />
 *     </div>
 *     <div>
 *       <HeaderPrevButton />
 *       <HeaderNextButton />
 *     </div>
 *   </div>
 * </DatePickerProvider>
 */
function HeaderPrevButton({
  navigationStep = 1,
  className,
  styles,
  icon,
}: THeaderArrowProps) {
  const { goToPrevMonth } = useContext(PickerContext);

  return (
    <div
      className={classJoin(HEADER_PREV_BUTTON, className)}
      style={styles}
      role="button"
      tabIndex={0}
      aria-label="Previous Month"
      onClick={() => goToPrevMonth?.(navigationStep)}
      onKeyDown={(e) => {
        if (e.key === "Enter") goToPrevMonth?.(navigationStep);
      }}
    >
      {icon || <ChevronLeft />}
    </div>
  );
}

export default HeaderPrevButton;
