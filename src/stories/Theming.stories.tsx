import type { CSSProperties } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import DatePickerProvider from "../DatePickerProvider";
import DaySlots from "../components/daySlots/DaySlots";
import Header from "../components/header/Header";
import PanelHeader from "../components/panelHeader/PanelHeader";
import TimePicker from "../components/timePicker/TimePicker";
import { TTimePickerProps } from "../components/timePicker/types";
import Title from "../components/title/Title";
import WeekDays from "../components/weekDays/WeekDays";
import { TDatePickerProps } from "../types";
import { baseMeta } from "./constants";

/**
 * A gallery of **ready-made, good-looking themes**. Each one re-colors the
 * default look purely through the library's `--rhmdp-*` CSS variables (set on
 * the card wrapper) — no `className` overrides, no `!important`, and almost no
 * inline `*Styles`. The selected circle, the in-range fill with rounded end
 * caps, the hover, today/weekend colors and the corner radius all come from the
 * variables, so a theme is just a small palette object you can copy and tweak.
 */
const meta = {
  title: "Example/Theming",
  ...baseMeta,
} satisfies Meta<typeof DatePickerProvider>;

export default meta;
type Story = StoryObj<typeof meta>;

/* -------------------------------------------------------------------------- */
/*                               Theme contract                               */
/* -------------------------------------------------------------------------- */

/** Tiny helper so the `--rhmdp-*` custom properties typecheck as a style obj. */
const vars = (v: Record<string, string>): CSSProperties => v as CSSProperties;

/**
 * Every themeable variable at its library default. Each theme spreads this and
 * overrides what it cares about, so a theme always emits the *complete* token
 * set (it "supports" every variable) while still reading as a short palette.
 * Setting a token to its default is identical to leaving it unset — the value
 * matches the `var(--rhmdp-*, default)` fallback baked into the components — so
 * spreading this changes nothing visually; it just makes the full surface
 * explicit and copy-pasteable.
 */
const DEFAULT_TOKENS: Record<string, string> = {
  /* day — base & structure */
  "--rhmdp-day-text": "inherit",
  "--rhmdp-day-muted-text": "#c7c7cc",
  "--rhmdp-day-border": "transparent",
  "--rhmdp-day-border-width": "1px",
  "--rhmdp-day-full-border-width": "0px",
  "--rhmdp-day-radius": "999px",
  "--rhmdp-day-weight": "inherit",
  "--rhmdp-day-size": "inherit",
  "--rhmdp-day-padding": "0.5rem",
  "--rhmdp-day-height": "2.5rem",
  "--rhmdp-day-gap": "0px",
  /* day — state text */
  "--rhmdp-day-today-text": "#007aff",
  "--rhmdp-day-weekend-text": "#8e8e93",
  "--rhmdp-day-holiday-text": "#ff3b30",
  "--rhmdp-day-disabled-text": "#c7c7cc",
  /* day — hover / selected / range */
  "--rhmdp-day-hover-bg": "#f2f2f7",
  "--rhmdp-day-hover-text": "inherit",
  "--rhmdp-day-selected-bg": "#007aff",
  "--rhmdp-day-selected-text": "#ffffff",
  "--rhmdp-day-range-bg": "#e6f0ff",
  "--rhmdp-day-range-hover-bg": "#f2f7ff",
  /* weekday */
  "--rhmdp-weekday-text": "inherit",
  "--rhmdp-weekday-weight": "600",
  "--rhmdp-weekday-size": "inherit",
  /* title */
  "--rhmdp-title-text": "inherit",
  "--rhmdp-title-weight": "600",
  "--rhmdp-title-size": "1.5rem",
  /* header month/year <select> dropdowns */
  "--rhmdp-header-select-bg": "transparent",
  "--rhmdp-header-select-text": "inherit",
  "--rhmdp-header-select-border": "transparent",
  "--rhmdp-header-select-radius": "revert",
  "--rhmdp-header-select-padding": "revert",
  "--rhmdp-header-select-size": "revert",
  /* arrow buttons (Header / PanelHeader / TimePicker) */
  "--rhmdp-arrow-text": "inherit",
  "--rhmdp-arrow-bg": "transparent",
  "--rhmdp-arrow-hover-bg": "#f2f2f7",
  "--rhmdp-arrow-hover-text": "inherit",
  /* header label weight */
  "--rhmdp-header-weight": "600",
  /* time */
  "--rhmdp-time-text": "inherit",
  "--rhmdp-time-weight": "600",
  "--rhmdp-time-size": "1.25rem",
  /* panel */
  "--rhmdp-panel-selected-bg": "#007aff",
  "--rhmdp-panel-selected-text": "#ffffff",
  "--rhmdp-panel-cell-bg": "transparent",
  "--rhmdp-panel-cell-text": "inherit",
  "--rhmdp-panel-cell-hover-bg": "#f2f2f7",
  "--rhmdp-panel-cell-hover-text": "inherit",
  "--rhmdp-panel-cell-size": "inherit",
  "--rhmdp-panel-cell-weight": "inherit",
};

