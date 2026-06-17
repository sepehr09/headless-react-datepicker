import { PRESETS } from "./presets";
import { SECTIONS } from "./tokens";
import { panel } from "./styles";
import type { ThemeState, TokenState } from "./types";
import VarRow from "./VarRow";

/**
 * The left-hand control panel: a preset loader plus every themeable token,
 * grouped into the same sections the README documents.
 */
const Dashboard = ({
  theme,
  preset,
  onApplyPreset,
  onReset,
  onSet,
}: {
  theme: ThemeState;
  preset: string;
  onApplyPreset: (name: string) => void;
  onReset: () => void;
  onSet: (cssVar: string, patch: Partial<TokenState>) => void;
}) => {
  return (
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
        onChange={(e) => onApplyPreset(e.target.value)}
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
        <h2 style={{ margin: 0, fontSize: 15, color: "#111827" }}>Variables</h2>
        <button
          onClick={onReset}
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
                onChange={(value) => onSet(def.cssVar, { value })}
                onToggle={(enabled) => onSet(def.cssVar, { enabled })}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
