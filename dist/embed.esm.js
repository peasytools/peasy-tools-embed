/* peasy-tools-embed v1.0.0 | MIT | https://widget.peasytools.com */

// <define:INJECTED_CONFIG>
var define_INJECTED_CONFIG_default = { name: "PeasyTools", slug: "tools", domain: "peasytools.com", apiBase: "https://peasytools.com/api/v1", embedBase: "https://peasytools.com/embed", accent: "#3B82F6", attribute: "data-peasy-tools", siteWidgets: ["ratio"] };

// src/themes.ts
function getThemeCSS(accent) {
  return `
:host {
  display: block;
  font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
  --site-accent: ${accent};
}

/* \u2500\u2500\u2500 Light theme \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.peasy-widget[data-theme="light"] {
  --bg: #ffffff;
  --text: #1a1a1a;
  --border: #e5e7eb;
  --accent: var(--site-accent);
  --muted: #6b7280;
  --ribbon: #f9fafb;
  --badge-bg: #f3f4f6;
  --badge-text: #374151;
  --link: var(--site-accent);
  --copy-bg: #f3f4f6;
  --copy-hover: #e5e7eb;
  --input-bg: #ffffff;
  --input-border: #d1d5db;
  --input-focus: var(--site-accent);
  --shadow: 0 1px 3px rgba(0,0,0,0.08);
}

/* \u2500\u2500\u2500 Dark theme \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.peasy-widget[data-theme="dark"] {
  --bg: #18181b;
  --text: #f4f4f5;
  --border: #3f3f46;
  --accent: var(--site-accent);
  --muted: #a1a1aa;
  --ribbon: #111112;
  --badge-bg: #3f3f46;
  --badge-text: #d4d4d8;
  --link: #93c5fd;
  --copy-bg: #3f3f46;
  --copy-hover: #52525b;
  --input-bg: #111112;
  --input-border: #52525b;
  --input-focus: var(--site-accent);
  --shadow: 0 1px 3px rgba(0,0,0,0.4);
}

/* \u2500\u2500\u2500 Sepia theme \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.peasy-widget[data-theme="sepia"] {
  --bg: #f5f0e8;
  --text: #3d3529;
  --border: #d4c5a9;
  --accent: var(--site-accent);
  --muted: #8b7e6a;
  --ribbon: #ede8df;
  --badge-bg: #e8e0d0;
  --badge-text: #5c4f3d;
  --link: #7c5c3b;
  --copy-bg: #e8e0d0;
  --copy-hover: #ddd4c0;
  --input-bg: #f5f0e8;
  --input-border: #c4b49a;
  --input-focus: var(--site-accent);
  --shadow: 0 1px 3px rgba(61,53,41,0.12);
}

/* \u2500\u2500\u2500 Auto theme (follows OS preference) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
@media (prefers-color-scheme: dark) {
  .peasy-widget[data-theme="auto"] {
    --bg: #18181b;
    --text: #f4f4f5;
    --border: #3f3f46;
    --accent: var(--site-accent);
    --muted: #a1a1aa;
    --ribbon: #111112;
    --badge-bg: #3f3f46;
    --badge-text: #d4d4d8;
    --link: #93c5fd;
    --copy-bg: #3f3f46;
    --copy-hover: #52525b;
    --input-bg: #111112;
    --input-border: #52525b;
    --input-focus: var(--site-accent);
    --shadow: 0 1px 3px rgba(0,0,0,0.4);
  }
}

@media (prefers-color-scheme: light) {
  .peasy-widget[data-theme="auto"] {
    --bg: #ffffff;
    --text: #1a1a1a;
    --border: #e5e7eb;
    --accent: var(--site-accent);
    --muted: #6b7280;
    --ribbon: #f9fafb;
    --badge-bg: #f3f4f6;
    --badge-text: #374151;
    --link: var(--site-accent);
    --copy-bg: #f3f4f6;
    --copy-hover: #e5e7eb;
    --input-bg: #ffffff;
    --input-border: #d1d5db;
    --input-focus: var(--site-accent);
    --shadow: 0 1px 3px rgba(0,0,0,0.08);
  }
}

/* \u2500\u2500\u2500 Base widget \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.peasy-widget {
  box-sizing: border-box;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid var(--border);
  border-left: 3px solid var(--accent);
  background: var(--bg);
  color: var(--text);
  font-size: 14px;
  line-height: 1.6;
  transition: border-color 0.2s;
  font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
}

.peasy-widget *, .peasy-widget *::before, .peasy-widget *::after {
  box-sizing: border-box;
}

/* \u2500\u2500\u2500 Size variants \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.peasy-widget[data-size="compact"] {
  max-width: 280px;
  font-size: 13px;
}

.peasy-widget[data-size="default"] {
  max-width: 480px;
  font-size: 14px;
}

.peasy-widget[data-size="large"] {
  max-width: 720px;
  font-size: 14px;
}

/* \u2500\u2500\u2500 Loading skeleton \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.peasy-loading {
  padding: 20px 16px;
  text-align: center;
  color: var(--muted);
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.peasy-spinner {
  width: 16px;
  height: 16px;
  border: 2px solid var(--border);
  border-top-color: var(--accent);
  border-radius: 50%;
  animation: peasy-spin 0.7s linear infinite;
  display: inline-block;
  flex-shrink: 0;
}

@keyframes peasy-spin {
  to { transform: rotate(360deg); }
}

/* \u2500\u2500\u2500 Error state \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.peasy-error {
  padding: 16px;
  color: var(--muted);
  font-size: 13px;
  text-align: center;
}

.peasy-error a {
  color: var(--link);
  text-decoration: none;
}

.peasy-error a:hover {
  text-decoration: underline;
}

/* \u2500\u2500\u2500 Powered by footer \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.peasy-powered {
  display: block;
  text-align: center;
  padding: 8px 16px;
  font-size: 11px;
  color: var(--muted);
  border-top: 1px solid var(--border);
}

.peasy-powered a {
  color: var(--link);
  text-decoration: none;
  font-weight: 500;
}

.peasy-powered a:hover {
  text-decoration: underline;
}

/* \u2500\u2500\u2500 Button \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.peasy-btn {
  background: var(--accent);
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  font-family: inherit;
  transition: opacity 0.15s;
  white-space: nowrap;
  display: inline-flex;
  align-items: center;
  gap: 5px;
}

.peasy-btn:hover {
  opacity: 0.88;
}

.peasy-btn svg {
  width: 14px;
  height: 14px;
}

/* \u2500\u2500\u2500 Copy button \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.peasy-copy-btn {
  background: var(--copy-bg);
  color: var(--text);
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 12px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  transition: background 0.15s;
  font-family: inherit;
}

.peasy-copy-btn:hover {
  background: var(--copy-hover);
}

.peasy-copy-btn svg {
  width: 13px;
  height: 13px;
}

/* \u2500\u2500\u2500 Badge (inline) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.peasy-badge {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 11px;
  font-weight: 500;
  padding: 2px 8px;
  border-radius: 4px;
  background: var(--badge-bg);
  color: var(--badge-text);
  text-transform: uppercase;
  letter-spacing: 0.04em;
  border-left: 3px solid var(--accent);
  font-family: inherit;
}

/* \u2500\u2500\u2500 Content area \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.peasy-body {
  padding: 14px 16px 12px;
}

.peasy-widget[data-size="compact"] .peasy-body {
  padding: 10px 12px;
}

/* \u2500\u2500\u2500 Title / subtitle \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.peasy-title {
  font-size: 16px;
  font-weight: 700;
  color: var(--text);
  margin: 0 0 4px 0;
  line-height: 1.3;
}

.peasy-subtitle {
  font-size: 13px;
  color: var(--muted);
  margin: 0 0 10px 0;
}

.peasy-summary {
  font-size: 14px;
  color: var(--text);
  margin: 0;
  line-height: 1.65;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* \u2500\u2500\u2500 Actions row \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.peasy-actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 10px 16px;
  border-top: 1px solid var(--border);
  background: var(--bg);
}

.peasy-widget[data-size="compact"] .peasy-actions {
  padding: 8px 12px;
}

/* \u2500\u2500\u2500 Link \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.peasy-link {
  font-size: 12px;
  font-weight: 500;
  color: var(--link);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  transition: opacity 0.15s;
}

.peasy-link:hover {
  opacity: 0.8;
  text-decoration: underline;
}

.peasy-link svg {
  width: 12px;
  height: 12px;
  flex-shrink: 0;
}

/* \u2500\u2500\u2500 Search box \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.peasy-search-wrap {
  padding: 14px 16px;
}

.peasy-search-form {
  display: flex;
  gap: 8px;
}

.peasy-search-input {
  flex: 1;
  padding: 8px 12px;
  border: 1px solid var(--input-border);
  border-radius: 6px;
  background: var(--input-bg);
  color: var(--text);
  font-size: 14px;
  font-family: inherit;
  outline: none;
  transition: border-color 0.15s;
}

.peasy-search-input:focus {
  border-color: var(--input-focus);
  box-shadow: 0 0 0 2px color-mix(in srgb, var(--input-focus) 20%, transparent);
}

.peasy-search-input::placeholder {
  color: var(--muted);
}

/* \u2500\u2500\u2500 Meta row (badges, stats) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.peasy-meta {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 10px;
}

.peasy-stat {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  color: var(--muted);
  background: var(--badge-bg);
  border-radius: 4px;
  padding: 3px 8px;
}

/* \u2500\u2500\u2500 Fade-in animation \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
@keyframes peasy-fade-in {
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
}

.peasy-widget {
  animation: peasy-fade-in 0.2s ease-out;
}

/* \u2500\u2500\u2500 Reduced motion \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
@media (prefers-reduced-motion: reduce) {
  .peasy-widget {
    animation: none;
  }
  .peasy-spinner {
    animation: none;
    border-top-color: var(--accent);
    opacity: 0.6;
  }
}
  `;
}

