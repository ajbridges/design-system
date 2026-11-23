import type { Meta, StoryObj } from "@storybook/react-vite"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"

const meta = { title: "Components/Input group", component: InputGroup, tags: ["autodocs"] } satisfies Meta<typeof InputGroup>
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
