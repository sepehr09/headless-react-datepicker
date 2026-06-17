import { useContext, useState } from "react";
import { PickerContext } from "../../store/pickerContext";
import { PanelHeaderContext } from "./panelHeaderContext";
import { TPanelHeaderProviderProps, TPanelView } from "./types";

/**
 * Provides the shared view state (days / months / years + year-page paging) for
 * the standalone `PanelHeader` parts. Wrap `PanelHeaderPrevButton`,
 * `PanelHeaderNextButton`, `PanelHeaderLabel` and `PanelHeaderBody` with this to
 * compose a panel header in any order/layout.
 *
 * The default `PanelHeader` uses this internally, so you only need it when
 * laying out the parts yourself.
 *
 * @example
 * <DatePickerProvider>
 *   <PanelHeaderProvider>
 *     <div style={{ display: "flex", justifyContent: "space-between" }}>
 *       <PanelHeaderLabel />
 *       <div>
 *         <PanelHeaderPrevButton />
 *         <PanelHeaderNextButton />
 *       </div>
 *     </div>
 *     <PanelHeaderBody>
 *       <WeekDays />
 *       <DaySlots />
 *     </PanelHeaderBody>
 *   </PanelHeaderProvider>
 * </DatePickerProvider>
 */
function PanelHeaderProvider({
  children,
  yearsPerPage = 12,
}: TPanelHeaderProviderProps) {
  const { goToNextMonth, goToPrevMonth, goToYear, yearInTheCalendar } =
    useContext(PickerContext);

  const fallbackYear = new Date().getFullYear();
  const currentYear = yearInTheCalendar ?? fallbackYear;
  const halfPage = Math.floor(yearsPerPage / 2);

  const [view, setView] = useState<TPanelView>("days");
  // first year shown in the current year-picker page
  const [yearPageStart, setYearPageStart] = useState(
    () => currentYear - halfPage
  );

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

  return (
    <PanelHeaderContext.Provider
      value={{
        view,
        setView,
        openYearsView,
        handlePrev,
        handleNext,
        yearPageStart,
        yearsPerPage,
      }}
    >
      {children}
    </PanelHeaderContext.Provider>
  );
}

export default PanelHeaderProvider;
