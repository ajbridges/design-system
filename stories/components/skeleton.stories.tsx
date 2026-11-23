import type { Meta, StoryObj } from "@storybook/react-vite"
import { Skeleton } from "@/components/ui/skeleton"

const meta = { title: "Components/Skeleton", component: Skeleton, tags: ["autodocs"] } satisfies Meta<typeof Skeleton>
export default meta
type Story = StoryObj<typeof meta>
export const Card: Story = {
  render: () => (
    <div className="flex max-w-sm flex-col gap-3">
      <Skeleton className="h-40 w-full rounded-poster" />
      <Skeleton className="h-4 w-2/3" />
      <Skeleton className="h-4 w-1/2" />
    </div>
  ),
}
