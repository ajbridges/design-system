import type { Meta, StoryObj } from "@storybook/react-vite"
import { Item, ItemContent, ItemDescription, ItemGroup, ItemTitle } from "@/components/ui/item"

const meta = { title: "Data display/Item", component: Item, tags: ["autodocs"], parameters: { docs: { description: { component: "One row in a list: title plus a short line. When to use: a simple list, not a poster." } } } } satisfies Meta<typeof Item>
export default meta
type Story = StoryObj<typeof meta>
export const Set: Story = {
  render: () => (
    <ItemGroup className="max-w-md">
      <Item>
        <ItemContent>
          <ItemTitle>Joshua Redman quartet</ItemTitle>
          <ItemDescription>SFJAZZ Center · Friday</ItemDescription>
        </ItemContent>
      </Item>
    </ItemGroup>
  ),
}
