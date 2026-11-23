import type { Meta, StoryObj } from "@storybook/react-vite"
import { Spinner } from "@/components/ui/spinner"

const meta = { title: "Feedback/Spinner", component: Spinner, tags: ["autodocs"], parameters: { docs: { description: { component: "Shows that a list of sets is still loading. When to use: the wait is short and there is nothing else to show." } } } } satisfies Meta<typeof Spinner>
export default meta
type Story = StoryObj<typeof meta>
export const Loading: Story = { render: () => <Spinner /> }
