import { useContext, useState } from "react";
import {
  PANEL_HEADER,
  PANEL_HEADER_CELL,
  PANEL_HEADER_CELL_SELECTED,
  PANEL_HEADER_GRID,
  PANEL_HEADER_LABEL,
  PANEL_HEADER_NEXT_BUTTON,
  PANEL_HEADER_PREV_BUTTON,
} from "../../constants/classNames";
import { PickerContext } from "../../store/pickerContext";
import { classJoin } from "../../utils/classJoin";
import ChevronLeft from "../icons/ChevronLeft";
import ChevronRight from "../icons/ChevronRight";
import { TPanelHeaderProps, TPanelView } from "./types";

/**
 * A self-contained alternative to `Header` that shows the month and year
 * pickers inside the calendar area instead of using `<select>` dropdowns:
 *   - `"months"` view -> a grid of all 12 months
 *   - `"years"` view  -> a paginated grid of years with prev/next page arrows
 *
 * It owns its own view state, so it is fully drop-in: wrap the day-view content
 * (`<WeekDays />` / `<DaySlots />`) as its children and it swaps them for the
 * month/year grids while navigating.
 *
 * @example
 * <DatePickerProvider>
 *   <PanelHeader>
 *     <WeekDays />
 *     <DaySlots />
 *   </PanelHeader>
 * </DatePickerProvider>
 */
function PanelHeader({
  children,
  yearsPerPage = 12,
  leftIcon,
  rightIcon,
  rootClassName,
  rootStyles,
  prevButtonClassName,
  prevButtonStyles,
  nextButtonClassName,
  nextButtonStyles,
  labelClassName,
  labelStyles,
  gridClassName,
  gridStyles,
  cellClassName,
  cellStyles,
  selectedCellClassName,
  selectedCellStyles,
}: TPanelHeaderProps) {
  const {
    goToNextMonth,
    goToPrevMonth,
    goToMonth,
    goToYear,
    monthInTheCalendar,
    yearInTheCalendar,
    monthsList,
  } = useContext(PickerContext);

  const fallbackYear = new Date().getFullYear();
  const currentYear = yearInTheCalendar ?? fallbackYear;
  const halfPage = Math.floor(yearsPerPage / 2);

  const [view, setView] = useState<TPanelView>("days");
  // first year shown in the current year-picker page
  const [yearPageStart, setYearPageStart] = useState(
    () => currentYear - halfPage
  );

  const currentMonthLabel =
    monthsList?.find((m) => m.value === monthInTheCalendar)?.label ?? "";

  const openYearsView = () => {
    setYearPageStart(currentYear - halfPage);
    setView("years");
  };

  /** Prev/next arrows mean different things depending on the active view. */
  const handlePrev = () => {
    if (view === "days") goToPrevMonth?.();
    else if (view === "months") goToYear(currentYear - 1);
    else setYearPageStart((s) => s - yearsPerPage);
  };
  const handleNext = () => {
    if (view === "days") goToNextMonth?.();
    else if (view === "months") goToYear(currentYear + 1);
    else setYearPageStart((s) => s + yearsPerPage);
  };

  const prevButton = (
    <div
      className={classJoin(
        PANEL_HEADER_PREV_BUTTON,
        prevButtonClassName
      )}
      style={prevButtonStyles}
      role="button"
      tabIndex={0}
      aria-label="Previous"
      onClick={handlePrev}
      onKeyDown={(e) => {
        if (e.key === "Enter") handlePrev();
      }}
    >
      {leftIcon || <ChevronLeft />}
    </div>
  );

  const nextButton = (
    <div
      className={classJoin(
        PANEL_HEADER_NEXT_BUTTON,
        nextButtonClassName
      )}
      style={nextButtonStyles}
      role="button"
      tabIndex={0}
      aria-label="Next"
      onClick={handleNext}
      onKeyDown={(e) => {
        if (e.key === "Enter") handleNext();
      }}
    >
      {rightIcon || <ChevronRight />}
    </div>
  );

  const labelBaseClassName = classJoin(
    PANEL_HEADER_LABEL,
    labelClassName
  );

  /** Center label changes per view: month+year, the year, or the page range. */
  const renderHeaderCenter = () => {
    if (view === "days") {
      return (
        <div style={{ display: "flex", gap: "0.25rem", alignItems:"center" }}>
          <span
            className={labelBaseClassName}
            style={labelStyles}
            role="button"
            tabIndex={0}
            onClick={() => setView("months")}
          >
            {currentMonthLabel}
          </span>
          <span
            className={labelBaseClassName}
            style={labelStyles}
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
          style={labelStyles}
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
      <span
        className={classJoin(
          PANEL_HEADER_LABEL,
          labelClassName
        )}
        style={labelStyles}
      >
        {yearPageStart} - {lastYear}
      </span>
    );
  };

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

  const renderBody = () => {
    if (view === "days") return children;

    if (view === "months") {
      return (
        <div
          className={classJoin(
            PANEL_HEADER_GRID,
            gridClassName
          )}
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
  };

  return (
    <>
      <div
        className={classJoin(
          PANEL_HEADER,
          `${PANEL_HEADER}--${view}`,
          rootClassName
        )}
        style={rootStyles}
      >
        {prevButton}
        {renderHeaderCenter()}
        {nextButton}
      </div>
      {renderBody()}
    </>
  );
}

export default PanelHeader;
