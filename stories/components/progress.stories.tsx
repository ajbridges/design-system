import type { Meta, StoryObj } from "@storybook/react-vite"
import { Progress, ProgressLabel, ProgressValue } from "@/components/ui/progress"

const meta = { title: "Components/Progress", component: Progress, tags: ["autodocs"], args: { value: 72 } } satisfies Meta<typeof Progress>
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