type Theme = {
  /** Full-bleed background behind the card. */
  page: CSSProperties;
  /** The calendar card itself (background, border, radius, shadow…). */
  card: CSSProperties;
  /** The `--rhmdp-*` tokens — this is where the actual theming happens. */
  tokens: CSSProperties;
  /** Day-grid container styles (e.g. `gap` between cells). */
  grid?: CSSProperties;
  /** Extra `Title` typography (letter-spacing, transform…) when needed. */
  title?: CSSProperties;
  /** `Header` row chrome when needed. */
  headerRoot?: CSSProperties;
  /**
   * Flourish a token can't express on the selected day — a gradient background
   * and/or a glow. Merged on top of the `--rhmdp-day-selected-bg` default.
   */
  selectedAccent?: CSSProperties;
  /** Render a `TimePicker` with these props below the grid. */
  timePicker?: TTimePickerProps;
  /**
   * Use the self-contained `PanelHeader` (in-grid month/year pickers) instead of
   * the default `Title` + `Header` row. The day-view is wrapped as its children.
   */
  panelHeader?: boolean;
};

/**
 * Renders a full date picker themed entirely from a `Theme`. Only the palette
 * changes between stories — the markup is identical.
 */
const ThemedCalendar =
  (theme: Theme) =>
  <T extends boolean>(props: TDatePickerProps<T>) =>
    (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "48px 16px",
          ...theme.page,
        }}
      >
        {/* The `--rhmdp-*` tokens live here and cascade into the whole calendar. */}
        <div style={{ width: 340, ...theme.card, ...theme.tokens }}>
          <DatePickerProvider
            {...props}
            onChange={(e) => console.log("onChange: ", e)}
          >
            {theme.panelHeader ? (
              <PanelHeader rootStyles={theme.headerRoot}>
                <WeekDays />
                <DaySlots
                  parentStyles={theme.grid}
                  selectedStyles={theme.selectedAccent}
                />
              </PanelHeader>
            ) : (
              <>
                <Title style={theme.title} />
                <Header rootStyles={theme.headerRoot} />
                <WeekDays />
                <DaySlots
                  parentStyles={theme.grid}
                  selectedStyles={theme.selectedAccent}
                />
              </>
            )}
            {theme.timePicker && (
              <div
                style={{
                  borderTop: "1px solid rgba(127,127,127,0.25)",
                  marginTop: 14,
                  paddingTop: 12,
                }}
              >
                <TimePicker {...theme.timePicker} />
              </div>
            )}
          </DatePickerProvider>
        </div>
      </div>
    );

const rangeArgs: Story["args"] = {
  isRange: true,
  initialValue: [new Date("2024-05-07"), new Date("2024-05-24")],
  calendar: "gregory",
  config: {
    locale: "en-US",
    weekStartsOn: "monday",
    weekdayFormat: "short",
    weekends: ["saturday", "sunday"],
    showOtherDays: true,
  },
};

const singleArgs: Story["args"] = {
  isRange: false,
  initialValue: new Date("2024-05-16"),
  calendar: "gregory",
  config: {
    locale: "en-US",
    weekStartsOn: "monday",
    weekdayFormat: "short",
    weekends: ["saturday", "sunday"],
    showOtherDays: true,
  },
};

/**
 * Light, neutral month/year `<select>` chrome used by most light themes —
 * expressed as `--rhmdp-header-select-*` tokens so it's spread into a theme's
 * `tokens` instead of passed as an inline `*Styles` prop.
 */
