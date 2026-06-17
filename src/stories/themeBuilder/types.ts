import type { CSSProperties } from "react";

/* -------------------------------------------------------------------------- */
/*                            Theme variable contract                         */
/* -------------------------------------------------------------------------- */

export type VarKind = "color" | "length" | "weight" | "size" | "font";

export type VarDef = {
  /** The CSS custom property name (with the leading `--`). */
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

export type Section = { title: string; vars: VarDef[] };

/** The live state of a single token in the builder. */
export type TokenState = { value: string; enabled: boolean };

/** The full builder state: one `TokenState` per `--rhmdp-*` variable. */
export type ThemeState = Record<string, TokenState>;

/* -------------------------------------------------------------------------- */
/*                                  Presets                                   */
/* -------------------------------------------------------------------------- */

export type Preset = {
  name: string;
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
