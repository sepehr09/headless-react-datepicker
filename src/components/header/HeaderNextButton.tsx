import { useContext } from "react";
import { HEADER_NEXT_BUTTON } from "../../constants/classNames";
import { PickerContext } from "../../store/pickerContext";
import { classJoin } from "../../utils/classJoin";
import ChevronRight from "../icons/ChevronRight";
import { THeaderArrowProps } from "./types";

/**
 * Standalone "next month" arrow extracted from `Header`. Render it on its own to
 * build a header with a custom layout (e.g. both arrows together on one side).
 * It shares the same `rhmdp-header__nextButton` class hook and behaviour as the
 * arrow inside `Header`.
 *
 * @see HeaderPrevButton
 */
function HeaderNextButton({
  navigationStep = 1,
  className,
  styles,
  icon,
}: THeaderArrowProps) {
  const { goToNextMonth } = useContext(PickerContext);

  return (
    <div
      className={classJoin(HEADER_NEXT_BUTTON, className)}
      style={styles}
      role="button"
      tabIndex={0}
      aria-label="Next Month"
      onClick={() => goToNextMonth?.(navigationStep)}
      onKeyDown={(e) => {
        if (e.key === "Enter") goToNextMonth?.(navigationStep);
      }}
    >
      {icon || <ChevronRight />}
    </div>
  );
}

export default HeaderNextButton;
