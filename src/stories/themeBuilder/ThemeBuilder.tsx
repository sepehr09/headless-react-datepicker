import { CSSProperties, useMemo, useState } from "react";
import { buildCss, buildJsx } from "./codegen";
import CodeOutput from "./CodeOutput";
import Dashboard from "./Dashboard";
import Preview from "./Preview";
import QuickInstall from "./QuickInstall";
import { stateFromPreset, PRESETS } from "./presets";
import { ALL_VARS, initialState } from "./tokens";
import type { Preset, ThemeState, TokenState } from "./types";

/**
 * An **interactive theme builder**. Tweak every `--rhmdp-*` CSS variable from
 * the dashboard on the left, watch the calendar update live in the middle, then
 * copy the generated CSS from the box at the bottom and drop it into your app.
 *
 * Nothing here uses `className` overrides or `!important` — it's the exact same
 * variable-based theming documented in the README, just with a UI on top. State
 * lives here; the dashboard / preview / output panels are presentational.
 */
const ThemeBuilder = () => {
  const [theme, setTheme] = useState<ThemeState>(initialState);
  const [isRange, setIsRange] = useState(true);
  const [usePanel, setUsePanel] = useState(false);
  const [showTime, setShowTime] = useState(true);
  const [sideBySide, setSideBySide] = useState(false);
  const [selector, setSelector] = useState(".my-calendar");
  const [preset, setPreset] = useState("");
  // Preview-only card/page chrome. Kept in its own state (not derived from the
  // active preset) so customizing tokens doesn't reset the card background.
  const [chrome, setChrome] = useState<Preset["preview"]>(undefined);

  const set = (cssVar: string, patch: Partial<TokenState>) => {
    // Any manual tweak detaches us from the loaded preset label — but the
    // card/page chrome is left as-is so the background stays put.
    setPreset("");
    setTheme((prev) => ({ ...prev, [cssVar]: { ...prev[cssVar], ...patch } }));
  };

  const reset = () => {
    setPreset("");
    setTheme(initialState);
    setChrome(undefined);
  };

  const applyPreset = (name: string) => {
    setPreset(name);
    const found = PRESETS.find((p) => p.name === name);
    if (!found) return;
    setTheme(stateFromPreset(found));
    setChrome(found.preview);
  };

  /** The card background, driven by the `--rhmdp-card-bg` preview variable. */
  const cardBg = (chrome?.card?.background as string) ?? "#ffffff";
  const setCardBg = (background: string) =>
    setChrome((prev) => ({ ...prev, card: { ...prev?.card, background } }));

  /**
   * The root-card chrome (background, padding, curve, shadow, border, blur…).
   * These aren't part of the `--rhmdp-*` token system, but we emit them at the
   * top of the rule and drive the live preview from the same object so the
   * copied CSS matches what's on screen.
   */
  const cardStyle = useMemo<CSSProperties>(
    () => ({
      padding: 16,
      borderRadius: 12,
      boxShadow: "0 8px 30px rgba(0,0,0,0.10)",
      ...chrome?.card,
      // The chosen card bg stays authoritative; CARD_ORDER still emits it first.
      background: cardBg,
    }),
    [chrome, cardBg]
  );

  /** Inline style with the enabled custom properties, for the live preview. */
  const previewVars = useMemo(() => {
    const out: Record<string, string> = {};
    for (const v of ALL_VARS) {
      const s = theme[v.cssVar];
      if (s.enabled && s.value.trim()) out[v.cssVar] = s.value.trim();
    }
    return out as CSSProperties;
  }, [theme]);

  const css = useMemo(
    () => buildCss(theme, selector, cardStyle),
    [theme, selector, cardStyle]
  );

  const jsx = useMemo(
    () => buildJsx({ isRange, usePanel, showTime, sideBySide, selector }),
    [isRange, usePanel, showTime, sideBySide, selector]
  );

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f4f4f5",
        padding: 20,
        boxSizing: "border-box",
        fontFamily:
          "Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
      }}
    >
      <h1 style={{ margin: "0 0 4px", fontSize: 22, color: "#111827" }}>
        🎨 Theme Builder
      </h1>
      <p style={{ margin: "0 0 18px", color: "#6b7280", fontSize: 14 }}>
        Tweak the <code>--rhmdp-*</code> CSS variables, preview live, then copy
        the CSS below into your app.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(340px, 420px) 1fr",
          gap: 20,
          alignItems: "start",
        }}
      >
        <Dashboard
          theme={theme}
          preset={preset}
          onApplyPreset={applyPreset}
          onReset={reset}
          onSet={set}
        />

        <Preview
          previewVars={previewVars}
          cardStyle={cardStyle}
          chrome={chrome}
          isRange={isRange}
          setIsRange={setIsRange}
          usePanel={usePanel}
          setUsePanel={setUsePanel}
          showTime={showTime}
          setShowTime={setShowTime}
          sideBySide={sideBySide}
          setSideBySide={setSideBySide}
          cardBg={cardBg}
          setCardBg={setCardBg}
        />
      </div>

      <CodeOutput
        css={css}
        jsx={jsx}
        selector={selector}
        setSelector={setSelector}
      />

      <QuickInstall />
    </div>
  );
};

export default ThemeBuilder;
