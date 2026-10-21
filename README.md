# design-system

A shadcn registry on GitHub. Install it into a project that already ran `npx shadcn@latest init`.

Base library is Base UI (`base-nova`). Theme is preset [`b1YmqviOA`](https://ui.shadcn.com/create?preset=b1YmqviOA): neutral base, blue theme, blue charts, DM Sans, large radius (`0.875rem`), translucent menus, subtle menu accent, pointer cursor on buttons.

## Install into a project

```bash
# everything: tokens, components, AGENTS.md, pinned to this release
npx shadcn@latest add ajbridges/design-system/starter#v0.1.0

# or one piece at a time
npx shadcn@latest add ajbridges/design-system/badge#v0.1.0
```

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
2. `npm run tokens` regenerates `tokens/theme.css` and the `theme` item in `registry.json`.
3. Commit, then tag a release: `git tag v0.2.0 && git push --tags`.

Consumers pull the update with `npx shadcn@latest add ajbridges/design-system/theme#v0.2.0`.

## Layout

```
tokens/tokens.json       source of truth
tokens/theme.css         generated; drop-in CSS for Tailwind v4
registry/ui/*.tsx        components
registry/hooks/          hooks components depend on (use-mobile)
registry/lib/utils.ts    cn()
registry.json            what's installable
AGENTS.md                rules for humans + AI building with the system
```

## Components

`accordion`, `alert`, `alert-dialog`, `aspect-ratio`, `avatar`, `badge` (success, warning, info, destructive and neutral status variants, plus `dot`), `breadcrumb`, `button` (default, secondary, outline, ghost, destructive, link), `button-group`, `calendar`, `card`, `carousel`, `chart`, `checkbox`, `collapsible`, `combobox`, `command`, `context-menu`, `dialog`, `drawer`, `dropdown-menu`, `empty`, `field`, `hover-card`, `input`, `input-group`, `input-otp`, `item`, `kbd`, `label`, `menubar`, `native-select`, `navigation-menu`, `pagination`, `popover`, `progress`, `radio-group`, `resizable`, `scroll-area`, `select`, `separator`, `sheet`, `sidebar`, `skeleton`, `slider`, `spinner`, `switch`, `table`, `tabs`, `textarea`, `toast`, `sonner`, `toggle`, `toggle-group`, `tooltip`.

`use-mobile` ships with `sidebar`. `starter` also installs `theme`, `utils` and `agent-rules`.

Not in this registry: `date-picker`, `data-table` and `typography` (docs examples, not installable items), `form` (registry entry has no files), `direction` (RTL helper; this preset leaves RTL off), and the chat/agent components that back AI Elements (`attachment`, `bubble`, `code-block`, `marker`, `message`, `message-scroller`, `questionnaire`, `trace`).

## Check

```bash
npm install
npm run check      # tokens, typecheck, design-system color check
npm run validate   # shadcn registry validate ajbridges/design-system
```
