import type { Meta, StoryObj } from "@storybook/react-vite"
import { Kbd, KbdGroup } from "@/components/ui/kbd"

const meta = { title: "Data display/Kbd", component: Kbd, tags: ["autodocs"], parameters: { docs: { description: { component: "Shows a keyboard shortcut, such as command K. When to use: you are documenting a shortcut." } } } } satisfies Meta<typeof Kbd>
export default meta
type Story = StoryObj<typeof meta>
export const Search: Story = {
  render: () => (
    <p className="text-sm">Search the book <KbdGroup><Kbd>⌘</Kbd><Kbd>K</Kbd></KbdGroup></p>
  ),
}