const lightSelectTokens: Record<string, string> = {
  "--rhmdp-header-select-bg": "#f0f0f0",
  "--rhmdp-header-select-text": "#000000",
  "--rhmdp-header-select-radius": "5px",
  "--rhmdp-header-select-padding": "4px",
};

/* -------------------------------------------------------------------------- */
/*                          1. Aurora Glass (range)                           */
/* -------------------------------------------------------------------------- */

/**
 * Frosted glassmorphism on a soft aurora gradient. The range fill is a
 * translucent white; the selected ends are a violet→pink gradient pill.
 */
export const AuroraGlass: Story = {
  args: rangeArgs,
  render: ThemedCalendar({
    page: {
      background:
        "linear-gradient(135deg, #6d83f2 0%, #a06bf0 50%, #f17bb4 100%)",
    },
    card: {
      background: "rgba(255, 255, 255, 0.18)",
      backdropFilter: "blur(18px)",
      WebkitBackdropFilter: "blur(18px)",
      border: "1px solid rgba(255, 255, 255, 0.35)",
      borderRadius: 24,
      padding: 22,
      boxShadow: "0 20px 50px rgba(80, 40, 140, 0.35)",
    },
    tokens: vars({
      ...DEFAULT_TOKENS,
      "--rhmdp-day-radius": "999px",
      "--rhmdp-day-text": "#ffffff",
      "--rhmdp-day-muted-text": "rgba(255,255,255,0.45)",
      "--rhmdp-day-selected-text": "#ffffff",
      "--rhmdp-day-range-bg": "rgba(255,255,255,0.18)",
      "--rhmdp-day-range-hover-bg": "rgba(255,255,255,0.10)",
      "--rhmdp-day-hover-bg": "rgba(255,255,255,0.18)",
      "--rhmdp-day-today-text": "#ffffff",
      "--rhmdp-day-weekend-text": "rgba(255,255,255,0.6)",
      "--rhmdp-weekday-text": "rgba(255,255,255,0.75)",
      "--rhmdp-title-text": "#ffffff",
      "--rhmdp-arrow-text": "#ffffff",
      "--rhmdp-header-select-bg": "rgba(255,255,255,0.2)",
      "--rhmdp-header-select-text": "#ffffff",
      "--rhmdp-header-select-border": "rgba(255,255,255,0.3)",
      "--rhmdp-header-select-radius": "8px",
      "--rhmdp-header-select-padding": "4px 6px",
      // Airy, refined typography to match the frosted look.
      "--rhmdp-day-weight": "500",
      "--rhmdp-day-size": "0.95rem",
      "--rhmdp-weekday-weight": "600",
      "--rhmdp-weekday-size": "0.72rem",
      "--rhmdp-title-weight": "600",
      "--rhmdp-title-size": "1.4rem",
      "--rhmdp-header-weight": "600",
    }),
    selectedAccent: {
      background: "linear-gradient(135deg, #7c3aed, #db2777)",
      boxShadow: "0 6px 16px rgba(124, 58, 237, 0.5)",
    },
  }),
};

/* -------------------------------------------------------------------------- */
/*                         2. Midnight Neon (single)                          */
/* -------------------------------------------------------------------------- */

/**
 * A dark dashboard look: near-black card, cyan neon selection with a glow, a
 * hot-pink weekend accent, and a matching `TimePicker`.
 */
