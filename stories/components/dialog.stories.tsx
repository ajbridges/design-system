import type { Meta, StoryObj } from "@storybook/react-vite"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

const meta = { title: "Overlays/Dialog", component: Dialog, tags: ["autodocs"], parameters: { docs: { description: { component: "A focused task, such as reserving a seat. When to use: the person should finish or cancel before going on." } } } } satisfies Meta<typeof Dialog>
export default meta
type Story = StoryObj<typeof meta>
export const Reserve: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger render={<Button size="touch" />}>Reserve a seat</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Friday late set</DialogTitle>
          <DialogDescription>Two seats at SFJAZZ, Miner Auditorium, 9:30.</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  ),
}
