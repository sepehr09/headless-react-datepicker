import { CSSProperties } from "react";
import DatePickerProvider from "../../DatePickerProvider";
import DaySlots from "../../components/daySlots/DaySlots";
import Header from "../../components/header/Header";
import PanelHeader from "../../components/panelHeader/PanelHeader";
import TimePicker from "../../components/timePicker/TimePicker";
import Title from "../../components/title/Title";
import WeekDays from "../../components/weekDays/WeekDays";
import { TCalendarConfig } from "../../types";
import { isHex } from "../utils/css";
import ColorSwatch from "./ColorSwatch";
import { panel, toggleLabel } from "./styles";
import type { Preset } from "./types";

/** Transparent checkerboard shown behind the card when no preset page bg is set. */
const CHECKER =
  "repeating-conic-gradient(#fafafa 0% 25%, #fff 0% 50%) 50% / 22px 22px";

// A fixed month so today/weekend/holiday/range states are all visible.
const RANGE_VALUE = [new Date("2024-05-07"), new Date("2024-05-24")];
const SINGLE_VALUE = new Date("2024-05-16T13:30:00");

const PREVIEW_CONFIG: TCalendarConfig = {
  locale: "en-US",
  weekStartsOn: "monday",
  weekdayFormat: "short",
  weekends: ["saturday", "sunday"],
  showOtherDays: true,
  holidays: [new Date("2024-05-27")],
};

/**
 * The live calendar preview plus its toolbar of layout/selection toggles. The
 * enabled tokens cascade from a wrapper; the card bg reads from a dedicated
 * `--rhmdp-card-bg` variable so it survives token edits.
 */
const Preview = ({
  previewVars,
  cardStyle,
  chrome,
  isRange,
  setIsRange,
  usePanel,
  setUsePanel,
  showTime,
  setShowTime,
  sideBySide,
  setSideBySide,
  cardBg,
  setCardBg,
}: {
  previewVars: CSSProperties;
  cardStyle: CSSProperties;
  chrome: Preset["preview"];
  isRange: boolean;
  setIsRange: (v: boolean) => void;
  usePanel: boolean;
  setUsePanel: (v: boolean) => void;
  showTime: boolean;
  setShowTime: (v: boolean) => void;
  sideBySide: boolean;
  setSideBySide: (v: boolean) => void;
  cardBg: string;
  setCardBg: (v: string) => void;
}) => {
  const initialValue = isRange ? RANGE_VALUE : SINGLE_VALUE;
  // Two months at once can't use the self-contained PanelHeader (it swaps the
  // whole day-view while navigating), so side-by-side always uses Header.
  const showPanel = usePanel && !sideBySide;

  return (
    <div>
      <div
        style={{
          ...panel,
          padding: 16,
          marginBottom: 16,
          display: "flex",
          gap: 18,
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <label style={toggleLabel}>
          <input
            type="checkbox"
            checked={isRange}
            onChange={(e) => setIsRange(e.target.checked)}
          />
          Range picker
        </label>
        <label
          style={{
            ...toggleLabel,
            opacity: sideBySide ? 0.4 : 1,
            cursor: sideBySide ? "not-allowed" : "pointer",
          }}
        >
          <input
            type="checkbox"
            checked={showPanel}
            disabled={sideBySide}
            onChange={(e) => setUsePanel(e.target.checked)}
          />
          Use PanelHeader
        </label>
        <label style={toggleLabel}>
          <input
            type="checkbox"
            checked={sideBySide}
            onChange={(e) => setSideBySide(e.target.checked)}
          />
          Side by side
        </label>
        <label style={toggleLabel}>
          <input
            type="checkbox"
            checked={showTime}
            onChange={(e) => setShowTime(e.target.checked)}
          />
          Time picker
        </label>
        <label style={toggleLabel}>
          Card bg
          <ColorSwatch
            value={isHex(cardBg) ? cardBg : "#ffffff"}
            onCommit={setCardBg}
            style={{
              width: 26,
              height: 26,
              padding: 0,
              border: "1px solid #d1d5db",
              borderRadius: 6,
              background: "none",
              cursor: "pointer",
            }}
          />
        </label>
        <span style={{ fontSize: 12, color: "#9ca3af" }}>
          {showPanel
            ? "Click the month/year label to see the panel-selected token."
            : "Hover days while picking a range to see the hover token."}
        </span>
      </div>

      <div
        style={{
          ...panel,
          padding: 32,
          display: "flex",
          justifyContent: "center",
          background: chrome?.page?.background ?? CHECKER,
        }}
      >
        {/*
          Tokens cascade from this wrapper. The card background is exposed as
          its own `--rhmdp-card-bg` variable so the card reads from it (and it
          survives token edits), while border/shadow/blur stay as chrome.
        */}
        <div
          style={
            {
              width: sideBySide ? 640 : 340,
              ...previewVars,
              "--rhmdp-card-bg": cardBg,
            } as CSSProperties
          }
        >
          <div
            style={{
              ...cardStyle,
              background: "var(--rhmdp-card-bg, #fff)",
            }}
          >
            <DatePickerProvider
              key={`${isRange}-${showPanel}-${sideBySide}`}
              isRange={isRange}
              initialValue={initialValue}
              calendar="gregory"
              config={PREVIEW_CONFIG}
              onChange={(e) => console.log("onChange:", e)}
            >
              {sideBySide ? (
                <>
                  {/* One Header navigates both months (2 months per click);
                      range selection / hover spans across the two calendars. */}
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
                  </div>
                </>
              ) : showPanel ? (
                <PanelHeader>
                  <WeekDays />
                  <DaySlots />
                </PanelHeader>
              ) : (
                <>
                  <Title />
                  {/* The month/year <select> dropdowns are themed purely
                      by the `--rhmdp-header-select-*` tokens above. */}
                  <Header />
                  <WeekDays />
                  <DaySlots />
                </>
              )}
              {showTime && (
                <div
                  style={{
                    borderTop: "1px solid rgba(127,127,127,0.2)",
                    marginTop: 12,
                    paddingTop: 10,
                  }}
                >
                  <TimePicker index={isRange ? 1 : 0} use12Hours />
                </div>
              )}
            </DatePickerProvider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
