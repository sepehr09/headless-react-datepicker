import type { Preview } from "@storybook/react";
import "../src/storybook.css";
import "../src/styles.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
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
