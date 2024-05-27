export const argTypes = {
  config: {
    control: "null",
  },
  "config.locale": {
    control: "select",
    options: ["fa-IR", "en-US", "ar-EG", "hi-IN"],
  },
  "config.weekStartsOn": {
    control: "select",
    options: [
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
      "sunday",
    ],
  },
  "config.weekdayFormat": {
    control: "select",
    options: ["long", "short", "narrow"],
  },
  "config.showOtherDays": {
    control: "boolean",
  },
  "config.otherDaysSelectable": {
    control: "boolean",
  },
  "config.dayFormat": {
    control: "select",
    options: ["numeric", "2-digit"],
  },
  "config.yearRangeFrom": {
    control: "number",
  },
  "config.yearRangeTo": {
    control: "number",
  },
  "config.minDate": {
    control: "date",
  },
  "config.maxDate": {
    control: "date",
  },
  "config.weekends": {
    control: "check",
    options: [
      "saturday",
      "sunday",
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
    ],
  },
  "config.weekendSelectable": {
    control: "boolean",
  },
  "config.allowBackwardRange": {
    control: "boolean",
  },
};
