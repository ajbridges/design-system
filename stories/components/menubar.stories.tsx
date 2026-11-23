import type { Meta, StoryObj } from "@storybook/react-vite"
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar"

const meta = { title: "Navigation/Menubar", component: Menubar, tags: ["autodocs"], parameters: { docs: { description: { component: "A desktop menu for Book and Rooms. When to use: many commands grouped under labels." } } } } satisfies Meta<typeof Menubar>
export default meta
type Story = StoryObj<typeof meta>
export const Book: Story = {
  render: () => (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>Book</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Tonight</MenubarItem>
          <MenubarItem>This weekend</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Rooms</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>SFJAZZ</MenubarItem>
          <MenubarItem>The Chapel</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  ),
}
