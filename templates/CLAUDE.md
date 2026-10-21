@AGENTS.md

# UI work in this project

This project uses a shared design system. Its components live in `components/ui` and its tokens are in the global CSS.

- Build all UI from `components/ui`. Read the relevant component file before using it so you use real variants and props.
- Follow every rule in AGENTS.md (imported above).
- If the design needs something the system doesn't have, stop and tell me. Don't create a one-off component or edit files in `components/ui`. Those changes belong in the design-system repo.

## Before you say UI work is done
Run:

```bash
node scripts/check-design-system.mjs
```

Fix every violation it reports, then run it again until it passes.
