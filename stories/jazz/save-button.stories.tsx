import type { Meta, StoryObj } from "@storybook/react-vite"
import { SaveButton } from "@/components/ui/save-button"
import { desktopGlobals, mobileGlobals } from "../viewports"

const meta = {
  title: "Jazz/Save button",
  component: SaveButton,
  tags: ["autodocs"],
  args: { saved: false, count: 14 },
  argTypes: {
    saved: { control: "boolean" },
    count: { control: "number" },
  },
} satisfies Meta<typeof SaveButton>

export default meta

type Story = StoryObj<typeof meta>

export const Idle: Story = {}

export const Saved: Story = { args: { saved: true, count: 15 } }

export const IconOnly: Story = { args: { count: undefined, saved: true } }

export const Desktop: Story = { globals: desktopGlobals }
export const Mobile: Story = { globals: mobileGlobals }
