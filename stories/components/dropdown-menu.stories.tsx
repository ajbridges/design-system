import type { Meta, StoryObj } from "@storybook/react-vite"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

const meta = { title: "Overlays/Dropdown menu", component: DropdownMenu, tags: ["autodocs"], parameters: { docs: { description: { component: "Actions for one set: save, share, follow. When to use: several actions would crowd the row." } } } } satisfies Meta<typeof DropdownMenu>
export default meta
type Story = StoryObj<typeof meta>
export const Actions: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" size="touch" />}>Set actions</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Save</DropdownMenuItem>
        <DropdownMenuItem>Share</DropdownMenuItem>
        <DropdownMenuItem>Follow the room</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
}
