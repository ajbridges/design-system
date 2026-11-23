import type { Meta, StoryObj } from "@storybook/react-vite"
import { Input } from "@/components/ui/input"

const meta = {
  title: "Forms/Input",
  component: Input,
  tags: ["autodocs"], parameters: { docs: { description: { component: "A single line of text, such as a search for artists or rooms. When to use: the answer is short." } } },
  args: { placeholder: "Search artists or rooms", "aria-label": "Search" },
} satisfies Meta<typeof Input>
export default meta
type Story = StoryObj<typeof meta>
export const Search: Story = {}
