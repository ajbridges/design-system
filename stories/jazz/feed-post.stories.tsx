import type { Meta, StoryObj } from "@storybook/react-vite"
import { FeedPost } from "@/components/ui/feed-post"
import { desktopGlobals, mobileGlobals } from "../viewports"

const event = {
  title: "Joshua Redman quartet",
  date: "2026-11-23",
  venue: "SFJAZZ Center, Miner Auditorium",
  price: "$42",
  status: "on-sale" as const,
  tint: "var(--primary)",
  likeCount: 210,
}

const meta = {
  title: "Jazzfolio/Feed post",
  component: FeedPost,
  tags: ["!autodocs"],
  args: {
    author: { name: "SFJAZZ", kind: "venue" },
    timestamp: "2026-11-23T18:30:00",
    text: "The Friday late set is on the book. Doors at 7, music at 8. Come down Franklin if you want the room while it is still quiet.",
    event,
    liked: true,
    likeCount: 64,
    saved: false,
    saveCount: 9,
  },
  argTypes: {
    text: { control: "text" },
    liked: { control: "boolean" },
    saved: { control: "boolean" },
    likeCount: { control: "number" },
    saveCount: { control: "number" },
    timestamp: { control: "text" },
  },
} satisfies Meta<typeof FeedPost>

export default meta

type Story = StoryObj<typeof meta>

export const WithEvent: Story = { globals: desktopGlobals }

export const TextOnly: Story = {
  globals: desktopGlobals,
  args: {
    event: undefined,
    author: { name: "Tammy Hall", kind: "artist" },
    text: "Sitting in at the Chapel on Saturday. No cover before 9 if you are already in the room.",
    liked: false,
    likeCount: 18,
  },
}

export const Desktop: Story = { globals: desktopGlobals }
export const Mobile: Story = { globals: mobileGlobals }
