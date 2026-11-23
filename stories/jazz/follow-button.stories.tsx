import type { Meta, StoryObj } from "@storybook/react-vite"
import { FollowButton } from "@/components/ui/follow-button"
import { desktopGlobals, mobileGlobals } from "../viewports"

const meta = {
  title: "Jazz/Follow button",
  component: FollowButton,
  tags: ["autodocs"],
  args: { name: "SFJAZZ", following: false },
  argTypes: {
    following: { control: "boolean" },
    name: { control: "text" },
  },
} satisfies Meta<typeof FollowButton>

export default meta

type Story = StoryObj<typeof meta>

export const Follow: Story = {}

export const Following: Story = { args: { following: true, name: "Joshua Redman" } }

export const Desktop: Story = { globals: desktopGlobals }
export const Mobile: Story = { globals: mobileGlobals }
