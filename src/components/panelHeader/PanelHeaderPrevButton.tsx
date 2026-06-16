import { useContext } from "react";
import { PANEL_HEADER_PREV_BUTTON } from "../../constants/classNames";
import { classJoin } from "../../utils/classJoin";
import ChevronLeft from "../icons/ChevronLeft";
import { PanelHeaderContext } from "./panelHeaderContext";
import { TPanelHeaderArrowProps } from "./types";

/**
 * Standalone "previous" arrow for `PanelHeader`. Its action depends on the
 * active view (previous month / year / year-page). Must be rendered inside a
 * `PanelHeaderProvider`.
 *
 * @see PanelHeaderProvider
 */
function PanelHeaderPrevButton({
  className,
  styles,
  icon,
}: TPanelHeaderArrowProps) {
  const { handlePrev } = useContext(PanelHeaderContext);

  return (
    <div
      className={classJoin(PANEL_HEADER_PREV_BUTTON, className)}
      style={styles}
      role="button"
      tabIndex={0}
      aria-label="Previous"
      onClick={handlePrev}
      onKeyDown={(e) => {
        if (e.key === "Enter") handlePrev();
      }}
    >
      {icon || <ChevronLeft />}
    </div>
  );
}

export default PanelHeaderPrevButton;
