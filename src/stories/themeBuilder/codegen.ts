import type { CSSProperties } from "react";
import { styleToCss } from "../utils/css";
import { ALL_VARS } from "./tokens";
import type { ThemeState } from "./types";

/** Normalize a CSS selector into a bare class name (`.my-calendar` → `my-calendar`). */
export const selectorToClass = (selector: string) =>
  (selector.trim() || ".my-calendar").replace(/^\./, "");

/**
 * The copy-pasteable CSS rule: root-card chrome first, then the enabled tokens.
 * The card chrome isn't part of the `--rhmdp-*` system, but we emit it so the
 * copied CSS matches what's on screen.
 */
export const buildCss = (
  theme: ThemeState,
  selector: string,
  cardStyle: CSSProperties
): string => {
  const cardLines = styleToCss(cardStyle);
  const tokenLines = ALL_VARS.filter(
    (v) => theme[v.cssVar].enabled && theme[v.cssVar].value.trim()
  ).map((v) => `  ${v.cssVar}: ${theme[v.cssVar].value.trim()};`);
  const sel = selector.trim() || ".my-calendar";
  const body = [
    "  /* root card — plain CSS, not part of the --rhmdp-* tokens */",
    ...cardLines,
    tokenLines.length ? "" : null,
    ...tokenLines,
  ]
    .filter((l) => l !== null)
    .join("\n");
  return `${sel} {\n${body}\n}`;
};

/** The matching JSX for the live preview's current layout & selection mode. */
export const buildJsx = ({
  isRange,
  usePanel,
  showTime,
  sideBySide,
  selector,
}: {
  isRange: boolean;
  usePanel: boolean;
  showTime: boolean;
  sideBySide: boolean;
  selector: string;
}): string => {
  const cls = selectorToClass(selector);
  // Two months at once can't use the self-contained PanelHeader, so
  // side-by-side always uses Header (with navigationStep={2}).
  const body = sideBySide
    ? `     {/* One Header navigates both months (2 per click) */}
     <Header navigationStep={2} />
     <div style={{ display: "flex", gap: 24 }}>
       <div style={{ flex: 1 }}>
         <Title style={{ textAlign: "center" }} />
         <WeekDays />
         <DaySlots />
       </div>
       <div style={{ flex: 1 }}>
         <Title monthOffset={1} style={{ textAlign: "center" }} />
         <WeekDays />
         <DaySlots monthOffset={1} />
       </div>
     </div>`
    : usePanel
    ? `     <PanelHeader>
       <WeekDays />
       <DaySlots />
     </PanelHeader>`
    : `     <Title />
     <Header />
     <WeekDays />
     <DaySlots />`;
  return `<div className="${cls}">
  <DatePickerProvider
    isRange={${isRange}}
    calendar="gregory"
    config={{
      locale: "en-US",
      weekStartsOn: "monday",
      weekdayFormat: "short",
      weekends: ["saturday", "sunday"],
      showOtherDays: true,
    }}
    onChange={(e) => console.log(e)}
  >
${body}${
    showTime
      ? `
     <div
       style={{
          borderTop: "1px solid rgba(127,127,127,0.2)",
          marginTop: 12,
          paddingTop: 10,
       }}
     >
       <TimePicker index={${isRange ? 1 : 0}} use12Hours />
     </div>`
      : ""
  }
  </DatePickerProvider>
</div>`;
};
