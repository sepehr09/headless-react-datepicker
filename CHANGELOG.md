# Changelog

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
