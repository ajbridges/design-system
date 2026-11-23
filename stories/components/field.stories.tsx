import type { Meta, StoryObj } from "@storybook/react-vite"
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

const meta = { title: "Components/Field", component: Field, tags: ["autodocs"] } satisfies Meta<typeof Field>
export default meta
type Story = StoryObj<typeof meta>
export const Email: Story = {
  render: () => (
    <Field className="max-w-sm">
      <FieldLabel htmlFor="email">Email</FieldLabel>
      <Input id="email" type="email" placeholder="you@sfjazz.org" />
      <FieldDescription>Tickets for the Friday late set land here.</FieldDescription>
    </Field>
  ),
}
