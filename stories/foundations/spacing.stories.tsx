import type { Meta, StoryObj } from "@storybook/react-vite"
import { paletteFor, typeFor, useStoryTheme } from "../theme"
import { desktopGlobals, mobileGlobals } from "../viewports"

const spaces = [
  ["1", "w-1"],
  ["2", "w-2"],
  ["3", "w-3"],
  ["4", "w-4"],
  ["6", "w-6"],
  ["8", "w-8"],
  ["12", "w-12"],
  ["16", "w-16"],
] as const

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

function Spacing() {
  const theme = useStoryTheme()
  const palette = paletteFor(theme) as Record<string, string>
  const radius = palette.radius ?? "from the theme"
  const type = typeFor(theme)

  return (
    <section className="flex flex-col gap-8">
      <header>
        <h1 data-slot="display" className="font-heading text-4xl font-bold tracking-tight md:text-5xl">
          Spacing and radius
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground md:text-base">
          Spacing follows the four-pixel scale. Radius tokens come from the active theme. Base radius is {radius}.
        </p>
      </header>
      <div>
        <h2 className="font-heading text-2xl font-semibold">Spacing</h2>
        <ul className="mt-3 flex flex-col gap-2">
          {spaces.map(([step, width]) => (
            <li key={step} className="flex items-center gap-3">
              <span className="w-8 text-sm tabular-nums text-muted-foreground">{step}</span>
              <span className={`${width} h-4 rounded-sm bg-primary`} />
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="font-heading text-2xl font-semibold">Radius</h2>
        <ul className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {radii.map((name) => (
            <li key={name} className="rounded-xl bg-card p-3 ring-1 ring-foreground/10">
              <div
                className="h-16 bg-primary"
                style={{ borderRadius: `var(--${name}, var(--radius))` }}
              />
              <p className="mt-2 text-sm font-medium">{name}</p>
              <p className="text-xs text-muted-foreground">
                {name === "radius-lg" ? radius : (type[name as keyof typeof type] ?? "inherits the active radius")}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

const meta = {
  title: "Foundations/Spacing",
  component: Spacing,
  tags: ["autodocs"],
} satisfies Meta<typeof Spacing>

export default meta

type Story = StoryObj<typeof meta>

export const Desktop: Story = { globals: desktopGlobals }
export const Mobile: Story = { globals: mobileGlobals }
