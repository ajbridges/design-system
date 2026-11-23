import { Badge, type BadgeVariant } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const ticketStatuses = [
  "on-sale",
  "few-left",
  "sold-out",
  "free",
  "cancelled",
] as const

type TicketStatus = (typeof ticketStatuses)[number]

const content: Record<
  TicketStatus,
  { label: string; variant: BadgeVariant }
> = {
  "on-sale": { label: "On sale", variant: "live" },
  "few-left": { label: "Few left", variant: "warning" },
  "sold-out": { label: "Sold out", variant: "neutral" },
  free: { label: "No cover", variant: "success" },
  cancelled: { label: "Cancelled", variant: "destructive" },
}

function TicketStatusPill({
  status,
  className,
}: {
  status: TicketStatus
  className?: string
}) {
  const item = content[status]
  return (
    <Badge
      data-slot="ticket-status-pill"
      variant={item.variant}
      className={cn("h-7 px-2.5 md:h-8 md:px-3 md:text-sm", className)}
    >
      {item.label}
    </Badge>
  )
}

export { TicketStatusPill, ticketStatuses, type TicketStatus }
