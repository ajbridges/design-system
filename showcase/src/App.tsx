import { useState } from "react"
import { CalendarMonth, type CalendarEvent } from "@/components/ui/calendar-month"
import { EventCard, type EventCardProps } from "@/components/ui/event-card"
import { FeedPost } from "@/components/ui/feed-post"
import { FollowButton } from "@/components/ui/follow-button"
import { LikeButton } from "@/components/ui/like-button"
import { SaveButton } from "@/components/ui/save-button"
import { TicketStatusPill, ticketStatuses } from "@/components/ui/ticket-status-pill"

type Toggle = { liked: boolean; saved: boolean; likes: number; saves: number }

const posters: Array<EventCardProps & { id: string }> = [
  {
    id: "vanguard",
    title: "Late set at the Village Vanguard",
    date: "2026-11-27",
    venue: "Village Vanguard, New York",
    imageSrc: "/poster.svg",
    imageAlt: "",
    price: "$35",
    status: "on-sale",
    href: "#vanguard",
  },
  {
    id: "cecile",
    title: "Cecile McLorin Salvant sings",
    date: "2026-11-28",
    venue: "Blue Note, New York",
    tint: "var(--chart-1)",
    price: "$48",
    status: "few-left",
    href: "#cecile",
  },
]

const compact: Array<EventCardProps & { id: string }> = [
  {
    id: "kamasi",
    title: "Kamasi Washington",
    date: "2026-11-23",
    venue: "Brooklyn Steel",
    tint: "var(--primary)",
    price: "$42",
    status: "on-sale",
  },
  {
    id: "vinyl",
    title: "Vinyl night, no cover",
    date: "2026-11-20",
    venue: "Bar Lunatico",
    tint: "var(--info)",
    status: "free",
  },
  {
    id: "after",
    title: "After hours trio",
    date: "2026-11-14",
    venue: "Smalls",
    tint: "var(--chart-5)",
    price: "$20",
    status: "cancelled",
  },
]

const events: CalendarEvent[] = [
  { id: "smalls", title: "Early set at Smalls", date: "2026-11-06", venue: "Smalls", status: "sold-out" },
  { id: "after", title: "After hours trio", date: "2026-11-14", venue: "Smalls", status: "cancelled" },
  { id: "vinyl", title: "Vinyl night, no cover", date: "2026-11-20", venue: "Bar Lunatico", status: "free" },
  { id: "kamasi", title: "Kamasi Washington", date: "2026-11-23", venue: "Brooklyn Steel", status: "on-sale" },
  { id: "vanguard", title: "Late set at the Village Vanguard", date: "2026-11-27", venue: "Village Vanguard", status: "on-sale" },
  { id: "cecile", title: "Cecile McLorin Salvant sings", date: "2026-11-28", venue: "Blue Note", status: "few-left" },
]

const initialToggles: Record<string, Toggle> = {
  vanguard: { liked: false, saved: true, likes: 86, saves: 24 },
  cecile: { liked: true, saved: false, likes: 140, saves: 31 },
  kamasi: { liked: false, saved: false, likes: 210, saves: 44 },
  vinyl: { liked: false, saved: false, likes: 18, saves: 6 },
  after: { liked: false, saved: false, likes: 12, saves: 2 },
  feed: { liked: true, saved: false, likes: 64, saves: 9 },
}

