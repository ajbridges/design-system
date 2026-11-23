import type { Meta, StoryObj } from "@storybook/react-vite"
import { Calendar } from "@/components/ui/calendar"

const meta = { title: "Forms/Calendar", component: Calendar, tags: ["autodocs"], parameters: { docs: { description: { component: "A month grid for picking a date. When to use: the person chooses a day. For a list of shows, use Calendar month." } } } } satisfies Meta<typeof Calendar>
export default meta
type Story = StoryObj<typeof meta>
export const November: Story = {
  render: () => <Calendar mode="single" defaultMonth={new Date(2026, 10, 1)} selected={new Date(2026, 10, 27)} />,
}
