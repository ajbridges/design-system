import type { Meta, StoryObj } from "@storybook/react-vite"
import { Toaster } from "@/components/ui/sonner"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

const meta = { title: "Components/Sonner", component: Toaster, tags: ["autodocs"] } satisfies Meta<typeof Toaster>
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
