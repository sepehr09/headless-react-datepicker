import { type CSSProperties, useEffect, useRef, useState } from "react";
import { isHex } from "../utils/css";

/**
 * Native `<input type="color">` fires its React `onChange` (the DOM `input`
 * event) continuously while the cursor moves inside the picker — every fire
 * would re-render the whole builder (preview + CSS). To avoid that, the swatch
 * tracks its live value in cheap local state and only **commits** to the parent
 * on the native `change` event, which fires once when the picker is dismissed.
 */
type ColorSwatchProps = {
  value: string;
  onCommit: (value: string) => void;
  style?: CSSProperties;
};

const ColorSwatchInput = ({ value, onCommit, style }: ColorSwatchProps) => {
  const ref = useRef<HTMLInputElement>(null);
  const [draft, setDraft] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const handleCommit = () => onCommit(el.value);
    el.addEventListener("change", handleCommit);
    return () => el.removeEventListener("change", handleCommit);
  }, [onCommit]);

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

const ColorSwatch = (props: ColorSwatchProps) => (
  // Remount the inexpensive native input when an external edit/reset changes
  // its value, while keeping live color-picker updates local to the input.
  <ColorSwatchInput key={props.value} {...props} />
);

export default ColorSwatch;
