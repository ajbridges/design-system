import type { Meta, StoryObj } from "@storybook/react-vite"
import { CalendarMonth, type CalendarEvent } from "@/components/ui/calendar-month"
import { desktopGlobals, mobileGlobals } from "../viewports"

const events: CalendarEvent[] = [
  { id: "black-cat", title: "Lavay Smith and her red hot skillet lickers", date: "2026-11-06", venue: "Black Cat", status: "sold-out" },
  { id: "chapel", title: "After hours trio", date: "2026-11-14", venue: "The Chapel", status: "cancelled" },
  { id: "tipples", title: "No cover at Mr. Tipple's", date: "2026-11-20", venue: "Mr. Tipple's", status: "free" },
  { id: "redman", title: "Joshua Redman quartet", date: "2026-11-23", venue: "SFJAZZ Center", status: "on-sale" },
  { id: "late", title: "Late set at SFJAZZ", date: "2026-11-27", venue: "Miner Auditorium", status: "few-left" },
  { id: "hall", title: "Tammy Hall trio", date: "2026-11-28", venue: "The Chapel", status: "on-sale" },
]

const meta = {
  title: "Jazzfolio/Calendar month",
  component: CalendarMonth,
  tags: ["!autodocs"],
  args: {
    defaultMonth: new Date(2026, 10, 1),
    events,
  },
} satisfies Meta<typeof CalendarMonth>

export default meta

type Story = StoryObj<typeof meta>

export const November: Story = { globals: desktopGlobals }

export const EmptyMonth: Story = {
  globals: desktopGlobals,
  args: { defaultMonth: new Date(2026, 11, 1), events: [] },
}

export const Desktop: Story = { globals: desktopGlobals }
export const Mobile: Story = { globals: mobileGlobals }
