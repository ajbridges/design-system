import type { Meta, StoryObj } from "@storybook/react-vite"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const meta = { title: "Components/Tabs", component: Tabs, tags: ["autodocs"] } satisfies Meta<typeof Tabs>
export default meta
type Story = StoryObj<typeof meta>
export const Nights: Story = {
  render: () => (
    <Tabs defaultValue="tonight" className="max-w-md">
      <TabsList>
        <TabsTrigger value="tonight">Tonight</TabsTrigger>
        <TabsTrigger value="weekend">Weekend</TabsTrigger>
      </TabsList>
      <TabsContent value="tonight">Joshua Redman at SFJAZZ, 9:30.</TabsContent>
      <TabsContent value="weekend">Tammy Hall at the Chapel, Saturday.</TabsContent>
    </Tabs>
  ),
}
