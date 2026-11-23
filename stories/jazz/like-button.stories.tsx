import type { Meta, StoryObj } from "@storybook/react-vite"
import { LikeButton } from "@/components/ui/like-button"
import { desktopGlobals, mobileGlobals } from "../viewports"

const meta = {
  title: "Jazzfolio/Like button",
  component: LikeButton,
  tags: ["!autodocs"],
  args: { liked: false, count: 86 },
  argTypes: {
    liked: { control: "boolean" },
    count: { control: "number" },
  },
} satisfies Meta<typeof LikeButton>

export default meta

type Story = StoryObj<typeof meta>

export const Idle: Story = {}

export const Liked: Story = { args: { liked: true, count: 87 } }

export const IconOnly: Story = { args: { count: undefined, liked: false } }

export const Desktop: Story = { globals: desktopGlobals }
export const Mobile: Story = { globals: mobileGlobals }
