import type { Meta, StoryObj } from "@storybook/react-vite"
import { typeFor, useStoryTheme } from "../theme"
import { desktopGlobals, mobileGlobals } from "../viewports"

const display = [
  { label: "Display 6xl", className: "font-heading text-5xl font-bold md:text-6xl", text: "Tonight at SFJAZZ." },
  { label: "Display 5xl", className: "font-heading text-4xl font-bold md:text-5xl", text: "Joshua Redman quartet." },
  { label: "Display 4xl", className: "font-heading text-3xl font-bold md:text-4xl", text: "Late set at the Chapel." },
  { label: "Display 2xl", className: "font-heading text-2xl font-semibold md:text-3xl", text: "Tammy Hall trio." },
]

const body = [
  { label: "Body large", className: "text-base md:text-lg", text: "Doors at 7, music at 8. Miner Auditorium holds a quiet room." },
  { label: "Body", className: "text-sm md:text-base", text: "The Friday book is up. Come down if you want the room while it is still quiet." },
  { label: "Meta", className: "text-xs text-muted-foreground md:text-sm", text: "SFJAZZ Center · 201 Franklin Street" },
]

function Typography() {
  const type = typeFor(useStoryTheme())

  return (
    <section className="flex flex-col gap-8">
      <header>
        <h1 data-slot="display" className="font-heading text-4xl font-bold tracking-tight md:text-5xl">
          Typography
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground md:text-base">
          Display is a condensed grotesque in sentence case. Body is a plain sans. Sizes step down on a narrow screen.
        </p>
        <dl className="mt-4 grid gap-2 text-sm md:grid-cols-2">
          {Object.entries(type)
            .filter(([name]) => name.startsWith("font-"))
            .map(([name, value]) => (
              <div key={name}>
                <dt className="font-medium">{name}</dt>
                <dd className="text-muted-foreground">{value}</dd>
              </div>
            ))}
        </dl>
      </header>
      <div className="flex flex-col gap-5">
        {display.map((row) => (
          <div key={row.label}>
            <p className="text-xs text-muted-foreground">{row.label}</p>
            <p data-slot="display" className={`${row.className} leading-none tracking-tight`}>
              {row.text}
            </p>
          </div>
        ))}
        {body.map((row) => (
          <div key={row.label}>
            <p className="text-xs text-muted-foreground">{row.label}</p>
            <p className={row.className}>{row.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

const meta = {
  title: "Foundations/Typography",
  component: Typography,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Display type is a condensed grotesque in sentence case. Body is a plain sans. Sizes step down on a narrow screen.",
      },
    },
  },
} satisfies Meta<typeof Typography>

export default meta

type Story = StoryObj<typeof meta>

export const Desktop: Story = { globals: desktopGlobals }
export const Mobile: Story = { globals: mobileGlobals }
