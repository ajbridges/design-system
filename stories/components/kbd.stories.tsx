import type { Meta, StoryObj } from "@storybook/react-vite"
import { Kbd, KbdGroup } from "@/components/ui/kbd"

const meta = { title: "Components/Kbd", component: Kbd, tags: ["autodocs"] } satisfies Meta<typeof Kbd>
export default meta
type Story = StoryObj<typeof meta>
export const Search: Story = {
  render: () => (
    <p className="text-sm">Search the book <KbdGroup><Kbd>⌘</Kbd><Kbd>K</Kbd></KbdGroup></p>
  ),
}
