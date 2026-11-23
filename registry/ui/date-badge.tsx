import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { toDate } from "@/lib/format-date"

function DateBadge({
  date,
  className,
}: {
  date: Date | string
  className?: string
}) {
  const value = toDate(date)
  if (!value) return null
  const label = format(value, "MMMM d, yyyy")

  return (
    <time
      dateTime={format(value, "yyyy-MM-dd")}
      data-slot="date-badge"
      aria-label={label}
      className={cn(
        "inline-flex min-h-11 min-w-11 flex-col items-center justify-center rounded-lg bg-background px-2.5 py-1 text-primary",
        className
      )}
    >
      <span className="text-xs leading-none font-medium">{format(value, "MMM")}</span>
      <span
        data-slot="display"
        className="font-heading text-xl leading-none font-bold md:text-2xl"
      >
        {format(value, "d")}
      </span>
    </time>
  )
}

export { DateBadge }
