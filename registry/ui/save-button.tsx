"use client"

import { BookmarkIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useControllableBoolean } from "@/hooks/use-controllable"
import { cn } from "@/lib/utils"

function SaveButton({
  saved,
  defaultSaved = false,
  onSavedChange,
  count,
  className,
  disabled,
}: {
  saved?: boolean
  defaultSaved?: boolean
  onSavedChange?: (saved: boolean) => void
  count?: number
  className?: string
  disabled?: boolean
}) {
  const state = useControllableBoolean(saved, defaultSaved, onSavedChange)
  const label =
    count === undefined
      ? state.value
        ? "Unsave"
        : "Save"
      : state.value
        ? `Unsave, ${count} saves`
        : `Save, ${count} saves`

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
      <BookmarkIcon className={cn(state.value && "fill-current")} />
      {count === undefined ? null : (
        <span className="tabular-nums">{count}</span>
      )}
    </Button>
  )
}

export { SaveButton }
