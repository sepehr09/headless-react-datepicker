import type { Preview } from "@storybook/react-vite";
import "../src/storybook.css";
import "../src/styles.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    // Hide the bundled "Interactions" panel/tab (no play functions are used).
    interactions: { disable: true },
    docs: {
      // Show a dedicated "Code" tab (next to Controls/Actions) on every story's
      // canvas. It renders the clean, copy-pasteable snippet each story builds
      // via `docs.source.transform` (see src/stories/_source.ts).
      codePanel: true,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        method: "configure",
        order: [
          "Example",
          [
            "Calendar",
            ["Header", "Panel Header", "Holidays"],
            "Side by Side Calendars",
            "TimePicker",
            "Localization",
            "Theming",
            "Theme Builder",
            "Components",
          ],
        ],
      },
    },
  },
};

export default preview;
