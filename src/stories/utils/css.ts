import type { CSSProperties } from "react";

/**
 * CSS helpers for the Storybook Theme Builder only — these live under
 * `src/stories` and are excluded from the published bundle (see rollup.config.js).
 */

/** A 6-digit hex the native `<input type="color">` swatch can show. */
export const isHex = (v: string) =>
  /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(v.trim());

/** `borderRadius` → `border-radius`, `WebkitBackdropFilter` → `-webkit-backdrop-filter`. */
export const kebab = (k: string) => k.replace(/([A-Z])/g, "-$1").toLowerCase();

/** React-style values: bare numbers become `px`, everything else passes through. */
export const cssValue = (v: unknown) =>
  typeof v === "number" ? `${v}px` : String(v);

/** Preferred declaration order for the root-card chrome in the output. */
export const CARD_ORDER = [
  "background",
  "padding",
  "borderRadius",
  "border",
  "boxShadow",
  "backdropFilter",
  "WebkitBackdropFilter",
];

/** Serialize a style object to indented CSS declarations, ordered for readability. */
export const styleToCss = (style: CSSProperties): string[] => {
  const keys = [
    ...CARD_ORDER.filter((k) => k in style),
    ...Object.keys(style).filter((k) => !CARD_ORDER.includes(k)),
  ];
  return keys
    .filter((k) => {
      const v = style[k as keyof CSSProperties];
      return v != null && String(v).trim() !== "";
    })
    .map((k) => `  ${kebab(k)}: ${cssValue(style[k as keyof CSSProperties])};`);
};
