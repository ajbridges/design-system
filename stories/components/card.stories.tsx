import type { Meta, StoryObj } from "@storybook/react-vite"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const meta = { title: "Data display/Card", component: Card, tags: ["autodocs"], parameters: { docs: { description: { component: "A raised surface for a room or a set. When to use: grouping a title and a short description. For a show poster, use Event card." } } } } satisfies Meta<typeof Card>
export default meta
type Story = StoryObj<typeof meta>
export const Set: Story = {
  render: () => (
    <Card className="max-w-md">
      <CardHeader>
        <CardTitle>Miner Auditorium</CardTitle>
        <CardDescription>Friday late set, doors at 7.</CardDescription>
      </CardHeader>
      <CardContent>Joshua Redman quartet. $42 if you are already a member.</CardContent>
    </Card>
  ),
}
