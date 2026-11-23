import type { Meta, StoryObj } from "@storybook/react-vite"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"

const meta = { title: "Forms/Input group", component: InputGroup, tags: ["autodocs"], parameters: { docs: { description: { component: "An input with a prefix or suffix, such as a neighborhood search. When to use: the extra text explains the field." } } } } satisfies Meta<typeof InputGroup>
export default meta
type Story = StoryObj<typeof meta>
export const Search: Story = {
  render: () => (
    <InputGroup className="max-w-sm">
      <InputGroupAddon>SF</InputGroupAddon>
      <InputGroupInput aria-label="Neighborhood" placeholder="Hayes Valley" />
    </InputGroup>
  ),
}
