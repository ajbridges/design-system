import type { Meta, StoryObj } from "@storybook/react-vite"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const meta = { title: "Forms/Select", component: Select, tags: ["autodocs"], parameters: { docs: { description: { component: "Pick one room from a list. When to use: there are more than a few known options." } } } } satisfies Meta<typeof Select>
export default meta
type Story = StoryObj<typeof meta>
export const Room: Story = {
  render: () => (
    <Select defaultValue="sfjazz">
      <SelectTrigger className="w-56" aria-label="Room">
        <SelectValue placeholder="Choose a room" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="sfjazz">SFJAZZ Center</SelectItem>
        <SelectItem value="chapel">The Chapel</SelectItem>
        <SelectItem value="black-cat">Black Cat</SelectItem>
      </SelectContent>
    </Select>
  ),
}
