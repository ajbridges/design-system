import type { Meta, StoryObj } from "@storybook/react-vite"
import { Separator } from "@/components/ui/separator"

const meta = { title: "Data display/Separator", component: Separator, tags: ["autodocs"], parameters: { docs: { description: { component: "A line between the early set and the late set. When to use: a visual break, not a new heading." } } } } satisfies Meta<typeof Separator>
export default meta
type Story = StoryObj<typeof meta>
export const BetweenSets: Story = {
  render: () => (
    <div className="max-w-sm text-sm">
      <p>Early set, 7:30</p>
      <Separator className="my-3" />
      <p>Late set, 9:30</p>
    </div>
  ),
}
