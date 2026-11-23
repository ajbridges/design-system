import type { Meta, StoryObj } from "@storybook/react-vite"
import { desktopGlobals, mobileGlobals } from "../viewports"

const surfaces = [
  ["background", "The page. Jazzfolio is near-black."],
  ["card", "A raised set or post."],
  ["popover", "A menu or a small panel, a step above the card."],
  ["muted", "A quiet fill, such as a calendar day or a row."],
  ["overlay", "The scrim behind a dialog."],
]

function Elevation() {
  return (
    <section className="flex flex-col gap-6">
      <header>
        <h1 data-slot="display" className="font-heading text-4xl font-bold tracking-tight md:text-5xl">
          Elevation
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground md:text-base">
          Surfaces step up by color, not by a drop shadow. Use the token that matches how far the surface sits off the page.
        </p>
      </header>
      <ul className="flex flex-col gap-3">
        {surfaces.map(([name, note]) => (
          <li
            key={name}
            className="rounded-xl p-4 ring-1 ring-foreground/10"
            style={{ background: `var(--${name})`, color: "var(--foreground)" }}
          >
            <p className="text-sm font-medium">{name}</p>
            <p className="text-sm text-muted-foreground">{note}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

const meta = {
  title: "Foundations/Elevation",
  component: Elevation,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Surface steps from the page up to menus and scrims. There is no shadow scale.",
      },
    },
  },
} satisfies Meta<typeof Elevation>

export default meta
type Story = StoryObj<typeof meta>
export const Desktop: Story = { globals: desktopGlobals }
export const Mobile: Story = { globals: mobileGlobals }
