import type { Meta, StoryObj } from "@storybook/react-vite"
import { Badge } from "@/components/ui/badge"
import { desktopGlobals, mobileGlobals } from "../viewports"

const variants = [
  "default",
  "secondary",
  "outline",
  "ghost",
  "link",
  "success",
  "warning",
  "info",
  "live",
  "destructive",
  "neutral",
] as const

const meta = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
  args: { children: "On sale", variant: "live", dot: false },
  argTypes: {
    variant: { control: "select", options: [...variants] },
    dot: { control: "boolean" },
    children: { control: "text" },
  },
} satisfies Meta<typeof Badge>

export default meta

type Story = StoryObj<typeof meta>

export const Live: Story = {}

export const All: Story = {
  render: () => (
    <div className="flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap">
      {variants.map((variant) => (
        <Badge key={variant} variant={variant} dot={variant === "success"}>
          {variant}
        </Badge>
      ))}
    </div>
  ),
}

export const Desktop: Story = { globals: desktopGlobals }
export const Mobile: Story = { globals: mobileGlobals }
