import type { Meta, StoryObj } from "@storybook/react-vite"
import { TicketStatusPill, ticketStatuses } from "@/components/ui/ticket-status-pill"
import { desktopGlobals, mobileGlobals } from "../viewports"

const meta = {
  title: "Jazz/Ticket status pill",
  component: TicketStatusPill,
  tags: ["autodocs"],
  args: { status: "on-sale" },
  argTypes: { status: { control: "inline-radio", options: [...ticketStatuses] } },
} satisfies Meta<typeof TicketStatusPill>

export default meta

type Story = StoryObj<typeof meta>

export const OnSale: Story = {}

export const All: Story = {
  render: () => (
    <div className="flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap">
      {ticketStatuses.map((status) => (
        <TicketStatusPill key={status} status={status} />
      ))}
    </div>
  ),
}

export const Desktop: Story = { ...All, globals: desktopGlobals }
export const Mobile: Story = { ...All, globals: mobileGlobals }
