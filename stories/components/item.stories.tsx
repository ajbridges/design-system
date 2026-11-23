import type { Meta, StoryObj } from "@storybook/react-vite"
import { Item, ItemContent, ItemDescription, ItemGroup, ItemTitle } from "@/components/ui/item"

const meta = { title: "Components/Item", component: Item, tags: ["autodocs"] } satisfies Meta<typeof Item>
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
