import type { Meta, StoryObj } from "@storybook/react-vite"
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

function Spacing() {
  return (
    <section className="flex flex-col gap-8">
      <header>
        <h1 data-slot="display" className="font-heading text-4xl font-bold tracking-tight md:text-5xl">
          Spacing
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground md:text-base">
          Layout uses the four-pixel spacing scale. Step 4 is 1rem. Use it for padding, gaps, and stack rhythm.
        </p>
      </header>
      <ul className="flex flex-col gap-2">
        {spaces.map(([step, width]) => (
          <li key={step} className="flex items-center gap-3">
            <span className="w-8 text-sm tabular-nums text-muted-foreground">{step}</span>
            <span className={`${width} h-4 rounded-sm bg-primary`} />
          </li>
        ))}
      </ul>
    </section>
  )
}

const meta = {
  title: "Foundations/Spacing",
  component: Spacing,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "The four-pixel spacing scale used for padding and gaps. When to use: layout, not color or type.",
      },
    },
  },
} satisfies Meta<typeof Spacing>

export default meta

type Story = StoryObj<typeof meta>

export const Desktop: Story = { globals: desktopGlobals }
export const Mobile: Story = { globals: mobileGlobals }
