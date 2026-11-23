import type { Meta, StoryObj } from "@storybook/react-vite"
import { EventCard } from "@/components/ui/event-card"
import { desktopGlobals, mobileGlobals } from "../viewports"

const meta = {
  title: "Jazzfolio/Event card",
  component: EventCard,
  tags: ["!autodocs"],
  args: {
    title: "Late set at SFJAZZ",
    date: "2026-11-27",
    venue: "SFJAZZ Center, Miner Auditorium",
    price: "$45",
    status: "on-sale",
    variant: "poster",
    likeCount: 128,
    liked: false,
    saved: true,
    tint: "var(--chart-1)",
    href: "#sfjazz",
  },
  argTypes: {
    variant: { control: "inline-radio", options: ["poster", "compact"] },
    status: {
      control: "select",
      options: ["on-sale", "few-left", "sold-out", "free", "cancelled"],
    },
    title: { control: "text" },
    venue: { control: "text" },
    price: { control: "text" },
    date: { control: "text" },
    likeCount: { control: "number" },
    liked: { control: "boolean" },
    saved: { control: "boolean" },
    tint: { control: "text" },
  },
} satisfies Meta<typeof EventCard>

export default meta

type Story = StoryObj<typeof meta>

export const Poster: Story = { globals: desktopGlobals }

export const Compact: Story = {
  globals: desktopGlobals,
  args: { variant: "compact", title: "Tammy Hall trio", venue: "The Chapel, 777 Valencia", price: "$25" },
}

export const WithPosterImage: Story = {
  globals: desktopGlobals,
  args: {
    imageSrc: "/poster.svg",
    imageAlt: "Abstract blue poster for Joshua Redman at the Black Cat",
    tint: undefined,
    title: "Joshua Redman at the Black Cat",
    venue: "Black Cat, 400 Eddy Street",
    status: "few-left",
    price: "$38",
  },
}

export const Desktop: Story = {
  globals: desktopGlobals,
  render: (args) => (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      <EventCard {...args} />
      <EventCard
        {...args}
        title="No cover at Mr. Tipple's"
        venue="Mr. Tipple's, 39 Fell Street"
        date="2026-11-20"
        price={undefined}
        status="free"
        saved={false}
        likeCount={42}
        tint="var(--info)"
      />
    </div>
  ),
}

export const Mobile: Story = {
  globals: mobileGlobals,
  args: { variant: "poster" },
}