export const MidnightNeon: Story = {
  args: { ...singleArgs, initialValue: new Date("2024-05-16T21:30:00") },
  render: ThemedCalendar({
    page: {
      background: "radial-gradient(circle at 30% 20%, #1b2735 0%, #090a0f 70%)",
    },
    card: {
      background: "#101522",
      border: "1px solid #1f2a3d",
      borderRadius: 18,
      padding: 22,
      boxShadow: "0 24px 60px rgba(0,0,0,0.6)",
    },
    tokens: vars({
      ...DEFAULT_TOKENS,
      "--rhmdp-day-radius": "10px",
      "--rhmdp-day-text": "#cbd5e1",
      "--rhmdp-day-muted-text": "#475569",
      "--rhmdp-day-selected-bg": "#22d3ee",
      "--rhmdp-day-selected-text": "#06141b",
      "--rhmdp-day-hover-bg": "#1c2740",
      "--rhmdp-day-hover-text": "#67e8f9",
      "--rhmdp-day-today-text": "#67e8f9",
      "--rhmdp-day-weekend-text": "#f472b6",
      "--rhmdp-weekday-text": "#64748b",
      "--rhmdp-title-text": "#f8fafc",
      // Shared by Header / PanelHeader / TimePicker arrows.
      "--rhmdp-arrow-text": "#22d3ee",
      "--rhmdp-arrow-hover-bg": "#1c2740",
      "--rhmdp-arrow-hover-text": "#67e8f9",
      "--rhmdp-time-text": "#f8fafc",
      "--rhmdp-header-select-bg": "#1a2234",
      "--rhmdp-header-select-text": "#cbd5e1",
      "--rhmdp-header-select-border": "#243049",
      "--rhmdp-header-select-radius": "8px",
      "--rhmdp-header-select-padding": "4px 6px",
      // Bold, techy dashboard type with a large neon clock readout.
      "--rhmdp-day-weight": "500",
      "--rhmdp-day-size": "0.95rem",
      "--rhmdp-weekday-weight": "700",
      "--rhmdp-weekday-size": "0.7rem",
      "--rhmdp-title-weight": "700",
      "--rhmdp-title-size": "1.35rem",
      "--rhmdp-header-weight": "600",
      "--rhmdp-time-weight": "700",
      "--rhmdp-time-size": "1.3rem",
    }),
    // bg comes from --rhmdp-day-selected-bg; we only add the neon glow.
    selectedAccent: { boxShadow: "0 0 18px rgba(34, 211, 238, 0.7)" },
    // arrows (header + stepper) are themed via the shared --rhmdp-* tokens.
    timePicker: { use12Hours: true },
  }),
};

/* -------------------------------------------------------------------------- */
/*                          3. Sunset Peach (range)                           */
/* -------------------------------------------------------------------------- */

/**
 * Warm and friendly: a cream card on a peachy gradient, an orange→pink gradient
 * for the selected ends and a soft peach fill in between.
 */
export const SunsetPeach: Story = {
  args: rangeArgs,
  render: ThemedCalendar({
    page: {
      background: "linear-gradient(135deg, #ffd1a1 0%, #ff9a9e 100%)",
    },
    card: {
      background: "#fffaf6",
      borderRadius: 20,
      padding: 22,
      boxShadow: "0 18px 40px rgba(255, 122, 95, 0.3)",
    },
    tokens: vars({
      ...DEFAULT_TOKENS,
      "--rhmdp-day-radius": "999px",
      "--rhmdp-day-text": "#7c2d12",
      "--rhmdp-day-muted-text": "#e7b6a0",
      "--rhmdp-day-selected-text": "#ffffff",
      "--rhmdp-day-range-bg": "#ffe4d1",
      "--rhmdp-day-range-hover-bg": "#fff0e6",
      "--rhmdp-day-hover-bg": "#ffe3d0",
      "--rhmdp-day-today-text": "#ea580c",
      "--rhmdp-day-weekend-text": "#fb7185",
      "--rhmdp-weekday-text": "#c2754b",
      "--rhmdp-title-text": "#9a3412",
      "--rhmdp-arrow-text": "#ea580c",
      "--rhmdp-header-select-bg": "#fff1e7",
      "--rhmdp-header-select-text": "#9a3412",
      "--rhmdp-header-select-border": "#ffd8bf",
      "--rhmdp-header-select-radius": "8px",
      "--rhmdp-header-select-padding": "4px 6px",
      // Friendly, slightly chunky rounded type.
      "--rhmdp-day-weight": "500",
      "--rhmdp-day-size": "1rem",
      "--rhmdp-weekday-weight": "600",
      "--rhmdp-weekday-size": "0.72rem",
      "--rhmdp-title-weight": "700",
      "--rhmdp-title-size": "1.5rem",
      "--rhmdp-header-weight": "600",
    }),
    selectedAccent: {
      background: "linear-gradient(135deg, #fb923c, #f43f5e)",
      boxShadow: "0 6px 14px rgba(244, 63, 94, 0.4)",
    },
  }),
};

