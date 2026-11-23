import type { Meta, StoryObj } from "@storybook/react-vite"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

const meta = { title: "Components/Toggle group", component: ToggleGroup, tags: ["autodocs"] } satisfies Meta<typeof ToggleGroup>
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
