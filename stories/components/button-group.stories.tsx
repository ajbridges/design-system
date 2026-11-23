import type { Meta, StoryObj } from "@storybook/react-vite"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"

const meta = { title: "Components/Button group", component: ButtonGroup, tags: ["autodocs"] } satisfies Meta<typeof ButtonGroup>
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
