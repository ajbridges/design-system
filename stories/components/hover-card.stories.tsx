import type { Meta, StoryObj } from "@storybook/react-vite"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Button } from "@/components/ui/button"

const meta = { title: "Components/Hover card", component: HoverCard, tags: ["autodocs"] } satisfies Meta<typeof HoverCard>
export default meta
type Story = StoryObj<typeof meta>
export const Room: Story = {
  render: () => (
    <HoverCard>
      <HoverCardTrigger render={<Button variant="link" size="touch" />}>SFJAZZ Center</HoverCardTrigger>
      <HoverCardContent>Miner Auditorium, 201 Franklin Street. Doors at 7.</HoverCardContent>
    </HoverCard>
  ),
}