// src/shadow.ts
function createShadow(el, config) {
  const shadow = el.attachShadow({ mode: "open" });
  const style = document.createElement("style");
  style.textContent = getThemeCSS(config.accent);
  shadow.appendChild(style);
  return shadow;
}
function createWidgetRoot(shadow, el, extraClass) {
  const opts = parseWidgetOptions(el);
  const div = document.createElement("div");
  div.className = ["peasy-widget", extraClass].filter(Boolean).join(" ");
  div.setAttribute("data-theme", opts.theme);
  div.setAttribute("data-size", opts.size);
  shadow.appendChild(div);
  return div;
}
function parseWidgetOptions(el) {
  const dataset = el.dataset;
  const theme = dataset.theme || "light";
  const size = dataset.size || "default";
  const lang = dataset.lang || "en";
  const track = dataset.track === "true";
  return { theme, size, lang, track };
}
function renderLoading(container) {
  container.innerHTML = `
    <div class="peasy-loading">
      <span class="peasy-spinner"></span>
      Loading\u2026
    </div>
  `;
}
function renderError(container, message, config) {
  container.innerHTML = `
    <div class="peasy-error">
      <p>${esc(message)}</p>
      <a href="https://${config.domain}" target="_blank" rel="noopener">
        Visit ${esc(config.name)} ${externalLinkIcon}
      </a>
    </div>
  `;
}
function poweredByHTML(config) {
  return `<span class="peasy-powered">Powered by <a href="https://${config.domain}" target="_blank" rel="noopener">${esc(config.name)}</a></span>`;
}
function bindCopyButton(btn, text) {
  btn.onclick = () => {
    navigator.clipboard?.writeText(text).then(() => {
      btn.innerHTML = `${checkIcon} Copied!`;
      setTimeout(() => {
        btn.innerHTML = `${copyIcon} Copy`;
      }, 2e3);
    }).catch(() => {
      legacyCopy(text);
      btn.innerHTML = `${checkIcon} Copied!`;
      setTimeout(() => {
        btn.innerHTML = `${copyIcon} Copy`;
      }, 2e3);
    });
  };
}
function legacyCopy(text) {
  const ta = document.createElement("textarea");
  ta.value = text;
  ta.style.cssText = "position:fixed;top:0;left:0;opacity:0;pointer-events:none";
  document.body.appendChild(ta);
  try {
    ta.select();
    document.execCommand("copy");
  } finally {
    document.body.removeChild(ta);
  }
}
function esc(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
var externalLinkIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="12" height="12"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`;
var copyIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="13" height="13"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`;
var checkIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" width="13" height="13"><polyline points="20 6 9 17 4 12"/></svg>`;
var fileIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="14" height="14"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>`;
var searchIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="14" height="14"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`;
var bookIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="14" height="14"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>`;
var toolIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="14" height="14"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`;

// src/lazy.ts
var sharedObserver = null;
var callbacks = /* @__PURE__ */ new Map();
var observed = /* @__PURE__ */ new WeakSet();
function getObserver() {
  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          sharedObserver.unobserve(entry.target);
          const cb = callbacks.get(entry.target);
          callbacks.delete(entry.target);
          cb?.();
        }
      });
    }, { rootMargin: "200px" });
  }
  return sharedObserver;
}
function lazyInit(el, callback) {
  if (observed.has(el)) return;
  observed.add(el);
  if (!("IntersectionObserver" in window)) {
    callback();
    return;
  }
  callbacks.set(el, callback);
  getObserver().observe(el);
}

// src/api.ts
var MEM_CACHE = /* @__PURE__ */ new Map();
var MEM_TTL = 5 * 60 * 1e3;
var LS_TTL = 24 * 60 * 60 * 1e3;
var MAX_CONCURRENT = 4;
var activeRequests = 0;
var queue = [];
function tryLS(key) {
  try {
    const raw = localStorage.getItem(`peasy:${key}`);
    if (!raw) return null;
    const { data, ts } = JSON.parse(raw);
    if (Date.now() - ts > LS_TTL) {
      localStorage.removeItem(`peasy:${key}`);
      return null;
    }
    return data;
  } catch {
    return null;
  }
}
function setLS(key, data) {
  try {
    localStorage.setItem(`peasy:${key}`, JSON.stringify({ data, ts: Date.now() }));
  } catch {
  }
}
function processQueue() {
  while (activeRequests < MAX_CONCURRENT && queue.length > 0) {
    const next = queue.shift();
    if (next) next();
  }
}
async function fetchAPI(config, path, opts) {
  const url = `${config.apiBase}${path}`;
  const lang = opts?.lang || "en";
  const cacheKey = `${url}:${lang}`;
  const memCached = MEM_CACHE.get(cacheKey);
  if (memCached && Date.now() - memCached.ts < MEM_TTL) return memCached.data;
  if (opts?.useLS) {
    const lsCached = tryLS(cacheKey);
    if (lsCached) {
      MEM_CACHE.set(cacheKey, { data: lsCached, ts: Date.now() });
      return lsCached;
    }
  }
  if (activeRequests >= MAX_CONCURRENT) {
    await new Promise((resolve) => queue.push(resolve));
  }
  activeRequests++;
  try {
    const headers = { Accept: "application/json" };
    if (lang !== "en") headers["Accept-Language"] = lang;
    const res = await fetch(url, { headers });
    if (res.status === 429) {
      const retryAfter = Math.min(parseInt(res.headers.get("Retry-After") || "10", 10), 10);
      await new Promise((r) => setTimeout(r, retryAfter * 1e3));
      const retry = await fetch(url, { headers });
      if (!retry.ok) return null;
      const data2 = await retry.json();
      MEM_CACHE.set(cacheKey, { data: data2, ts: Date.now() });
      if (opts?.useLS) setLS(cacheKey, data2);
      return data2;
    }
    if (!res.ok) return null;
    const data = await res.json();
    MEM_CACHE.set(cacheKey, { data, ts: Date.now() });
    if (opts?.useLS) setLS(cacheKey, data);
    return data;
  } catch {
    return null;
  } finally {
    activeRequests--;
    processQueue();
  }
}

// src/widgets/format-info.ts
function init(el, config, opts) {
  const slug = el.dataset.slug;
  if (!slug) {
    return;
  }
  const shadow = createShadow(el, config);
  const root = createWidgetRoot(shadow, el, "peasy-format-info");
  renderLoading(root);
  fetchAPI(config, `/api/v1/formats/${slug}/`, { useLS: true, lang: opts.lang }).then((data) => {
    if (!data) {
      renderError(root, "Could not load format information.", config);
      return;
    }
    const advantageItems = (data.advantages || []).map((a) => `<li>${esc(a)}</li>`).join("");
    root.innerHTML = `
        <style>
          .peasy-format-info-header {
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 14px 16px 10px;
            border-bottom: 1px solid var(--border);
            background: var(--ribbon);
          }
          .peasy-format-info-header svg { color: var(--accent); flex-shrink: 0; }
          .peasy-format-info-props {
            display: grid;
            grid-template-columns: auto 1fr;
            gap: 0;
          }
          .peasy-format-info-prop-label {
            padding: 7px 16px 7px 16px;
            font-size: 12px;
            color: var(--muted);
            font-weight: 500;
            border-bottom: 1px solid var(--border);
            white-space: nowrap;
          }
          .peasy-format-info-prop-value {
            padding: 7px 16px 7px 8px;
            font-size: 13px;
            color: var(--text);
            border-bottom: 1px solid var(--border);
            word-break: break-all;
          }
          .peasy-format-info-desc {
            padding: 10px 16px;
            font-size: 13px;
            color: var(--text);
            line-height: 1.6;
            border-bottom: 1px solid var(--border);
          }
          .peasy-format-info-advantages {
            padding: 10px 16px;
            border-bottom: 1px solid var(--border);
          }
          .peasy-format-info-advantages-title {
            font-size: 11px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.06em;
            color: var(--muted);
            margin: 0 0 6px 0;
          }
          .peasy-format-info-advantages ul {
            margin: 0;
            padding-left: 18px;
          }
          .peasy-format-info-advantages li {
            font-size: 13px;
            color: var(--text);
            line-height: 1.5;
            margin-bottom: 2px;
          }
          .peasy-bool-yes { color: #16a34a; font-weight: 500; }
          .peasy-bool-no { color: var(--muted); }
        </style>
        <div class="peasy-format-info-header">
          ${fileIcon}
          <span class="peasy-title" style="margin:0;">${esc(data.full_name)}</span>
          <span class="peasy-badge" style="margin-left:auto;">${esc(data.extension.toUpperCase())}</span>
        </div>
        <div class="peasy-format-info-props">
          <span class="peasy-format-info-prop-label">Extension</span>
          <span class="peasy-format-info-prop-value">${esc(data.extension)}</span>
          <span class="peasy-format-info-prop-label">MIME Type</span>
          <span class="peasy-format-info-prop-value">${esc(data.mime_type)}</span>
          <span class="peasy-format-info-prop-label">Category</span>
          <span class="peasy-format-info-prop-value">${esc(data.category)}</span>
          <span class="peasy-format-info-prop-label">Binary</span>
          <span class="peasy-format-info-prop-value">${data.is_binary ? '<span class="peasy-bool-yes">Yes</span>' : '<span class="peasy-bool-no">No</span>'}</span>
          <span class="peasy-format-info-prop-label">Lossy</span>
          <span class="peasy-format-info-prop-value">${data.is_lossy ? '<span class="peasy-bool-yes">Yes</span>' : '<span class="peasy-bool-no">No</span>'}</span>
        </div>
        ${data.description ? `<div class="peasy-format-info-desc">${esc(data.description)}</div>` : ""}
        ${advantageItems ? `
          <div class="peasy-format-info-advantages">
            <p class="peasy-format-info-advantages-title">Advantages</p>
            <ul>${advantageItems}</ul>
          </div>
        ` : ""}
        <div class="peasy-actions">
          <a class="peasy-link" href="https://${config.domain}/formats/${slug}/" target="_blank" rel="noopener">
            ${esc(data.full_name)} format guide on ${esc(config.name)} ${externalLinkIcon}
          </a>
        </div>
        ${poweredByHTML(config)}
      `;
  });
}

// src/rich-snippets.ts
function injectHowTo(data, domain, siteName) {
  if (document.querySelector("script[data-peasy-snippet]")) return;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: `How to use ${data.toolName}`,
    description: data.description,
    tool: {
      "@type": "HowToTool",
      name: data.toolName
    },
    url: `https://${domain}/${data.category}/${data.slug}/`,
    provider: {
      "@type": "Organization",
      name: siteName,
      url: `https://${domain}`
    }
  };
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.setAttribute("data-peasy-snippet", "true");
  script.textContent = JSON.stringify(jsonLd);
  document.head.appendChild(script);
}

// src/widgets/tool-card.ts
function init2(el, config, opts) {
  const slug = el.dataset.slug;
  if (!slug) {
    return;
  }
  const shadow = createShadow(el, config);
  const root = createWidgetRoot(shadow, el, "peasy-tool-card");
  renderLoading(root);
  fetchAPI(config, `/api/v1/tools/${slug}/`, { lang: opts.lang }).then((data) => {
    if (!data) {
      renderError(root, "Could not load tool information.", config);
      return;
    }
    const toolUrl = `https://${config.domain}/${data.category.slug}/${data.slug}/`;
    if (el.dataset.noSnippet !== "true") {
      injectHowTo(
        {
          toolName: data.name,
          description: data.description || data.tagline,
          category: data.category.slug,
          slug: data.slug
        },
        config.domain,
        config.name
      );
    }
    root.innerHTML = `
        <style>
          .peasy-tool-card-header {
            display: flex;
            align-items: flex-start;
            gap: 12px;
            padding: 14px 16px 10px;
            border-bottom: 1px solid var(--border);
            background: var(--ribbon);
          }
          .peasy-tool-card-icon {
            width: 40px;
            height: 40px;
            border-radius: 8px;
            background: color-mix(in srgb, var(--accent) 12%, transparent);
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            font-size: 20px;
            color: var(--accent);
          }
          .peasy-tool-card-meta { flex: 1; min-width: 0; }
          .peasy-tool-card-desc {
            padding: 10px 16px 12px;
            font-size: 13px;
            color: var(--text);
            line-height: 1.6;
            border-bottom: 1px solid var(--border);
          }
        </style>
        <div class="peasy-tool-card-header">
          <div class="peasy-tool-card-icon">
            ${toolIcon}
          </div>
          <div class="peasy-tool-card-meta">
            <p class="peasy-title" style="margin:0 0 4px 0;">${esc(data.name)}</p>
            <div class="peasy-meta" style="margin-bottom:0;">
              <span class="peasy-badge">${esc(data.category.name)}</span>
            </div>
          </div>
        </div>
        ${data.tagline ? `<p class="peasy-subtitle" style="padding:8px 16px 0;margin:0;">${esc(data.tagline)}</p>` : ""}
        ${data.description ? `<div class="peasy-tool-card-desc">${esc(data.description)}</div>` : ""}
        <div class="peasy-actions">
          <a class="peasy-btn" href="${toolUrl}" target="_blank" rel="noopener">
            Try ${esc(data.name)} on ${esc(config.name)} ${externalLinkIcon}
          </a>
        </div>
        ${poweredByHTML(config)}
      `;
  });
}

