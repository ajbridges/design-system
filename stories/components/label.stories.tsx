import type { Meta, StoryObj } from "@storybook/react-vite"
import { Label } from "@/components/ui/label"

const meta = { title: "Forms/Label", component: Label, tags: ["autodocs"], parameters: { docs: { description: { component: "Names a control, such as Guest name. When to use: every field a person must understand." } } }, args: { children: "Guest name" } } satisfies Meta<typeof Label>
export default meta
type Story = StoryObj<typeof meta>
export const Guest: Story = {}
