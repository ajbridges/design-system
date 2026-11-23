import type { Meta, StoryObj } from "@storybook/react-vite"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

const meta = { title: "Components/Radio group", component: RadioGroup, tags: ["autodocs"] } satisfies Meta<typeof RadioGroup>
export default meta
type Story = StoryObj<typeof meta>
export const SetTime: Story = {
  render: () => (
    <RadioGroup defaultValue="late" className="max-w-xs">
      <div className="flex items-center gap-3"><RadioGroupItem value="early" id="early" /><Label htmlFor="early">Early set, 7:30</Label></div>
      <div className="flex items-center gap-3"><RadioGroupItem value="late" id="late" /><Label htmlFor="late">Late set, 9:30</Label></div>
    </RadioGroup>
  ),
}