// src/widgets/conversion-card.ts
var QUALITY_MAP = {
  lossless: { label: "Lossless \u2713", color: "#16a34a" },
  lossy: { label: "Lossy", color: "#ea580c" },
  depends: { label: "Depends on content", color: "#ca8a04" }
};
var DIFFICULTY_MAP = {
  easy: { label: "Easy", color: "#16a34a", bg: "#dcfce7" },
  medium: { label: "Medium", color: "#ca8a04", bg: "#fef9c3" },
  hard: { label: "Hard", color: "#dc2626", bg: "#fee2e2" }
};
function init3(el, config, opts) {
  const slug = el.dataset.slug;
  if (!slug) {
    return;
  }
  const shadow = createShadow(el, config);
  const root = createWidgetRoot(shadow, el, "peasy-conversion-card");
  renderLoading(root);
  fetchAPI(config, `/api/v1/conversions/${slug}/`, { lang: opts.lang }).then((data) => {
    if (!data) {
      renderError(root, "Could not load conversion information.", config);
      return;
    }
    const quality = QUALITY_MAP[data.quality_impact] ?? QUALITY_MAP["depends"];
    const diff = DIFFICULTY_MAP[data.difficulty] ?? DIFFICULTY_MAP["medium"];
    root.innerHTML = `
        <style>
          .peasy-conv-visual {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
            padding: 16px;
            background: var(--ribbon);
            border-bottom: 1px solid var(--border);
          }
          .peasy-conv-format {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 4px;
          }
          .peasy-conv-format-ext {
            font-size: 18px;
            font-weight: 700;
            color: var(--accent);
          }
          .peasy-conv-format-name {
            font-size: 11px;
            color: var(--muted);
            text-align: center;
          }
          .peasy-conv-arrow {
            font-size: 20px;
            color: var(--muted);
            flex-shrink: 0;
          }
          .peasy-conv-props {
            padding: 10px 16px;
            display: flex;
            flex-direction: column;
            gap: 8px;
            border-bottom: 1px solid var(--border);
          }
          .peasy-conv-prop-row {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 8px;
            font-size: 13px;
          }
          .peasy-conv-prop-label { color: var(--muted); }
          .peasy-conv-desc {
            padding: 8px 16px 12px;
            font-size: 13px;
            color: var(--text);
            line-height: 1.6;
            border-bottom: 1px solid var(--border);
          }
          .peasy-diff-badge {
            display: inline-block;
            padding: 2px 8px;
            border-radius: 4px;
            font-size: 12px;
            font-weight: 500;
          }
        </style>
        <div class="peasy-conv-visual">
          <div class="peasy-conv-format">
            ${fileIcon}
            <span class="peasy-conv-format-ext">${esc(data.source_format.extension.toUpperCase())}</span>
            <span class="peasy-conv-format-name">${esc(data.source_format.full_name)}</span>
          </div>
          <div class="peasy-conv-arrow">\u2192</div>
          <div class="peasy-conv-format">
            ${fileIcon}
            <span class="peasy-conv-format-ext">${esc(data.target_format.extension.toUpperCase())}</span>
            <span class="peasy-conv-format-name">${esc(data.target_format.full_name)}</span>
          </div>
        </div>
        <div class="peasy-conv-props">
          <div class="peasy-conv-prop-row">
            <span class="peasy-conv-prop-label">Quality impact</span>
            <span style="font-weight:500;color:${quality.color};">${quality.label}</span>
          </div>
          <div class="peasy-conv-prop-row">
            <span class="peasy-conv-prop-label">Difficulty</span>
            <span class="peasy-diff-badge" style="background:${diff.bg};color:${diff.color};">${diff.label}</span>
          </div>
          ${data.recommended_tool ? `
            <div class="peasy-conv-prop-row">
              <span class="peasy-conv-prop-label">Recommended tool</span>
              <a class="peasy-link" href="https://${config.domain}/search/?q=${encodeURIComponent(data.recommended_tool.name)}" target="_blank" rel="noopener">${esc(data.recommended_tool.name)}</a>
            </div>
          ` : ""}
        </div>
        ${data.description ? `<div class="peasy-conv-desc">${esc(data.description)}</div>` : ""}
        <div class="peasy-actions">
          <a class="peasy-link" href="https://${config.domain}/conversions/${slug}/" target="_blank" rel="noopener">
            ${esc(data.source_format.extension.toUpperCase())} to ${esc(data.target_format.extension.toUpperCase())} conversion guide on ${esc(config.name)} ${externalLinkIcon}
          </a>
        </div>
        ${poweredByHTML(config)}
      `;
  });
}

// src/widgets/format-compare.ts
function init4(el, config, opts) {
  const dataset = el.dataset;
  const slugA = dataset.a;
  const slugB = dataset.b;
  if (!slugA || !slugB) {
    return;
  }
  const shadow = createShadow(el, config);
  const root = createWidgetRoot(shadow, el, "peasy-format-compare");
  if (!dataset.size) {
    root.setAttribute("data-size", "large");
  }
  renderLoading(root);
  Promise.all([
    fetchAPI(config, `/api/v1/formats/${slugA}/`, { useLS: true, lang: opts.lang }),
    fetchAPI(config, `/api/v1/formats/${slugB}/`, { useLS: true, lang: opts.lang })
  ]).then(([fmtA, fmtB]) => {
    if (!fmtA || !fmtB) {
      renderError(root, "Could not load format comparison data.", config);
      return;
    }
    function lossyCell(val) {
      if (val) return `<span style="color:#ea580c;font-weight:500;">Yes (lossy)</span>`;
      return `<span style="color:#16a34a;font-weight:500;">No (lossless)</span>`;
    }
    function binaryCell(val) {
      return val ? "Yes" : "No";
    }
    root.innerHTML = `
      <style>
        .peasy-compare-header {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          border-bottom: 1px solid var(--border);
          background: var(--ribbon);
        }
        .peasy-compare-header-cell {
          padding: 12px 16px;
          text-align: center;
          font-weight: 600;
          font-size: 15px;
          color: var(--accent);
        }
        .peasy-compare-header-cell:first-child {
          border-right: 1px solid var(--border);
        }
        .peasy-compare-header-sub {
          font-size: 11px;
          font-weight: 400;
          color: var(--muted);
          margin-top: 2px;
        }
        .peasy-compare-table {
          width: 100%;
          border-collapse: collapse;
        }
        .peasy-compare-row-label {
          padding: 8px 16px;
          font-size: 12px;
          color: var(--muted);
          font-weight: 500;
          background: var(--ribbon);
          border-bottom: 1px solid var(--border);
          border-top: 1px solid var(--border);
          text-align: center;
          letter-spacing: 0.03em;
          text-transform: uppercase;
          font-size: 11px;
        }
        .peasy-compare-cell {
          padding: 8px 16px;
          font-size: 13px;
          color: var(--text);
          border-bottom: 1px solid var(--border);
          text-align: center;
          vertical-align: middle;
          word-break: break-word;
        }
        .peasy-compare-cell:first-child {
          border-right: 1px solid var(--border);
        }
        .peasy-compare-desc-row {
          padding: 10px 16px;
          font-size: 13px;
          color: var(--text);
          line-height: 1.55;
          text-align: center;
          border-bottom: 1px solid var(--border);
        }
        .peasy-compare-links {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          padding: 10px 16px;
          border-top: 1px solid var(--border);
        }
      </style>
      <div class="peasy-compare-header">
        <div class="peasy-compare-header-cell">
          ${esc(fmtA.extension.toUpperCase())}
          <div class="peasy-compare-header-sub">${esc(fmtA.full_name)}</div>
        </div>
        <div class="peasy-compare-header-cell">
          ${esc(fmtB.extension.toUpperCase())}
          <div class="peasy-compare-header-sub">${esc(fmtB.full_name)}</div>
        </div>
      </div>
      <table class="peasy-compare-table">
        <tbody>
          <tr><td class="peasy-compare-row-label" colspan="2">Extension</td></tr>
          <tr>
            <td class="peasy-compare-cell">${esc(fmtA.extension)}</td>
            <td class="peasy-compare-cell">${esc(fmtB.extension)}</td>
          </tr>
          <tr><td class="peasy-compare-row-label" colspan="2">MIME Type</td></tr>
          <tr>
            <td class="peasy-compare-cell">${esc(fmtA.mime_type)}</td>
            <td class="peasy-compare-cell">${esc(fmtB.mime_type)}</td>
          </tr>
          <tr><td class="peasy-compare-row-label" colspan="2">Category</td></tr>
          <tr>
            <td class="peasy-compare-cell">${esc(fmtA.category)}</td>
            <td class="peasy-compare-cell">${esc(fmtB.category)}</td>
          </tr>
          <tr><td class="peasy-compare-row-label" colspan="2">Binary</td></tr>
          <tr>
            <td class="peasy-compare-cell">${binaryCell(fmtA.is_binary)}</td>
            <td class="peasy-compare-cell">${binaryCell(fmtB.is_binary)}</td>
          </tr>
          <tr><td class="peasy-compare-row-label" colspan="2">Lossy Compression</td></tr>
          <tr>
            <td class="peasy-compare-cell">${lossyCell(fmtA.is_lossy)}</td>
            <td class="peasy-compare-cell">${lossyCell(fmtB.is_lossy)}</td>
          </tr>
        </tbody>
      </table>
      <div class="peasy-compare-links">
        <a class="peasy-link" href="https://${config.domain}/formats/${slugA}/" target="_blank" rel="noopener">
          ${esc(fmtA.full_name)} format guide ${externalLinkIcon}
        </a>
        <a class="peasy-link" href="https://${config.domain}/formats/${slugB}/" target="_blank" rel="noopener">
          ${esc(fmtB.full_name)} format guide ${externalLinkIcon}
        </a>
      </div>
      ${poweredByHTML(config)}
    `;
  });
}

