import type { Meta, StoryObj } from "@storybook/react-vite"
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

const meta = { title: "Forms/Field", component: Field, tags: ["autodocs"], parameters: { docs: { description: { component: "Wraps a label, control, and hint so a form reads as one question. When to use: any input that needs a label." } } } } satisfies Meta<typeof Field>
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
