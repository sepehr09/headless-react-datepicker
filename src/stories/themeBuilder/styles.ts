import type { CSSProperties } from "react";

/** Shared card/panel surface used by every section of the builder. */
export const panel: CSSProperties = {
  background: "#fff",
  border: "1px solid #e5e7eb",
  borderRadius: 12,
  boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
};

/** Label wrapping a checkbox / swatch in the preview toolbar. */
export const toggleLabel: CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: 6,
  fontSize: 13,
  color: "#374151",
  cursor: "pointer",
  userSelect: "none",
};
