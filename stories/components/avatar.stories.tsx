import type { Meta, StoryObj } from "@storybook/react-vite"
import { Avatar, AvatarFallback, AvatarGroup } from "@/components/ui/avatar"

const meta = { title: "Components/Avatar", component: Avatar, tags: ["autodocs"] } satisfies Meta<typeof Avatar>
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
