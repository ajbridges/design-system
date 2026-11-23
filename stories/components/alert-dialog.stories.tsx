import type { Meta, StoryObj } from "@storybook/react-vite"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

const meta = { title: "Overlays/Alert dialog", component: AlertDialog, tags: ["autodocs"], parameters: { docs: { description: { component: "A confirm step, such as releasing a ticket hold. When to use: the action is hard to undo." } } } } satisfies Meta<typeof AlertDialog>
export default meta
type Story = StoryObj<typeof meta>
export const ReleaseTickets: Story = {
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger render={<Button variant="destructive" size="touch" />}>Release the hold</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Release these seats?</AlertDialogTitle>
          <AlertDialogDescription>The Friday late set at SFJAZZ will go back on sale.</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Keep them</AlertDialogCancel>
          <AlertDialogAction>Release</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
}