// src/widgets/glossary-tooltip.ts
function init5(el, config, opts) {
  const dataset = el.dataset;
  const slug = dataset.slug;
  const display = dataset.display || "inline";
  if (!slug) {
    return;
  }
  if (display === "inline") {
    const shadow2 = el.attachShadow({ mode: "open" });
    const style = document.createElement("style");
    style.textContent = `
      :host {
        display: inline;
        font-family: inherit;
        cursor: help;
        position: relative;
      }
      .peasy-glossary-term {
        text-decoration: underline dotted var(--accent, #6366f1);
        text-underline-offset: 3px;
        color: inherit;
      }
      .peasy-glossary-popup {
        display: none;
        position: absolute;
        bottom: calc(100% + 8px);
        left: 0;
        z-index: 9999;
        background: #1a1a1a;
        color: #f3f4f6;
        border-radius: 8px;
        padding: 12px 14px;
        font-size: 13px;
        min-width: 220px;
        max-width: 300px;
        box-shadow: 0 4px 16px rgba(0,0,0,0.24);
        line-height: 1.55;
        pointer-events: none;
        white-space: normal;
        font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
      }
      .peasy-glossary-term:hover + .peasy-glossary-popup,
      .peasy-glossary-popup:hover {
        display: block;
      }
      .peasy-glossary-popup-term {
        font-weight: 600;
        font-size: 14px;
        margin-bottom: 6px;
        color: #93c5fd;
      }
      .peasy-glossary-popup-def {
        opacity: 0.9;
        margin-bottom: 8px;
      }
      .peasy-glossary-popup-link {
        font-size: 11px;
        color: #93c5fd;
        text-decoration: none;
        opacity: 0.8;
        display: inline-flex;
        align-items: center;
        gap: 3px;
        pointer-events: auto;
      }
    `;
    shadow2.appendChild(style);
    const termSpan = document.createElement("span");
    termSpan.className = "peasy-glossary-term";
    termSpan.textContent = el.textContent || slug;
    shadow2.appendChild(termSpan);
    fetchAPI(config, `/api/v1/glossary/${slug}/`, { useLS: true, lang: opts.lang }).then((data) => {
      if (!data) {
        return;
      }
      const popup = document.createElement("div");
      popup.className = "peasy-glossary-popup";
      popup.innerHTML = `
          <div class="peasy-glossary-popup-term">${esc(data.term)}</div>
          <div class="peasy-glossary-popup-def">${esc(data.explanation_simple || data.definition)}</div>
          <a class="peasy-glossary-popup-link" href="https://${config.domain}/glossary/${encodeURIComponent(slug)}/" target="_blank" rel="noopener">
            Learn more about ${esc(data.term)} on ${esc(config.name)}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="10" height="10"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          </a>
        `;
      shadow2.appendChild(popup);
    });
    return;
  }
  const shadow = createShadow(el, config);
  const root = createWidgetRoot(shadow, el, "peasy-glossary-card");
  renderLoading(root);
  fetchAPI(config, `/api/v1/glossary/${slug}/`, { useLS: true, lang: opts.lang }).then((data) => {
    if (!data) {
      renderError(root, "Could not load glossary term.", config);
      return;
    }
    const relatedLinks = (data.related_terms || []).slice(0, 4).map((t) => `<a class="peasy-link" href="https://${config.domain}/glossary/${encodeURIComponent(t.slug)}/" target="_blank" rel="noopener">${esc(t.term)}</a>`).join("");
    root.innerHTML = `
        <style>
          .peasy-glossary-header {
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 12px 16px 10px;
            border-bottom: 1px solid var(--border);
            background: var(--ribbon);
          }
          .peasy-glossary-header svg { color: var(--accent); }
          .peasy-glossary-cat {
            margin-left: auto;
          }
          .peasy-glossary-body {
            padding: 12px 16px;
            border-bottom: 1px solid var(--border);
          }
          .peasy-glossary-label {
            font-size: 11px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.06em;
            color: var(--muted);
            margin: 0 0 4px 0;
          }
          .peasy-glossary-section {
            font-size: 13px;
            color: var(--text);
            line-height: 1.6;
            margin-bottom: 12px;
          }
          .peasy-glossary-related {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
            padding: 10px 16px;
            border-bottom: 1px solid var(--border);
          }
        </style>
        <div class="peasy-glossary-header">
          ${bookIcon}
          <span class="peasy-title" style="margin:0;">${esc(data.term)}</span>
          <span class="peasy-badge peasy-glossary-cat">${esc(data.category)}</span>
        </div>
        <div class="peasy-glossary-body">
          ${data.explanation_technical ? `
            <p class="peasy-glossary-label">Technical Explanation</p>
            <div class="peasy-glossary-section">${esc(data.explanation_technical)}</div>
          ` : ""}
          ${data.definition ? `
            <p class="peasy-glossary-label">Definition</p>
            <div class="peasy-glossary-section">${esc(data.definition)}</div>
          ` : ""}
        </div>
        ${relatedLinks ? `
          <div class="peasy-glossary-related">
            <span style="font-size:11px;font-weight:600;color:var(--muted);text-transform:uppercase;letter-spacing:0.06em;display:flex;align-items:center;">Related:</span>
            ${relatedLinks}
          </div>
        ` : ""}
        <div class="peasy-actions">
          <a class="peasy-link" href="https://${config.domain}/glossary/${slug}/" target="_blank" rel="noopener">
            ${esc(data.term)} \u2014 full glossary entry on ${esc(config.name)} ${externalLinkIcon}
          </a>
        </div>
        ${poweredByHTML(config)}
      `;
  });
}

// src/widgets/tool-gallery.ts
function init6(el, config, opts) {
  const dataset = el.dataset;
  const limit = parseInt(dataset.limit || "6", 10);
  const category = dataset.category || "";
  const shadow = createShadow(el, config);
  const root = createWidgetRoot(shadow, el, "peasy-tool-gallery");
  renderLoading(root);
  const qs = category ? `?limit=${limit}&category=${encodeURIComponent(category)}` : `?limit=${limit}`;
  fetchAPI(config, `/api/v1/tools/${qs}`, { lang: opts.lang }).then((resp) => {
    if (!resp || !resp.results) {
      renderError(root, "Could not load tools gallery.", config);
      return;
    }
    const toolTiles = resp.results.map((tool) => {
      const url = `https://${config.domain}/${tool.category.slug}/${tool.slug}/`;
      const tagline = tool.tagline ? tool.tagline.length > 55 ? tool.tagline.substring(0, 55) + "\u2026" : tool.tagline : "";
      return `
          <a class="peasy-gallery-tile" href="${url}" target="_blank" rel="noopener" title="${esc(tool.name)}">
            <div class="peasy-gallery-tile-icon">${esc(tool.icon || "\u{1F527}")}</div>
            <div class="peasy-gallery-tile-name">${esc(tool.name)}</div>
            ${tagline ? `<div class="peasy-gallery-tile-tagline">${esc(tagline)}</div>` : ""}
          </a>
        `;
    }).join("");
    const allToolsUrl = `https://${config.domain}/`;
    root.innerHTML = `
        <style>
          .peasy-gallery-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px 16px 8px;
            border-bottom: 1px solid var(--border);
            background: var(--ribbon);
          }
          .peasy-gallery-count {
            font-size: 12px;
            color: var(--muted);
          }
          .peasy-gallery-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
            gap: 1px;
            background: var(--border);
            border-bottom: 1px solid var(--border);
          }
          .peasy-gallery-tile {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 4px;
            padding: 14px 8px 12px;
            background: var(--bg);
            text-decoration: none;
            color: var(--text);
            text-align: center;
            transition: background 0.15s;
          }
          .peasy-gallery-tile:hover {
            background: var(--ribbon);
          }
          .peasy-gallery-tile-icon {
            font-size: 22px;
            line-height: 1;
          }
          .peasy-gallery-tile-name {
            font-size: 13px;
            font-weight: 600;
            color: var(--text);
          }
          .peasy-gallery-tile-tagline {
            font-size: 11px;
            color: var(--muted);
            line-height: 1.4;
          }
          .peasy-gallery-footer {
            padding: 10px 16px;
            border-top: 1px solid var(--border);
            text-align: center;
          }
        </style>
        <div class="peasy-gallery-header">
          <span class="peasy-title" style="font-size:14px;margin:0;">${category ? esc(category) + " Tools" : "Tool Gallery"}</span>
          <span class="peasy-gallery-count">${resp.count}+ tools on ${esc(config.name)}</span>
        </div>
        <div class="peasy-gallery-grid">
          ${toolTiles}
        </div>
        <div class="peasy-gallery-footer">
          <a class="peasy-link" href="${allToolsUrl}" target="_blank" rel="noopener">
            Browse all ${resp.count} tools on ${esc(config.name)} ${externalLinkIcon}
          </a>
        </div>
        ${poweredByHTML(config)}
      `;
  });
}

// src/widgets/guide-card.ts
function init7(el, config, opts) {
  const slug = el.dataset.slug;
  if (!slug) {
    return;
  }
  const shadow = createShadow(el, config);
  const root = createWidgetRoot(shadow, el, "peasy-guide-card");
  renderLoading(root);
  fetchAPI(config, `/api/v1/guides/${slug}/`, { lang: opts.lang }).then((data) => {
    if (!data) {
      renderError(root, "Could not load guide information.", config);
      return;
    }
    const takeawayItems = (data.key_takeaways || []).slice(0, 5).map((t) => `<li>${esc(t)}</li>`).join("");
    const levelColors = {
      beginner: "#16a34a",
      intermediate: "#ca8a04",
      advanced: "#dc2626"
    };
    const levelColor = levelColors[(data.audience_level || "").toLowerCase()] || "#6b7280";
    root.innerHTML = `
        <style>
          .peasy-guide-header {
            display: flex;
            align-items: flex-start;
            gap: 8px;
            padding: 12px 16px 10px;
            border-bottom: 1px solid var(--border);
            background: var(--ribbon);
          }
          .peasy-guide-header svg { color: var(--accent); margin-top: 3px; flex-shrink: 0; }
          .peasy-guide-body {
            padding: 10px 16px;
            border-bottom: 1px solid var(--border);
          }
          .peasy-guide-summary {
            font-size: 13px;
            color: var(--text);
            line-height: 1.6;
            margin-bottom: 10px;
          }
          .peasy-guide-takeaways {
            padding: 8px 16px 12px;
            border-bottom: 1px solid var(--border);
          }
          .peasy-guide-takeaways-label {
            font-size: 11px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.06em;
            color: var(--muted);
            margin: 0 0 6px 0;
          }
          .peasy-guide-takeaways ul {
            margin: 0;
            padding-left: 18px;
          }
          .peasy-guide-takeaways li {
            font-size: 13px;
            color: var(--text);
            line-height: 1.5;
            margin-bottom: 3px;
          }
          .peasy-guide-takeaways li::marker { color: var(--accent); }
        </style>
        <div class="peasy-guide-header">
          ${bookIcon}
          <div>
            <p class="peasy-title" style="margin:0 0 5px 0;">${esc(data.title)}</p>
            <div class="peasy-meta" style="margin-bottom:0;">
              ${data.reading_time_minutes ? `<span class="peasy-stat">${data.reading_time_minutes} min read</span>` : ""}
              ${data.audience_level ? `<span class="peasy-stat" style="color:${levelColor};">${esc(data.audience_level)}</span>` : ""}
              ${data.quality_score ? `<span class="peasy-stat">Score: ${data.quality_score}/100</span>` : ""}
            </div>
          </div>
        </div>
        ${data.summary ? `
          <div class="peasy-guide-body">
            <p class="peasy-guide-summary">${esc(data.summary)}</p>
          </div>
        ` : ""}
        ${takeawayItems ? `
          <div class="peasy-guide-takeaways">
            <p class="peasy-guide-takeaways-label">Key Takeaways</p>
            <ul>${takeawayItems}</ul>
          </div>
        ` : ""}
        <div class="peasy-actions">
          <a class="peasy-link" href="https://${config.domain}/guides/${slug}/" target="_blank" rel="noopener">
            Read full guide on ${esc(config.name)} ${externalLinkIcon}
          </a>
        </div>
        ${poweredByHTML(config)}
      `;
  });
}

