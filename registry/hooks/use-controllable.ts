"use client"

import * as React from "react"

export function useControllableBoolean(
  controlled: boolean | undefined,
  defaultValue = false,
  onChange?: (next: boolean) => void
) {
  const [uncontrolled, setUncontrolled] = React.useState(defaultValue)
  const isControlled = controlled !== undefined
  const value = isControlled ? controlled : uncontrolled

  const setValue = React.useCallback(
    (next: boolean) => {
      if (!isControlled) setUncontrolled(next)
      onChange?.(next)
    },
    [isControlled, onChange]
  )

  const toggle = React.useCallback(() => {
    setValue(!value)
  }, [setValue, value])

  return { value, setValue, toggle }
}
