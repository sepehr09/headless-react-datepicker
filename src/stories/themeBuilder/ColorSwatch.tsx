import { CSSProperties, useEffect, useRef, useState } from "react";
import { isHex } from "../utils/css";

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

export default ColorSwatch;
