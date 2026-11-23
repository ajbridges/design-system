import type { Meta, StoryObj } from "@storybook/react-vite"
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from "@/components/ui/context-menu"

const meta = { title: "Components/Context menu", component: ContextMenu, tags: ["autodocs"] } satisfies Meta<typeof ContextMenu>
export default meta
type Story = StoryObj<typeof meta>
export const Set: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-28 max-w-sm items-center justify-center rounded-poster border border-dashed text-sm">
        Right-click the Friday set
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>Save the set</ContextMenuItem>
        <ContextMenuItem>Share with a friend</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
}
