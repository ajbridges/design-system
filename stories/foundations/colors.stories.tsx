import type { Meta, StoryObj } from "@storybook/react-vite"
import { paletteFor, useStoryTheme } from "../theme"
import { desktopGlobals, mobileGlobals } from "../viewports"

function Colors() {
  const theme = useStoryTheme()
  const palette = paletteFor(theme)
  const colors = Object.entries(palette).filter(([name]) => name !== "radius")

  return (
    <section className="flex flex-col gap-4">
      <header>
        <h1 data-slot="display" className="font-heading text-4xl font-bold tracking-tight md:text-5xl">
          Colors
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground md:text-base">
          Semantic tokens for the active theme. Jazzfolio is the dark set. Neutral light and dark come from the original theme.
        </p>
      </header>
      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {colors.map(([name, value]) => (
          <li
            key={name}
            className="flex items-center gap-3 rounded-xl bg-card p-3 text-card-foreground ring-1 ring-foreground/10"
          >
            <span
              aria-hidden
              className="size-12 shrink-0 rounded-lg ring-1 ring-foreground/15"
              style={{ background: `var(--${name})` }}
            />
            <span className="min-w-0">
              <span className="block truncate text-sm font-medium">{name}</span>
              <span className="block truncate text-xs text-muted-foreground">{value}</span>
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}

const meta = {
  title: "Foundations/Colors",
  component: Colors,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Every color token for the theme selected in the toolbar. When to use: pick a semantic name such as primary or card, never a raw color.",
      },
    },
  },
} satisfies Meta<typeof Colors>

export default meta

type Story = StoryObj<typeof meta>

export const Desktop: Story = { globals: desktopGlobals }
export const Mobile: Story = { globals: mobileGlobals }
