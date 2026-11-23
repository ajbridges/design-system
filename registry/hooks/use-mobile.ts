import * as React from "react"

const MOBILE_BREAKPOINT = 768
const MOBILE_QUERY = `(max-width: ${MOBILE_BREAKPOINT - 1}px)`

function subscribe(onStoreChange: () => void) {
  const mql = window.matchMedia(MOBILE_QUERY)
  mql.addEventListener("change", onStoreChange)
  return () => mql.removeEventListener("change", onStoreChange)
}

function getSnapshot() {
  return window.matchMedia(MOBILE_QUERY).matches
}

function getServerSnapshot() {
  return false
}

// The viewport is an external store. Reading it with useSyncExternalStore keeps
// the hook free of setState inside an effect (react-hooks/set-state-in-effect).
export function useIsMobile() {
  return React.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}
