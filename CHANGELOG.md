# Changelog

### version 2.0.0

**Highlights**

- new: **side-by-side calendars** — pass `monthOffset` to `Title` / `DaySlots` to render multiple months from a single `DatePickerProvider`, with navigation, range selection and hover spanning all of them. `Header` gains `navigationStep` to move several months per click.
- new: **`TimePicker`** component to set the time of the selected day (hours/minutes, optional seconds and a 12-hour AM/PM toggle). Headless like the rest of the library, and per-end for ranges via `index`.
- new: **`PanelHeader`** component — an alternative to `Header` that shows the month/year pickers _inside_ the calendar area (grids) instead of `<select>` dropdowns.
- new: **composable header / panel-header parts** — `Header` and `PanelHeader` are now thin compositions over standalone, reorderable pieces you can lay out in any order.
- new: **CSS-only styling & CSS-variable theming** — every component emits stable BEM class hooks, and the default look reads from `--rhmdp-*` CSS variables, so you can style or re-theme without Tailwind or inline overrides. See the README.

**Fixes**

- fix: `DaySlots` no longer mutates selected/hovered dates while rendering (which wiped the time and broke `TimePicker`).
- fix: the hovered range preview now spans across side-by-side calendars.
- fix: `onChange` always uses the latest handler (no more stale closure).
- fix: an empty `initialValue` array no longer throws.
- fix: added an `exports` map and ship the CommonJS build as `index.cjs`, so `require()` works under the package's `"type": "module"` setting (it was previously parsed as ESM and broke CJS consumers).

**BREAKING — Tailwind removed**

- The library no longer depends on Tailwind; the default look now ships as a plain `dist/styles.css` targeting the BEM hooks and `--rhmdp-*` variables. The rendered markup no longer carries the undocumented internal utility classes — switch any of those to the BEM hooks or CSS variables, and import `dist/styles.css` if you relied on your own Tailwind build to generate the library's classes.
- change: `classJoin` no longer resolves conflicting Tailwind utilities — both classes are kept and the CSS cascade decides. If an override stops winning, force it with `!important`.

**Chores**

- chore: migrate the package manager from yarn to pnpm.
- chore: the stylesheet can now be imported as `headless-react-datepicker/styles.css` (the existing `headless-react-datepicker/dist/styles.css` path keeps working).
- perf: the `@js-temporal/polyfill` is no longer inlined into the build — it stays an external dependency that's resolved (and de-duplicated) from your `node_modules`. This drops the published runtime bundle size without losing any feature.
- perf: bumped the compile `target` from ES5 to ES2019, removing the iterator/spread helper boilerplate from the output.

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
