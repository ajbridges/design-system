import type { Meta, StoryObj } from "@storybook/react-vite"
import { Slider } from "@/components/ui/slider"

const meta = { title: "Components/Slider", component: Slider, tags: ["autodocs"] } satisfies Meta<typeof Slider>
export default meta
type Story = StoryObj<typeof meta>
export const Price: Story = {
  render: () => <Slider className="max-w-sm" defaultValue={[45]} max={80} aria-label="Cover price" />,
}
