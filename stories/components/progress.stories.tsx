import type { Meta, StoryObj } from "@storybook/react-vite"
import { Progress, ProgressLabel, ProgressValue } from "@/components/ui/progress"

const meta = { title: "Feedback/Progress", component: Progress, tags: ["autodocs"], parameters: { docs: { description: { component: "Shows how full a set is. When to use: a known amount of a whole, such as seats taken." } } }, args: { value: 72 } } satisfies Meta<typeof Progress>
export default meta
type Story = StoryObj<typeof meta>
export const Sold: Story = {
  render: () => (
    <div className="max-w-sm">
      <Progress value={72}>
        <ProgressLabel>Friday is filling up</ProgressLabel>
        <ProgressValue />
      </Progress>
    </div>
  ),
}
