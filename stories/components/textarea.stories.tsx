import type { Meta, StoryObj } from "@storybook/react-vite"
import { Textarea } from "@/components/ui/textarea"

const meta = {
  title: "Forms/Textarea",
  component: Textarea,
  tags: ["autodocs"], parameters: { docs: { description: { component: "A longer note, such as a message for the door. When to use: the person may write more than one line." } } },
  args: { placeholder: "A note for the door", "aria-label": "Note" },
} satisfies Meta<typeof Textarea>
export default meta
type Story = StoryObj<typeof meta>
export const Note: Story = {}
