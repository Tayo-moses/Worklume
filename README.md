# Worklume

Marketing website for an agency client-work management product. The 13-page static website preserves the existing responsive design.

## Cloudflare Pages deployment

Connect this GitHub repository to Cloudflare Pages using these settings:

- Framework preset: None
- Build command: leave empty
- Build output directory: `dist`
- Production branch: the repository default branch

The site requires no package installation, build step, environment variables, or database. Cloudflare Pages serves clean URLs for the HTML pages automatically. `wrangler.toml` also supports direct deployment with `npx wrangler pages deploy dist --project-name worklume` after authenticating to Cloudflare.

## Scope

This is the marketing website only. Login and form submissions display preview notices and do not send data. Pricing is proposed. The site does not include a SaaS backend.

Third-party license notices are preserved in `THIRD_PARTY_NOTICES.txt`. The `.openai/hosting.json` file records the original Sites deployment; Cloudflare serves only `dist`.