// src/widgets/usecase-card.ts
function init8(el, config, opts) {
  const slug = el.dataset.slug;
  if (!slug) {
    return;
  }
  const shadow = createShadow(el, config);
  const root = createWidgetRoot(shadow, el, "peasy-usecase-card");
  renderLoading(root);
  fetchAPI(config, `/api/v1/use-cases/${slug}/`, { lang: opts.lang }).then((data) => {
    if (!data) {
      renderError(root, "Could not load use case information.", config);
      return;
    }
    const toolsHtml = data.tools && data.tools.length > 0 ? `<div class="peasy-usecase-tools">
            <span class="peasy-usecase-tools-label">Tools:</span>
            ${data.tools.slice(0, 4).map(
      (t) => `<a class="peasy-link" href="https://${config.domain}/search/?q=${encodeURIComponent(t.name)}" target="_blank" rel="noopener">${esc(t.name)}</a>`
    ).join("")}
          </div>` : "";
    root.innerHTML = `
        <style>
          .peasy-usecase-header {
            padding: 12px 16px 10px;
            border-bottom: 1px solid var(--border);
            background: var(--ribbon);
          }
          .peasy-usecase-desc {
            padding: 10px 16px 12px;
            font-size: 13px;
            color: var(--text);
            line-height: 1.6;
            border-bottom: 1px solid var(--border);
          }
          .peasy-usecase-tools {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            gap: 8px;
            padding: 8px 16px;
            border-bottom: 1px solid var(--border);
          }
          .peasy-usecase-tools-label {
            font-size: 11px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.06em;
            color: var(--muted);
          }
        </style>
        <div class="peasy-usecase-header">
          <p class="peasy-title" style="margin:0 0 6px 0;">${esc(data.name)}</p>
          <div class="peasy-meta" style="margin-bottom:0;">
            ${data.industry ? `<span class="peasy-badge">${esc(data.industry)}</span>` : ""}
          </div>
        </div>
        ${data.description ? `<div class="peasy-usecase-desc">${esc(data.description)}</div>` : ""}
        ${toolsHtml}
        <div class="peasy-actions">
          <a class="peasy-link" href="https://${config.domain}/use-cases/${slug}/" target="_blank" rel="noopener">
            ${esc(data.name)} use case guide on ${esc(config.name)} ${externalLinkIcon}
          </a>
        </div>
        ${poweredByHTML(config)}
      `;
  });
}

// src/widgets/format-badge.ts
function init9(el, config, opts) {
  const slug = el.dataset.slug;
  if (!slug) {
    return;
  }
  const shadow = el.attachShadow({ mode: "open" });
  const style = document.createElement("style");
  style.textContent = `
    :host {
      display: inline-block;
      position: relative;
      font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
    }
    .peasy-badge-link {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      font-size: 11px;
      font-weight: 600;
      padding: 2px 8px;
      border-radius: 4px;
      background: #f3f4f6;
      color: #374151;
      text-decoration: none;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      border-left: 3px solid ${config.accent};
      cursor: pointer;
      transition: background 0.15s;
    }
    .peasy-badge-link:hover { background: #e5e7eb; }
    .peasy-badge-link:hover + .peasy-badge-tooltip { display: block; }
    .peasy-badge-tooltip {
      display: none;
      position: absolute;
      top: calc(100% + 6px);
      left: 0;
      z-index: 9999;
      background: #1a1a1a;
      color: #f3f4f6;
      border-radius: 6px;
      padding: 10px 12px;
      font-size: 12px;
      min-width: 200px;
      max-width: 260px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.2);
      line-height: 1.5;
      pointer-events: none;
    }
    .peasy-badge-tooltip-title {
      font-weight: 600;
      font-size: 13px;
      margin-bottom: 4px;
    }
    .peasy-badge-tooltip-row {
      display: flex;
      gap: 6px;
      margin-top: 3px;
    }
    .peasy-badge-tooltip-label { color: #9ca3af; }
    .peasy-badge-tooltip-value { color: #f3f4f6; }
  `;
  shadow.appendChild(style);
  const placeholder = document.createElement("span");
  placeholder.style.cssText = "display:inline-block;width:48px;height:18px;border-radius:4px;background:#e5e7eb;";
  shadow.appendChild(placeholder);
  fetchAPI(config, `/api/v1/formats/${slug}/`, { useLS: true, lang: opts.lang }).then((data) => {
    placeholder.remove();
    if (!data) {
      const err = document.createElement("span");
      err.textContent = slug.toUpperCase();
      err.style.cssText = "font-size:11px;color:#9ca3af;font-family:monospace;";
      shadow.appendChild(err);
      return;
    }
    const wrapper = document.createElement("div");
    wrapper.style.cssText = "position:relative;display:inline-block;";
    wrapper.innerHTML = `
        <a class="peasy-badge-link" href="https://${config.domain}/formats/${encodeURIComponent(slug)}/" target="_blank" rel="noopener">
          <span>${esc(data.extension.toUpperCase())}</span>
          <span style="opacity:0.5;">\u25AA</span>
          <span>${esc(data.category)}</span>
        </a>
        <div class="peasy-badge-tooltip">
          <div class="peasy-badge-tooltip-title">${esc(data.full_name)}</div>
          ${data.description ? `<div style="margin-bottom:6px;opacity:0.8;">${esc(data.description.substring(0, 100))}${data.description.length > 100 ? "\u2026" : ""}</div>` : ""}
          <div class="peasy-badge-tooltip-row">
            <span class="peasy-badge-tooltip-label">MIME:</span>
            <span class="peasy-badge-tooltip-value">${esc(data.mime_type)}</span>
          </div>
          <div class="peasy-badge-tooltip-row">
            <span class="peasy-badge-tooltip-label">Lossy:</span>
            <span class="peasy-badge-tooltip-value">${data.is_lossy ? "Yes" : "No"}</span>
          </div>
        </div>
      `;
    shadow.appendChild(wrapper);
  });
}

// src/widgets/search-box.ts
function debounce(fn, ms) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), ms);
  };
}
function getResultIcon(type) {
  if (type === "format") return fileIcon;
  if (type === "glossary") return bookIcon;
  return toolIcon;
}
function getResultUrl(config, result) {
  if (result.type === "format") return `https://${config.domain}/formats/${result.slug}/`;
  if (result.type === "glossary") return `https://${config.domain}/glossary/${result.slug}/`;
  const catSlug = result.category?.slug || "tools";
  return `https://${config.domain}/${catSlug}/${result.slug}/`;
}
function init10(el, config, opts) {
  const dataset = el.dataset;
  const placeholder = dataset.placeholder || `Search tools, formats, guides on ${config.name}\u2026`;
  const shadow = createShadow(el, config);
  const root = createWidgetRoot(shadow, el, "peasy-search-box");
  root.innerHTML = `
    <style>
      .peasy-search-outer { padding: 14px 16px 0; position: relative; }
      .peasy-search-inner {
        display: flex;
        align-items: center;
        gap: 8px;
        border: 1px solid var(--input-border);
        border-radius: 8px;
        background: var(--input-bg);
        padding: 0 10px;
        transition: border-color 0.15s;
      }
      .peasy-search-inner:focus-within {
        border-color: var(--input-focus);
        box-shadow: 0 0 0 2px color-mix(in srgb, var(--input-focus) 20%, transparent);
      }
      .peasy-search-icon-wrap { color: var(--muted); display: flex; }
      .peasy-search-input-el {
        flex: 1;
        border: none;
        outline: none;
        background: transparent;
        color: var(--text);
        font-size: 14px;
        font-family: inherit;
        padding: 10px 0;
        min-width: 0;
      }
      .peasy-search-input-el::placeholder { color: var(--muted); }
      .peasy-search-results {
        display: none;
        position: absolute;
        top: calc(100% + 4px);
        left: 0;
        right: 0;
        z-index: 999;
        background: var(--bg);
        border: 1px solid var(--border);
        border-radius: 8px;
        box-shadow: var(--shadow), 0 4px 16px rgba(0,0,0,0.1);
        max-height: 320px;
        overflow-y: auto;
      }
      .peasy-search-results.open { display: block; }
      .peasy-search-result-item {
        display: flex;
        align-items: flex-start;
        gap: 10px;
        padding: 10px 14px;
        text-decoration: none;
        color: var(--text);
        border-bottom: 1px solid var(--border);
        cursor: pointer;
        transition: background 0.1s;
      }
      .peasy-search-result-item:last-child { border-bottom: none; }
      .peasy-search-result-item:hover,
      .peasy-search-result-item.peasy-highlighted {
        background: var(--ribbon);
      }
      .peasy-search-result-icon { color: var(--accent); flex-shrink: 0; margin-top: 2px; }
      .peasy-search-result-name { font-weight: 600; font-size: 13px; }
      .peasy-search-result-desc {
        font-size: 12px;
        color: var(--muted);
        line-height: 1.4;
        margin-top: 2px;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
      .peasy-search-result-type {
        font-size: 10px;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: var(--muted);
        margin-top: 2px;
      }
      .peasy-search-empty {
        padding: 16px;
        text-align: center;
        font-size: 13px;
        color: var(--muted);
      }
      .peasy-search-footer { padding: 8px 14px 14px; }
    </style>
    <div class="peasy-search-outer">
      <div class="peasy-search-inner">
        <span class="peasy-search-icon-wrap">${searchIcon}</span>
        <input class="peasy-search-input-el" type="search" placeholder="${esc(placeholder)}" autocomplete="off" spellcheck="false" />
      </div>
      <div class="peasy-search-results" role="listbox"></div>
    </div>
    <div class="peasy-search-footer">
      ${poweredByHTML(config)}
    </div>
  `;
  const input = root.querySelector(".peasy-search-input-el");
  const resultsBox = root.querySelector(".peasy-search-results");
  let currentResults = [];
  let highlightedIndex = -1;
  function openResults() {
    resultsBox.classList.add("open");
  }
  function closeResults() {
    resultsBox.classList.remove("open");
    highlightedIndex = -1;
  }
  function renderResults(results, query) {
    if (results.length === 0) {
      const emptyDiv = document.createElement("div");
      emptyDiv.className = "peasy-search-empty";
      emptyDiv.textContent = `No results for "${query}" \u2014 try a different search term`;
      resultsBox.replaceChildren(emptyDiv);
      openResults();
      return;
    }
    resultsBox.innerHTML = results.map((r, i) => {
      const url = getResultUrl(config, r);
      const desc = r.description ? r.description.length > 100 ? r.description.substring(0, 100) + "\u2026" : r.description : "";
      return `
        <a class="peasy-search-result-item" href="${url}" target="_blank" rel="noopener" data-index="${i}">
          <span class="peasy-search-result-icon">${getResultIcon(r.type)}</span>
          <div>
            <div class="peasy-search-result-name">${esc(r.name)}</div>
            ${desc ? `<div class="peasy-search-result-desc">${esc(desc)}</div>` : ""}
            <div class="peasy-search-result-type">${esc(r.type)}</div>
          </div>
        </a>
      `;
    }).join("");
    openResults();
    highlightedIndex = -1;
  }
  function updateHighlight() {
    const items = resultsBox.querySelectorAll(".peasy-search-result-item");
    items.forEach((item, i) => {
      item.classList.toggle("peasy-highlighted", i === highlightedIndex);
    });
  }
  const doSearch = debounce((...args) => {
    const query = args[0];
    if (query.length < 2) {
      closeResults();
      return;
    }
    fetchAPI(config, `/api/v1/search/?q=${encodeURIComponent(query)}`, { lang: opts.lang }).then((resp) => {
      currentResults = resp?.results ?? [];
      renderResults(currentResults, query);
    });
  }, 300);
  input.addEventListener("input", () => {
    const q = input.value.trim();
    if (q.length < 2) {
      closeResults();
      return;
    }
    doSearch(q);
  });
  input.addEventListener("keydown", (e) => {
    const items = resultsBox.querySelectorAll(".peasy-search-result-item");
    if (!resultsBox.classList.contains("open") || items.length === 0) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      highlightedIndex = Math.min(highlightedIndex + 1, items.length - 1);
      updateHighlight();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      highlightedIndex = Math.max(highlightedIndex - 1, 0);
      updateHighlight();
    } else if (e.key === "Enter" && highlightedIndex >= 0) {
      e.preventDefault();
      const link = items[highlightedIndex];
      if (link.href) {
        window.open(link.href, "_blank", "noopener");
        closeResults();
      }
    } else if (e.key === "Escape") {
      closeResults();
    }
  });
  document.addEventListener("click", (e) => {
    if (!el.contains(e.target)) {
      closeResults();
    }
  }, { capture: true });
}

