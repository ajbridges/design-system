import type { Meta, StoryObj } from "@storybook/react-vite"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"

const meta = { title: "Components/Command", component: Command, tags: ["autodocs"] } satisfies Meta<typeof Command>
export default meta
type Story = StoryObj<typeof meta>
export const Search: Story = {
  render: () => (
    <Command className="max-w-md rounded-xl border">
      <CommandInput placeholder="Search the book" />
      <CommandList>
        <CommandEmpty>No sets found.</CommandEmpty>
        <CommandGroup heading="Tonight">
          <CommandItem>Joshua Redman quartet</CommandItem>
          <CommandItem>Late set at SFJAZZ</CommandItem>
          <CommandItem>Tammy Hall trio</CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
}
