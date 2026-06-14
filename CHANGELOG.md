# Changelog

### version 1.4.0

- new: add `TimePicker` component to set the time (hours/minutes, with optional `showSeconds` and a 12-hour `use12Hours` AM/PM toggle) of the selected day. Each unit has stepper arrows and a native `<select>` dropdown (clicking the value), toggleable with `dropdown`. It's headless like the rest of the library: default UI, a `renderer` escape hatch, and granular `className`/`styles` props. Digits and the AM/PM label follow the calendar `locale`. For ranges, target an end with `index`.
- new: add `handleChangeTime(time, index?)` to the context to set the time of the current selection while keeping its day.
- new: picking a different day now preserves the previously-chosen time (instead of resetting to midnight), so date + time selections stay in sync.
- new: add `getTimeParts`, `setTimeParts`, `wrap`, `to12Hour`, `from12Hour` time utilities and the `TTimePickerProps`, `TTimePickerRendererArgs`, `TTimePickerUnit`, `TTimeParts`, `TPeriod` types.
- new: add `PanelHeader` component, a self-contained alternative to `Header` that shows the month and year pickers inside the calendar area instead of `<select>` dropdowns. Clicking the month opens a 12-month grid; clicking the year opens a paginated year grid with prev/next page arrows (page size via `yearsPerPage`, default 12). Wrap `WeekDays` / `DaySlots` as its children and it swaps them for the grids while navigating. Works across all calendars and locales.
- new: add `monthOffset` prop to `Title` and `DaySlots` so you can render two (or more) calendars side-by-side (Airbnb-style) from a single `DatePickerProvider`. Navigation moves every month together.
- new: add `navigationStep` prop to `Header` so the prev/next arrows can move multiple months per click (e.g. `navigationStep={2}` for two side-by-side calendars). `goToNextMonth` / `goToPrevMonth` now accept an optional `step` argument.
- new: add `addCalendarMonths` utility to shift a date by a number of months while respecting the active calendar (persian, islamic, ...).
- fix: in side-by-side calendars, the hovered range preview now spans across calendars (e.g. selecting a start date on the left calendar and hovering the right one). The hovered date is now shared via context (`hoveredDate` / `handleHoverSlot`).
- fix: `classJoin` no longer drops non-conflicting tailwind utilities that share a prefix (e.g. `text-green-500` and `text-2xl` are now both kept).
- chore: simplify `classJoin` into a dependency-free class combiner (join, ignore falsy values, remove exact duplicates).
- chore: resolve the day cell's state text color (today/weekend/holiday/disabled) by priority internally so only a single color utility is emitted.

### version 1.3.0

- new: In `dayRenderer`, the `isOtherMonth` prop is now exposed to indicate whether a day is in the current month or not.
- chore: Add the `isToday` prop in dayRenderer to be consistent with other props. Keep the `IsToday` prop for backward compatibility.

### version 1.2.0

- new: add `holidays` prop so you can set array of holidays to show them differently or prevent user to be able to select them or not.
- new: add `isInHoliday` props to `dayRenderer` method.
- new: add `holidaySelectable` props to be able to prevent user from selecting holidays or not.
- new: add `holidayStyles`, `holidayClassName`, `holidayParentStyles`, `holidayParentClassName`.

### version 1.1.9

- new: add `isInHoveredRange` prop to `DaySlots` component to be able to style the hovered range..
- new: add `inHoveredRangeStyles` prop to `DaySlots` component to be able to style the hovered range.
- new: add `inHoveredRangeClassName` prop to `DaySlots` component to be able to style the hovered range.
- new: add `inHoveredRangeParentStyles` prop to `DaySlots` component to be able to style the hovered range.
- new: add `inHoveredRangeParentClassName` prop to `DaySlots` component to be able to style the hovered range.
- new: add `prevButtonClassName` prop to `Header` component.
- new: add `nextButtonClassName` prop to `Header` component.
- new: add `prevButtonStyles` prop to `Header` component.
- new: add `nextButtonStyles` prop to `Header` component.
- new: add `rootStyles` prop to `Header` component.
- chore: remove warning for `unique "key" prop` and `defaultValue for select component`.

### version 1.1.7

- fix: on value change, the calendar should respect the defaultSelectedDate if it is provided.

### version 1.1.6

- new: add `rootClassName` prop to `Header` component.
- new: add `prevButtonClassName` prop to `Header` component.
- new: add `nextButtonClassName` prop to `Header` component.
- fix: header next button aria-label wording fixed.
- fix: in range picker, when not selecting the second date, the end of range class and styles should not be applied.

### version 1.1.4

- fix: classNames orders fixed by priority
- new: expose `handleKeyDown` in `dayRenderer` component to be able to handle keyboard events.

### version 1.1.2

- fix: minor fix onChange wont return range if value is provided and value was not changed.
- fix: duplicate classNames fixed for able to use tailwindcss classes.

### version 1.1.1

- new: add aria-label and role for better accessibility.
- new: add keyboard events for better accessibility.
- new: add keyboard arrow navigation for better accessibility so that user can navigate through the calendar using arrow keys.
- chore: refactor some codes to improve performance.
- fix: duplicate classNames will be removed now on elements.

### version 1.1.0

- new: add `value` prop to support controlled component.
- new: add `TDatePickerOnChange` type to handle onChange event.
- new: add `TDatePickerValue` type.
- new: add `onClickSlot` prop to handle click event in `DaySlots` component.
- chore: use `useCallback` to memoize `onChange` function internally for better performance.

### version 1.0.3

- fix: timezone issue causing wrong selection in month and year dropdown.
- refactor: remove date-fns dependency and use native utils.
- new: add `className` prop to add custom class to the `Title` component.
- new: add `style` prop to add custom style to the `Title` component.
- new: add `rootStyle` prop to add custom style to the `WeekDays` parent component.
- new: add `style` prop to add custom style to the `WeekDays` component.
- new: add `parentClassName` prop to add custom class to the `DaySlots` parent component.
- new: add `parentStyles` prop to add custom style to the `DaySlots` parent component.
- chore: Add Vitest and write some test cases for some utility functions.
- chore: add some examples in the storybook.

### version 1.0.2

- fix: ios converting date issue.

### version 1.0.1:

- feat: add `allowBackwardRange` to control behavior of backward range selection.
- fix: fix next/previous arrow functionality when minDate and maxDate are passed in config.
- fix: wrong firstDayOfMonth calculation because of local timezone.
