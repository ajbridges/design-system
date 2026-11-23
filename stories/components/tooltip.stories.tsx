import type { Meta, StoryObj } from "@storybook/react-vite"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button"

const meta = { title: "Overlays/Tooltip", component: Tooltip, tags: ["autodocs"], parameters: { docs: { description: { component: "A short label, such as a street address. When to use: the control already has a visible name and the tip is extra." } } } } satisfies Meta<typeof Tooltip>
export default meta
type Story = StoryObj<typeof meta>
export const Room: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger render={<Button variant="outline" size="touch" />}>SFJAZZ</TooltipTrigger>
      <TooltipContent>201 Franklin Street</TooltipContent>
    </Tooltip>
  ),
}
