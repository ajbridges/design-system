import type { Meta, StoryObj } from "@storybook/react-vite"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Button } from "@/components/ui/button"

const meta = { title: "Components/Collapsible", component: Collapsible, tags: ["autodocs"] } satisfies Meta<typeof Collapsible>
export default meta
type Story = StoryObj<typeof meta>
export const Notes: Story = {
  render: () => (
    <Collapsible className="max-w-md">
      <CollapsibleTrigger render={<Button variant="outline" size="touch" />}>House notes</CollapsibleTrigger>
      <CollapsibleContent className="pt-3 text-sm text-muted-foreground">The late set is seated. No photos during the ballad.</CollapsibleContent>
    </Collapsible>
  ),
}
