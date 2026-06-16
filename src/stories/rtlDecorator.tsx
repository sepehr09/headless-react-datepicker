import type { Decorator } from "@storybook/react-vite";

/**
 * Wraps a story in an RTL container so it renders right-to-left synchronously
 * (no effect/flash). Apply to Persian (and other RTL) stories via
 * `decorators: [rtlDecorator]`.
 */
export const rtlDecorator: Decorator = (Story) => (
  <div dir="rtl">
    <Story />
  </div>
);
