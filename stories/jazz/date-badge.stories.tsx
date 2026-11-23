import type { Meta, StoryObj } from "@storybook/react-vite"
import { DateBadge } from "@/components/ui/date-badge"
import { desktopGlobals, mobileGlobals } from "../viewports"

const meta = {
  title: "Jazz/Date badge",
  component: DateBadge,
  tags: ["autodocs"],
  args: { date: "2026-11-27" },
  argTypes: { date: { control: "text" } },
} satisfies Meta<typeof DateBadge>

export default meta

type Story = StoryObj<typeof meta>

export const Friday: Story = {}

export const Desktop: Story = {
  globals: desktopGlobals,
  render: () => (
    <div className="flex gap-3">
      <DateBadge date="2026-11-06" />
      <DateBadge date="2026-11-23" />
      <DateBadge date="2026-11-27" />
    </div>
  ),
}

export const Mobile: Story = { globals: mobileGlobals }
