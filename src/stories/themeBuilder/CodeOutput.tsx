import { useState } from "react";
import { selectorToClass } from "./codegen";
import { panel } from "./styles";

/**
 * The bottom output box: a CSS/JSX tab switcher, an editable selector, a copy
 * button, and the generated code. Tab + copied state are local since nothing
 * else in the builder cares about them.
 */
const CodeOutput = ({
  css,
  jsx,
  selector,
  setSelector,
}: {
  css: string;
  jsx: string;
  selector: string;
  setSelector: (v: string) => void;
}) => {
  const [tab, setTab] = useState<"css" | "jsx">("css");
  const [copied, setCopied] = useState(false);

  const code = tab === "css" ? css : jsx;

  const copy = () => {
    navigator.clipboard?.writeText(code).then(
      () => {
        setCopied(true);
        window.setTimeout(() => setCopied(false), 1500);
      },
      () => setCopied(false)
    );
  };

  return (
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
        <div style={{ display: "flex", gap: 6 }}>
          {(["css", "jsx"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              style={{
                fontSize: 13,
                fontWeight: 600,
                padding: "6px 14px",
                border: "1px solid",
                borderColor: tab === t ? "#111827" : "#d1d5db",
                borderRadius: 7,
                background: tab === t ? "#111827" : "#fff",
                color: tab === t ? "#fff" : "#6b7280",
                cursor: "pointer",
              }}
            >
              {t === "css" ? "CSS" : "JSX"}
            </button>
          ))}
        </div>
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
            {copied ? "✓ Copied" : tab === "css" ? "Copy CSS" : "Copy JSX"}
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
        {code}
      </pre>

      <p style={{ margin: "10px 0 0", fontSize: 12, color: "#9ca3af" }}>
        {tab === "css" ? (
          <>
            Wrap your calendar in an element matching the selector (e.g.{" "}
            <code>{`<div className="${selectorToClass(selector)}">`}</code>) and
            the tokens cascade into the whole picker.
          </>
        ) : (
          <>
            Paste this markup into your app and drop the generated CSS into a
            stylesheet — the <code>className</code> on the wrapper matches the
            selector above, so the tokens cascade in.
          </>
        )}
      </p>
    </div>
  );
};

export default CodeOutput;
