import type { Meta, StoryObj } from "@storybook/react-vite"
import { BookmarkIcon, CheckIcon, ChevronLeftIcon, HeartIcon, PlusIcon, ShareIcon } from "lucide-react"
import { desktopGlobals, mobileGlobals } from "../viewports"

const icons = [
  ["Heart", HeartIcon, "Like a set"],
  ["Bookmark", BookmarkIcon, "Save a set"],
  ["Share", ShareIcon, "Share a post"],
  ["Plus", PlusIcon, "Follow"],
  ["Check", CheckIcon, "Following"],
  ["Chevron", ChevronLeftIcon, "Move a month"],
] as const

function Iconography() {
  return (
    <section className="flex flex-col gap-6">
      <header>
        <h1 data-slot="display" className="font-heading text-4xl font-bold tracking-tight md:text-5xl">
          Iconography
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground md:text-base">
          Icons come from Lucide. They sit inside a control. An icon with no visible word needs an accessible name.
        </p>
      </header>
      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {icons.map(([name, Icon, use]) => (
          <li key={name} className="flex items-center gap-3 rounded-xl bg-card p-3 ring-1 ring-foreground/10">
            <Icon aria-hidden className="size-5 text-primary" />
            <span>
              <span className="block text-sm font-medium">{name}</span>
              <span className="block text-xs text-muted-foreground">{use}</span>
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}

const meta = {
  title: "Foundations/Iconography",
  component: Iconography,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Lucide icons, used inside buttons. When to use: the action is familiar and the name is still available to assistive tech.",
      },
    },
  },
} satisfies Meta<typeof Iconography>

export default meta
type Story = StoryObj<typeof meta>
export const Desktop: Story = { globals: desktopGlobals }
export const Mobile: Story = { globals: mobileGlobals }
