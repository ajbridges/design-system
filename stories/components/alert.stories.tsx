import type { Meta, StoryObj } from "@storybook/react-vite"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { InfoIcon } from "lucide-react"

const meta = { title: "Feedback/Alert", component: Alert, tags: ["autodocs"], parameters: { docs: { description: { component: "A note on the page, such as the Friday book being up, or a cancelled set. When to use: the message belongs in the layout, not a toast." } } } } satisfies Meta<typeof Alert>
export default meta
type Story = StoryObj<typeof meta>
export const Notice: Story = {
  render: () => (
    <div className="flex max-w-xl flex-col gap-3">
      <Alert>
        <InfoIcon />
        <AlertTitle>The Friday book is up</AlertTitle>
        <AlertDescription>Joshua Redman quartet at Miner Auditorium.</AlertDescription>
      </Alert>
      <Alert variant="destructive">
        <AlertTitle>This set was cancelled</AlertTitle>
        <AlertDescription>The Chapel late trio will not play on the 14th.</AlertDescription>
      </Alert>
    </div>
  ),
}
