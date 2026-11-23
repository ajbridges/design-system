import type { Meta, StoryObj } from "@storybook/react-vite"
import { Toggle } from "@/components/ui/toggle"

const meta = { title: "Actions/Toggle", component: Toggle, tags: ["autodocs"], parameters: { docs: { description: { component: "A button that stays on or off, like Tonight only. When to use: a single filter the person can turn on without leaving the page." } } }, args: { children: "Tonight only", defaultPressed: true } } satisfies Meta<typeof Toggle>
export default meta
type Story = StoryObj<typeof meta>
export const Tonight: Story = {}
