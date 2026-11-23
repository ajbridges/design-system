import type { Meta, StoryObj } from "@storybook/react-vite"
import { Button } from "@/components/ui/button"
import { desktopGlobals, mobileGlobals } from "../viewports"

function Motion() {
  return (
    <section className="flex flex-col gap-6">
      <header>
        <h1 data-slot="display" className="font-heading text-4xl font-bold tracking-tight md:text-5xl">
          Motion
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground md:text-base">
          There is no motion token yet. What exists is small and already on the components.
        </p>
      </header>
      <ul className="flex max-w-xl flex-col gap-3 text-sm md:text-base">
        <li>Buttons change color on hover and shift down one pixel when pressed.</li>
        <li>Focus uses a short ring, not a moving animation.</li>
        <li>Do not add bounce, delay, or a custom duration in an app until a motion token exists.</li>
      </ul>
      <Button size="touch">Press to feel the click</Button>
    </section>
  )
}

const meta = {
  title: "Foundations/Motion",
  component: Motion,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Motion today is only the button press and the focus ring. There is no duration or easing scale.",
      },
    },
  },
} satisfies Meta<typeof Motion>

export default meta
type Story = StoryObj<typeof meta>
export const Desktop: Story = { globals: desktopGlobals }
export const Mobile: Story = { globals: mobileGlobals }
