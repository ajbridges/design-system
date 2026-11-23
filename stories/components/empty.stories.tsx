import type { Meta, StoryObj } from "@storybook/react-vite"
import { Empty, EmptyDescription, EmptyHeader, EmptyTitle } from "@/components/ui/empty"

const meta = { title: "Components/Empty", component: Empty, tags: ["autodocs"] } satisfies Meta<typeof Empty>
export default meta
type Story = StoryObj<typeof meta>
export const NoSets: Story = {
  render: () => (
    <Empty className="border border-dashed">
      <EmptyHeader>
        <EmptyTitle>No sets this month</EmptyTitle>
        <EmptyDescription>December is still being booked.</EmptyDescription>
      </EmptyHeader>
    </Empty>
  ),
}