// src/iframe/interactive.ts
function init11(el, config, opts) {
  const dataset = el.dataset;
  const slug = dataset.slug;
  const height = dataset.height || "600";
  if (!slug) {
    return;
  }
  const iframeUrl = `${config.embedBase}/${encodeURI(slug)}/?theme=${encodeURIComponent(opts.theme)}`;
  const toolUrl = `https://${config.domain}/${slug}/`;
  const shadow = el.attachShadow({ mode: "open" });
  const style = document.createElement("style");
  style.textContent = getThemeCSS(config.accent) + `
    .peasy-iframe-wrap {
      width: 100%;
      font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
    }
    .peasy-iframe-skeleton {
      width: 100%;
      border-radius: 8px;
      background: linear-gradient(90deg, var(--border) 25%, var(--ribbon) 50%, var(--border) 75%);
      background-size: 200% 100%;
      animation: peasy-shimmer 1.4s infinite;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--muted);
      font-size: 13px;
      gap: 8px;
    }
    @keyframes peasy-shimmer {
      0%   { background-position: 200% 0; }
      100% { background-position: -200% 0; }
    }
    .peasy-iframe-el {
      display: none;
      width: 100%;
      border: none;
      border-radius: 8px;
      border: 1px solid var(--border);
    }
    .peasy-iframe-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 8px 4px 0;
    }
  `;
  shadow.appendChild(style);
  const container = document.createElement("div");
  container.className = "peasy-widget peasy-iframe-wrap";
  container.setAttribute("data-theme", opts.theme);
  container.setAttribute("data-size", opts.size);
  const skeleton = document.createElement("div");
  skeleton.className = "peasy-iframe-skeleton";
  skeleton.style.height = `${height}px`;
  skeleton.innerHTML = `
    <span class="peasy-spinner" style="width:18px;height:18px;border:2px solid #e5e7eb;border-top-color:${config.accent};border-radius:50%;animation:peasy-spin 0.7s linear infinite;display:inline-block;"></span>
    Loading ${config.name} tool\u2026
  `;
  container.appendChild(skeleton);
  const iframe = document.createElement("iframe");
  iframe.className = "peasy-iframe-el";
  iframe.src = iframeUrl;
  iframe.width = "100%";
  iframe.height = `${height}`;
  iframe.setAttribute("frameborder", "0");
  iframe.setAttribute("allow", "clipboard-write");
  iframe.setAttribute("style", `border:none;border-radius:8px;width:100%;height:${height}px;`);
  iframe.setAttribute("loading", "lazy");
  iframe.addEventListener("load", () => {
    skeleton.style.display = "none";
    iframe.style.display = "block";
  });
  container.appendChild(iframe);
  const footer = document.createElement("div");
  footer.className = "peasy-iframe-footer";
  footer.innerHTML = `
    <a class="peasy-link" href="${toolUrl}" target="_blank" rel="noopener" style="font-size:12px;font-weight:500;color:${config.accent};text-decoration:none;display:inline-flex;align-items:center;gap:4px;">
      Open ${esc(slug.split("/").pop() || "tool")} in full view on ${esc(config.name)} ${externalLinkIcon}
    </a>
    ${poweredByHTML(config)}
  `;
  container.appendChild(footer);
  shadow.appendChild(container);
}

// src/tools/word-counter.ts
function init12(el, config, opts) {
  const dataset = el.dataset;
  const placeholder = dataset.placeholder || "Type or paste your text here\u2026";
  const initialText = dataset.text || "";
  const shadow = createShadow(el, config);
  const root = createWidgetRoot(shadow, el, "peasy-word-counter");
  root.innerHTML = `
    <style>
      .peasy-wc-body { padding: 12px 16px; }
      .peasy-wc-textarea {
        width: 100%;
        min-height: 120px;
        padding: 10px 12px;
        border: 1px solid var(--input-border);
        border-radius: 6px;
        background: var(--input-bg);
        color: var(--text);
        font-size: 14px;
        font-family: inherit;
        line-height: 1.6;
        resize: vertical;
        outline: none;
        transition: border-color 0.15s;
        box-sizing: border-box;
      }
      .peasy-wc-textarea:focus {
        border-color: var(--input-focus);
        box-shadow: 0 0 0 2px color-mix(in srgb, var(--input-focus) 20%, transparent);
      }
      .peasy-wc-stats {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
        gap: 8px;
        margin-top: 10px;
      }
      .peasy-wc-stat-card {
        background: var(--ribbon);
        border: 1px solid var(--border);
        border-radius: 6px;
        padding: 8px 10px;
        text-align: center;
      }
      .peasy-wc-stat-value {
        font-size: 18px;
        font-weight: 700;
        color: var(--accent);
        line-height: 1.2;
      }
      .peasy-wc-stat-label {
        font-size: 11px;
        color: var(--muted);
        margin-top: 2px;
      }
    </style>
    <div class="peasy-wc-body">
      <textarea class="peasy-wc-textarea" placeholder="${esc(placeholder)}">${esc(initialText)}</textarea>
      <div class="peasy-wc-stats">
        <div class="peasy-wc-stat-card">
          <div class="peasy-wc-stat-value" id="wc-words">0</div>
          <div class="peasy-wc-stat-label">Words</div>
        </div>
        <div class="peasy-wc-stat-card">
          <div class="peasy-wc-stat-value" id="wc-chars">0</div>
          <div class="peasy-wc-stat-label">Characters</div>
        </div>
        <div class="peasy-wc-stat-card">
          <div class="peasy-wc-stat-value" id="wc-sentences">0</div>
          <div class="peasy-wc-stat-label">Sentences</div>
        </div>
        <div class="peasy-wc-stat-card">
          <div class="peasy-wc-stat-value" id="wc-lines">0</div>
          <div class="peasy-wc-stat-label">Lines</div>
        </div>
        <div class="peasy-wc-stat-card">
          <div class="peasy-wc-stat-value" id="wc-reading">0</div>
          <div class="peasy-wc-stat-label">Min read</div>
        </div>
      </div>
    </div>
    ${poweredByHTML(config)}
  `;
  const textarea = root.querySelector(".peasy-wc-textarea");
  const wcWords = root.querySelector("#wc-words");
  const wcChars = root.querySelector("#wc-chars");
  const wcSentences = root.querySelector("#wc-sentences");
  const wcLines = root.querySelector("#wc-lines");
  const wcReading = root.querySelector("#wc-reading");
  function update() {
    const text = textarea.value;
    const words = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
    const chars = text.length;
    const sentences = text === "" ? 0 : (text.match(/[.!?]+/g) || []).length;
    const lines = text === "" ? 0 : text.split(/\n/).length;
    const readingTime = Math.max(1, Math.ceil(words / 200));
    wcWords.textContent = String(words);
    wcChars.textContent = String(chars);
    wcSentences.textContent = String(sentences);
    wcLines.textContent = String(lines);
    wcReading.textContent = String(readingTime);
  }
  textarea.addEventListener("input", update);
  if (initialText) {
    update();
  }
}

// src/tools/encoder.ts
function encodeBase64(text) {
  try {
    return btoa(unescape(encodeURIComponent(text)));
  } catch {
    return btoa(text);
  }
}
function encodeHTML(text) {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
function encodeUnicode(text) {
  return Array.from(text).map((c) => {
    const cp = c.codePointAt(0);
    if (cp === void 0) return "";
    return `U+${cp.toString(16).toUpperCase().padStart(4, "0")}`;
  }).join(" ");
}
function encode(text, mode) {
  switch (mode) {
    case "base64":
      return encodeBase64(text);
    case "url":
      return encodeURIComponent(text);
    case "html":
      return encodeHTML(text);
    case "unicode":
      return encodeUnicode(text);
  }
}
function init13(el, config, opts) {
  const shadow = createShadow(el, config);
  const root = createWidgetRoot(shadow, el, "peasy-encoder");
  root.innerHTML = `
    <style>
      .peasy-enc-body { padding: 12px 16px; }
      .peasy-enc-textarea {
        width: 100%;
        min-height: 80px;
        padding: 10px 12px;
        border: 1px solid var(--input-border);
        border-radius: 6px;
        background: var(--input-bg);
        color: var(--text);
        font-size: 13px;
        font-family: ui-monospace, 'Fira Code', monospace;
        line-height: 1.5;
        resize: vertical;
        outline: none;
        transition: border-color 0.15s;
        box-sizing: border-box;
        margin-bottom: 10px;
      }
      .peasy-enc-textarea:focus {
        border-color: var(--input-focus);
        box-shadow: 0 0 0 2px color-mix(in srgb, var(--input-focus) 20%, transparent);
      }
      .peasy-enc-tabs {
        display: flex;
        gap: 4px;
        margin-bottom: 8px;
        flex-wrap: wrap;
      }
      .peasy-enc-tab {
        padding: 5px 12px;
        border-radius: 5px;
        border: 1px solid var(--border);
        background: var(--ribbon);
        color: var(--text);
        font-size: 12px;
        font-weight: 500;
        cursor: pointer;
        font-family: inherit;
        transition: background 0.1s, border-color 0.1s;
      }
      .peasy-enc-tab.active {
        background: var(--accent);
        color: #fff;
        border-color: var(--accent);
      }
      .peasy-enc-output-wrap {
        position: relative;
      }
      .peasy-enc-copy-row {
        display: flex;
        justify-content: flex-end;
        margin-top: 6px;
      }
    </style>
    <div class="peasy-enc-body">
      <textarea class="peasy-enc-textarea" placeholder="Enter text to encode\u2026"></textarea>
      <div class="peasy-enc-tabs">
        <button class="peasy-enc-tab active" data-mode="base64">Base64</button>
        <button class="peasy-enc-tab" data-mode="url">URL Encode</button>
        <button class="peasy-enc-tab" data-mode="html">HTML Entities</button>
        <button class="peasy-enc-tab" data-mode="unicode">Unicode</button>
      </div>
      <div class="peasy-enc-output-wrap">
        <textarea class="peasy-enc-textarea" id="enc-output" readonly placeholder="Encoded output will appear here\u2026" style="background:var(--ribbon);margin-bottom:0;"></textarea>
        <div class="peasy-enc-copy-row">
          <button class="peasy-copy-btn" id="enc-copy-btn">${copyIcon} Copy</button>
        </div>
      </div>
    </div>
    ${poweredByHTML(config)}
  `;
  const inputTA = root.querySelector(".peasy-enc-textarea");
  const outputTA = root.querySelector("#enc-output");
  const copyBtn = root.querySelector("#enc-copy-btn");
  const tabs = root.querySelectorAll(".peasy-enc-tab");
  let currentMode = "base64";
  function runEncode() {
    outputTA.value = inputTA.value ? encode(inputTA.value, currentMode) : "";
    bindCopyButton(copyBtn, outputTA.value);
  }
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      currentMode = tab.dataset.mode;
      runEncode();
    });
  });
  inputTA.addEventListener("input", runEncode);
  bindCopyButton(copyBtn, "");
}

