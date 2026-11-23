import type { Meta, StoryObj } from "@storybook/react-vite"
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart"
import { Bar, BarChart, XAxis } from "recharts"

const config = { covers: { label: "Covers", color: "var(--chart-1)" } } satisfies ChartConfig
const data = [
  { night: "Thu", covers: 180 },
  { night: "Fri", covers: 420 },
  { night: "Sat", covers: 460 },
]

const meta = { title: "Data display/Chart", component: ChartContainer, tags: ["autodocs"], parameters: { docs: { description: { component: "Covers by night. When to use: a trend is clearer as a chart than as a table." } } } } satisfies Meta<typeof ChartContainer>
export default meta
type Story = StoryObj<typeof meta>
export const Covers: Story = {
  args: { config, children: <span /> },
  render: () => (
    <ChartContainer config={config} className="max-w-lg">
      <BarChart data={data}>
        <XAxis dataKey="night" tickLine={false} axisLine={false} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="covers" fill="var(--color-covers)" radius={6} />
      </BarChart>
    </ChartContainer>
  ),
}