/* -------------------------------------------------------------------------- */
/*                         4. Minimal Mono (single)                           */
/* -------------------------------------------------------------------------- */

/**
 * Editorial and quiet: lots of whitespace, thin type, a single black dot for
 * the selected day.
 */
export const MinimalMono: Story = {
  args: singleArgs,
  render: ThemedCalendar({
    page: { background: "#fafafa" },
    card: {
      background: "#fff",
      borderRadius: 14,
      padding: 26,
      border: "1px solid #ececec",
      boxShadow: "0 8px 30px rgba(0,0,0,0.05)",
    },
    tokens: vars({
      ...DEFAULT_TOKENS,
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
      // transparent bg/border come from DEFAULT_TOKENS; only text & weight differ.
      "--rhmdp-header-select-text": "#111111",
      "--rhmdp-header-weight": "300",
      // Thin, editorial weights throughout (the spaced title is set inline).
      "--rhmdp-day-weight": "300",
      "--rhmdp-day-size": "1rem",
      "--rhmdp-weekday-weight": "400",
      "--rhmdp-weekday-size": "0.7rem",
    }),
    title: {
      fontWeight: 300,
      fontSize: "1.15em",
      letterSpacing: 6,
      textTransform: "uppercase",
      textAlign: "center",
      marginBottom: 12,
    },
  }),
};

/* -------------------------------------------------------------------------- */
/*                          5. Mint Fresh (range)                             */
/* -------------------------------------------------------------------------- */

/**
 * Soft, calm pastels — a mint/teal palette with rounded pills and a gentle mint
 * fill for the selected range.
 */
export const MintFresh: Story = {
  args: rangeArgs,
  render: ThemedCalendar({
    page: { background: "linear-gradient(135deg, #d3f8e2 0%, #a1e3d8 100%)" },
    card: {
      background: "#ffffff",
      borderRadius: 22,
      padding: 22,
      boxShadow: "0 16px 40px rgba(16, 122, 110, 0.22)",
    },
    tokens: vars({
      ...DEFAULT_TOKENS,
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
      "--rhmdp-header-select-bg": "#ecfdf5",
      "--rhmdp-header-select-text": "#0f766e",
      "--rhmdp-header-select-border": "#b7ebdd",
      "--rhmdp-header-select-radius": "8px",
      "--rhmdp-header-select-padding": "4px 6px",
      // Soft, calm type — medium days, gentle uppercase weekday caps.
      "--rhmdp-day-weight": "500",
      "--rhmdp-day-size": "0.95rem",
      "--rhmdp-weekday-weight": "600",
      "--rhmdp-weekday-size": "0.72rem",
      "--rhmdp-title-weight": "700",
      "--rhmdp-title-size": "1.45rem",
      "--rhmdp-header-weight": "600",
    }),
    selectedAccent: { boxShadow: "0 6px 14px rgba(20, 184, 166, 0.4)" },
  }),
};

/* -------------------------------------------------------------------------- */
/*                          6. Royal Gold (single)                            */
/* -------------------------------------------------------------------------- */

/**
 * Luxe and dramatic: deep indigo card with a warm gold gradient accent for the
 * selected day.
 */
export const RoyalGold: Story = {
  args: singleArgs,
  render: ThemedCalendar({
    page: { background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)" },
    card: {
      background: "#1e1b4b",
      border: "1px solid #3730a3",
      borderRadius: 18,
      padding: 22,
      boxShadow: "0 24px 60px rgba(0,0,0,0.5)",
    },
    tokens: vars({
      ...DEFAULT_TOKENS,
      "--rhmdp-day-radius": "10px",
      "--rhmdp-day-text": "#e0e7ff",
      "--rhmdp-day-muted-text": "#6d6aa8",
      "--rhmdp-day-selected-text": "#1e1b4b",
      "--rhmdp-day-hover-bg": "#2d2a66",
      "--rhmdp-day-today-text": "#fbbf24",
      "--rhmdp-day-weekend-text": "#818cf8",
      "--rhmdp-weekday-text": "#a5b4fc",
      "--rhmdp-title-text": "#fde68a",
      "--rhmdp-arrow-text": "#fbbf24",
      "--rhmdp-header-select-bg": "#312e81",
      "--rhmdp-header-select-text": "#e0e7ff",
      "--rhmdp-header-select-border": "#4338ca",
      "--rhmdp-header-select-radius": "8px",
      "--rhmdp-header-select-padding": "4px 6px",
      // Restrained weights so the gold serif title carries the drama.
      "--rhmdp-day-weight": "500",
      "--rhmdp-day-size": "0.95rem",
      "--rhmdp-weekday-weight": "600",
      "--rhmdp-weekday-size": "0.7rem",
      "--rhmdp-title-weight": "600",
      "--rhmdp-title-size": "1.6rem",
      "--rhmdp-header-weight": "600",
    }),
    // A gold serif title is the luxe flourish (font-family isn't a token).
    title: {
      fontFamily: "Georgia, 'Times New Roman', serif",
      letterSpacing: 1,
    },
    selectedAccent: {
      background: "linear-gradient(135deg, #fbbf24, #f59e0b)",
      boxShadow: "0 6px 16px rgba(251, 191, 36, 0.45)",
    },
  }),
};

