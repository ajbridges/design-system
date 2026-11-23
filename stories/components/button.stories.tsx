import type { Meta, StoryObj } from "@storybook/react-vite"
import { Button } from "@/components/ui/button"
import { HeartIcon } from "lucide-react"
import { desktopGlobals, mobileGlobals } from "../viewports"

const variants = ["default", "secondary", "outline", "ghost", "destructive", "link"] as const
const sizes = ["xs", "sm", "default", "lg", "touch", "icon", "icon-xs", "icon-sm", "icon-lg", "icon-touch"] as const

const meta = {
  title: "Actions/Button",
  component: Button,
  tags: ["autodocs"], parameters: { docs: { description: { component: "Starts an action: buy a ticket, follow a room, save a set. When to use: any click that changes something. Use a link variant only for navigation." } } },
  args: { children: "Get tickets", variant: "default", size: "touch" },
  argTypes: {
    variant: { control: "select", options: [...variants] },
    size: { control: "select", options: [...sizes] },
    disabled: { control: "boolean" },
    children: { control: "text" },
  },
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const Variants: Story = {
  render: () => (
    <div className="flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:items-center">
      {variants.map((variant) => (
        <Button key={variant} variant={variant} size="touch">
          {variant === "link" ? "View the book" : variant}
        </Button>
      ))}
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col items-start gap-3">
      {sizes.map((size) => (
        <Button key={size} size={size} aria-label={size.startsWith("icon") ? size : undefined}>
          {size.startsWith("icon") ? <HeartIcon /> : size}
        </Button>
      ))}
    </div>
  ),
}

export const Desktop: Story = { globals: desktopGlobals }
export const Mobile: Story = { globals: mobileGlobals }