// src/tools/hash-generator.ts
async function computeHash(algo, text) {
  const encoder = new TextEncoder();
  const data = encoder.encode(text);
  const hashBuffer = await crypto.subtle.digest(algo, data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}
function init14(el, config, opts) {
  const shadow = createShadow(el, config);
  const root = createWidgetRoot(shadow, el, "peasy-hash-generator");
  root.innerHTML = `
    <style>
      .peasy-hash-body { padding: 12px 16px; }
      .peasy-hash-textarea {
        width: 100%;
        min-height: 80px;
        padding: 10px 12px;
        border: 1px solid var(--input-border);
        border-radius: 6px;
        background: var(--input-bg);
        color: var(--text);
        font-size: 13px;
        font-family: inherit;
        line-height: 1.5;
        resize: vertical;
        outline: none;
        transition: border-color 0.15s;
        box-sizing: border-box;
        margin-bottom: 12px;
      }
      .peasy-hash-textarea:focus {
        border-color: var(--input-focus);
        box-shadow: 0 0 0 2px color-mix(in srgb, var(--input-focus) 20%, transparent);
      }
      .peasy-hash-row {
        margin-bottom: 10px;
      }
      .peasy-hash-label {
        font-size: 11px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.06em;
        color: var(--muted);
        margin-bottom: 4px;
        display: block;
      }
      .peasy-hash-value-row {
        display: flex;
        align-items: center;
        gap: 6px;
      }
      .peasy-hash-value {
        flex: 1;
        font-family: ui-monospace, 'Fira Code', monospace;
        font-size: 11px;
        color: var(--text);
        background: var(--ribbon);
        border: 1px solid var(--border);
        border-radius: 5px;
        padding: 6px 10px;
        word-break: break-all;
        min-height: 30px;
      }
      .peasy-hash-placeholder { color: var(--muted); font-style: italic; }
    </style>
    <div class="peasy-hash-body">
      <textarea class="peasy-hash-textarea" placeholder="Enter text to generate cryptographic hash\u2026"></textarea>
      <div class="peasy-hash-row">
        <span class="peasy-hash-label">SHA-1</span>
        <div class="peasy-hash-value-row">
          <div class="peasy-hash-value" id="hash-sha1"><span class="peasy-hash-placeholder">\u2014</span></div>
          <button class="peasy-copy-btn" id="hash-sha1-copy">${copyIcon} Copy</button>
        </div>
      </div>
      <div class="peasy-hash-row">
        <span class="peasy-hash-label">SHA-256</span>
        <div class="peasy-hash-value-row">
          <div class="peasy-hash-value" id="hash-sha256"><span class="peasy-hash-placeholder">\u2014</span></div>
          <button class="peasy-copy-btn" id="hash-sha256-copy">${copyIcon} Copy</button>
        </div>
      </div>
    </div>
    ${poweredByHTML(config)}
  `;
  const textarea = root.querySelector(".peasy-hash-textarea");
  const sha1El = root.querySelector("#hash-sha1");
  const sha256El = root.querySelector("#hash-sha256");
  const sha1CopyBtn = root.querySelector("#hash-sha1-copy");
  const sha256CopyBtn = root.querySelector("#hash-sha256-copy");
  function setPlaceholder(el2) {
    el2.innerHTML = '<span class="peasy-hash-placeholder">\u2014</span>';
  }
  async function updateHashes() {
    const text = textarea.value;
    if (!text) {
      setPlaceholder(sha1El);
      setPlaceholder(sha256El);
      return;
    }
    const [sha1, sha256] = await Promise.all([
      computeHash("SHA-1", text),
      computeHash("SHA-256", text)
    ]);
    sha1El.textContent = sha1;
    sha256El.textContent = sha256;
    bindCopyButton(sha1CopyBtn, sha1);
    bindCopyButton(sha256CopyBtn, sha256);
  }
  textarea.addEventListener("input", () => {
    void updateHashes();
  });
  bindCopyButton(sha1CopyBtn, "");
  bindCopyButton(sha256CopyBtn, "");
}

// src/tools/css-preview.ts
var DEFAULT_CSS = `/* Try editing this CSS */
body {
  font-family: system-ui, sans-serif;
  padding: 20px;
  background: #f9fafb;
}

.preview {
  background: white;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

span {
  color: #6366f1;
  font-weight: 600;
}`;
function init15(el, config, opts) {
  const dataset = el.dataset;
  const initialCode = dataset.code || DEFAULT_CSS;
  const shadow = createShadow(el, config);
  const root = createWidgetRoot(shadow, el, "peasy-css-preview");
  root.innerHTML = `
    <style>
      .peasy-css-body {
        display: flex;
        flex-direction: column;
        gap: 0;
      }
      .peasy-css-editor-wrap {
        padding: 12px 16px;
        border-bottom: 1px solid var(--border);
      }
      .peasy-css-label {
        font-size: 11px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.06em;
        color: var(--muted);
        margin-bottom: 6px;
        display: block;
      }
      .peasy-css-textarea {
        width: 100%;
        min-height: 140px;
        padding: 10px 12px;
        border: 1px solid var(--input-border);
        border-radius: 6px;
        background: var(--input-bg);
        color: var(--text);
        font-size: 12px;
        font-family: ui-monospace, 'Fira Code', monospace;
        line-height: 1.6;
        resize: vertical;
        outline: none;
        transition: border-color 0.15s;
        box-sizing: border-box;
        tab-size: 2;
      }
      .peasy-css-textarea:focus {
        border-color: var(--input-focus);
        box-shadow: 0 0 0 2px color-mix(in srgb, var(--input-focus) 20%, transparent);
      }
      .peasy-css-preview-wrap {
        padding: 12px 16px;
      }
      .peasy-css-preview-frame {
        width: 100%;
        min-height: 120px;
        border: 1px solid var(--border);
        border-radius: 6px;
        background: white;
        box-sizing: border-box;
      }
    </style>
    <div class="peasy-css-body">
      <div class="peasy-css-editor-wrap">
        <span class="peasy-css-label">CSS Code</span>
        <textarea class="peasy-css-textarea" spellcheck="false">${initialCode}</textarea>
      </div>
      <div class="peasy-css-preview-wrap">
        <span class="peasy-css-label">Preview</span>
        <iframe class="peasy-css-preview-frame" sandbox="" frameborder="0"></iframe>
      </div>
    </div>
    ${poweredByHTML(config)}
  `;
  const textarea = root.querySelector(".peasy-css-textarea");
  const frame = root.querySelector(".peasy-css-preview-frame");
  function updatePreview() {
    const css = textarea.value;
    const srcdoc = `<!DOCTYPE html><html><head><style>${css}</style></head><body><div class="preview">Sample text <span>and elements</span> \u2014 CSS preview</div></body></html>`;
    frame.srcdoc = srcdoc;
    frame.onload = () => {
      try {
        const h = frame.contentDocument?.body.scrollHeight;
        if (h) frame.style.height = `${Math.max(80, h)}px`;
      } catch {
      }
    };
  }
  textarea.addEventListener("input", updatePreview);
  updatePreview();
}

// src/tools/css-minifier.ts
function minifyCSS(css) {
  return css.replace(/\/\*[\s\S]*?\*\//g, "").replace(/\s+/g, " ").replace(/\s*([{}:;,>+~])\s*/g, "$1").replace(/;}/g, "}").trim();
}
function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  return `${(bytes / 1024).toFixed(1)} KB`;
}
function init16(el, config, opts) {
  const shadow = createShadow(el, config);
  const root = createWidgetRoot(shadow, el, "peasy-css-minifier");
  root.innerHTML = `
    <style>
      .peasy-min-body { padding: 12px 16px; }
      .peasy-min-textarea {
        width: 100%;
        min-height: 120px;
        padding: 10px 12px;
        border: 1px solid var(--input-border);
        border-radius: 6px;
        background: var(--input-bg);
        color: var(--text);
        font-size: 12px;
        font-family: ui-monospace, 'Fira Code', monospace;
        line-height: 1.5;
        resize: vertical;
        outline: none;
        transition: border-color 0.15s;
        box-sizing: border-box;
        margin-bottom: 10px;
        tab-size: 2;
      }
      .peasy-min-textarea:focus {
        border-color: var(--input-focus);
        box-shadow: 0 0 0 2px color-mix(in srgb, var(--input-focus) 20%, transparent);
      }
      .peasy-min-stats {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
        margin-bottom: 10px;
        align-items: center;
      }
      .peasy-min-stat {
        font-size: 12px;
        color: var(--muted);
      }
      .peasy-min-stat strong { color: var(--text); }
      .peasy-min-savings {
        font-size: 12px;
        font-weight: 600;
        color: #16a34a;
        margin-left: auto;
      }
      .peasy-min-bar-wrap {
        width: 100%;
        height: 6px;
        background: var(--border);
        border-radius: 3px;
        overflow: hidden;
        margin-bottom: 10px;
      }
      .peasy-min-bar {
        height: 100%;
        background: var(--accent);
        border-radius: 3px;
        transition: width 0.3s;
        width: 0%;
      }
      .peasy-min-output-label {
        font-size: 11px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.06em;
        color: var(--muted);
        margin-bottom: 4px;
      }
      .peasy-min-copy-row {
        display: flex;
        justify-content: flex-end;
        margin-top: 6px;
      }
    </style>
    <div class="peasy-min-body">
      <textarea class="peasy-min-textarea" placeholder="Paste your CSS here to minify\u2026"></textarea>
      <div class="peasy-min-stats">
        <span class="peasy-min-stat">Original: <strong id="min-orig-size">0 B</strong></span>
        <span class="peasy-min-stat">Minified: <strong id="min-mini-size">0 B</strong></span>
        <span class="peasy-min-savings" id="min-savings" style="display:none;"></span>
      </div>
      <div class="peasy-min-bar-wrap">
        <div class="peasy-min-bar" id="min-bar"></div>
      </div>
      <div class="peasy-min-output-label">Minified Output</div>
      <textarea class="peasy-min-textarea" id="min-output" readonly placeholder="Minified CSS appears here\u2026" style="background:var(--ribbon);min-height:60px;margin-bottom:0;"></textarea>
      <div class="peasy-min-copy-row">
        <button class="peasy-copy-btn" id="min-copy-btn">${copyIcon} Copy Minified</button>
      </div>
    </div>
    ${poweredByHTML(config)}
  `;
  const inputTA = root.querySelector(".peasy-min-textarea");
  const outputTA = root.querySelector("#min-output");
  const copyBtn = root.querySelector("#min-copy-btn");
  const origSizeEl = root.querySelector("#min-orig-size");
  const miniSizeEl = root.querySelector("#min-mini-size");
  const savingsEl = root.querySelector("#min-savings");
  const bar = root.querySelector("#min-bar");
  function update() {
    const css = inputTA.value;
    const minified = minifyCSS(css);
    outputTA.value = minified;
    const origBytes = new TextEncoder().encode(css).length;
    const miniBytes = new TextEncoder().encode(minified).length;
    const saving = origBytes > 0 ? Math.round((1 - miniBytes / origBytes) * 100) : 0;
    const barWidth = origBytes > 0 ? Math.max(5, 100 - saving) : 0;
    origSizeEl.textContent = formatBytes(origBytes);
    miniSizeEl.textContent = formatBytes(miniBytes);
    bar.style.width = `${barWidth}%`;
    if (origBytes > 0 && saving > 0) {
      savingsEl.textContent = `\u2212${saving}% saved`;
      savingsEl.style.display = "inline";
    } else {
      savingsEl.style.display = "none";
    }
    bindCopyButton(copyBtn, minified);
  }
  inputTA.addEventListener("input", update);
  bindCopyButton(copyBtn, "");
}

// src/tools/color-converter.ts
function parseHex(hex) {
  const clean = hex.replace("#", "");
  if (!/^[0-9a-fA-F]{3}$|^[0-9a-fA-F]{6}$/.test(clean)) return null;
  const full = clean.length === 3 ? clean.split("").map((c) => c + c).join("") : clean;
  return {
    r: parseInt(full.slice(0, 2), 16),
    g: parseInt(full.slice(2, 4), 16),
    b: parseInt(full.slice(4, 6), 16)
  };
}
function rgbToHsl(r, g, b) {
  const rn = r / 255;
  const gn = g / 255;
  const bn = b / 255;
  const max = Math.max(rn, gn, bn);
  const min = Math.min(rn, gn, bn);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case rn:
        h = ((gn - bn) / d + (gn < bn ? 6 : 0)) / 6;
        break;
      case gn:
        h = ((bn - rn) / d + 2) / 6;
        break;
      case bn:
        h = ((rn - gn) / d + 4) / 6;
        break;
    }
  }
  return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) };
}
function init17(el, config, opts) {
  const dataset = el.dataset;
  const initialHex = dataset.hex || "";
  const shadow = createShadow(el, config);
  const root = createWidgetRoot(shadow, el, "peasy-color-converter");
  root.innerHTML = `
    <style>
      .peasy-color-body { padding: 12px 16px; }
      .peasy-color-input-row {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 12px;
      }
      .peasy-color-swatch {
        width: 36px;
        height: 36px;
        border-radius: 6px;
        border: 1px solid var(--border);
        flex-shrink: 0;
        background: #f3f4f6;
        transition: background 0.2s;
      }
      .peasy-color-hex-input {
        flex: 1;
        padding: 8px 12px;
        border: 1px solid var(--input-border);
        border-radius: 6px;
        background: var(--input-bg);
        color: var(--text);
        font-size: 14px;
        font-family: ui-monospace, 'Fira Code', monospace;
        outline: none;
        transition: border-color 0.15s;
      }
      .peasy-color-hex-input:focus {
        border-color: var(--input-focus);
        box-shadow: 0 0 0 2px color-mix(in srgb, var(--input-focus) 20%, transparent);
      }
      .peasy-color-rows { display: flex; flex-direction: column; gap: 6px; }
      .peasy-color-row {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 6px 10px;
        background: var(--ribbon);
        border: 1px solid var(--border);
        border-radius: 6px;
      }
      .peasy-color-row-label {
        font-size: 11px;
        font-weight: 700;
        text-transform: uppercase;
        color: var(--muted);
        width: 48px;
        flex-shrink: 0;
      }
      .peasy-color-row-value {
        flex: 1;
        font-size: 13px;
        font-family: ui-monospace, 'Fira Code', monospace;
        color: var(--text);
      }
      .peasy-color-empty { color: var(--muted); font-size: 13px; }
    </style>
    <div class="peasy-color-body">
      <div class="peasy-color-input-row">
        <div class="peasy-color-swatch" id="color-swatch"></div>
        <input class="peasy-color-hex-input" type="text" placeholder="#FF6B35 or FF6B35" maxlength="7" value="${initialHex}" />
      </div>
      <div class="peasy-color-rows" id="color-results">
        <div class="peasy-color-empty">Enter a hex color code above to convert formats</div>
      </div>
    </div>
    ${poweredByHTML(config)}
  `;
  const hexInput = root.querySelector(".peasy-color-hex-input");
  const swatch = root.querySelector("#color-swatch");
  const resultsEl = root.querySelector("#color-results");
  function makeRow(label, value, id) {
    return `
      <div class="peasy-color-row">
        <span class="peasy-color-row-label">${label}</span>
        <span class="peasy-color-row-value" id="${id}">${value}</span>
        <button class="peasy-copy-btn" data-copy-id="${id}">${copyIcon} Copy</button>
      </div>
    `;
  }
  function update() {
    const raw = hexInput.value.trim();
    const hex = raw.startsWith("#") ? raw : `#${raw}`;
    const rgb = parseHex(hex);
    if (!rgb) {
      swatch.style.background = "#f3f4f6";
      resultsEl.innerHTML = raw.length < 3 ? '<div class="peasy-color-empty">Enter a hex color code above to convert formats</div>' : '<div class="peasy-color-empty" style="color:#dc2626;">Invalid hex color \u2014 use format #RRGGBB</div>';
      return;
    }
    const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
    const cleanHex = hex.toUpperCase();
    const rgbStr = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
    const hslStr = `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`;
    swatch.style.background = cleanHex;
    resultsEl.innerHTML = makeRow("HEX", cleanHex, "cv-hex") + makeRow("RGB", rgbStr, "cv-rgb") + makeRow("HSL", hslStr, "cv-hsl");
    resultsEl.querySelectorAll("[data-copy-id]").forEach((btn) => {
      const id = btn.dataset.copyId;
      const valueEl = resultsEl.querySelector(`#${id}`);
      bindCopyButton(btn, valueEl?.textContent || "");
    });
  }
  hexInput.addEventListener("input", update);
  if (initialHex) {
    update();
  }
}

