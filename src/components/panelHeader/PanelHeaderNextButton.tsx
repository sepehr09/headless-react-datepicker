import { useContext } from "react";
import { PANEL_HEADER_NEXT_BUTTON } from "../../constants/classNames";
import { classJoin } from "../../utils/classJoin";
import ChevronRight from "../icons/ChevronRight";
import { PanelHeaderContext } from "./panelHeaderContext";
import { TPanelHeaderArrowProps } from "./types";

/**
 * Standalone "next" arrow for `PanelHeader`. Its action depends on the active
 * view (next month / year / year-page). Must be rendered inside a
 * `PanelHeaderProvider`.
 *
 * @see PanelHeaderProvider
 */
function PanelHeaderNextButton({
  className,
  styles,
  icon,
}: TPanelHeaderArrowProps) {
  const { handleNext } = useContext(PanelHeaderContext);

  return (
    <div
      className={classJoin(PANEL_HEADER_NEXT_BUTTON, className)}
      style={styles}
      role="button"
      tabIndex={0}
      aria-label="Next"
      onClick={handleNext}
      onKeyDown={(e) => {
        if (e.key === "Enter") handleNext();
      }}
    >
      {icon || <ChevronRight />}
    </div>
  );
}

export default PanelHeaderNextButton;
