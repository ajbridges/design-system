import type { Meta, StoryObj } from "@storybook/react-vite"
import { Avatar, AvatarFallback, AvatarGroup } from "@/components/ui/avatar"

const meta = { title: "Data display/Avatar", component: Avatar, tags: ["autodocs"], parameters: { docs: { description: { component: "A face or initials for an artist or a room. When to use: the person or place should be recognizable in a list." } } } } satisfies Meta<typeof Avatar>
export default meta
type Story = StoryObj<typeof meta>
export const Rooms: Story = {
  render: () => (
    <AvatarGroup>
      <Avatar className="size-11"><AvatarFallback>SF</AvatarFallback></Avatar>
      <Avatar className="size-11"><AvatarFallback>JR</AvatarFallback></Avatar>
      <Avatar className="size-11"><AvatarFallback>TH</AvatarFallback></Avatar>
    </AvatarGroup>
  ),
}