/* -------------------------------------------------------------------------- */
/*                          7. Crimson Grid (range)                           */
/* -------------------------------------------------------------------------- */

/**
 * A bordered, square-celled grid with a bold crimson selection — a structured,
 * spreadsheet-like take on the range picker.
 */
export const CrimsonGrid: Story = {
  args: rangeArgs,
  render: ThemedCalendar({
    page: { background: "#f4f4f5" },
    card: {
      background: "#fff",
      borderRadius: 0,
      padding: 10,
      border: "1px solid #acb5be",
      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    },
    tokens: vars({
      ...DEFAULT_TOKENS,
      "--rhmdp-day-radius": "0px",
      "--rhmdp-day-border": "#c7cbcf",
      "--rhmdp-day-full-border-width": "1px",
      "--rhmdp-day-selected-bg": "#d80202",
      "--rhmdp-day-selected-text": "#ffffff",
      "--rhmdp-day-range-bg": "#ff9a9a",
      "--rhmdp-day-range-hover-bg": "#ffd0d0",
      "--rhmdp-day-hover-bg": "#ffe3e3",
      // Today / weekend tie back into the crimson palette (not the blue default).
      "--rhmdp-day-today-text": "#d80202",
      "--rhmdp-day-weekend-text": "#cf4d4d",
      "--rhmdp-weekday-text": "#7a7a7a",
      ...lightSelectTokens,
      // Tight, tabular grid type with bold uppercase weekday headers.
      "--rhmdp-day-weight": "400",
      "--rhmdp-day-size": "0.9rem",
      "--rhmdp-weekday-weight": "700",
      "--rhmdp-weekday-size": "0.7rem",
      "--rhmdp-header-weight": "700",
    }),
    grid: { gap: 2 },
    // Spaced, uppercase title gives the spreadsheet grid an editorial header.
    title: {
      fontWeight: 700,
      fontSize: "1.05em",
      letterSpacing: 4,
      textTransform: "uppercase",
      textAlign: "center",
      marginBottom: 10,
    },
    // A crimson rule under the nav frames the grid (distinct from Lime's box).
    headerRoot: {
      borderBottom: "1px solid #cccccc",
      marginBottom: 8,
      paddingBottom: 6,
    },
  }),
};

/* -------------------------------------------------------------------------- */
/*                           8. Lime Sheet (range)                            */
/* -------------------------------------------------------------------------- */

/**
 * Grid-lined and airy: hairline shared borders, a wide-tracked thin uppercase
 * title set in an inset header bar, and a punchy lime selection. The light,
 * editorial counterpart to Crimson Grid's bold, tight grid.
 */
