# Changelog

## 0.2.0

### Jazzfolio
- Dark-only `theme-jazzfolio`. Near-black surfaces (`#0A0A0B` background, raised cards a few steps lighter), white and grey text, and one accent: `#3D7BFF`. Hover is `#4D87FF`, pressed is `#3B77F5`. Button labels on the blue are near-black so the pair clears WCAG AA. White on `#3D7BFF` does not.
- Display type is Barlow Condensed (`font-heading`), used in sentence case. Body is Inter. Poster radius is `1.75rem`. Buttons are pills.
- `bg-hero-fade` and `bg-poster-fade` paint a gradient from an artist color or image into black.
- New `jazz` bundle, separate from `starter`, so existing installs keep the neutral theme: `date-badge`, `ticket-status-pill`, `follow-button`, `like-button`, `save-button`, `event-card`, `feed-post`, `calendar-month`.
- Those components stack on narrow screens and switch to rows or a month grid on wide screens. Icon and text actions are at least 44px, and type steps down on small screens.

### Fixes
- `carousel` and `use-mobile` no longer call setState inside an effect, which `eslint-config-next` reports as `react-hooks/set-state-in-effect`.
- `button` gains `touch` and `icon-touch` sizes (44px). `badge` gains a `live` variant for on-sale state.

The `v0.1.0` tag is unchanged.

## 0.1.0

- Initial Base UI registry: neutral/blue theme, status badges, and the shadcn component set.
