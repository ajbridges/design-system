import type { Meta, StoryObj } from "@storybook/react-vite"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

const meta = { title: "Overlays/Sheet", component: Sheet, tags: ["autodocs"], parameters: { docs: { description: { component: "A side panel for saved sets. When to use: extra detail that can stay next to the page." } } } } satisfies Meta<typeof Sheet>
export default meta
type Story = StoryObj<typeof meta>
export const Saved: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" size="touch" />}>Saved sets</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Saved</SheetTitle>
          <SheetDescription>Friday at SFJAZZ and Saturday at the Chapel.</SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  ),
}
