import type { Meta, StoryObj } from "@storybook/react-vite"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

const meta = { title: "Components/Switch", component: Switch, tags: ["autodocs"] } satisfies Meta<typeof Switch>
export default meta
type Story = StoryObj<typeof meta>
export const Reminders: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Switch id="remind" defaultChecked />
      <Label htmlFor="remind">Remind me when the Friday book opens</Label>
    </div>
  ),
}
