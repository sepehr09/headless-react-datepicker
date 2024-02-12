import { useContext } from "react";
import { PickerContext, TPickerContext } from "../store/pickerContext";

export const useDatePickerContext = <IsRange extends boolean>() => {
  const datePickerContext = useContext(
    PickerContext
  ) as TPickerContext<IsRange>;

  return datePickerContext;
};
