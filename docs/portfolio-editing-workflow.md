# Portfolio editing and approval workflow

This documentation-only test validates branch, pull request, and Cloudflare Pages preview handling. It does not change any files in dist/ or any deployment configuration.

## Source of truth

Use nhrasel/nazmulhasan-portfolio as the single source of truth. Start each edit from the latest main branch. The editable static website and deployed assets live in dist/.

## Review and publish

1. Prepare requested edits on a separate branch; preserve unrelated content, design, and assets.
2. Validate relevant pages, links, assets, and responsive behavior.
3. Open a pull request targeting main and share the diff and a Cloudflare Pages preview URL when available.
4. Wait for the owner's explicit publishing approval before merging into main. Do not enable auto-merge.
5. After approval, merge the reviewed changes and verify the existing Cloudflare production deployment.

Image replacements, content updates, and design changes use this same branch and pull request process. Manual ZIP downloads and GitHub Desktop are not required.

## Test scope and cleanup

This test adds only this file outside dist/. Keep the test pull request unmerged until explicitly approved. To discard the test, close the pull request and delete its test branch; no production rollback is required.
