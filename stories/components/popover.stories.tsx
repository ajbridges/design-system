import type { Meta, StoryObj } from "@storybook/react-vite"
import { Popover, PopoverContent, PopoverDescription, PopoverHeader, PopoverTitle, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"

const meta = { title: "Components/Popover", component: Popover, tags: ["autodocs"] } satisfies Meta<typeof Popover>
export default meta
type Story = StoryObj<typeof meta>
export const Details: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger render={<Button variant="outline" size="touch" />}>Set details</PopoverTrigger>
      <PopoverContent>
        <PopoverHeader>
          <PopoverTitle>Friday late set</PopoverTitle>
          <PopoverDescription>SFJAZZ, doors at 7.</PopoverDescription>
        </PopoverHeader>
      </PopoverContent>
    </Popover>
  ),
}
