import type { Meta, StoryObj } from "@storybook/react-vite"
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select"

const meta = { title: "Components/Native select", component: NativeSelect, tags: ["autodocs"] } satisfies Meta<typeof NativeSelect>
export default meta
type Story = StoryObj<typeof meta>
export const Room: Story = {
  render: () => (
    <NativeSelect aria-label="Room" defaultValue="sfjazz" className="max-w-xs">
      <NativeSelectOption value="sfjazz">SFJAZZ Center</NativeSelectOption>
      <NativeSelectOption value="chapel">The Chapel</NativeSelectOption>
      <NativeSelectOption value="black-cat">Black Cat</NativeSelectOption>
    </NativeSelect>
  ),
}
