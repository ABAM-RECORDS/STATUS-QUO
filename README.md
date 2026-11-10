# STATUS QUO. — Charlie | Brisbane, Australia

**Writer, Journalist & Media Personality | Creative Business Development**  
Publication: [cheerscharlie.substack.com](https://cheerscharlie.substack.com/)

---

## 🗂️ Site Architecture

1. **Home / About & Contact** (`index.html`):
   - Focus: Writer, journalist, and media personality with business development experience in creative industries.
   - Location: **Brisbane, Australia**.
   - Bio, manifesto, focus specs, and portrait (`charlie_avatar.png`).
   - Contact channels with Instagram (`@cheers.charliee`) and one-click email copy (`abam.enquiries@gmail.com`).
   - Clean teaser cards linking to Portfolio and Blog.

2. **Portfolio Page** (`portfolio.html`):
   - Subtitle: **"Video content i've written or produced."**
   - Pure video showcase of live event video productions and creative motion clips.
   - Hover to preview silently, click to open full-screen with audio.
   - Distraction-free presentation: captions and index numbers removed.
   - Fullscreen Lightbox viewer with keyboard arrow navigation (<kbd>←</kbd>, <kbd>→</kbd>, <kbd>Esc</kbd>).

3. **Blog / Dispatches Page** (`blog.html`):
   - **Full On-Site Reader**: All 7 essays ripped directly from [cheerscharlie.substack.com](https://cheerscharlie.substack.com/) with complete text, images, and formatting.
   - Readers can read the entire articles on the site without being redirected away.
   - Features smooth back-to-feed transition, previous/next dispatch navigation, and URL hash routing (e.g. `blog.html#attending-a-bible-meet`).
   - Integrated newsletter subscription widget at the bottom of each essay.
   - Stored in [posts-data.js](file:///D:/WEBSITE%202/posts-data.js) for zero-latency, offline-capable reading.

---

## 🌓 Black Mode ↔ White Mode

- Toggle switch in the sticky navigation header (`BLK` / `WHT`).
- Press <kbd>T</kbd> anywhere on the page to toggle themes instantly.
- Theme preference persists across all pages via `localStorage`.

---

## 📍 Brisbane Time Integration

- Live ticking clock in the footer displaying real-time Australian Eastern Time (`Australia/Brisbane`).
