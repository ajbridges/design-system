"use client"

import { CheckIcon, PlusIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useControllableBoolean } from "@/hooks/use-controllable"
import { cn } from "@/lib/utils"

function FollowButton({
  following,
  defaultFollowing = false,
  onFollowingChange,
  name,
  className,
  disabled,
}: {
  following?: boolean
  defaultFollowing?: boolean
  onFollowingChange?: (following: boolean) => void
  name?: string
  className?: string
  disabled?: boolean
}) {
  const state = useControllableBoolean(
    following,
    defaultFollowing,
    onFollowingChange
  )
  const label = state.value
    ? name
      ? `Unfollow ${name}`
      : "Unfollow"
    : name
      ? `Follow ${name}`
      : "Follow"

  return (
    <Button
      type="button"
      variant={state.value ? "outline" : "default"}
      size="touch"
      disabled={disabled}
      aria-pressed={state.value}
      aria-label={label}
      className={cn(
        "min-w-28",
        !state.value && "hover:bg-primary-hover active:bg-primary-active",
        className
      )}
      onClick={state.toggle}
    >
      {state.value ? <CheckIcon /> : <PlusIcon />}
      {state.value ? "Following" : "Follow"}
    </Button>
  )
}

export { FollowButton }
