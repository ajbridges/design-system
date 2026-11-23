import type { Meta, StoryObj } from "@storybook/react-vite"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"

const meta = { title: "Actions/Button group", component: ButtonGroup, tags: ["autodocs"], parameters: { docs: { description: { component: "Keeps related actions in one control, such as Tonight, Tomorrow, Weekend. When to use: the choices are peers and only one cluster is needed." } } } } satisfies Meta<typeof ButtonGroup>
export default meta
type Story = StoryObj<typeof meta>
export const Nights: Story = {
  render: () => (
    <ButtonGroup>
      <Button variant="outline" size="touch">Tonight</Button>
      <Button variant="outline" size="touch">Tomorrow</Button>
      <Button variant="outline" size="touch">Weekend</Button>
    </ButtonGroup>
  ),
}
