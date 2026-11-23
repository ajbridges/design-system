import type { Meta, StoryObj } from "@storybook/react-vite"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

const meta = { title: "Components/Checkbox", component: Checkbox, tags: ["autodocs"] } satisfies Meta<typeof Checkbox>
export default meta
type Story = StoryObj<typeof meta>
export const Member: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Checkbox id="member" defaultChecked />
      <Label htmlFor="member">I am an SFJAZZ member</Label>
    </div>
  ),
}
