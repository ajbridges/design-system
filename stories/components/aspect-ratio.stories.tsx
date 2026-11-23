import type { Meta, StoryObj } from "@storybook/react-vite"
import { AspectRatio } from "@/components/ui/aspect-ratio"

const meta = { title: "Components/Aspect ratio", component: AspectRatio, tags: ["autodocs"], args: { ratio: 4 / 5 } } satisfies Meta<typeof AspectRatio>
export default meta
type Story = StoryObj<typeof meta>
export const Poster: Story = {
  render: () => (
    <div className="max-w-xs">
      <AspectRatio ratio={4 / 5} className="overflow-hidden rounded-poster bg-hero-fade">
        <div className="flex h-full items-end p-4">
          <p data-slot="display" className="font-heading text-3xl font-bold">Tonight at SFJAZZ.</p>
        </div>
      </AspectRatio>
    </div>
  ),
}
