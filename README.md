# design-system

A shadcn registry on GitHub. Install it into a project that already ran `npx shadcn@latest init`.

Base library is Base UI (`base-nova`). Theme is preset [`b1YmqviOA`](https://ui.shadcn.com/create?preset=b1YmqviOA): neutral base, blue theme, blue charts, DM Sans, large radius (`0.875rem`), translucent menus, subtle menu accent, pointer cursor on buttons.

## Install into a project

```bash
# everything: tokens, components, AGENTS.md, pinned to this release
npx shadcn@latest add ajbridges/design-system/starter#v0.2.0

# or one piece at a time
npx shadcn@latest add ajbridges/design-system/badge#v0.2.0

# Jazzfolio theme and the live-jazz components (does not replace starter)
npx shadcn@latest add ajbridges/design-system/jazz#v0.2.0
```

`starter#v0.1.0` still installs the previous release. v0.2.0 of starter is the same neutral theme plus the carousel and `use-mobile` lint fixes.

Installing any component also pulls in `theme` and `utils`. `theme` loads DM Sans (`font-dm-sans`). `starter` is a `registry:base` item so the CLI replaces the default shadcn colors, radius and type with this theme. Adding a single component later only fills in tokens that are not already set.

## Using it with Claude Code

`starter` (or `agent-rules` on its own) adds three files to the app:

| File | Job |
|---|---|
| `AGENTS.md` | The rules: tokens only, status → badge mapping, table conventions |
| `CLAUDE.md` | Claude Code reads this every session. It imports AGENTS.md and tells Claude to build from `components/ui` |
| `scripts/check-design-system.mjs` | Fails on `bg-blue-500`, `bg-[#f00]`, hardcoded hex/rgb/oklch. Claude runs it before finishing |

Then prompt normally ("build a projects table with status badges"). You don't need to mention the design system.

If the app already has a `CLAUDE.md`, the CLI asks before overwriting it. Say no and add `@AGENTS.md` as the first line of your existing file instead.

## Change a token

1. Edit `tokens/tokens.json`. It is the only file you edit for color, radius or type.
2. `npm run tokens` regenerates `tokens/theme.css`, `tokens/jazzfolio.css`, and the theme items in `registry.json`.
3. Commit, then tag a release: `git tag v0.3.0 && git push --tags`.

Consumers pull a theme update with `npx shadcn@latest add ajbridges/design-system/theme#v0.2.0`.

## Layout

```
tokens/tokens.json       source of truth
tokens/theme.css         generated; drop-in CSS for Tailwind v4
tokens/jazzfolio.css     generated; dark-only Jazzfolio drop-in
registry/ui/*.tsx        components
registry/hooks/          hooks components depend on (use-mobile, use-controllable)
registry/lib/utils.ts    cn()
registry.json            what's installable
showcase/                local preview of Jazzfolio
AGENTS.md                rules for humans + AI building with the system
```

## Components

`accordion`, `alert`, `alert-dialog`, `aspect-ratio`, `avatar`, `badge` (success, warning, info, destructive, neutral, and live, plus `dot`), `breadcrumb`, `button` (default, secondary, outline, ghost, destructive, link; `touch` and `icon-touch` are 44px), `button-group`, `calendar`, `card`, `carousel`, `chart`, `checkbox`, `collapsible`, `combobox`, `command`, `context-menu`, `dialog`, `drawer`, `dropdown-menu`, `empty`, `field`, `hover-card`, `input`, `input-group`, `input-otp`, `item`, `kbd`, `label`, `menubar`, `native-select`, `navigation-menu`, `pagination`, `popover`, `progress`, `radio-group`, `resizable`, `scroll-area`, `select`, `separator`, `sheet`, `sidebar`, `skeleton`, `slider`, `spinner`, `switch`, `table`, `tabs`, `textarea`, `toast`, `sonner`, `toggle`, `toggle-group`, `tooltip`.

`use-mobile` ships with `sidebar`. `starter` also installs `theme`, `utils` and `agent-rules`. It does not install Jazzfolio.

## Jazzfolio

A dark-only theme and the pieces a live-jazz discovery app needs. Install it beside starter, or on its own:

```bash
npx shadcn@latest add ajbridges/design-system/jazz#v0.2.0

# theme only, or one component
npx shadcn@latest add ajbridges/design-system/theme-jazzfolio#v0.2.0
npx shadcn@latest add ajbridges/design-system/event-card#v0.2.0
```

`theme-jazzfolio` overwrites color, radius, and type. Both `:root` and `.dark` use the same near-black palette, so the app stays dark.

| Token | Value |
|---|---|
| Background | `#0A0A0B`, with card, popover, and muted a few steps lighter |
| Text | `#F5F5F6` and grey `#B7B7BE` |
| Accent | `#3D7BFF` for primary actions, dates, live state, and focus |
| Hover / pressed | `#4D87FF` / `#3B77F5` |
| Button label on the accent | near-black `#0A0A0B` |

`#3D7BFF` is the bright end of the `#2F6BFF`–`#3D7BFF` range. It is 5.16:1 on `#0A0A0B`, so dates and live labels clear WCAG AA. White on that blue is 3.84:1, which misses AA for normal text, so primary buttons use near-black labels (5.16:1, and still 4.85:1 on the pressed fill). `#2F6BFF` itself is only 4.40:1 on this background.

Display type is **Barlow Condensed** (`font-heading`), a free condensed grotesque with a real weight range, so poster titles can be bold in sentence case. Anton is a single cut drawn for all-caps and looks wrong in sentence case. Archivo Narrow is only slightly condensed and reads as text at poster size. Body is **Inter**, the same neutral grotesque already shipped as shadcn's `font-inter`. Do not set `uppercase` on display type.

Poster cards use `rounded-poster` (`1.75rem`). Buttons are pills. `bg-hero-fade` runs the hero color (or an artist tint written to `--hero`) into the background. `bg-poster-fade` runs an image into black.

| Item | What it is |
|---|---|
| `event-card` | Poster or compact row. Image or gradient, title, date, venue, price or status, like and save. Stacked on narrow screens, a row from `md` (poster) or `sm` (compact). |
| `date-badge` | Month over day, in the accent, at least 44px |
| `ticket-status-pill` | On sale, few left, sold out, no cover, cancelled |
| `follow-button` | Follow / following, 44px pill |
| `like-button`, `save-button` | Toggle, optional count, 44px |
| `feed-post` | Artist or venue avatar, text, optional event card, like / save / share, timestamp. Stacked on narrow screens, avatar beside the body on wide screens. |
| `calendar-month` | Day list below `md`, seven-column month from `md` up |

Type sizes step down on small screens (`text-3xl md:text-5xl` on poster titles, and the same pattern on the feed and calendar).

Preview it locally:

```bash
npm run showcase
```

Not in this registry: `date-picker`, `data-table` and `typography` (docs examples, not installable items), `form` (registry entry has no files), `direction` (RTL helper; this preset leaves RTL off), and the chat/agent components that back AI Elements (`attachment`, `bubble`, `code-block`, `marker`, `message`, `message-scroller`, `questionnaire`, `trace`).

## Check

```bash
npm install
npm run check      # tokens, typecheck, lint, design-system color check, Jazzfolio contrast
npm run validate   # shadcn registry validate ajbridges/design-system
npm run showcase   # Jazzfolio preview at http://localhost:4173
```
