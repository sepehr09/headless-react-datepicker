import type { CSSProperties } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import DatePickerProvider from "../DatePickerProvider";
import DaySlots from "../components/daySlots/DaySlots";
import Header from "../components/header/Header";
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
  /** Month/year `<select>` chrome (no token covers the native dropdown). */
  select?: CSSProperties;
  /**
   * Flourish a token can't express on the selected day — a gradient background
   * and/or a glow. Merged on top of the `--rhmdp-day-selected-bg` default.
   */
  selectedAccent?: CSSProperties;
  /** Render a `TimePicker` with these props below the grid. */
  timePicker?: TTimePickerProps;
};

/**
 * Renders a full date picker themed entirely from a `Theme`. Only the palette
 * changes between stories — the markup is identical.
 */
const ThemedCalendar =
  (theme: Theme) =>
  <T extends boolean>(props: TDatePickerProps<T>) => (
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
          <Title style={theme.title} />
          <Header
            rootStyles={theme.headerRoot}
            monthSelectStyles={theme.select}
            yearSelectStyles={theme.select}
          />
          <WeekDays />
          <DaySlots
            parentStyles={theme.grid}
            selectedStyles={theme.selectedAccent}
          />
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

/** Light, neutral month/year dropdown used by most light themes. */
const lightSelect: CSSProperties = {
  backgroundColor: "#f0f0f0",
  color: "#000",
  padding: "4px",
  borderRadius: 5,
  outline: "none",
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
    }),
    select: {
      background: "rgba(255,255,255,0.2)",
      color: "#fff",
      border: "1px solid rgba(255,255,255,0.3)",
      borderRadius: 8,
      padding: "4px 6px",
      outline: "none",
    },
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
    }),
    select: {
      background: "#1a2234",
      color: "#cbd5e1",
      border: "1px solid #243049",
      borderRadius: 8,
      padding: "4px 6px",
      outline: "none",
    },
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
    }),
    select: {
      background: "#fff1e7",
      color: "#9a3412",
      border: "1px solid #ffd8bf",
      borderRadius: 8,
      padding: "4px 6px",
      outline: "none",
    },
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
    }),
    title: {
      fontWeight: 300,
      fontSize: "1.15em",
      letterSpacing: 6,
      textTransform: "uppercase",
      textAlign: "center",
      marginBottom: 12,
    },
    select: {
      background: "transparent",
      color: "#111",
      border: "none",
      outline: "none",
      fontWeight: 300,
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
    }),
    select: {
      background: "#ecfdf5",
      color: "#0f766e",
      border: "1px solid #b7ebdd",
      borderRadius: 8,
      padding: "4px 6px",
      outline: "none",
    },
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
    }),
    select: {
      background: "#312e81",
      color: "#e0e7ff",
      border: "1px solid #4338ca",
      borderRadius: 8,
      padding: "4px 6px",
      outline: "none",
    },
    selectedAccent: {
      background: "linear-gradient(135deg, #fbbf24, #f59e0b)",
      boxShadow: "0 6px 16px rgba(251, 191, 36, 0.45)",
    },
  }),
};

/* -------------------------------------------------------------------------- */
/*                          7. Slate Range (range)                            */
/* -------------------------------------------------------------------------- */

/**
 * A clean, neutral range picker: white card, rounded charcoal ends and a soft
 * grey fill. The dependable default for most product UIs.
 */
export const SlateRange: Story = {
  args: rangeArgs,
  render: ThemedCalendar({
    page: { background: "#f4f4f5" },
    card: {
      background: "#fff",
      borderRadius: 12,
      padding: 14,
      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    },
    tokens: vars({
      ...DEFAULT_TOKENS,
      "--rhmdp-day-radius": "10px",
      "--rhmdp-day-selected-bg": "#303030",
      "--rhmdp-day-selected-text": "#ffffff",
      "--rhmdp-day-range-bg": "#a8adb4",
      "--rhmdp-day-range-hover-bg": "#cfd2d6",
      "--rhmdp-day-hover-bg": "#ececef",
    }),
    select: lightSelect,
  }),
};

/* -------------------------------------------------------------------------- */
/*                          8. Crimson Grid (range)                           */
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
      "--rhmdp-day-selected-bg": "#d80202",
      "--rhmdp-day-selected-text": "#ffffff",
      "--rhmdp-day-range-bg": "#ff9a9a",
      "--rhmdp-day-range-hover-bg": "#ffd0d0",
      "--rhmdp-day-hover-bg": "#ffe3e3",
      "--rhmdp-weekday-text": "#7a7a7a",
    }),
    grid: { gap: 2 },
    select: lightSelect,
  }),
};

/* -------------------------------------------------------------------------- */
/*                         9. Graphite Pink (range)                           */
/* -------------------------------------------------------------------------- */

/**
 * Dark and punchy: a graphite card with a hot-pink selection and pink weekend
 * accents.
 */
export const GraphitePink: Story = {
  args: rangeArgs,
  render: ThemedCalendar({
    page: { background: "#1f1f1f" },
    card: {
      background: "#333333",
      borderRadius: 12,
      padding: 17,
      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    },
    tokens: vars({
      ...DEFAULT_TOKENS,
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
    }),
    select: {
      backgroundColor: "#636363",
      color: "#fff",
      padding: "4px",
      borderRadius: 5,
      outline: "none",
    },
  }),
};

/* -------------------------------------------------------------------------- */
/*                          10. Lime Sheet (range)                            */
/* -------------------------------------------------------------------------- */

/**
 * Grid-lined and energetic: hairline borders on every cell, a spaced uppercase
 * title and a punchy lime selection.
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
      "--rhmdp-day-weekend-text": "#ff0000",
      "--rhmdp-weekday-text": "#7a7a7a",
      "--rhmdp-title-text": "#5c5c5c",
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
      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1) inset",
      borderRadius: 7,
      marginBottom: 10,
      padding: 10,
      backgroundColor: "#fdfdfd",
    },
    select: lightSelect,
  }),
};
