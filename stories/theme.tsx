import * as React from "react"
import { TooltipProvider } from "@/components/ui/tooltip"
import tokens from "../tokens/tokens.json"

export type StoryTheme = "jazzfolio" | "neutral-light" | "neutral-dark"

const ThemeContext = React.createContext<StoryTheme>("jazzfolio")

export function useStoryTheme() {
  return React.useContext(ThemeContext)
}

const palettes = {
  light: tokens.light,
  dark: tokens.dark,
  jazzfolio: tokens.jazzfolio.colors,
} as const

export function paletteFor(theme: StoryTheme) {
  if (theme === "jazzfolio") return palettes.jazzfolio
  if (theme === "neutral-dark") return palettes.dark
  return palettes.light
}

export function typeFor(theme: StoryTheme) {
  return theme === "jazzfolio" ? tokens.jazzfolio.theme : tokens.theme
}

function themeStyle(theme: StoryTheme): React.CSSProperties {
  const style: Record<string, string> = {
    background: "var(--background)",
    color: "var(--foreground)",
    fontFamily: "var(--font-sans)",
    minHeight: "100vh",
  }
  if (theme === "jazzfolio") return style

  const palette = paletteFor(theme)
  for (const [key, value] of Object.entries(palette)) {
    style[`--${key}`] = value
  }
  for (const [key, value] of Object.entries(tokens.theme)) {
    style[`--${key}`] = value
  }
  style["--primary-hover"] = "var(--primary)"
  style["--primary-active"] = "var(--primary)"
  style["--hero"] = "var(--primary)"
  style.colorScheme = theme === "neutral-light" ? "light" : "dark"
  return style
}

export function ThemeFrame({
  theme,
  children,
}: {
  theme?: string
  children: React.ReactNode
}) {
  const name: StoryTheme =
    theme === "neutral-light" || theme === "neutral-dark" ? theme : "jazzfolio"

  return (
    <ThemeContext.Provider value={name}>
      <TooltipProvider>
        <div
          data-theme={name}
          className={name === "jazzfolio" ? undefined : "theme-neutral"}
          style={themeStyle(name)}
        >
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 p-4 md:p-8">
            {children}
          </div>
        </div>
      </TooltipProvider>
    </ThemeContext.Provider>
  )
}
