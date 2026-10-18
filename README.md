# Md. Nazmul Hasan | Marketing Portfolio

Complete original static website, exported from the published version 31 on 18 October 2026.
Source commit: `f766ab1c6b6d18647c5dedc59cf1a6ff888c65ee`.

## Project contents

`dist/` is both the editable source and the deployment directory. This website was authored directly in HTML, CSS and JavaScript; there is no missing framework source or compilation step. All existing pages, styles, scripts, JSON catalogues, images and downloadable assets are included unchanged. SOURCE-MANIFEST.json records SHA-256 checksums for every original file. The original design, system font stacks, animations, navigation and responsive rules are preserved.

No npm packages, package installation, API keys, server runtime or build dependencies are required. Historical editing scripts and hosting-provider credentials are not required to operate this site and are excluded.

## GitHub upload

Repository: https://github.com/nhrasel/nazmulhasan-portfolio

Extract this ZIP first. Upload its contents (including the whole `dist` folder) into the repository root. Do not upload only the ZIP, and do not nest the entire project in an extra folder. Preserve any existing repository work; review conflicts before replacing files. Commit the upload to `main` (or choose the existing production branch).

## Cloudflare Pages configuration

Use Workers & Pages > Create application > Pages > Connect to Git / Import an existing Git repository. Authorize GitHub access for the repository above, select it, and configure:

| Setting | Value |
| --- | --- |
| Framework preset | None |
| Production branch | main (or your actual production branch) |
| Root directory | repository root / leave blank |
| Build command | exit 0 |
| Build output directory | dist |
| Environment variables | none required |

Save and deploy. Use Git integration from the beginning to enable automatic deployment on production-branch commits and preview deployments for other branches. Uploading a ZIP directly to Cloudflare is not a replacement for Git integration.

Cloudflare Pages serves the HTML pages and supports their extensionless URLs (for example `/speaking`, `/work`, and `/events`). Existing `.html` links remain usable. No SPA rewrite or catch-all redirect is needed for this multi-page site. No Wrangler configuration is required for dashboard-based Git integration; the settings above are the build configuration.

Official guides:
- https://developers.cloudflare.com/pages/get-started/git-integration/
- https://developers.cloudflare.com/pages/configuration/build-configuration/

## Editing and local preview

Edit the files inside `dist/` and commit them to GitHub. CSS and JavaScript files are loaded directly; JSON files hold product and video catalogues. Keep relative paths and filename capitalization unchanged.

If Python is installed, run `python -m http.server 8080 --directory dist` from the repository root, then visit http://localhost:8080. Use an HTTP server rather than opening files directly, because catalogues load through fetch(). Python is only an optional local preview tool, not a production dependency.

## External services retained

Existing YouTube embeds, social-media links and other outbound links remain external. They are preserved as in the original site and are not bundled video copies. The contact form still submits to FormSubmit at nhrasel@gmail.com; mailbox verification/activation and a test on the new domain may be necessary. No email was sent during export. Fonts use the site's existing system stacks, without a new hosted-font dependency.

## Verification and migration status

Every original static file was copied byte-for-byte and checked against the source hash. Local HTML/CSS file references were checked. The existing site remains live and unchanged. This export does not push to GitHub, connect Cloudflare, transfer a domain, or delete the previous hosting. After the first Cloudflare deployment, check navigation, galleries, mobile layouts, videos and contact submission on the new URL before switching a custom domain.
