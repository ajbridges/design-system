import type { Meta, StoryObj } from "@storybook/react-vite"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

function Demo() {
  return (
    <Accordion className="max-w-xl" defaultValue={["doors"]}>
      <AccordionItem value="doors">
        <AccordionTrigger>When do doors open?</AccordionTrigger>
        <AccordionContent>Doors at 7 at SFJAZZ. The late set starts at 9:30.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="cover">
        <AccordionTrigger>Is there a cover?</AccordionTrigger>
        <AccordionContent>Friday is $45. Mr. Tipple's is no cover before 9.</AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

const meta = { title: "Data display/Accordion", component: Accordion, tags: ["autodocs"], parameters: { docs: { description: { component: "Questions about doors and cover, opened one at a time. When to use: long text that can stay collapsed." } } } } satisfies Meta<typeof Accordion>
export default meta
type Story = StoryObj<typeof meta>
export const Sets: Story = { render: () => <Demo /> }
