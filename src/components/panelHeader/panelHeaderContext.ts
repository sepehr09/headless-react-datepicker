import { createContext } from "react";
import { TPanelView } from "./types";

/**
 * Shared state for the `PanelHeader` parts. The arrows, the center label and the
 * body grid all read from this so they can be rendered independently / in any
 * order while staying in sync. Provided by `PanelHeaderProvider`.
 */
export type TPanelHeaderContext = {
  /** The active view: day grid, month grid, or year grid. */
  view: TPanelView;
  /** Switch the active view. */
  setView: (view: TPanelView) => void;
  /** Switch to the years view, seeding the page around the current year. */
  openYearsView: () => void;
  /** Prev-arrow handler. Its meaning depends on the active view. */
  handlePrev: () => void;
  /** Next-arrow handler. Its meaning depends on the active view. */
  handleNext: () => void;
  /** First year shown on the current year-picker page. */
  yearPageStart: number;
  /** How many years are shown per page in the years view. */
  yearsPerPage: number;
};

export const PanelHeaderContext = createContext<TPanelHeaderContext>(
  {} as TPanelHeaderContext
);
