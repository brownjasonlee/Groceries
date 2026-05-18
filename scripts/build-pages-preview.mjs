import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import { join, relative, resolve } from "node:path";

const siteDir = resolve(process.env.SITE_DIR || "../site");
const previewSourceDir = resolve(process.env.PREVIEW_SOURCE_DIR || ".");
const branchName = process.env.PREVIEW_BRANCH || "preview";
const sha = process.env.PREVIEW_SHA || "";
const runUrl = process.env.PREVIEW_RUN_URL || "";

const branchSlug = slugify(branchName);
const testingDir = join(siteDir, "testing");
const branchPreviewDir = join(testingDir, branchSlug);
const latestDir = join(testingDir, "latest");

await mkdir(testingDir, { recursive: true });
await rm(branchPreviewDir, { recursive: true, force: true });
await rm(latestDir, { recursive: true, force: true });

await cp(previewSourceDir, branchPreviewDir, {
  recursive: true,
  filter: (source) => {
    const rel = relative(previewSourceDir, source);
    if (!rel) return true;
    const parts = rel.split(/[\\/]/);
    return !parts.includes(".git") && !parts.includes("node_modules");
  }
});

await mkdir(latestDir, { recursive: true });
await writeFile(
  join(latestDir, "index.html"),
  redirectPage(`../${branchSlug}/`, "Latest preview")
);

await writeFile(
  join(testingDir, "index.html"),
  testingIndex({
    branchName,
    branchSlug,
    sha,
    runUrl
  })
);

console.log(`Preview branch copied to ${branchPreviewDir}`);
console.log(`Testing index created at ${join(testingDir, "index.html")}`);

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9._-]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80) || "preview";
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function redirectPage(target, title) {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="refresh" content="0; url=${escapeHtml(target)}">
    <title>${escapeHtml(title)}</title>
  </head>
  <body>
    <p>Opening <a href="${escapeHtml(target)}">${escapeHtml(title)}</a>.</p>
  </body>
</html>
`;
}

function testingIndex({ branchName, branchSlug, sha, runUrl }) {
  const shortSha = sha ? sha.slice(0, 7) : "unknown";
  const runLink = runUrl
    ? `<a href="${escapeHtml(runUrl)}">workflow run</a>`
    : "workflow run unavailable";

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Groceries Testing</title>
    <style>
      :root {
        color-scheme: light;
        --bg: #eef2f4;
        --panel: #ffffff;
        --ink: #172026;
        --muted: #66747d;
        --line: #d9e0e4;
        --accent: #30434f;
        --green: #1c6b52;
      }

      * {
        box-sizing: border-box;
      }

      body {
        margin: 0;
        min-height: 100vh;
        background: var(--bg);
        color: var(--ink);
        font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      }

      main {
        width: min(920px, 100%);
        margin: 0 auto;
        padding: 32px 20px;
      }

      .eyebrow {
        margin: 0 0 6px;
        color: var(--muted);
        font-size: 0.78rem;
        font-weight: 800;
        letter-spacing: 0;
        text-transform: uppercase;
      }

      h1 {
        margin: 0 0 20px;
        font-size: clamp(2.2rem, 8vw, 4.2rem);
        line-height: 0.95;
      }

      .grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 14px;
      }

      .card {
        border: 1px solid var(--line);
        border-radius: 8px;
        padding: 18px;
        background: var(--panel);
        box-shadow: 0 18px 55px rgba(20, 35, 45, 0.1);
      }

      h2 {
        margin: 0 0 8px;
        font-size: 1.05rem;
      }

      p {
        color: var(--muted);
        line-height: 1.4;
      }

      a.button {
        display: inline-flex;
        align-items: center;
        min-height: 40px;
        border-radius: 8px;
        padding: 0 14px;
        background: var(--accent);
        color: #fff;
        font-weight: 800;
        text-decoration: none;
      }

      code {
        border: 1px solid var(--line);
        border-radius: 6px;
        padding: 2px 6px;
        background: #f8fafb;
      }

      .meta {
        margin-top: 20px;
        border-top: 1px solid var(--line);
        padding-top: 14px;
        color: var(--muted);
        font-size: 0.9rem;
      }

      .meta a {
        color: var(--green);
        font-weight: 750;
      }

      @media (max-width: 720px) {
        .grid {
          grid-template-columns: 1fr;
        }
      }
    </style>
  </head>
  <body>
    <main>
      <p class="eyebrow">Groceries preview lane</p>
      <h1>Testing Pages</h1>

      <section class="grid">
        <article class="card">
          <h2>Latest preview</h2>
          <p>Shortcut to the newest deployed experiment branch.</p>
          <a class="button" href="latest/">Open latest</a>
        </article>
        <article class="card">
          <h2>${escapeHtml(branchName)}</h2>
          <p>Branch preview at commit <code>${escapeHtml(shortSha)}</code>.</p>
          <a class="button" href="${escapeHtml(branchSlug)}/">Open branch</a>
        </article>
      </section>

      <p class="meta">Promotion path: test here, open or update the PR, then merge to <code>main</code> to publish production. Source: ${runLink}.</p>
    </main>
  </body>
</html>
`;
}
