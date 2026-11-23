import type { Meta, StoryObj } from "@storybook/react-vite"
import { ScrollArea } from "@/components/ui/scroll-area"

const nights = ["Thursday at Biscuits and Blues", "Friday at SFJAZZ", "Saturday at the Chapel", "Sunday at the Black Cat", "Monday at Mr. Tipple's"]

const meta = { title: "Data display/Scroll area", component: ScrollArea, tags: ["autodocs"], parameters: { docs: { description: { component: "A short list of nights inside a fixed height. When to use: the surrounding page should not grow." } } } } satisfies Meta<typeof ScrollArea>
export default meta
type Story = StoryObj<typeof meta>
export const Nights: Story = {
  render: () => (
    <ScrollArea className="h-32 max-w-sm rounded-xl border">
      <ul className="flex flex-col gap-3 p-4 text-sm">
        {nights.map((night) => <li key={night}>{night}</li>)}
      </ul>
    </ScrollArea>
  ),
}
