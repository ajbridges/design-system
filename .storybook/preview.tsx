import type { Preview } from "@storybook/react-vite"
import { ThemeFrame } from "../stories/theme"
import "./preview.css"

const preview: Preview = {
  decorators: [
    (Story, context) => (
      <ThemeFrame theme={context.globals.theme}>
        <Story />
      </ThemeFrame>
    ),
  ],
  initialGlobals: {
    theme: "jazzfolio",
    viewport: { value: "desktop1440", isRotated: false },
  },
  globalTypes: {
    theme: {
      description: "Jazzfolio is dark-only. Neutral is the original theme.",
      toolbar: {
        title: "Theme",
        icon: "paintbrush",
        items: [
          { value: "jazzfolio", title: "Jazzfolio", icon: "moon" },
          { value: "neutral-light", title: "Neutral light", icon: "sun" },
          { value: "neutral-dark", title: "Neutral dark", icon: "mirror" },
        ],
        dynamicTitle: true,
      },
    },
  },
  parameters: {
    layout: "fullscreen",
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      options: {
        mobile390: {
          name: "Mobile 390",
          styles: { width: "390px", height: "844px" },
          type: "mobile",
        },
        desktop1440: {
          name: "Desktop 1440",
          styles: { width: "1440px", height: "900px" },
          type: "desktop",
        },
      },
    },
    a11y: {
      test: "todo",
    },
    options: {
      storySort: {
        order: ["Foundations", "Jazz", "Components"],
      },
    },
  },
  tags: ["autodocs"],
}

export default preview
