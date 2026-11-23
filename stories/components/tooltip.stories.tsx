import type { Meta, StoryObj } from "@storybook/react-vite"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button"

const meta = { title: "Components/Tooltip", component: Tooltip, tags: ["autodocs"] } satisfies Meta<typeof Tooltip>
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
