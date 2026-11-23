import type { Meta, StoryObj } from "@storybook/react-vite"
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarInset, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider } from "@/components/ui/sidebar"

const meta = { title: "Navigation/Sidebar", component: Sidebar, tags: ["autodocs"], parameters: { docs: { description: { component: "A persistent list of rooms beside the page. When to use: an app shell with a stable set of sections." } } } } satisfies Meta<typeof Sidebar>
export default meta
type Story = StoryObj<typeof meta>
export const Book: Story = {
  parameters: { layout: "fullscreen" },
  render: () => (
    <SidebarProvider className="min-h-80">
      <Sidebar>
        <SidebarHeader className="font-heading text-xl font-bold">SF nights</SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Rooms</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem><SidebarMenuButton isActive>SFJAZZ</SidebarMenuButton></SidebarMenuItem>
                <SidebarMenuItem><SidebarMenuButton>The Chapel</SidebarMenuButton></SidebarMenuItem>
                <SidebarMenuItem><SidebarMenuButton>Black Cat</SidebarMenuButton></SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <SidebarInset className="p-4 text-sm">The Friday late set is on the book.</SidebarInset>
    </SidebarProvider>
  ),
}