function App() {
  const [toggles, setToggles] = useState(initialToggles)
  const [following, setFollowing] = useState({ vanguard: false, kamasi: true })
  const [notice, setNotice] = useState("Ready")

  function setToggle(id: string, patch: Partial<Toggle>) {
    setToggles((current) => ({ ...current, [id]: { ...current[id], ...patch } }))
  }

  function cardProps(item: EventCardProps & { id: string }): EventCardProps {
    const state = toggles[item.id]
    return {
      ...item,
      liked: state.liked,
      saved: state.saved,
      likeCount: state.likes,
      onLikedChange: (liked) =>
        setToggle(item.id, { liked, likes: state.likes + (liked ? 1 : -1) }),
      onSavedChange: (saved) => setToggle(item.id, { saved }),
    }
  }

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-6 md:gap-16 md:px-8 md:py-12">
      <section id="hero" className="overflow-hidden rounded-poster bg-hero-fade px-5 py-14 md:px-12 md:py-24">
        <p className="text-sm font-medium text-primary md:text-base">Friday, November 27</p>
        <h1
          data-slot="display"
          className="mt-3 max-w-4xl font-heading text-5xl leading-none font-bold tracking-tight md:text-7xl"
        >
          Tonight in the village.
        </h1>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-lg">
          A dark room, one electric blue, and the sets worth leaving the house for.
        </p>
      </section>

      <section id="bill" className="flex flex-col gap-4 md:gap-6">
        <h2 data-slot="display" className="font-heading text-2xl font-bold tracking-tight md:text-4xl">
          On the bill
        </h2>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6">
          {posters.map((item) => (
            <EventCard key={item.id} {...cardProps(item)} variant="poster" />
          ))}
        </div>
      </section>

      <section id="list" className="flex flex-col gap-3">
        <h2 data-slot="display" className="font-heading text-2xl font-bold tracking-tight md:text-4xl">
          Coming up
        </h2>
        {compact.map((item) => (
          <EventCard key={item.id} {...cardProps(item)} variant="compact" />
        ))}
      </section>

      <section id="controls" className="flex flex-col gap-4">
        <h2 data-slot="display" className="font-heading text-2xl font-bold tracking-tight md:text-4xl">
          Follow the room
        </h2>
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          {ticketStatuses.map((status) => (
            <TicketStatusPill key={status} status={status} />
          ))}
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <FollowButton
            name="Village Vanguard"
            following={following.vanguard}
            onFollowingChange={(value) => setFollowing((current) => ({ ...current, vanguard: value }))}
          />
          <FollowButton
            name="Kamasi Washington"
            following={following.kamasi}
            onFollowingChange={(value) => setFollowing((current) => ({ ...current, kamasi: value }))}
          />
          <LikeButton
            liked={toggles.feed.liked}
            count={toggles.feed.likes}
            onLikedChange={(liked) =>
              setToggle("feed", { liked, likes: toggles.feed.likes + (liked ? 1 : -1) })
            }
          />
          <SaveButton
            saved={toggles.feed.saved}
            count={toggles.feed.saves}
            onSavedChange={(saved) =>
              setToggle("feed", {
                saved,
                saves: toggles.feed.saves + (saved ? 1 : -1),
              })
            }
          />
        </div>
        <p role="status" className="text-sm text-muted-foreground md:text-base">
          {notice}
        </p>
      </section>

      <section id="feed" className="flex flex-col gap-4">
        <h2 data-slot="display" className="font-heading text-2xl font-bold tracking-tight md:text-4xl">
          From the stage
        </h2>
        <FeedPost
          author={{ name: "Village Vanguard", kind: "venue" }}
          timestamp="2026-11-23T18:30:00"
          text="The Friday late set is on the book. Doors at 9, music at 10:30. Come down if you want the room while it is still quiet."
          event={cardProps(compact[0])}
          liked={toggles.feed.liked}
          likeCount={toggles.feed.likes}
          saved={toggles.feed.saved}
          saveCount={toggles.feed.saves}
          onLikedChange={(liked) =>
            setToggle("feed", { liked, likes: toggles.feed.likes + (liked ? 1 : -1) })
          }
          onSavedChange={(saved) =>
            setToggle("feed", { saved, saves: toggles.feed.saves + (saved ? 1 : -1) })
          }
          onShare={() => setNotice("Shared the Vanguard post.")}
        />
      </section>

      <section id="calendar">
        <CalendarMonth defaultMonth={new Date(2026, 10, 1)} events={events} />
      </section>
    </div>
  )
}

export { App }
