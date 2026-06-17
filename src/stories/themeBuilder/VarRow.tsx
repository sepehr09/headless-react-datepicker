import { CSSProperties } from "react";
import ColorSwatch from "./ColorSwatch";
import type { TokenState, VarDef } from "./types";

/** A single themeable-token row in the dashboard: toggle, preview, label, value. */
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

export default VarRow;
