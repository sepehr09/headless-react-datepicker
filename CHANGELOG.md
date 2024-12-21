# Changelog

### version 1.1.8

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
