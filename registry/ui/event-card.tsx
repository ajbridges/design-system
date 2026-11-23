import * as React from "react"
import { DateBadge } from "@/components/ui/date-badge"
import { LikeButton } from "@/components/ui/like-button"
import { SaveButton } from "@/components/ui/save-button"
import {
  TicketStatusPill,
  type TicketStatus,
} from "@/components/ui/ticket-status-pill"
import { cn } from "@/lib/utils"

const heroFade =
  "linear-gradient(to bottom, var(--hero, var(--primary)) 0%, var(--background) 100%)"
const posterFade =
  "linear-gradient(to top, var(--background) 0%, color-mix(in oklch, var(--background) 72%, transparent) 46%, transparent 100%)"
const thumbFade =
  "linear-gradient(to top, var(--background) 0%, transparent 72%)"

type EventCardProps = {
  title: string
  date: Date | string
  venue: string
  imageSrc?: string
  imageAlt?: string
  /** CSS color for the poster wash. Defaults to the theme accent. */
  tint?: string
  price?: string
  status?: TicketStatus
  liked?: boolean
  defaultLiked?: boolean
  onLikedChange?: (liked: boolean) => void
  likeCount?: number
  saved?: boolean
  defaultSaved?: boolean
  onSavedChange?: (saved: boolean) => void
  variant?: "compact" | "poster"
  href?: string
  className?: string
}

function EventTitle({
  href,
  className,
  children,
}: {
  href?: string
  className?: string
  children: React.ReactNode
}) {
  if (!href) {
    return (
      <h3 data-slot="display" className={className}>
        {children}
      </h3>
    )
  }

  return (
    <h3 data-slot="display" className={className}>
      <a
        href={href}
        className="inline-flex min-h-11 items-center rounded-md focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
      >
        {children}
      </a>
    </h3>
  )
}

function EventCard({
  title,
  date,
  venue,
  imageSrc,
  imageAlt = "",
  tint,
  price,
  status,
  liked,
  defaultLiked,
  onLikedChange,
  likeCount,
  saved,
  defaultSaved,
  onSavedChange,
  variant = "poster",
  href,
  className,
}: EventCardProps) {
  const poster = variant === "poster"
  const titleClass = poster
    ? "font-heading text-3xl leading-none font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl"
    : "font-heading text-xl leading-tight font-semibold tracking-tight text-foreground md:text-2xl"

  return (
    <article
      data-slot="event-card"
      data-variant={variant}
      data-status={status}
      style={tint ? ({ "--hero": tint } as React.CSSProperties) : undefined}
      className={cn(
        "overflow-hidden rounded-poster bg-card text-card-foreground ring-1 ring-foreground/10",
        poster ? "flex flex-col md:min-h-96 md:flex-row" : "flex flex-col sm:flex-row",
        className
      )}
    >
      <div
        className={cn(
          "relative shrink-0 bg-background",
          poster
            ? "aspect-[4/5] w-full md:aspect-auto md:w-[min(46%,22rem)]"
            : "aspect-[2/1] w-full sm:aspect-auto sm:w-32 md:w-40"
        )}
      >
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={imageAlt}
            className="absolute inset-0 size-full object-cover"
          />
        ) : (
          <div aria-hidden className="absolute inset-0 bg-hero-fade" style={{ backgroundImage: heroFade }} />
        )}
        <div
          aria-hidden
          className="absolute inset-0 bg-poster-fade"
          style={{ backgroundImage: poster ? posterFade : thumbFade }}
        />
        {poster ? null : (
          <div className="absolute top-2 left-2">
            <DateBadge date={date} />
          </div>
        )}
      </div>
      <div
        className={cn(
          "relative z-10 flex min-w-0 flex-1 flex-col gap-4",
          poster
            ? "-mt-24 bg-linear-to-t from-background from-40% to-transparent p-4 pt-10 md:mt-0 md:justify-between md:bg-card md:p-6 lg:p-8"
            : "gap-3 p-3 sm:flex-row sm:items-center sm:p-4"
        )}
      >
        {poster ? (
          <div className="flex items-start justify-between gap-3">
            <DateBadge date={date} />
            <div className="flex shrink-0 items-center gap-2">
              <LikeButton
                liked={liked}
                defaultLiked={defaultLiked}
                onLikedChange={onLikedChange}
                count={likeCount}
              />
              <SaveButton
                saved={saved}
                defaultSaved={defaultSaved}
                onSavedChange={onSavedChange}
              />
            </div>
          </div>
        ) : null}
        <div className={cn("flex min-w-0 flex-col gap-2", !poster && "flex-1")}>
          <EventTitle
            href={href}
            className={cn(titleClass, status === "cancelled" && "line-through decoration-muted-foreground")}
          >
            {title}
          </EventTitle>
          <p className="truncate text-sm text-muted-foreground md:text-base">{venue}</p>
          <div className="flex flex-wrap items-center gap-2">
            {price ? (
              <span className="text-sm font-medium tabular-nums md:text-base">{price}</span>
            ) : null}
            {status ? <TicketStatusPill status={status} /> : null}
          </div>
        </div>
        {poster ? null : (
          <div className="flex shrink-0 items-center gap-2">
            <LikeButton
              liked={liked}
              defaultLiked={defaultLiked}
              onLikedChange={onLikedChange}
              count={likeCount}
            />
            <SaveButton
              saved={saved}
              defaultSaved={defaultSaved}
              onSavedChange={onSavedChange}
            />
          </div>
        )}
      </div>
    </article>
  )
}

export { EventCard, type EventCardProps }