export const LimeSheet: Story = {
  args: rangeArgs,
  render: ThemedCalendar({
    page: { background: "#f4f4f5" },
    card: {
      background: "#fff",
      borderRadius: 0,
      padding: 10,
      border: "1px solid #acb5be",
      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    },
    tokens: vars({
      ...DEFAULT_TOKENS,
      "--rhmdp-day-radius": "0px",
      "--rhmdp-day-border": "#d6dadf",
      "--rhmdp-day-text": "#494949",
      "--rhmdp-day-selected-bg": "#a4fc00",
      "--rhmdp-day-selected-text": "#1a2e05",
      "--rhmdp-day-range-bg": "#e7ffb9",
      "--rhmdp-day-range-hover-bg": "#ecf8d5",
      "--rhmdp-day-hover-bg": "#eef7d2",
      // Lime-tied today (not the blue default) keeps the palette coherent.
      "--rhmdp-day-today-text": "#65a30d",
      "--rhmdp-day-weekend-text": "#ff0000",
      "--rhmdp-weekday-text": "#7a7a7a",
      "--rhmdp-title-text": "#5c5c5c",
      ...lightSelectTokens,
      // Thin, wide-tracked type — the airy opposite of Crimson's bold grid.
      "--rhmdp-day-weight": "400",
      "--rhmdp-day-size": "0.9rem",
      "--rhmdp-weekday-weight": "500",
      "--rhmdp-weekday-size": "0.7rem",
      "--rhmdp-header-weight": "400",
    }),
    title: {
      fontWeight: 200,
      fontSize: "1.2em",
      marginBottom: 10,
      textAlign: "center",
      letterSpacing: 16,
      textTransform: "uppercase",
    },
    headerRoot: {
      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
      borderRadius: 7,
      marginBottom: 10,
      padding: 10,
      background: "linear-gradient(0deg, #ffffff 0%, #f4f4f4 100%)",
    },
  }),
};

/* -------------------------------------------------------------------------- */
/*                         9. iOS Cupertino (single)                          */
/* -------------------------------------------------------------------------- */

/**
 * The native iOS Calendar look: a crisp white sheet on a light-grey backdrop,
 * the system red accent for today and the selected day, and fully-rounded day
 * circles.
 */
export const IOSCupertino: Story = {
  args: singleArgs,
  render: ThemedCalendar({
    page: { background: "#f2f2f7" },
    card: {
      background: "#ffffff",
      borderRadius: 16,
      padding: 20,
      border: "1px solid #e5e5ea",
      boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
      fontFamily:
        "-apple-system, BlinkMacSystemFont, 'SF Pro Text', system-ui, sans-serif",
    },
    tokens: vars({
      ...DEFAULT_TOKENS,
      "--rhmdp-day-radius": "999px",
      "--rhmdp-day-text": "#1c1c1e",
      "--rhmdp-day-muted-text": "#c7c7cc",
      "--rhmdp-day-selected-bg": "#ff3b30",
      "--rhmdp-day-selected-text": "#ffffff",
      "--rhmdp-day-hover-bg": "#f2f2f7",
      "--rhmdp-day-today-text": "#ff3b30",
      "--rhmdp-day-weekend-text": "#8e8e93",
      "--rhmdp-weekday-text": "#8e8e93",
      "--rhmdp-title-text": "#1c1c1e",
      "--rhmdp-arrow-text": "#ff3b30",
      "--rhmdp-arrow-hover-bg": "#f2f2f7",
      "--rhmdp-arrow-hover-text": "#ff3b30",
      "--rhmdp-header-select-bg": "#f2f2f7",
      "--rhmdp-header-select-text": "#1c1c1e",
      "--rhmdp-header-select-radius": "8px",
      "--rhmdp-header-select-padding": "4px 6px",
      // SF-style: regular day numbers, semibold headers, small-caps weekdays.
      "--rhmdp-day-weight": "400",
      "--rhmdp-day-size": "1.05rem",
      "--rhmdp-weekday-weight": "600",
      "--rhmdp-weekday-size": "0.7rem",
      "--rhmdp-title-weight": "600",
      "--rhmdp-title-size": "1.3rem",
      "--rhmdp-header-weight": "600",
    }),
  }),
};

/* -------------------------------------------------------------------------- */
/*                     10. Android Material You (range)                       */
/* -------------------------------------------------------------------------- */

/**
 * Material 3 / "Material You": a soft purple-tinted surface, the signature
 * `#6750A4` primary for the selected ends, a light primary-container fill for
 * the in-range days and generously rounded corners.
 */
