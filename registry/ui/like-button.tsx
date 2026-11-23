"use client"

import { HeartIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useControllableBoolean } from "@/hooks/use-controllable"
import { cn } from "@/lib/utils"

function LikeButton({
  liked,
  defaultLiked = false,
  onLikedChange,
  count,
  className,
  disabled,
}: {
  liked?: boolean
  defaultLiked?: boolean
  onLikedChange?: (liked: boolean) => void
  count?: number
  className?: string
  disabled?: boolean
}) {
  const state = useControllableBoolean(liked, defaultLiked, onLikedChange)
  const label =
    count === undefined
      ? state.value
        ? "Unlike"
        : "Like"
      : state.value
        ? `Unlike, ${count} likes`
        : `Like, ${count} likes`

  return (
    <Button
      type="button"
      variant={state.value ? "default" : "ghost"}
      size={count === undefined ? "icon-touch" : "touch"}
      disabled={disabled}
      aria-pressed={state.value}
      aria-label={label}
      className={cn(
        state.value && "hover:bg-primary-hover active:bg-primary-active",
        className
      )}
      onClick={state.toggle}
    >
      <HeartIcon className={cn(state.value && "fill-current")} />
      {count === undefined ? null : (
        <span className="tabular-nums">{count}</span>
      )}
    </Button>
  )
}

export { LikeButton }
