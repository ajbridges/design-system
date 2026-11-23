import type { Meta, StoryObj } from "@storybook/react-vite"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

const meta = { title: "Forms/Switch", component: Switch, tags: ["autodocs"], parameters: { docs: { description: { component: "Turn a reminder on or off. When to use: the change takes effect immediately." } } } } satisfies Meta<typeof Switch>
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
