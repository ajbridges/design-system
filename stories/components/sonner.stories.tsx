import type { Meta, StoryObj } from "@storybook/react-vite"
import { Toaster } from "@/components/ui/sonner"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

const meta = { title: "Feedback/Sonner", component: Toaster, tags: ["autodocs"], parameters: { docs: { description: { component: "A temporary notice, such as Saved the Friday late set. When to use: confirmation that does not need a decision." } } } } satisfies Meta<typeof Toaster>
export default meta
type Story = StoryObj<typeof meta>
export const Saved: Story = {
  render: () => (
    <>
      <Button size="touch" onClick={() => toast.success("Saved the Friday late set.")}>Save the set</Button>
      <Toaster />
    </>
  ),
}
