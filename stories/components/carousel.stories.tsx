import type { Meta, StoryObj } from "@storybook/react-vite"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

const sets = ["SFJAZZ late set", "Tammy Hall at the Chapel", "No cover at Mr. Tipple's"]

const meta = { title: "Components/Carousel", component: Carousel, tags: ["autodocs"] } satisfies Meta<typeof Carousel>
export default meta
type Story = StoryObj<typeof meta>
export const Sets: Story = {
  render: () => (
    <div className="px-12">
      <Carousel className="max-w-sm">
        <CarouselContent>
          {sets.map((set) => (
            <CarouselItem key={set}>
              <div className="flex h-40 items-end rounded-poster bg-hero-fade p-4">
                <p data-slot="display" className="font-heading text-3xl font-bold">{set}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  ),
}
