import type { Meta, StoryObj } from "@storybook/react-vite"
import { Input } from "@/components/ui/input"

const meta = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  args: { placeholder: "Search artists or rooms", "aria-label": "Search" },
} satisfies Meta<typeof Input>
export default meta
type Story = StoryObj<typeof meta>
export const Search: Story = {}
