import { useContext } from "react";
import { PANEL_HEADER } from "../../constants/classNames";
import { classJoin } from "../../utils/classJoin";
import { PanelHeaderContext } from "./panelHeaderContext";
import PanelHeaderBody from "./PanelHeaderBody";
import PanelHeaderLabel from "./PanelHeaderLabel";
import PanelHeaderNextButton from "./PanelHeaderNextButton";
import PanelHeaderPrevButton from "./PanelHeaderPrevButton";
import PanelHeaderProvider from "./PanelHeaderProvider";
import { TPanelHeaderProps } from "./types";

/**
 * The default panel layout: the prev/label/next row followed by the body. It
 * lives inside `PanelHeaderProvider` so it can read the active `view` for the
 * root `--days` / `--months` / `--years` modifier class.
 */
function PanelHeaderDefault({
  children,
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
  const { view } = useContext(PanelHeaderContext);

  return (
    <>
      <div
        className={classJoin(PANEL_HEADER, `${PANEL_HEADER}--${view}`, rootClassName)}
        style={rootStyles}
      >
        <PanelHeaderPrevButton
          className={prevButtonClassName}
          styles={prevButtonStyles}
          icon={leftIcon}
        />
        <PanelHeaderLabel className={labelClassName} styles={labelStyles} />
        <PanelHeaderNextButton
          className={nextButtonClassName}
          styles={nextButtonStyles}
          icon={rightIcon}
        />
      </div>
      <PanelHeaderBody
        gridClassName={gridClassName}
        gridStyles={gridStyles}
        cellClassName={cellClassName}
        cellStyles={cellStyles}
        selectedCellClassName={selectedCellClassName}
        selectedCellStyles={selectedCellStyles}
      >
        {children}
      </PanelHeaderBody>
    </>
  );
}

/**
 * A self-contained alternative to `Header` that shows the month and year
 * pickers inside the calendar area instead of using `<select>` dropdowns:
 *   - `"months"` view -> a grid of all 12 months
 *   - `"years"` view  -> a paginated grid of years with prev/next page arrows
 *
 * It owns its own view state (via `PanelHeaderProvider`), so it is fully
 * drop-in: wrap the day-view content (`<WeekDays />` / `<DaySlots />`) as its
 * children and it swaps them for the month/year grids while navigating.
 *
 * Need a custom order/layout? Compose the standalone parts yourself instead:
 * `PanelHeaderProvider`, `PanelHeaderPrevButton`, `PanelHeaderNextButton`,
 * `PanelHeaderLabel` and `PanelHeaderBody`.
 *
 * @example
 * <DatePickerProvider>
 *   <PanelHeader>
 *     <WeekDays />
 *     <DaySlots />
 *   </PanelHeader>
 * </DatePickerProvider>
 */
function PanelHeader(props: TPanelHeaderProps) {
  return (
    <PanelHeaderProvider yearsPerPage={props.yearsPerPage}>
      <PanelHeaderDefault {...props} />
    </PanelHeaderProvider>
  );
}

export default PanelHeader;
