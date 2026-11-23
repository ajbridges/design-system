import type { Meta, StoryObj } from "@storybook/react-vite"
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination"

const meta = { title: "Components/Pagination", component: Pagination, tags: ["autodocs"] } satisfies Meta<typeof Pagination>
export default meta
type Story = StoryObj<typeof meta>
export const Book: Story = {
  render: () => (
    <Pagination>
      <PaginationContent>
        <PaginationItem><PaginationPrevious href="#prev" /></PaginationItem>
        <PaginationItem><PaginationLink href="#1" isActive>1</PaginationLink></PaginationItem>
        <PaginationItem><PaginationLink href="#2">2</PaginationLink></PaginationItem>
        <PaginationItem><PaginationNext href="#next" /></PaginationItem>
      </PaginationContent>
    </Pagination>
  ),
}
