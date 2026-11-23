import type { Meta, StoryObj } from "@storybook/react-vite"
import { desktopGlobals, mobileGlobals } from "../viewports"

const rules = [
  ["Names", "Every icon button has a name, such as Like or Share. The visible word and the accessible name should match."],
  ["Touch", "Jazz actions are at least 44px. Do not shrink them to fit a dense row."],
  ["Case", "Write sentence case. Do not force titles into uppercase."],
  ["Color", "Status pills use words, not color alone. The blue accent is for action, dates, live state, and focus."],
  ["Focus", "A focused control keeps a visible ring. Do not remove it."],
  ["Contrast", "Text and button labels meet WCAG AA on the Jazzfolio background. Do not put white text on the bright blue."],
]

function Accessibility() {
  return (
    <section className="flex flex-col gap-6">
      <header>
        <h1 data-slot="display" className="font-heading text-4xl font-bold tracking-tight md:text-5xl">
          Accessibility
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground md:text-base">
          The basics every screen should keep. The a11y addon on each story checks the example, not the whole app.
        </p>
      </header>
      <ul className="flex max-w-2xl flex-col gap-4">
        {rules.map(([title, body]) => (
          <li key={title}>
            <h2 className="font-heading text-2xl font-semibold">{title}</h2>
            <p className="text-sm md:text-base">{body}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

const meta = {
  title: "Foundations/Accessibility",
  component: Accessibility,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Names, 44px targets, sentence case, and contrast. When to use: before shipping any screen built from this system.",
      },
    },
  },
} satisfies Meta<typeof Accessibility>

export default meta
type Story = StoryObj<typeof meta>
export const Desktop: Story = { globals: desktopGlobals }
export const Mobile: Story = { globals: mobileGlobals }
