import { useContext } from "react";
import { PickerContext } from "../store/pickerContext";

export const useDatePickerContext = () => {
  const datePickerContext = useContext(PickerContext);

  return datePickerContext;
};
