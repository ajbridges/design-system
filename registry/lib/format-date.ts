import { format, isValid, parseISO } from "date-fns"

export function toDate(value: Date | string | null | undefined) {
  if (value == null || value === "") return null
  const date = value instanceof Date ? value : parseISO(value)
  return isValid(date) ? date : null
}

export function formatEventDate(
  value: Date | string | null | undefined,
  pattern: string,
  fallback = ""
) {
  const date = toDate(value)
  return date ? format(date, pattern) : fallback
}
