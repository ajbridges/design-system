import type { Meta, StoryObj } from "@storybook/react-vite"
import { Combobox, ComboboxContent, ComboboxEmpty, ComboboxInput, ComboboxItem, ComboboxList } from "@/components/ui/combobox"

const rooms = ["SFJAZZ Center", "The Chapel", "Black Cat", "Mr. Tipple's", "Biscuits and Blues"]

const meta = { title: "Forms/Combobox", component: Combobox, tags: ["autodocs"], parameters: { docs: { description: { component: "Search and pick a room. When to use: the list is long enough that typing helps." } } } } satisfies Meta<typeof Combobox>
export default meta
type Story = StoryObj<typeof meta>
export const Rooms: Story = {
  render: () => (
    <Combobox items={rooms}>
      <ComboboxInput className="max-w-sm" placeholder="Find a room" />
      <ComboboxContent>
        <ComboboxEmpty>No rooms match.</ComboboxEmpty>
        <ComboboxList>
          {(room: string) => <ComboboxItem key={room} value={room}>{room}</ComboboxItem>}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  ),
}
