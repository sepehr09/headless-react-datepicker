import { useContext } from "react";
import { PANEL_HEADER_LABEL } from "../../constants/classNames";
import { PickerContext } from "../../store/pickerContext";
import { classJoin } from "../../utils/classJoin";
import { PanelHeaderContext } from "./panelHeaderContext";
import { TPanelHeaderLabelProps } from "./types";

/**
 * Standalone center label(s) for `PanelHeader`. It changes with the active view
 * and toggles between views on click:
 *   - `"days"`   -> month + year labels (open months / years view)
 *   - `"months"` -> the year label (open years view)
 *   - `"years"`  -> the `start - end` page range (static)
 *
 * Must be rendered inside a `PanelHeaderProvider`.
 *
 * @see PanelHeaderProvider
 */
function PanelHeaderLabel({ className, styles }: TPanelHeaderLabelProps) {
  const { monthInTheCalendar, yearInTheCalendar, monthsList } =
    useContext(PickerContext);
  const { view, setView, openYearsView, yearPageStart, yearsPerPage } =
    useContext(PanelHeaderContext);

  const labelBaseClassName = classJoin(PANEL_HEADER_LABEL, className);
  const currentMonthLabel =
    monthsList?.find((m) => m.value === monthInTheCalendar)?.label ?? "";

  if (view === "days") {
    return (
      <div style={{ display: "flex", gap: "0.25rem", alignItems: "center" }}>
        <span
          className={labelBaseClassName}
          style={styles}
          role="button"
          tabIndex={0}
          onClick={() => setView("months")}
        >
          {currentMonthLabel}
        </span>
        <span
          className={labelBaseClassName}
          style={styles}
          role="button"
          tabIndex={0}
          onClick={openYearsView}
        >
          {yearInTheCalendar}
        </span>
      </div>
    );
  }

  if (view === "months") {
    return (
      <span
        className={labelBaseClassName}
        style={styles}
        role="button"
        tabIndex={0}
        onClick={openYearsView}
      >
        {yearInTheCalendar}
      </span>
    );
  }

  const lastYear = yearPageStart + yearsPerPage - 1;
  return (
    <span className={labelBaseClassName} style={styles}>
      {yearPageStart} - {lastYear}
    </span>
  );
}

export default PanelHeaderLabel;
