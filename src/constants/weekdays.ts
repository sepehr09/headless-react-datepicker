import { Day, TDay } from "../types";

export type TBindWeekDayToNumber = { [k in TDay]: Day };

export const bindWeekDayToNumber: TBindWeekDayToNumber = {
  sunday: 0,
  monday: 1,
  tuesday: 2,
  wednesday: 3,
  thursday: 4,
  friday: 5,
  saturday: 6,
};
