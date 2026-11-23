import type { Meta, StoryObj } from "@storybook/react-vite"
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"

const meta = { title: "Overlays/Drawer", component: Drawer, tags: ["autodocs"], parameters: { docs: { description: { component: "A panel that slides up from the bottom, such as filters. When to use: a phone-sized task." } } } } satisfies Meta<typeof Drawer>
export default meta
type Story = StoryObj<typeof meta>
export const Filters: Story = {
  render: () => (
    <Drawer>
      <DrawerTrigger render={<Button variant="outline" size="touch" />}>Filter the book</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Tonight in the city</DrawerTitle>
          <DrawerDescription>SFJAZZ, the Chapel, and the Black Cat.</DrawerDescription>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  ),
}
