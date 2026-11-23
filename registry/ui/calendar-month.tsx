"use client"

import * as React from "react"
import {
  addDays,
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isSameDay,
  isSameMonth,
  isToday,
  startOfMonth,
  startOfWeek,
} from "date-fns"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "@/components/ui/empty"
import { TicketStatusPill, type TicketStatus } from "@/components/ui/ticket-status-pill"
import { toDate } from "@/lib/format-date"
import { cn } from "@/lib/utils"

type CalendarEvent = {
  id: string
  title: string
  date: Date | string
  venue?: string
  status?: TicketStatus
}

type CalendarMonthProps = {
  month?: Date
  defaultMonth?: Date
  onMonthChange?: (month: Date) => void
  events: CalendarEvent[]
  onSelectDate?: (date: Date) => void
  className?: string
}

type DatedEvent = CalendarEvent & { at: Date }

function CalendarMonth({
  month,
  defaultMonth,
  onMonthChange,
  events,
  onSelectDate,
  className,
}: CalendarMonthProps) {
  const [uncontrolledMonth, setUncontrolledMonth] = React.useState(() =>
    startOfMonth(defaultMonth ?? new Date())
  )
  const [selected, setSelected] = React.useState<Date | null>(null)
  const visible = startOfMonth(month ?? uncontrolledMonth)

  function showMonth(next: Date) {
    const normalized = startOfMonth(next)
    if (!month) setUncontrolledMonth(normalized)
    onMonthChange?.(normalized)
  }

  function selectDate(date: Date) {
    setSelected(date)
    onSelectDate?.(date)
  }

  const dated = events.flatMap((event) => {
    const at = toDate(event.date)
    return at ? [{ ...event, at }] : []
  })
  const inMonth = dated
    .filter((event) => isSameMonth(event.at, visible))
    .sort((a, b) => a.at.getTime() - b.at.getTime() || a.title.localeCompare(b.title))

  const groups = new Map<string, DatedEvent[]>()
  for (const event of inMonth) {
    const key = format(event.at, "yyyy-MM-dd")
    const list = groups.get(key)
    if (list) list.push(event)
    else groups.set(key, [event])
  }

  const gridStart = startOfWeek(visible)
  const gridEnd = endOfWeek(endOfMonth(visible))
  const days = eachDayOfInterval({ start: gridStart, end: gridEnd })
  const weekdays = Array.from({ length: 7 }, (_, index) =>
    format(addDays(gridStart, index), "EEE")
  )

  function eventsOn(day: Date) {
    return dated
      .filter((event) => isSameDay(event.at, day))
      .sort((a, b) => a.title.localeCompare(b.title))
  }

  return (
    <section
      data-slot="calendar-month"
      className={cn("flex flex-col gap-4", className)}
    >
      <header className="flex items-center justify-between gap-3">
        <h2
          data-slot="display"
          className="font-heading text-3xl leading-none font-bold tracking-tight md:text-5xl"
        >
          <span className="sr-only">Events in </span>
          {format(visible, "MMMM yyyy")}
        </h2>
        <div className="flex items-center gap-2">
          <Button
            type="button"
            variant="outline"
            size="icon-touch"
            aria-label="Previous month"
            onClick={() => showMonth(addMonths(visible, -1))}
          >
            <ChevronLeftIcon />
          </Button>
          <Button
            type="button"
            variant="outline"
            size="icon-touch"
            aria-label="Next month"
            onClick={() => showMonth(addMonths(visible, 1))}
          >
            <ChevronRightIcon />
          </Button>
        </div>
      </header>

      <div className="flex flex-col gap-5 md:hidden">
        {inMonth.length === 0 ? (
          <Empty className="border border-dashed border-border">
            <EmptyHeader>
              <EmptyTitle>No sets this month</EmptyTitle>
              <EmptyDescription>
                Try another month, or check back when the book is posted.
              </EmptyDescription>
            </EmptyHeader>
          </Empty>
        ) : (
          Array.from(groups.entries()).map(([key, dayEvents]) => (
            <div key={key} className="flex flex-col gap-2">
              <h3 className="font-heading text-lg leading-none font-semibold text-primary md:text-xl">
                {format(dayEvents[0].at, "EEEE, MMMM d")}
              </h3>
              <ul className="flex flex-col gap-2">
                {dayEvents.map((event) => {
                  const isSelected = selected ? isSameDay(selected, event.at) : false
                  return (
                    <li key={event.id}>
                      <button
                        type="button"
                        aria-pressed={isSelected}
                        onClick={() => selectDate(event.at)}
                        className={cn(
                          "flex min-h-11 w-full items-center justify-between gap-3 rounded-xl bg-muted px-3 py-2 text-left focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
                          isSelected && "ring-2 ring-primary"
                        )}
                      >
                        <span className="min-w-0">
                          <span className="block text-base leading-snug font-medium">
                            {event.title}
                          </span>
                          {event.venue ? (
                            <span className="block truncate text-sm text-muted-foreground">
                              {event.venue}
                            </span>
                          ) : null}
                        </span>
                        {event.status ? <TicketStatusPill status={event.status} /> : null}
                      </button>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))
        )}
      </div>

      <div className="hidden md:block">
        {inMonth.length === 0 ? (
          <p className="mb-3 text-sm text-muted-foreground md:text-base">No sets this month.</p>
        ) : null}
        <div className="grid grid-cols-7 gap-px overflow-hidden rounded-poster bg-border ring-1 ring-border">
          {weekdays.map((label) => (
            <div
              key={label}
              className="bg-muted px-2 py-2 text-xs font-medium text-muted-foreground md:text-sm"
            >
              {label}
            </div>
          ))}
          {days.map((day) => {
            const dayEvents = eventsOn(day)
            const outside = !isSameMonth(day, visible)
            const today = isToday(day)
            const isSelected = selected ? isSameDay(selected, day) : false
            return (
              <button
                key={day.toISOString()}
                type="button"
                aria-pressed={isSelected}
                aria-label={format(day, "EEEE, MMMM d")}
                onClick={() => selectDate(day)}
                className={cn(
                  "flex min-h-28 flex-col gap-1 bg-card p-2 text-left focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
                  outside && "bg-background text-muted-foreground",
                  isSelected && "ring-2 ring-primary ring-inset"
                )}
              >
                <span
                  className={cn(
                    "flex size-11 items-center justify-center rounded-full text-sm md:text-base",
                    today && "bg-primary font-medium text-primary-foreground"
                  )}
                >
                  {format(day, "d")}
                </span>
                {dayEvents.slice(0, 2).map((event) => (
                  <span key={event.id} className="truncate text-xs leading-4">
                    {event.title}
                  </span>
                ))}
                {dayEvents.length > 2 ? (
                  <span className="text-xs text-muted-foreground">
                    +{dayEvents.length - 2}
                  </span>
                ) : null}
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export { CalendarMonth, type CalendarEvent, type CalendarMonthProps }
