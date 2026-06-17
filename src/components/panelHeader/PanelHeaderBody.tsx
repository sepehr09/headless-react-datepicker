import { useContext } from "react";
import {
  PANEL_HEADER_CELL,
  PANEL_HEADER_CELL_SELECTED,
  PANEL_HEADER_GRID,
} from "../../constants/classNames";
import { PickerContext } from "../../store/pickerContext";
import { classJoin } from "../../utils/classJoin";
import { PanelHeaderContext } from "./panelHeaderContext";
import { TPanelHeaderBodyProps } from "./types";

/**
 * Standalone body for `PanelHeader`. It renders the day-view content
 * (`children`, e.g. `WeekDays` / `DaySlots`) in the `"days"` view, and swaps it
 * for the 12-month grid or the paginated year grid in the other views.
 *
 * Must be rendered inside a `PanelHeaderProvider`.
 *
 * @see PanelHeaderProvider
 */
function PanelHeaderBody({
  children,
  gridClassName,
  gridStyles,
  cellClassName,
  cellStyles,
  selectedCellClassName,
  selectedCellStyles,
}: TPanelHeaderBodyProps) {
  const {
    goToMonth,
    goToYear,
    monthInTheCalendar,
    yearInTheCalendar,
    monthsList,
  } = useContext(PickerContext);
  const { view, setView, yearPageStart, yearsPerPage } =
    useContext(PanelHeaderContext);

  const cellClass = (active: boolean) =>
    classJoin(
      PANEL_HEADER_CELL,
      active && PANEL_HEADER_CELL_SELECTED,
      cellClassName,
      active ? selectedCellClassName : ""
    );

  const cellStyle = (active: boolean): React.CSSProperties => ({
    ...cellStyles,
    ...(active ? selectedCellStyles : {}),
  });

  if (view === "days") return <>{children}</>;

  if (view === "months") {
    return (
      <div
        className={classJoin(PANEL_HEADER_GRID, gridClassName)}
        style={gridStyles}
      >
        {monthsList?.map((month) => {
          const active = month.value === monthInTheCalendar;
          return (
            <div
              key={month.value}
              className={cellClass(active)}
              style={cellStyle(active)}
              role="button"
              tabIndex={0}
              onClick={() => {
                goToMonth(month.value);
                setView("days");
              }}
            >
              {month.label}
            </div>
          );
        })}
      </div>
    );
  }

  // years view
  const years = Array.from(
    { length: yearsPerPage },
    (_, i) => yearPageStart + i
  );
  return (
    <div
      className={classJoin(PANEL_HEADER_GRID, gridClassName)}
      style={gridStyles}
    >
      {years.map((year) => {
        const active = year === yearInTheCalendar;
        return (
          <div
            key={year}
            className={cellClass(active)}
            style={cellStyle(active)}
            role="button"
            tabIndex={0}
            onClick={() => {
              goToYear(year);
              setView("months");
            }}
          >
            {year}
          </div>
        );
      })}
    </div>
  );
}

export default PanelHeaderBody;
