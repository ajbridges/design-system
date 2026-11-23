import type { Meta, StoryObj } from "@storybook/react-vite"
import { Calendar } from "@/components/ui/calendar"

const meta = { title: "Components/Calendar", component: Calendar, tags: ["autodocs"] } satisfies Meta<typeof Calendar>
export default meta
type Story = StoryObj<typeof meta>
export const November: Story = {
  render: () => <Calendar mode="single" defaultMonth={new Date(2026, 10, 1)} selected={new Date(2026, 10, 27)} />,
}
