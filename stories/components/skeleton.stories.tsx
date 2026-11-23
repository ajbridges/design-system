import type { Meta, StoryObj } from "@storybook/react-vite"
import { Skeleton } from "@/components/ui/skeleton"

const meta = { title: "Feedback/Skeleton", component: Skeleton, tags: ["autodocs"], parameters: { docs: { description: { component: "A placeholder in the shape of a poster while the set loads. When to use: you know the layout but not the content yet." } } } } satisfies Meta<typeof Skeleton>
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
