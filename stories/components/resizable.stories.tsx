import type { Meta, StoryObj } from "@storybook/react-vite"
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"

const meta = { title: "Data display/Resizable", component: ResizablePanelGroup, tags: ["autodocs"], parameters: { docs: { description: { component: "Two panes, Tonight and This weekend, with a drag handle. When to use: a desktop layout the person can resize." } } } } satisfies Meta<typeof ResizablePanelGroup>
export default meta
type Story = StoryObj<typeof meta>
export const Split: Story = {
  render: () => (
    <ResizablePanelGroup orientation="horizontal" className="min-h-40 max-w-lg rounded-xl border">
      <ResizablePanel defaultSize="50" className="p-4 text-sm">Tonight</ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize="50" className="p-4 text-sm">This weekend</ResizablePanel>
    </ResizablePanelGroup>
  ),
}
