import type { Meta, StoryObj } from "@storybook/react-vite"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const rows = [
  ["Joshua Redman quartet", "SFJAZZ", "$42", "live"],
  ["Tammy Hall trio", "The Chapel", "$25", "success"],
  ["After hours trio", "The Chapel", "$20", "destructive"],
] as const

const meta = { title: "Data display/Table", component: Table, tags: ["autodocs"], parameters: { docs: { description: { component: "Rows of sets with room, price, and status. When to use: comparing many records. Status cells use a badge." } } } } satisfies Meta<typeof Table>
export default meta
type Story = StoryObj<typeof meta>
export const Book: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Set</TableHead>
          <TableHead>Room</TableHead>
          <TableHead className="text-right">Price</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map(([set, room, price, status]) => (
          <TableRow key={set}>
            <TableCell>{set}</TableCell>
            <TableCell>{room}</TableCell>
            <TableCell className="text-right tabular-nums">{price}</TableCell>
            <TableCell><Badge variant={status}>{status === "live" ? "On sale" : status === "success" ? "Few left" : "Cancelled"}</Badge></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
}