// src/tools/compression-ratio.ts
var ALGOS = [
  { name: "Gzip", ratio: 0.32, color: "#3b82f6" },
  { name: "Brotli", ratio: 0.28, color: "#8b5cf6" },
  { name: "Zstd", ratio: 0.29, color: "#06b6d4" },
  { name: "LZ4", ratio: 0.41, color: "#f59e0b" }
];
function formatSize(mb) {
  if (mb < 1e-3) return `${(mb * 1024 * 1024).toFixed(0)} B`;
  if (mb < 1) return `${(mb * 1024).toFixed(1)} KB`;
  return `${mb.toFixed(2)} MB`;
}
function init18(el, config, opts) {
  const shadow = createShadow(el, config);
  const root = createWidgetRoot(shadow, el, "peasy-compression-ratio");
  root.innerHTML = `
    <style>
      .peasy-cr-body { padding: 14px 16px; }
      .peasy-cr-input-row {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 14px;
        flex-wrap: wrap;
      }
      .peasy-cr-input-label {
        font-size: 13px;
        color: var(--text);
        font-weight: 500;
        flex-shrink: 0;
      }
      .peasy-cr-number-input {
        width: 90px;
        padding: 7px 10px;
        border: 1px solid var(--input-border);
        border-radius: 6px;
        background: var(--input-bg);
        color: var(--text);
        font-size: 14px;
        font-family: inherit;
        outline: none;
        transition: border-color 0.15s;
      }
      .peasy-cr-number-input:focus {
        border-color: var(--input-focus);
        box-shadow: 0 0 0 2px color-mix(in srgb, var(--input-focus) 20%, transparent);
      }
      .peasy-cr-slider {
        flex: 1;
        min-width: 100px;
        accent-color: var(--accent);
      }
      .peasy-cr-algo-rows { display: flex; flex-direction: column; gap: 8px; }
      .peasy-cr-algo-row {
        display: grid;
        grid-template-columns: 60px 1fr 80px;
        align-items: center;
        gap: 10px;
      }
      .peasy-cr-algo-name { font-size: 13px; font-weight: 600; color: var(--text); }
      .peasy-cr-bar-track {
        height: 10px;
        background: var(--border);
        border-radius: 5px;
        overflow: hidden;
      }
      .peasy-cr-bar-fill {
        height: 100%;
        border-radius: 5px;
        transition: width 0.3s;
      }
      .peasy-cr-algo-size { font-size: 12px; color: var(--muted); text-align: right; }
    </style>
    <div class="peasy-cr-body">
      <div class="peasy-cr-input-row">
        <span class="peasy-cr-input-label">File size:</span>
        <input class="peasy-cr-number-input" type="number" id="cr-size-input" min="0.001" max="10000" step="0.1" value="10" />
        <span class="peasy-cr-input-label">MB</span>
        <input class="peasy-cr-slider" type="range" id="cr-size-slider" min="1" max="100" value="10" step="1" />
      </div>
      <div class="peasy-cr-algo-rows" id="cr-results"></div>
    </div>
    ${poweredByHTML(config)}
  `;
  const sizeInput = root.querySelector("#cr-size-input");
  const sizeSlider = root.querySelector("#cr-size-slider");
  const resultsEl = root.querySelector("#cr-results");
  function renderResults(sizeMB) {
    resultsEl.innerHTML = ALGOS.map((algo) => {
      const compressed = sizeMB * algo.ratio;
      const pct = Math.round(algo.ratio * 100);
      return `
        <div class="peasy-cr-algo-row">
          <span class="peasy-cr-algo-name">${algo.name}</span>
          <div class="peasy-cr-bar-track">
            <div class="peasy-cr-bar-fill" style="width:${pct}%;background:${algo.color};"></div>
          </div>
          <span class="peasy-cr-algo-size">${formatSize(compressed)} (${pct}%)</span>
        </div>
      `;
    }).join("");
  }
  function update() {
    const val = parseFloat(sizeInput.value);
    if (isNaN(val) || val <= 0) {
      return;
    }
    renderResults(val);
  }
  sizeInput.addEventListener("input", () => {
    sizeSlider.value = String(Math.min(100, parseFloat(sizeInput.value) || 10));
    update();
  });
  sizeSlider.addEventListener("input", () => {
    sizeInput.value = sizeSlider.value;
    update();
  });
  renderResults(10);
}

// src/core.ts
var RENDERERS = {
  // Layer 1
  format: init,
  tool: init2,
  convert: init3,
  compare: init4,
  glossary: init5,
  gallery: init6,
  guide: init7,
  usecase: init8,
  badge: init9,
  search: init10,
  // Layer 2
  interactive: init11,
  // Layer 3
  wordcount: init12,
  encode: init13,
  hash: init14,
  preview: init15,
  minify: init16,
  color: init17,
  ratio: init18
};
function initAll(config) {
  const elements = document.querySelectorAll(`[${config.attribute}]`);
  elements.forEach((el) => {
    if (el.shadowRoot) return;
    const widgetType = el.getAttribute(config.attribute);
    if (!widgetType) return;
    const renderer = RENDERERS[widgetType];
    if (!renderer) return;
    const opts = parseWidgetOptions(el);
    if (widgetType === "badge") {
      renderer(el, config, opts);
    } else {
      lazyInit(el, () => renderer(el, config, opts));
    }
  });
}
function maybeInit(el, config) {
  if (!el.hasAttribute(config.attribute) || el.shadowRoot) return;
  const widgetType = el.getAttribute(config.attribute);
  if (!widgetType) return;
  const renderer = RENDERERS[widgetType];
  if (!renderer) return;
  const opts = parseWidgetOptions(el);
  if (widgetType === "badge") {
    renderer(el, config, opts);
  } else {
    lazyInit(el, () => renderer(el, config, opts));
  }
}
(function bootstrap() {
  const config = define_INJECTED_CONFIG_default;
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => initAll(config));
  } else {
    initAll(config);
  }
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType !== Node.ELEMENT_NODE) return;
        const el = node;
        maybeInit(el, config);
        el.querySelectorAll?.(`[${config.attribute}]`).forEach((child) => {
          maybeInit(child, config);
        });
      });
    });
  });
  observer.observe(document.body || document.documentElement, {
    childList: true,
    subtree: true
  });
})();
