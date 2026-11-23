import type { Meta, StoryObj } from "@storybook/react-vite"
import { Label } from "@/components/ui/label"

const meta = { title: "Components/Label", component: Label, tags: ["autodocs"], args: { children: "Guest name" } } satisfies Meta<typeof Label>
export default meta
type Story = StoryObj<typeof meta>
export const Guest: Story = {}
