import { CSSProperties, useEffect, useMemo, useRef, useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import DatePickerProvider from "../DatePickerProvider";
import DaySlots from "../components/daySlots/DaySlots";
import Header from "../components/header/Header";
import PanelHeader from "../components/panelHeader/PanelHeader";
import TimePicker from "../components/timePicker/TimePicker";
import Title from "../components/title/Title";
import WeekDays from "../components/weekDays/WeekDays";
import { TCalendarConfig } from "../types";

/**
 * An **interactive theme builder**. Tweak every `--rhmdp-*` CSS variable from
 * the dashboard on the left, watch the calendar update live in the middle, then
 * copy the generated CSS from the box at the bottom and drop it into your app.
 *
 * Nothing here uses `className` overrides or `!important` — it's the exact same
 * variable-based theming documented in the README, just with a UI on top.
 */
const meta = {
  title: "Example/Theme Builder",
  component: DatePickerProvider,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof DatePickerProvider>;

export default meta;
type Story = StoryObj<typeof meta>;

/* -------------------------------------------------------------------------- */
/*                            Theme variable contract                         */
/* -------------------------------------------------------------------------- */

type VarKind = "color" | "length" | "weight" | "size";

type VarDef = {
  /** The CSS custom property name (without the leading `--`-less). */
  cssVar: string;
  /** Friendly label shown in the dashboard. */
  label: string;
  /** What this variable themes. */
  hint: string;
  kind: VarKind;
  /**
   * Starting value used by the color/length input. For tokens whose library
   * default is `inherit`/`transparent`, this is a sensible concrete seed; the
   * token stays disabled until you flip it on (so it keeps falling back).
   */
  seed: string;
  /** Whether this token is emitted by default. */
  enabledByDefault: boolean;
};

type Section = { title: string; vars: VarDef[] };

/**
 * Every themeable token, grouped the same way the README documents them. The
 * `seed` / `enabledByDefault` values mirror the library defaults: tokens that
 * default to `inherit`/`transparent` start disabled so the picker matches the
 * stock look until you opt in.
 */
const SECTIONS: Section[] = [
  {
    title: "Base",
    vars: [
      {
        cssVar: "--rhmdp-day-text",
        label: "Day text",
        hint: "base day number color",
        kind: "color",
        seed: "#111827",
        enabledByDefault: false,
      },
      {
        cssVar: "--rhmdp-day-muted-text",
        label: "Muted text",
        hint: "other-month days",
        kind: "color",
        seed: "#9ca3af",
        enabledByDefault: true,
      },
      {
        cssVar: "--rhmdp-day-border",
        label: "Cell border",
        hint: "day cell border",
        kind: "color",
        seed: "#e5e7eb",
        enabledByDefault: false,
      },
      {
        cssVar: "--rhmdp-day-radius",
        label: "Corner radius",
        hint: "day cell + range-end radius",
        kind: "length",
        seed: "0.5rem",
        enabledByDefault: true,
      },
      {
        cssVar: "--rhmdp-day-padding",
        label: "Day padding",
        hint: "padding inside each day cell",
        kind: "length",
        seed: "0.5rem",
        enabledByDefault: false,
      },
      {
        cssVar: "--rhmdp-day-gap",
        label: "Day grid gap",
        hint: "gap between day cells",
        kind: "length",
        seed: "0px",
        enabledByDefault: false,
      },
    ],
  },
  {
    title: "Selection",
    vars: [
      {
        cssVar: "--rhmdp-day-selected-bg",
        label: "Selected bg",
        hint: "selected day background",
        kind: "color",
        seed: "#3b82f6",
        enabledByDefault: true,
      },
      {
        cssVar: "--rhmdp-day-selected-text",
        label: "Selected text",
        hint: "selected day text",
        kind: "color",
        seed: "#ffffff",
        enabledByDefault: true,
      },
    ],
  },
  {
    title: "Range",
    vars: [
      {
        cssVar: "--rhmdp-day-range-bg",
        label: "In-range bg",
        hint: "days inside the selected range",
        kind: "color",
        seed: "#eaeaec",
        enabledByDefault: true,
      },
      {
        cssVar: "--rhmdp-day-range-hover-bg",
        label: "Hover-range bg",
        hint: "days in the hovered-range preview",
        kind: "color",
        seed: "#eaeaec",
        enabledByDefault: true,
      },
    ],
  },
  {
    title: "States",
    vars: [
      {
        cssVar: "--rhmdp-day-today-text",
        label: "Today text",
        hint: "today's number",
        kind: "color",
        seed: "#2563eb",
        enabledByDefault: true,
      },
      {
        cssVar: "--rhmdp-day-weekend-text",
        label: "Weekend text",
        hint: "weekday marked as weekend",
        kind: "color",
        seed: "#ef4444",
        enabledByDefault: true,
      },
      {
        cssVar: "--rhmdp-day-holiday-text",
        label: "Holiday text",
        hint: "day marked as holiday",
        kind: "color",
        seed: "#ef4444",
        enabledByDefault: true,
      },
      {
        cssVar: "--rhmdp-day-disabled-text",
        label: "Disabled text",
        hint: "disabled day text",
        kind: "color",
        seed: "#9ca3af",
        enabledByDefault: true,
      },
      {
        cssVar: "--rhmdp-day-hover-bg",
        label: "Day hover bg",
        hint: "hover background on selectable days",
        kind: "color",
        seed: "#d1d5db",
        enabledByDefault: true,
      },
      {
        cssVar: "--rhmdp-day-hover-text",
        label: "Day hover text",
        hint: "hover text on selectable days",
        kind: "color",
        seed: "#111827",
        enabledByDefault: false,
      },
    ],
  },
  {
    title: "Components",
    vars: [
      {
        cssVar: "--rhmdp-weekday-text",
        label: "Weekday header",
        hint: "WeekDays header text",
        kind: "color",
        seed: "#6b7280",
        enabledByDefault: false,
      },
      {
        cssVar: "--rhmdp-title-text",
        label: "Title text",
        hint: "Title text",
        kind: "color",
        seed: "#111827",
        enabledByDefault: false,
      },
      {
        cssVar: "--rhmdp-header-select-bg",
        label: "Select bg",
        hint: "Header month/year dropdown background",
        kind: "color",
        seed: "#ffffff",
        enabledByDefault: false,
      },
      {
        cssVar: "--rhmdp-header-select-text",
        label: "Select text",
        hint: "Header month/year dropdown text",
        kind: "color",
        seed: "#111827",
        enabledByDefault: false,
      },
      {
        cssVar: "--rhmdp-header-select-border",
        label: "Select border",
        hint: "Header month/year dropdown border",
        kind: "color",
        seed: "#d1d5db",
        enabledByDefault: false,
      },
      {
        cssVar: "--rhmdp-arrow-text",
        label: "Arrow color",
        hint: "Header / PanelHeader / TimePicker arrow color",
        kind: "color",
        seed: "#111827",
        enabledByDefault: false,
      },
      {
        cssVar: "--rhmdp-arrow-bg",
        label: "Arrow bg",
        hint: "arrow button background (Header / PanelHeader / TimePicker)",
        kind: "color",
        seed: "#ffffff",
        enabledByDefault: false,
      },
      {
        cssVar: "--rhmdp-arrow-hover-bg",
        label: "Arrow hover bg",
        hint: "arrow button hover bg (Header / PanelHeader / TimePicker)",
        kind: "color",
        seed: "#e5e7eb",
        enabledByDefault: true,
      },
      {
        cssVar: "--rhmdp-arrow-hover-text",
        label: "Arrow hover color",
        hint: "arrow button hover color (Header / PanelHeader / TimePicker)",
        kind: "color",
        seed: "#111827",
        enabledByDefault: false,
      },
      {
        cssVar: "--rhmdp-time-text",
        label: "Time text",
        hint: "TimePicker value text",
        kind: "color",
        seed: "#111827",
        enabledByDefault: false,
      },
    ],
  },
  {
    title: "Panel header",
    vars: [
      {
        cssVar: "--rhmdp-panel-selected-bg",
        label: "Panel selected bg",
        hint: "selected month/year cell",
        kind: "color",
        seed: "#3b82f6",
        enabledByDefault: true,
      },
      {
        cssVar: "--rhmdp-panel-selected-text",
        label: "Panel selected text",
        hint: "selected month/year cell text",
        kind: "color",
        seed: "#ffffff",
        enabledByDefault: true,
      },
    ],
  },
  {
    title: "Font weight",
    vars: [
      {
        cssVar: "--rhmdp-day-weight",
        label: "Day weight",
        hint: "day number font weight",
        kind: "weight",
        seed: "400",
        enabledByDefault: false,
      },
      {
        cssVar: "--rhmdp-weekday-weight",
        label: "Weekday weight",
        hint: "WeekDays header font weight",
        kind: "weight",
        seed: "700",
        enabledByDefault: false,
      },
      {
        cssVar: "--rhmdp-title-weight",
        label: "Title weight",
        hint: "Title font weight",
        kind: "weight",
        seed: "700",
        enabledByDefault: false,
      },
      {
        cssVar: "--rhmdp-header-weight",
        label: "Header weight",
        hint: "Header / PanelHeader month-year label weight",
        kind: "weight",
        seed: "700",
        enabledByDefault: false,
      },
      {
        cssVar: "--rhmdp-time-weight",
        label: "Time weight",
        hint: "TimePicker value font weight",
        kind: "weight",
        seed: "700",
        enabledByDefault: false,
      },
    ],
  },
  {
    title: "Font size",
    vars: [
      {
        cssVar: "--rhmdp-day-size",
        label: "Day size",
        hint: "day number font size",
        kind: "size",
        seed: "1rem",
        enabledByDefault: false,
      },
      {
        cssVar: "--rhmdp-weekday-size",
        label: "Weekday size",
        hint: "WeekDays header font size",
        kind: "size",
        seed: "0.875rem",
        enabledByDefault: false,
      },
      {
        cssVar: "--rhmdp-title-size",
        label: "Title size",
        hint: "Title font size",
        kind: "size",
        seed: "1.5rem",
        enabledByDefault: false,
      },
      {
        cssVar: "--rhmdp-time-size",
        label: "Time size",
        hint: "TimePicker value font size",
        kind: "size",
        seed: "1.25rem",
        enabledByDefault: false,
      },
    ],
  },
];

const ALL_VARS = SECTIONS.flatMap((s) => s.vars);

type TokenState = { value: string; enabled: boolean };
type ThemeState = Record<string, TokenState>;

const initialState: ThemeState = Object.fromEntries(
  ALL_VARS.map((v) => [
    v.cssVar,
    { value: v.seed, enabled: v.enabledByDefault },
  ])
);

/** A 6-digit hex the native `<input type="color">` swatch can show. */
const isHex = (v: string) => /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(v.trim());

/* -------------------------------------------------------------------------- */
/*                                  Presets                                   */
/* -------------------------------------------------------------------------- */

type Preset = {
  name: string;
  /** Whether the preset looks best as a range or single picker. */
  isRange: boolean;
  /** Only the tokens this theme sets — the rest fall back to defaults. */
  tokens: Record<string, string>;
  /**
   * Preview-only chrome. The card background and the area behind it aren't
   * `--rhmdp-*` tokens (in the gallery they're plain wrapper styles), so they
   * are NOT emitted in the copied CSS — they just keep dark themes legible in
   * the preview instead of sitting on a white card.
   */
  preview?: {
    /** The calendar card itself (background, border, shadow…). */
    card?: CSSProperties;
    /** The area behind the card. */
    page?: CSSProperties;
  };
};

/**
 * Every variable at its library default — spread into each preset so loading
 * one enables the *complete* token set (it "supports" every variable). A token
 * set to its default renders identically to leaving it unset (the value matches
 * the `var(--rhmdp-*, default)` fallback), so this only makes the surface
 * explicit; per-preset overrides below express the palette. These are the real
 * component defaults, not the dashboard `seed` colors.
 */
const DEFAULTS: Record<string, string> = {
  /* day — base & structure */
  "--rhmdp-day-text": "inherit",
  "--rhmdp-day-muted-text": "#9ca3af",
  "--rhmdp-day-border": "transparent",
  "--rhmdp-day-radius": "0.5rem",
  "--rhmdp-day-weight": "inherit",
  "--rhmdp-day-size": "inherit",
  "--rhmdp-day-padding": "0.5rem",
  "--rhmdp-day-gap": "0px",
  /* day — state text */
  "--rhmdp-day-today-text": "#2563eb",
  "--rhmdp-day-weekend-text": "#ef4444",
  "--rhmdp-day-holiday-text": "#ef4444",
  "--rhmdp-day-disabled-text": "#9ca3af",
  /* day — hover / selected / range */
  "--rhmdp-day-hover-bg": "#d1d5db",
  "--rhmdp-day-hover-text": "inherit",
  "--rhmdp-day-selected-bg": "#3b82f6",
  "--rhmdp-day-selected-text": "#ffffff",
  "--rhmdp-day-range-bg": "#eaeaec",
  "--rhmdp-day-range-hover-bg": "#eaeaec",
  /* weekday */
  "--rhmdp-weekday-text": "inherit",
  "--rhmdp-weekday-weight": "700",
  "--rhmdp-weekday-size": "inherit",
  /* title */
  "--rhmdp-title-text": "inherit",
  "--rhmdp-title-weight": "700",
  "--rhmdp-title-size": "1.5rem",
  /* header month/year <select> dropdowns */
  "--rhmdp-header-select-bg": "transparent",
  "--rhmdp-header-select-text": "inherit",
  "--rhmdp-header-select-border": "transparent",
  /* arrow buttons (Header / PanelHeader / TimePicker) */
  "--rhmdp-arrow-text": "inherit",
  "--rhmdp-arrow-bg": "transparent",
  "--rhmdp-arrow-hover-bg": "#e5e7eb",
  "--rhmdp-arrow-hover-text": "inherit",
  /* header label weight */
  "--rhmdp-header-weight": "700",
  /* time */
  "--rhmdp-time-text": "inherit",
  "--rhmdp-time-weight": "700",
  "--rhmdp-time-size": "1.25rem",
  /* panel */
  "--rhmdp-panel-selected-bg": "#3b82f6",
  "--rhmdp-panel-selected-text": "#ffffff",
};

/**
 * Ready-made palettes lifted from the `Beautiful Themes` story gallery. Each
 * spreads `DEFAULTS` and overrides what it cares about, so loading one emits the
 * full token set. Where the original used a CSS gradient for the selected day
 * (which a single token can't express), we approximate it with a solid color.
 */
const PRESETS: Preset[] = [
  {
    name: "Aurora Glass",
    isRange: true,
    tokens: {
      ...DEFAULTS,
      "--rhmdp-day-radius": "999px",
      "--rhmdp-day-text": "#ffffff",
      "--rhmdp-day-muted-text": "rgba(255,255,255,0.45)",
      "--rhmdp-day-selected-bg": "#7c3aed",
      "--rhmdp-day-selected-text": "#ffffff",
      "--rhmdp-day-range-bg": "rgba(255,255,255,0.18)",
      "--rhmdp-day-range-hover-bg": "rgba(255,255,255,0.10)",
      "--rhmdp-day-hover-bg": "rgba(255,255,255,0.18)",
      "--rhmdp-day-today-text": "#ffffff",
      "--rhmdp-day-weekend-text": "rgba(255,255,255,0.6)",
      "--rhmdp-weekday-text": "rgba(255,255,255,0.75)",
      "--rhmdp-title-text": "#ffffff",
      "--rhmdp-arrow-text": "#ffffff",
    },
    preview: {
      page: {
        background:
          "linear-gradient(135deg, #6d83f2 0%, #a06bf0 50%, #f17bb4 100%)",
      },
      card: {
        background: "rgba(255, 255, 255, 0.18)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        border: "1px solid rgba(255, 255, 255, 0.35)",
        boxShadow: "0 20px 50px rgba(80, 40, 140, 0.35)",
      },
    },
  },
  {
    name: "Midnight Neon",
    isRange: false,
    tokens: {
      ...DEFAULTS,
      "--rhmdp-day-radius": "10px",
      "--rhmdp-day-text": "#cbd5e1",
      "--rhmdp-day-muted-text": "#475569",
      "--rhmdp-day-selected-bg": "#22d3ee",
      "--rhmdp-day-selected-text": "#06141b",
      "--rhmdp-day-hover-bg": "#1c2740",
      "--rhmdp-day-today-text": "#67e8f9",
      "--rhmdp-day-weekend-text": "#f472b6",
      "--rhmdp-weekday-text": "#64748b",
      "--rhmdp-title-text": "#f8fafc",
      "--rhmdp-arrow-text": "#22d3ee",
      "--rhmdp-time-text": "#f8fafc",
      "--rhmdp-arrow-hover-bg": "#1c2740",
    },
    preview: {
      page: {
        background:
          "radial-gradient(circle at 30% 20%, #1b2735 0%, #090a0f 70%)",
      },
      card: {
        background: "#101522",
        border: "1px solid #1f2a3d",
        boxShadow: "0 24px 60px rgba(0,0,0,0.6)",
      },
    },
  },
  {
    name: "Sunset Peach",
    isRange: true,
    tokens: {
      ...DEFAULTS,
      "--rhmdp-day-radius": "999px",
      "--rhmdp-day-text": "#7c2d12",
      "--rhmdp-day-muted-text": "#e7b6a0",
      "--rhmdp-day-selected-bg": "#fb923c",
      "--rhmdp-day-selected-text": "#ffffff",
      "--rhmdp-day-range-bg": "#ffe4d1",
      "--rhmdp-day-range-hover-bg": "#fff0e6",
      "--rhmdp-day-hover-bg": "#ffe3d0",
      "--rhmdp-day-today-text": "#ea580c",
      "--rhmdp-day-weekend-text": "#fb7185",
      "--rhmdp-weekday-text": "#c2754b",
      "--rhmdp-title-text": "#9a3412",
      "--rhmdp-arrow-text": "#ea580c",
    },
    preview: {
      page: { background: "linear-gradient(135deg, #ffd1a1 0%, #ff9a9e 100%)" },
      card: {
        background: "#fffaf6",
        boxShadow: "0 18px 40px rgba(255, 122, 95, 0.3)",
      },
    },
  },
  {
    name: "Minimal Mono",
    isRange: false,
    tokens: {
      ...DEFAULTS,
      "--rhmdp-day-radius": "999px",
      "--rhmdp-day-text": "#333333",
      "--rhmdp-day-muted-text": "#cfcfcf",
      "--rhmdp-day-selected-bg": "#111111",
      "--rhmdp-day-selected-text": "#ffffff",
      "--rhmdp-day-hover-bg": "#f0f0f0",
      "--rhmdp-day-today-text": "#111111",
      "--rhmdp-day-weekend-text": "#bcbcbc",
      "--rhmdp-weekday-text": "#bbbbbb",
      "--rhmdp-title-text": "#111111",
      "--rhmdp-arrow-text": "#111111",
    },
    preview: {
      page: { background: "#fafafa" },
      card: {
        background: "#fff",
        border: "1px solid #ececec",
        boxShadow: "0 8px 30px rgba(0,0,0,0.05)",
      },
    },
  },
  {
    name: "Mint Fresh",
    isRange: true,
    tokens: {
      ...DEFAULTS,
      "--rhmdp-day-radius": "999px",
      "--rhmdp-day-text": "#0f5d57",
      "--rhmdp-day-muted-text": "#9cd3c8",
      "--rhmdp-day-selected-bg": "#14b8a6",
      "--rhmdp-day-selected-text": "#ffffff",
      "--rhmdp-day-range-bg": "#d1fae5",
      "--rhmdp-day-range-hover-bg": "#ecfdf5",
      "--rhmdp-day-hover-bg": "#d6f7e7",
      "--rhmdp-day-today-text": "#14b8a6",
      "--rhmdp-day-weekend-text": "#f59e0b",
      "--rhmdp-weekday-text": "#5eada2",
      "--rhmdp-title-text": "#0f766e",
      "--rhmdp-arrow-text": "#14b8a6",
    },
    preview: {
      page: { background: "linear-gradient(135deg, #d3f8e2 0%, #a1e3d8 100%)" },
      card: {
        background: "#ffffff",
        boxShadow: "0 16px 40px rgba(16, 122, 110, 0.22)",
      },
    },
  },
  {
    name: "Royal Gold",
    isRange: false,
    tokens: {
      ...DEFAULTS,
      "--rhmdp-day-radius": "10px",
      "--rhmdp-day-text": "#e0e7ff",
      "--rhmdp-day-muted-text": "#6d6aa8",
      "--rhmdp-day-selected-bg": "#fbbf24",
      "--rhmdp-day-selected-text": "#1e1b4b",
      "--rhmdp-day-hover-bg": "#2d2a66",
      "--rhmdp-day-today-text": "#fbbf24",
      "--rhmdp-day-weekend-text": "#818cf8",
      "--rhmdp-weekday-text": "#a5b4fc",
      "--rhmdp-title-text": "#fde68a",
      "--rhmdp-arrow-text": "#fbbf24",
    },
    preview: {
      page: { background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)" },
      card: {
        background: "#1e1b4b",
        border: "1px solid #3730a3",
        boxShadow: "0 24px 60px rgba(0,0,0,0.5)",
      },
    },
  },
  {
    name: "Slate Range",
    isRange: true,
    tokens: {
      ...DEFAULTS,
      "--rhmdp-day-radius": "10px",
      "--rhmdp-day-selected-bg": "#303030",
      "--rhmdp-day-selected-text": "#ffffff",
      "--rhmdp-day-range-bg": "#a8adb4",
      "--rhmdp-day-range-hover-bg": "#cfd2d6",
      "--rhmdp-day-hover-bg": "#ececef",
    },
  },
  {
    name: "Crimson Grid",
    isRange: true,
    tokens: {
      ...DEFAULTS,
      "--rhmdp-day-radius": "0px",
      "--rhmdp-day-border": "#c7cbcf",
      "--rhmdp-day-selected-bg": "#d80202",
      "--rhmdp-day-selected-text": "#ffffff",
      "--rhmdp-day-range-bg": "#ff9a9a",
      "--rhmdp-day-range-hover-bg": "#ffd0d0",
      "--rhmdp-day-hover-bg": "#ffe3e3",
      "--rhmdp-weekday-text": "#7a7a7a",
    },
  },
  {
    name: "Graphite Pink",
    isRange: true,
    tokens: {
      ...DEFAULTS,
      "--rhmdp-day-radius": "10px",
      "--rhmdp-day-text": "#ffffff",
      "--rhmdp-day-muted-text": "#8a8a8a",
      "--rhmdp-day-selected-bg": "#ff4794",
      "--rhmdp-day-selected-text": "#ffffff",
      "--rhmdp-day-range-bg": "#6b6b6b",
      "--rhmdp-day-range-hover-bg": "#525252",
      "--rhmdp-day-hover-bg": "#4a4a4a",
      "--rhmdp-day-weekend-text": "#ff4794",
      "--rhmdp-weekday-text": "#7a7a7a",
      "--rhmdp-title-text": "#ffffff",
      "--rhmdp-arrow-text": "#ffffff",
    },
    preview: {
      page: { background: "#1f1f1f" },
      card: { background: "#333333", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" },
    },
  },
  {
    name: "Lime Sheet",
    isRange: true,
    tokens: {
      ...DEFAULTS,
      "--rhmdp-day-radius": "0px",
      "--rhmdp-day-border": "#d6dadf",
      "--rhmdp-day-text": "#494949",
      "--rhmdp-day-selected-bg": "#a4fc00",
      "--rhmdp-day-selected-text": "#1a2e05",
      "--rhmdp-day-range-bg": "#e7ffb9",
      "--rhmdp-day-range-hover-bg": "#ecf8d5",
      "--rhmdp-day-hover-bg": "#eef7d2",
      "--rhmdp-day-weekend-text": "#ff0000",
      "--rhmdp-weekday-text": "#7a7a7a",
      "--rhmdp-title-text": "#5c5c5c",
    },
  },
];

/**
 * Build a full theme state from a preset: tokens the preset defines are enabled
 * with its value; every other token is reset to its seed and disabled, so it
 * falls back to the library default.
 */
const stateFromPreset = (preset: Preset): ThemeState =>
  Object.fromEntries(
    ALL_VARS.map((v) => {
      const value = preset.tokens[v.cssVar];
      return [
        v.cssVar,
        value != null
          ? { value, enabled: true }
          : { value: v.seed, enabled: false },
      ];
    })
  );

/* -------------------------------------------------------------------------- */
/*                                  UI atoms                                  */
/* -------------------------------------------------------------------------- */

const panel: CSSProperties = {
  background: "#fff",
  border: "1px solid #e5e7eb",
  borderRadius: 12,
  boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
};

/**
 * Native `<input type="color">` fires its React `onChange` (the DOM `input`
 * event) continuously while the cursor moves inside the picker — every fire
 * would re-render the whole builder (preview + CSS). To avoid that, the swatch
 * tracks its live value in cheap local state and only **commits** to the parent
 * on the native `change` event, which fires once when the picker is dismissed.
 */
const ColorSwatch = ({
  value,
  onCommit,
  style,
}: {
  value: string;
  onCommit: (value: string) => void;
  style?: CSSProperties;
}) => {
  const ref = useRef<HTMLInputElement>(null);
  const [draft, setDraft] = useState(value);

  // Keep the live swatch in sync when the value changes from outside (Reset,
  // typing in the text field, …).
  useEffect(() => setDraft(value), [value]);

  // Latest `onCommit` without re-subscribing the native listener every render.
  const commitRef = useRef(onCommit);
  commitRef.current = onCommit;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const handleCommit = () => commitRef.current(el.value);
    el.addEventListener("change", handleCommit);
    return () => el.removeEventListener("change", handleCommit);
  }, []);

  return (
    <input
      ref={ref}
      type="color"
      value={isHex(draft) ? draft : "#000000"}
      // `input` event — live, isolated to this small component only.
      onChange={(e) => setDraft(e.target.value)}
      style={style}
    />
  );
};

const VarRow = ({
  def,
  state,
  onChange,
  onToggle,
}: {
  def: VarDef;
  state: TokenState;
  onChange: (value: string) => void;
  onToggle: (enabled: boolean) => void;
}) => {
  const dim = state.enabled ? 1 : 0.45;
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "7px 0",
        opacity: dim,
        transition: "opacity 120ms",
      }}
    >
      <input
        type="checkbox"
        checked={state.enabled}
        onChange={(e) => onToggle(e.target.checked)}
        title={state.enabled ? "Emit this token" : "Token falls back to default"}
        style={{ cursor: "pointer", flexShrink: 0 }}
      />

      {def.kind === "color" ? (
        <ColorSwatch
          value={state.value}
          onCommit={(value) => {
            onChange(value);
            if (!state.enabled) onToggle(true);
          }}
          style={{
            width: 30,
            height: 30,
            padding: 0,
            border: "1px solid #d1d5db",
            borderRadius: 6,
            background: "none",
            cursor: "pointer",
            flexShrink: 0,
          }}
        />
      ) : def.kind === "weight" || def.kind === "size" ? (
        // Preview the chosen font weight / size on a glyph.
        <span
          style={{
            width: 30,
            height: 30,
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            border: "1px solid #d1d5db",
            borderRadius: 6,
            background: "#fff",
            color: "#111827",
            fontWeight:
              def.kind === "weight"
                ? (state.value as CSSProperties["fontWeight"])
                : 600,
            fontSize: def.kind === "size" ? state.value : undefined,
          }}
        >
          A
        </span>
      ) : (
        <span
          style={{
            width: 30,
            height: 30,
            flexShrink: 0,
            border: "1px solid #d1d5db",
            borderRadius: state.value,
            background: "#e5e7eb",
          }}
        />
      )}

      <div style={{ flex: 1, minWidth: 0 }}>
        <div
          style={{
            fontSize: 13,
            fontWeight: 600,
            color: "#111827",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {def.label}
        </div>
        <div
          style={{
            fontSize: 11,
            color: "#9ca3af",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {def.hint}
        </div>
      </div>

      <input
        type="text"
        value={state.value}
        onChange={(e) => {
          onChange(e.target.value);
          if (!state.enabled) onToggle(true);
        }}
        spellCheck={false}
        style={{
          width: 92,
          flexShrink: 0,
          fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
          fontSize: 12,
          padding: "5px 7px",
          border: "1px solid #d1d5db",
          borderRadius: 6,
          color: "#111827",
          background: "#fff",
        }}
      />
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/*                              The Theme Builder                             */
/* -------------------------------------------------------------------------- */

const ThemeBuilder = () => {
  const [theme, setTheme] = useState<ThemeState>(initialState);
  const [isRange, setIsRange] = useState(true);
  const [usePanel, setUsePanel] = useState(false);
  const [selector, setSelector] = useState(".my-calendar");
  const [copied, setCopied] = useState(false);
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
    setIsRange(found.isRange);
  };

  /** The card background, driven by the `--rhmdp-card-bg` preview variable. */
  const cardBg = (chrome?.card?.background as string) ?? "#ffffff";
  const setCardBg = (background: string) =>
    setChrome((prev) => ({ ...prev, card: { ...prev?.card, background } }));

  /** Inline style with the enabled custom properties, for the live preview. */
  const previewVars = useMemo(() => {
    const out: Record<string, string> = {};
    for (const v of ALL_VARS) {
      const s = theme[v.cssVar];
      if (s.enabled && s.value.trim()) out[v.cssVar] = s.value.trim();
    }
    return out as CSSProperties;
  }, [theme]);

  /** The copy-pasteable CSS rule built from the enabled tokens. */
  const css = useMemo(() => {
    const lines = ALL_VARS.filter(
      (v) => theme[v.cssVar].enabled && theme[v.cssVar].value.trim()
    ).map((v) => `  ${v.cssVar}: ${theme[v.cssVar].value.trim()};`);
    const sel = selector.trim() || ".my-calendar";
    return `${sel} {\n${lines.join("\n")}\n}`;
  }, [theme, selector]);

  const copy = () => {
    navigator.clipboard?.writeText(css).then(
      () => {
        setCopied(true);
        window.setTimeout(() => setCopied(false), 1500);
      },
      () => setCopied(false)
    );
  };

  const checker =
    "repeating-conic-gradient(#fafafa 0% 25%, #fff 0% 50%) 50% / 22px 22px";

  // A fixed month so today/weekend/holiday/range states are all visible.
  const initialValue = isRange
    ? [new Date("2024-05-07"), new Date("2024-05-24")]
    : new Date("2024-05-16T13:30:00");

  const config: TCalendarConfig = {
    locale: "en-US",
    weekStartsOn: "monday",
    weekdayFormat: "short",
    weekends: ["saturday", "sunday"],
    showOtherDays: true,
    holidays: [new Date("2024-05-27")],
  };

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
        {/* ---------------------------- Dashboard --------------------------- */}
        <div style={{ ...panel, padding: 16 }}>
          {/* Preset loader */}
          <label
            style={{
              display: "block",
              fontSize: 11,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: 0.6,
              color: "#9ca3af",
              marginBottom: 6,
            }}
          >
            Load a preset
          </label>
          <select
            value={preset}
            onChange={(e) => applyPreset(e.target.value)}
            style={{
              width: "100%",
              padding: "9px 10px",
              fontSize: 14,
              border: "1px solid #d1d5db",
              borderRadius: 8,
              background: "#fff",
              color: "#111827",
              cursor: "pointer",
              marginBottom: 16,
            }}
          >
            <option value="">Custom / start from default…</option>
            {PRESETS.map((p) => (
              <option key={p.name} value={p.name}>
                {p.name}
              </option>
            ))}
          </select>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 8,
            }}
          >
            <h2 style={{ margin: 0, fontSize: 15, color: "#111827" }}>
              Variables
            </h2>
            <button
              onClick={reset}
              style={{
                fontSize: 12,
                padding: "5px 10px",
                border: "1px solid #d1d5db",
                borderRadius: 6,
                background: "#fff",
                color: "#374151",
                cursor: "pointer",
              }}
            >
              Reset
            </button>
          </div>

          <div
            style={{
              fontSize: 11,
              color: "#9ca3af",
              marginBottom: 8,
              lineHeight: 1.4,
            }}
          >
            Unchecked tokens are omitted and fall back to the library default.
            Editing one switches it on automatically.
          </div>

          <div
            style={{
              maxHeight: "calc(100vh - 240px)",
              overflowY: "auto",
              paddingRight: 6,
            }}
          >
            {SECTIONS.map((section) => (
              <div key={section.title} style={{ marginBottom: 10 }}>
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: 0.6,
                    color: "#9ca3af",
                    padding: "8px 0 2px",
                    borderBottom: "1px solid #f3f4f6",
                  }}
                >
                  {section.title}
                </div>
                {section.vars.map((def) => (
                  <VarRow
                    key={def.cssVar}
                    def={def}
                    state={theme[def.cssVar]}
                    onChange={(value) => set(def.cssVar, { value })}
                    onToggle={(enabled) => set(def.cssVar, { enabled })}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* ---------------------------- Live preview ------------------------ */}
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
            <label style={toggleLabel}>
              <input
                type="checkbox"
                checked={usePanel}
                onChange={(e) => setUsePanel(e.target.checked)}
              />
              Use PanelHeader
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
              {usePanel
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
              background: chrome?.page?.background ?? checker,
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
                  width: 340,
                  ...previewVars,
                  "--rhmdp-card-bg": cardBg,
                } as CSSProperties
              }
            >
              <div
                style={{
                  borderRadius: 12,
                  padding: 16,
                  boxShadow: "0 8px 30px rgba(0,0,0,0.10)",
                  ...chrome?.card,
                  background: "var(--rhmdp-card-bg, #fff)",
                }}
              >
                <DatePickerProvider
                  key={`${isRange}-${usePanel}`}
                  isRange={isRange}
                  initialValue={initialValue}
                  calendar="gregory"
                  config={config}
                  onChange={(e) => console.log("onChange:", e)}
                >
                  {usePanel ? (
                    <PanelHeader>
                      <WeekDays />
                      <DaySlots />
                    </PanelHeader>
                  ) : (
                    <>
                      <Title />
                      <Header
                        monthSelectStyles={previewSelect}
                        yearSelectStyles={previewSelect}
                      />
                      <WeekDays />
                      <DaySlots />
                    </>
                  )}
                  <div
                    style={{
                      borderTop: "1px solid rgba(127,127,127,0.2)",
                      marginTop: 12,
                      paddingTop: 10,
                    }}
                  >
                    <TimePicker index={isRange ? 1 : 0} use12Hours />
                  </div>
                </DatePickerProvider>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ------------------------------ CSS output --------------------------- */}
      <div style={{ ...panel, marginTop: 20, padding: 16 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 12,
            marginBottom: 10,
            flexWrap: "wrap",
          }}
        >
          <h2 style={{ margin: 0, fontSize: 15, color: "#111827" }}>
            Generated CSS
          </h2>
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <label
              style={{ fontSize: 12, color: "#6b7280", display: "flex", gap: 6 }}
            >
              Selector
              <input
                type="text"
                value={selector}
                onChange={(e) => setSelector(e.target.value)}
                spellCheck={false}
                style={{
                  fontFamily: "ui-monospace, Menlo, monospace",
                  fontSize: 12,
                  padding: "4px 8px",
                  border: "1px solid #d1d5db",
                  borderRadius: 6,
                  width: 150,
                }}
              />
            </label>
            <button
              onClick={copy}
              style={{
                fontSize: 13,
                fontWeight: 600,
                padding: "7px 16px",
                border: "none",
                borderRadius: 7,
                background: copied ? "#16a34a" : "#111827",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              {copied ? "✓ Copied" : "Copy CSS"}
            </button>
          </div>
        </div>

        <pre
          style={{
            margin: 0,
            background: "#0f172a",
            color: "#e2e8f0",
            padding: 16,
            borderRadius: 10,
            overflowX: "auto",
            fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
            fontSize: 13,
            lineHeight: 1.6,
          }}
        >
          {css}
        </pre>

        <p style={{ margin: "10px 0 0", fontSize: 12, color: "#9ca3af" }}>
          Wrap your calendar in an element matching the selector (e.g.{" "}
          <code>{`<div className="${(selector.trim() || ".my-calendar").replace(/^\./, "")}">`}</code>
          ) and the tokens cascade into the whole picker.
        </p>
      </div>
    </div>
  );
};

const toggleLabel: CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: 6,
  fontSize: 13,
  color: "#374151",
  cursor: "pointer",
  userSelect: "none",
};

const previewSelect: CSSProperties = {
  backgroundColor: "#f0f0f0",
  color: "#000",
  padding: "4px",
  borderRadius: 5,
  outline: "none",
};

/**
 * The interactive theme builder. (This story renders its own UI, so the
 * Storybook args/controls panel isn't used here.)
 */
export const Builder: Story = {
  render: () => <ThemeBuilder />,
};
