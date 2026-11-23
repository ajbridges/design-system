import type { Meta, StoryObj } from "@storybook/react-vite"
import { Toggle } from "@/components/ui/toggle"

const meta = { title: "Components/Toggle", component: Toggle, tags: ["autodocs"], args: { children: "Tonight only", defaultPressed: true } } satisfies Meta<typeof Toggle>
export default meta
type Story = StoryObj<typeof meta>
export const Tonight: Story = {}
