import { useState } from "react";
import { panel } from "./styles";

const INSTALL = "npm install headless-react-datepicker";
const IMPORT = `import "headless-react-datepicker/styles.css";`;

/** A single dark code line with its own copy button. */
const CodeLine = ({ code }: { code: string }) => {
  const [copied, setCopied] = useState(false);

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
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 12,
        background: "#0f172a",
        borderRadius: 10,
        padding: "10px 12px 10px 16px",
      }}
    >
      <code
        style={{
          color: "#e2e8f0",
          fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
          fontSize: 13,
          whiteSpace: "pre",
          overflowX: "auto",
        }}
      >
        {code}
      </code>
      <button
        onClick={copy}
        style={{
          flexShrink: 0,
          fontSize: 12,
          fontWeight: 600,
          padding: "5px 12px",
          border: "none",
          borderRadius: 6,
          background: copied ? "#16a34a" : "#334155",
          color: "#fff",
          cursor: "pointer",
        }}
      >
        {copied ? "✓ Copied" : "Copy"}
      </button>
    </div>
  );
};

/**
 * A compact "getting started" block at the very bottom of the builder, for
 * users who land on the Theme Builder without ever reading the README: install
 * the package, import the stylesheet, and a pointer to the full docs.
 */
const QuickInstall = () => (
  <div style={{ ...panel, marginTop: 20, padding: 16 }}>
    <h2 style={{ margin: "0 0 4px", fontSize: 16, color: "#111827" }}>
      🚀 Quick install
    </h2>
    <p style={{ margin: "0 0 14px", fontSize: 13, color: "#6b7280" }}>
      New here? Add the package and import its stylesheet, then paste the CSS &
      JSX above into your app.
    </p>

    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <div>
        <p style={{ margin: "0 0 6px", fontSize: 12, color: "#374151" }}>
          1. Install the package
        </p>
        <CodeLine code={INSTALL} />
      </div>
      <div>
        <p style={{ margin: "0 0 6px", fontSize: 12, color: "#374151" }}>
          2. Import the CSS file (once, e.g. in your app entry)
        </p>
        <CodeLine code={IMPORT} />
      </div>
    </div>

    <p style={{ margin: "14px 0 0", fontSize: 12, color: "#9ca3af" }}>
      Full docs, props, and examples:{" "}
      <a
        href="https://github.com/sepehr09/headless-react-datepicker#readme"
        target="_blank"
        rel="noreferrer"
        style={{ color: "#2563eb" }}
      >
        github.com/sepehr09/headless-react-datepicker
      </a>
    </p>
  </div>
);

export default QuickInstall;
