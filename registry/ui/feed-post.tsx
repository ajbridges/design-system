"use client"

import { ShareIcon } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { EventCard, type EventCardProps } from "@/components/ui/event-card"
import { LikeButton } from "@/components/ui/like-button"
import { SaveButton } from "@/components/ui/save-button"
import { formatEventDate, toDate } from "@/lib/format-date"
import { cn } from "@/lib/utils"

type FeedAuthor = {
  name: string
  imageSrc?: string
  imageAlt?: string
  kind?: "artist" | "venue"
}

type FeedPostProps = {
  author: FeedAuthor
  text: string
  timestamp: Date | string
  event?: EventCardProps
  liked?: boolean
  defaultLiked?: boolean
  onLikedChange?: (liked: boolean) => void
  likeCount?: number
  saved?: boolean
  defaultSaved?: boolean
  onSavedChange?: (saved: boolean) => void
  saveCount?: number
  onShare?: () => void
  className?: string
}

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
}

function FeedPost({
  author,
  text,
  timestamp,
  event,
  liked,
  defaultLiked,
  onLikedChange,
  likeCount,
  saved,
  defaultSaved,
  onSavedChange,
  saveCount,
  onShare,
  className,
}: FeedPostProps) {
  const when = toDate(timestamp)
  const stamp = formatEventDate(timestamp, "MMM d, yyyy 'at' h:mm a")
  const kindLabel =
    author.kind === "venue" ? "Venue" : author.kind === "artist" ? "Artist" : null

  return (
    <article
      data-slot="feed-post"
      className={cn(
        "flex flex-col gap-3 rounded-poster bg-card p-4 text-card-foreground ring-1 ring-foreground/10 md:grid md:grid-cols-[auto_minmax(0,1fr)] md:gap-x-4 md:p-5",
        className
      )}
    >
      <Avatar className="size-11 md:row-span-2">
        {author.imageSrc ? (
          <AvatarImage src={author.imageSrc} alt={author.imageAlt ?? ""} />
        ) : null}
        <AvatarFallback>{initials(author.name)}</AvatarFallback>
      </Avatar>
      <header className="flex min-w-0 flex-col justify-center">
        <p className="truncate text-sm font-medium md:text-base">{author.name}</p>
        <p className="text-xs text-muted-foreground md:text-sm">
          {kindLabel ? (
            <>
              {kindLabel}
              <span aria-hidden> · </span>
            </>
          ) : null}
          {when ? <time dateTime={when.toISOString()}>{stamp}</time> : stamp}
        </p>
      </header>
      <div className="flex min-w-0 flex-col gap-3">
        <p className="text-sm leading-relaxed whitespace-pre-wrap md:text-base">{text}</p>
        {event ? (
          <EventCard {...event} variant={event.variant ?? "compact"} />
        ) : null}
        <div className="flex flex-wrap items-center gap-2">
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
            count={saveCount}
          />
          <Button
            type="button"
            variant="ghost"
            size="icon-touch"
            aria-label="Share"
            onClick={onShare}
          >
            <ShareIcon />
          </Button>
        </div>
      </div>
    </article>
  )
}

export { FeedPost, type FeedAuthor, type FeedPostProps }
