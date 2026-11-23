import type { Meta, StoryObj } from "@storybook/react-vite"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

const meta = { title: "Actions/Toggle group", component: ToggleGroup, tags: ["autodocs"], parameters: { docs: { description: { component: "A set of toggles for filters such as Tonight, Weekend, and No cover. When to use: several filters can be on together." } } } } satisfies Meta<typeof ToggleGroup>
export default meta
type Story = StoryObj<typeof meta>
export const When: Story = {
  render: () => (
    <ToggleGroup defaultValue={["tonight"]}>
      <ToggleGroupItem value="tonight">Tonight</ToggleGroupItem>
      <ToggleGroupItem value="weekend">Weekend</ToggleGroupItem>
      <ToggleGroupItem value="free">No cover</ToggleGroupItem>
    </ToggleGroup>
  ),
}
