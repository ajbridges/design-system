import type { Meta, StoryObj } from "@storybook/react-vite"
import { paletteFor, typeFor, useStoryTheme } from "../theme"
import { desktopGlobals, mobileGlobals } from "../viewports"

const radii = [
  "radius-sm",
  "radius-md",
  "radius-lg",
  "radius-xl",
  "radius-2xl",
  "radius-3xl",
  "radius-4xl",
  "radius-poster",
  "radius-pill",
]

function Radius() {
  const theme = useStoryTheme()
  const palette = paletteFor(theme) as Record<string, string>
  const type = typeFor(theme) as Record<string, string>
  const base = palette.radius ?? "set by the theme"

  return (
    <section className="flex flex-col gap-6">
      <header>
        <h1 data-slot="display" className="font-heading text-4xl font-bold tracking-tight md:text-5xl">
          Radius
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground md:text-base">
          Corner radius comes from the active theme. The base radius is {base}. Jazzfolio posters use radius-poster. Buttons use a pill.
        </p>
      </header>
      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {radii.map((name) => (
          <li key={name} className="rounded-xl bg-card p-3 ring-1 ring-foreground/10">
            <div className="h-16 bg-primary" style={{ borderRadius: `var(--${name}, var(--radius))` }} />
            <p className="mt-2 text-sm font-medium">{name}</p>
            <p className="text-xs text-muted-foreground">{type[name] ?? "Uses the base radius"}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

const meta = {
  title: "Foundations/Radius",
  component: Radius,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Corner radius tokens. When to use: posters, cards, and pills. Do not invent a one-off radius.",
      },
    },
  },
} satisfies Meta<typeof Radius>

export default meta
type Story = StoryObj<typeof meta>
export const Desktop: Story = { globals: desktopGlobals }
export const Mobile: Story = { globals: mobileGlobals }
