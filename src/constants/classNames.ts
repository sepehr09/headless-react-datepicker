/**
 * BEM class-name hooks for CSS-only styling (no Tailwind / className / inline
 * styles required). Each hook is a hardcoded string literal exported on its own
 * so unused ones tree-shake away and tooling can resolve them statically.
 * Consumers can target these from a plain CSS file.
 *
 * A few modifiers are data-driven (the weekday name, the panel view, the time
 * unit). Those are built in the component from the base class + the data value
 * (e.g. `${WEEK_DAYS_DAY}--monday`) rather than enumerated here.
 *
 * @see README "Styling with plain CSS"
 */

/* -------------------------------- DaySlots -------------------------------- */
export const DAY_SLOTS = "rhmdp-daySlots";
export const DAY_SLOTS_CELL = "rhmdp-daySlots__cell";
export const DAY_SLOTS_DAY = "rhmdp-daySlots__day";
export const DAY_SLOTS_PLACEHOLDER = "rhmdp-daySlots__placeholder";
export const DAY_SLOTS_CELL_EMPTY = "rhmdp-daySlots__cell--empty";

export const DAY_SLOTS_CELL_TODAY = "rhmdp-daySlots__cell--today";
export const DAY_SLOTS_CELL_SELECTED = "rhmdp-daySlots__cell--selected";
export const DAY_SLOTS_CELL_SELECTABLE = "rhmdp-daySlots__cell--selectable";
export const DAY_SLOTS_CELL_DISABLED = "rhmdp-daySlots__cell--disabled";
export const DAY_SLOTS_CELL_WEEKEND = "rhmdp-daySlots__cell--weekend";
export const DAY_SLOTS_CELL_HOLIDAY = "rhmdp-daySlots__cell--holiday";
export const DAY_SLOTS_CELL_OTHER_MONTH = "rhmdp-daySlots__cell--other-month";
export const DAY_SLOTS_CELL_IN_RANGE = "rhmdp-daySlots__cell--in-range";
export const DAY_SLOTS_CELL_IN_HOVERED_RANGE =
  "rhmdp-daySlots__cell--in-hovered-range";
export const DAY_SLOTS_CELL_RANGE_START = "rhmdp-daySlots__cell--range-start";
export const DAY_SLOTS_CELL_RANGE_END = "rhmdp-daySlots__cell--range-end";
export const DAY_SLOTS_CELL_FIRST_OF_MONTH =
  "rhmdp-daySlots__cell--first-of-month";

export const DAY_SLOTS_DAY_TODAY = "rhmdp-daySlots__day--today";
export const DAY_SLOTS_DAY_SELECTED = "rhmdp-daySlots__day--selected";
export const DAY_SLOTS_DAY_SELECTABLE = "rhmdp-daySlots__day--selectable";
export const DAY_SLOTS_DAY_DISABLED = "rhmdp-daySlots__day--disabled";
export const DAY_SLOTS_DAY_WEEKEND = "rhmdp-daySlots__day--weekend";
export const DAY_SLOTS_DAY_HOLIDAY = "rhmdp-daySlots__day--holiday";
export const DAY_SLOTS_DAY_OTHER_MONTH = "rhmdp-daySlots__day--other-month";
export const DAY_SLOTS_DAY_IN_RANGE = "rhmdp-daySlots__day--in-range";
export const DAY_SLOTS_DAY_IN_HOVERED_RANGE =
  "rhmdp-daySlots__day--in-hovered-range";
export const DAY_SLOTS_DAY_RANGE_START = "rhmdp-daySlots__day--range-start";
export const DAY_SLOTS_DAY_RANGE_END = "rhmdp-daySlots__day--range-end";
export const DAY_SLOTS_DAY_FIRST_OF_MONTH =
  "rhmdp-daySlots__day--first-of-month";

/* -------------------------------- WeekDays -------------------------------- */
export const WEEK_DAYS = "rhmdp-weekDays";
export const WEEK_DAYS_DAY = "rhmdp-weekDays__day";
export const WEEK_DAYS_DAY_WEEKEND = "rhmdp-weekDays__day--weekend";
// per-weekday modifier is built in the component: `${WEEK_DAYS_DAY}--${weekDay}`

/* --------------------------------- Header --------------------------------- */
export const HEADER = "rhmdp-header";
export const HEADER_PREV_BUTTON = "rhmdp-header__prevButton";
export const HEADER_NEXT_BUTTON = "rhmdp-header__nextButton";
export const HEADER_MONTH_SELECT = "rhmdp-header__monthSelect";
export const HEADER_YEAR_SELECT = "rhmdp-header__yearSelect";
export const HEADER_MONTH_OPTION = "rhmdp-header__monthOption";
export const HEADER_MONTH_OPTION_SELECTED =
  "rhmdp-header__monthOption--selected";
export const HEADER_YEAR_OPTION = "rhmdp-header__yearOption";
export const HEADER_YEAR_OPTION_SELECTED = "rhmdp-header__yearOption--selected";

/* ------------------------------- PanelHeader ------------------------------ */
export const PANEL_HEADER = "rhmdp-panelHeader";
export const PANEL_HEADER_PREV_BUTTON = "rhmdp-panelHeader__prevButton";
export const PANEL_HEADER_NEXT_BUTTON = "rhmdp-panelHeader__nextButton";
export const PANEL_HEADER_LABEL = "rhmdp-panelHeader__label";
export const PANEL_HEADER_LABEL_GROUP = "rhmdp-panelHeader__labelGroup";
export const PANEL_HEADER_GRID = "rhmdp-panelHeader__grid";
export const PANEL_HEADER_CELL = "rhmdp-panelHeader__cell";
export const PANEL_HEADER_CELL_SELECTED = "rhmdp-panelHeader__cell--selected";
// view modifier is built in the component: `${PANEL_HEADER}--${view}`

/* --------------------------------- Title ---------------------------------- */
export const TITLE = "rhmdp-title";

/* ------------------------------- TimePicker ------------------------------- */
export const TIME_PICKER = "rhmdp-timePicker";
export const TIME_PICKER_COLUMN = "rhmdp-timePicker__column";
export const TIME_PICKER_BUTTON = "rhmdp-timePicker__button";
export const TIME_PICKER_BUTTON_UP = "rhmdp-timePicker__button--up";
export const TIME_PICKER_BUTTON_DOWN = "rhmdp-timePicker__button--down";
export const TIME_PICKER_VALUE = "rhmdp-timePicker__value";
export const TIME_PICKER_OPTION = "rhmdp-timePicker__option";
export const TIME_PICKER_SEPARATOR = "rhmdp-timePicker__separator";
// per-unit column modifier is built in the component: `${TIME_PICKER_COLUMN}--${unit}`
