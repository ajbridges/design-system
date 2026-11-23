import type { Meta, StoryObj } from "@storybook/react-vite"
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu"

const meta = { title: "Navigation/Navigation menu", component: NavigationMenu, tags: ["autodocs"], parameters: { docs: { description: { component: "Top links such as Tonight, Rooms, and Saved. When to use: a few primary destinations." } } } } satisfies Meta<typeof NavigationMenu>
export default meta
type Story = StoryObj<typeof meta>
export const Nights: Story = {
  render: () => (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem><NavigationMenuLink href="#tonight">Tonight</NavigationMenuLink></NavigationMenuItem>
        <NavigationMenuItem><NavigationMenuLink href="#rooms">Rooms</NavigationMenuLink></NavigationMenuItem>
        <NavigationMenuItem><NavigationMenuLink href="#saved">Saved</NavigationMenuLink></NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
}
