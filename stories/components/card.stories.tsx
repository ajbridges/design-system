import type { Meta, StoryObj } from "@storybook/react-vite"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const meta = { title: "Components/Card", component: Card, tags: ["autodocs"] } satisfies Meta<typeof Card>
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