export const AndroidMaterialYou: Story = {
  args: rangeArgs,
  render: ThemedCalendar({
    page: { background: "#e7e0ec" },
    card: {
      background: "#fffbfe",
      borderRadius: 28,
      padding: 22,
      boxShadow: "0 12px 32px rgba(103, 80, 164, 0.22)",
      fontFamily: "Roboto, 'Google Sans', system-ui, sans-serif",
    },
    tokens: vars({
      ...DEFAULT_TOKENS,
      "--rhmdp-day-radius": "999px",
      "--rhmdp-day-text": "#1c1b1f",
      "--rhmdp-day-muted-text": "#c4c0c9",
      "--rhmdp-day-selected-bg": "#6750a4",
      "--rhmdp-day-selected-text": "#ffffff",
      "--rhmdp-day-range-bg": "#e8def8",
      "--rhmdp-day-range-hover-bg": "#f3edf7",
      "--rhmdp-day-hover-bg": "#ece6f4",
      "--rhmdp-day-hover-text": "#21005d",
      "--rhmdp-day-today-text": "#6750a4",
      "--rhmdp-day-weekend-text": "#49454f",
      "--rhmdp-weekday-text": "#49454f",
      "--rhmdp-title-text": "#1c1b1f",
      "--rhmdp-arrow-text": "#49454f",
      "--rhmdp-arrow-hover-bg": "#ece6f4",
      "--rhmdp-arrow-hover-text": "#6750a4",
      "--rhmdp-header-select-bg": "#f3edf7",
      "--rhmdp-header-select-text": "#1c1b1f",
      "--rhmdp-header-select-border": "#cac4d0",
      "--rhmdp-header-select-radius": "8px",
      "--rhmdp-header-select-padding": "4px 6px",
      // Roboto / Material 3: medium (500) weights, larger headline title.
      "--rhmdp-day-weight": "500",
      "--rhmdp-day-size": "1rem",
      "--rhmdp-weekday-weight": "500",
      "--rhmdp-weekday-size": "0.75rem",
      "--rhmdp-title-weight": "500",
      "--rhmdp-title-size": "1.375rem",
      "--rhmdp-header-weight": "500",
    }),
  }),
};

/* -------------------------------------------------------------------------- */
/*                            11. Compact (single)                            */
/* -------------------------------------------------------------------------- */

/**
 * A space-saving, dense layout — ideal for tight popovers or sidebars. Nothing
 * but tokens shrink it: smaller day cells (`--rhmdp-day-padding` /
 * `--rhmdp-day-height`), smaller type and a tighter radius, on a narrow card.
 * Uses the in-grid `PanelHeader` so the month/year pickers don't add a separate
 * row — keeping the footprint minimal.
 */
export const Compact: Story = {
  args: singleArgs,
  render: ThemedCalendar({
    panelHeader: true,
    page: { background: "#f2f2f7" },
    card: {
      width: 220,
      background: "#ffffff",
      borderRadius: 10,
      padding: "0 1rem 0.75rem",
      border: "1px solid #e5e5ea",
      boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
    },
    tokens: vars({
      ...DEFAULT_TOKENS,
      // The compact knobs: tight cells, small type, modest radius.
      "--rhmdp-day-padding": "0.2rem",
      "--rhmdp-day-height": "1.85rem",
      "--rhmdp-day-radius": "7px",
      "--rhmdp-day-size": "0.78rem",
      "--rhmdp-day-weight": "500",
      "--rhmdp-day-text": "#1c1c1e",
      "--rhmdp-day-muted-text": "#c7c7cc",
      "--rhmdp-day-selected-bg": "#007aff",
      "--rhmdp-day-selected-text": "#ffffff",
      "--rhmdp-day-hover-bg": "#eef1f6",
      "--rhmdp-day-today-text": "#007aff",
      "--rhmdp-weekday-text": "#8e8e93",
      "--rhmdp-weekday-weight": "600",
      "--rhmdp-weekday-size": "0.62rem",
      "--rhmdp-title-text": "#1c1c1e",
      "--rhmdp-title-weight": "600",
      "--rhmdp-title-size": "0.95rem",
      "--rhmdp-header-weight": "600",
      "--rhmdp-header-select-bg": "#f2f2f7",
      "--rhmdp-header-select-text": "#1c1c1e",
      "--rhmdp-header-select-radius": "6px",
      "--rhmdp-header-select-padding": "2px 4px",
      "--rhmdp-header-select-size": "0.78rem",
      "--rhmdp-panel-cell-size": "12px",
    }),
  }),
};
