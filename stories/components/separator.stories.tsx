import type { Meta, StoryObj } from "@storybook/react-vite"
import { Separator } from "@/components/ui/separator"

const meta = { title: "Components/Separator", component: Separator, tags: ["autodocs"] } satisfies Meta<typeof Separator>
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
