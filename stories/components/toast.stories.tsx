import type { Meta, StoryObj } from "@storybook/react-vite"
import { Toaster, toast } from "@/components/ui/toast"
import { Button } from "@/components/ui/button"

const meta = { title: "Feedback/Toast", component: Toaster, tags: ["autodocs"] } satisfies Meta<typeof Toaster>
export default meta
type Story = StoryObj<typeof meta>
export const Saved: Story = {
  render: () => (
    <>
      <Button size="touch" onClick={() => toast.add({ title: "Saved", description: "Friday late set at SFJAZZ." })}>Save the set</Button>
      <Toaster />
    </>
  ),
}
