import type { Meta, StoryObj } from "@storybook/react-vite";
import DatePickerProvider from "../DatePickerProvider";
import ThemeBuilder from "./themeBuilder/ThemeBuilder";

/**
 * An **interactive theme builder**. Tweak every `--rhmdp-*` CSS variable from
 * the dashboard on the left, watch the calendar update live in the middle, then
 * copy the generated CSS from the box at the bottom and drop it into your app.
 *
 * Nothing here uses `className` overrides or `!important` — it's the exact same
 * variable-based theming documented in the README, just with a UI on top. The
 * implementation lives in `./themeBuilder/*`.
 */
const meta = {
  title: "Example/Theme Builder",
  component: DatePickerProvider,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof DatePickerProvider>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * The interactive theme builder. (This story renders its own UI, so the
 * Storybook args/controls panel isn't used here.)
 */
export const Builder: Story = {
  render: () => <ThemeBuilder />,
  parameters: {
    // This story renders its own full-screen UI, so hide the whole addons
    // panel (Controls, Actions, Code, …) for the Theme Builder only.
    options: { showPanel: false },
    controls: { disable: true },
    actions: { disable: true },
    docs: { source: { disable: true }, codePanel: false },
  },
};
