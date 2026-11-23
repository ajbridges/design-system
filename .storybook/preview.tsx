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
        order: [
          "Get started",
          ["Introduction", "Principles", "How to use", "What's new"],
          "Foundations",
          [
            "Colors",
            "Typography",
            "Spacing",
            "Radius",
            "Elevation",
            "Motion",
            "Iconography",
            "Accessibility",
          ],
          "Jazzfolio",
          [
            "Event card",
            "Date badge",
            "Ticket status pill",
            "Follow button",
            "Like button",
            "Save button",
            "Feed post",
            "Calendar month",
          ],
          "Actions",
          ["Button", "Button group", "Toggle", "Toggle group"],
          "Forms",
          [
            "Input",
            "Input group",
            "Textarea",
            "Select",
            "Native select",
            "Combobox",
            "Checkbox",
            "Radio group",
            "Switch",
            "Slider",
            "Field",
            "Label",
            "Input OTP",
            "Calendar",
          ],
          "Navigation",
          [
            "Breadcrumb",
            "Pagination",
            "Navigation menu",
            "Menubar",
            "Tabs",
            "Sidebar",
            "Command",
          ],
          "Overlays",
          [
            "Dialog",
            "Alert dialog",
            "Sheet",
            "Drawer",
            "Popover",
            "Hover card",
            "Tooltip",
            "Dropdown menu",
            "Context menu",
          ],
          "Feedback",
          [
            "Alert",
            "Sonner",
            "Toast",
            "Progress",
            "Spinner",
            "Skeleton",
            "Empty",
            "Badge",
          ],
          "Data display",
          [
            "Card",
            "Table",
            "Chart",
            "Avatar",
            "Item",
            "Kbd",
            "Accordion",
            "Collapsible",
            "Carousel",
            "Aspect ratio",
            "Scroll area",
            "Separator",
            "Resizable",
          ],
          "Patterns",
          ["App screens"],
        ],
      },
    },
  },
  tags: ["autodocs"],
}

export default preview
