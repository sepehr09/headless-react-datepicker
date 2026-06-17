import type { TDatePickerProps } from "../types";

/**
 * Generates the clean, copy-pasteable usage snippet shown by Storybook's
 * "Show code" (the `@storybook/addon-docs` Source block) for each story.
 *
 * Stories render through demo helpers (`_shared.tsx`) wrapped in a `Card`, with
 * inline styles and live-value plumbing — none of which a consumer should copy.
 * Instead of letting Storybook serialize that scaffolding, each story passes a
 * per-story `docs.source.transform` that regenerates the snippet from the
 * story's own `args` (calendar, locale, range, config…), so the panel shows
 * exactly the library markup a user would paste — and it stays in sync when the
 * args are changed via the Controls panel.
 */

type AnyArgs = Partial<TDatePickerProps<boolean>> & Record<string, unknown>;

/** Indent every non-empty line of `code` by `pad`. */
const indent = (code: string, pad: string) =>
  code
    .split("\n")
    .map((line) => (line ? pad + line : line))
    .join("\n");

/** Serialize a runtime value (Date / array / config object / primitive) to source. */
const serialize = (value: unknown, pad = ""): string => {
  if (value === null) return "null";
  if (value instanceof Date) return `new Date("${value.toISOString()}")`;
  if (Array.isArray(value))
    return `[${value.map((item) => serialize(item, pad)).join(", ")}]`;
  if (typeof value === "object") {
    const entries = Object.entries(value as Record<string, unknown>).filter(
      ([, v]) => v !== undefined,
    );
    if (!entries.length) return "{}";
    const inner = entries
      .map(([key, v]) => `${pad}  ${key}: ${serialize(v, pad + "  ")}`)
      .join(",\n");
    return `{\n${inner}\n${pad}}`;
  }
  return JSON.stringify(value);
};

/** The serializable `DatePickerProvider` props, in a stable, readable order. */
const PROP_ORDER = [
  "isRange",
  "initialValue",
  "value",
  "defaultStartDate",
  "calendar",
  "config",
] as const;

/** Build the list of `DatePickerProvider` JSX attributes from the story args. */
const providerAttrs = (args: AnyArgs, pad: string) => {
  const attrs: string[] = [];
  for (const key of PROP_ORDER) {
    const value = args[key];
    if (value === undefined) continue;
    if (typeof value === "string") attrs.push(`${key}="${value}"`);
    else if (typeof value === "boolean") attrs.push(`${key}={${value}}`);
    else attrs.push(`${key}={${serialize(value, `${pad}`)}}`);
  }
  return attrs;
};

/** The default import line plus any named exports the snippet uses. */
const importLine = (imports: string[]) =>
  `import DatePickerProvider, {\n${imports
    .map((name) => `  ${name},`)
    .join("\n")}\n} from "headless-react-datepicker";`;

/**
 * Build the standard, uncontrolled snippet: a `DatePickerProvider` (props from
 * `args`) composing the given child parts.
 */
const buildSource = (args: AnyArgs, imports: string[], body: string) => {
  const attrs = providerAttrs(args, "    ");
  const open = attrs.length
    ? `<DatePickerProvider\n${attrs.map((a) => `    ${a}`).join("\n")}\n  >`
    : `<DatePickerProvider>`;

  return `import "headless-react-datepicker/styles.css";
${importLine(imports)}

const MyDatePicker = () => (
  ${open}
${indent(body, "    ")}
  </DatePickerProvider>
);`;
};

type SourceCtx = { args: AnyArgs };

/** Wrap a `(args) => code` builder into per-story `docs.source` parameters. */
const sourceParams = (build: (args: AnyArgs) => string) => ({
  docs: {
    source: {
      language: "tsx",
      transform: (_code: string, ctx: SourceCtx) => build(ctx.args),
    },
  },
});

/**
 * Per-story `parameters` for an arbitrary composition: the children `body` is
 * static, while the provider props come from the live story `args`.
 */
export const source = (imports: string[], body: string) =>
  sourceParams((args) => buildSource(args, imports, body));

/** The default day-view composition (`Title` + `Header` + `WeekDays` + `DaySlots`). */
export const basicSource = source(
  ["Title", "Header", "WeekDays", "DaySlots"],
  `<Title />\n<Header />\n<WeekDays />\n<DaySlots />`,
);

/** The `PanelHeader` variant (in-grid month/year pickers wrapping the day view). */
export const panelSource = source(
  ["PanelHeader", "WeekDays", "DaySlots"],
  `<PanelHeader>\n  <WeekDays />\n  <DaySlots />\n</PanelHeader>`,
);

/** A single standalone component under a bare `DatePickerProvider`. */
export const componentSource = (imports: string[], body: string) =>
  source(imports, body);

/**
 * The controlled-component snippet: local `useState` holds the value and a
 * `value` / `onChange` pair makes the provider controlled.
 */
export const controlledSource = sourceParams((args) => {
  const attrs = providerAttrs({ ...args, initialValue: undefined }, "      ");
  const initial = serialize(args.initialValue, "  ");
  return `import "headless-react-datepicker/styles.css";
import { useState } from "react";
${importLine(["Title", "Header", "WeekDays", "DaySlots"])}

const MyDatePicker = () => {
  const [value, setValue] = useState(${initial});

  return (
    <DatePickerProvider
${attrs.map((a) => `      ${a}`).join("\n")}
      value={value}
      onChange={setValue}
    >
      <Title />
      <Header />
      <WeekDays />
      <DaySlots />
    </DatePickerProvider>
  );
};`;
});
