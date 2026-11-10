/**
 * STATUS QUO. — Charlie | Brisbane, Australia
 * Writer, Journalist & Media Personality | Creative Business Development
 * Interactive Scripts: Black/White Dual Theme, Video Portfolio, Lightbox & Substack Articles
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     1. PORTFOLIO DATA (Live Event Video Productions - Clean / No Captions)
     ========================================================================== */
  const portfolioData = [
    {
      id: 'yt-01',
      youtubeId: 'aqnHk99bU10',
      title: 'Music Video — HEX TASTE (Feat Gordz1)',
      tag: 'MUSIC VIDEO',
      isShort: false,
      thumb: 'https://img.youtube.com/vi/aqnHk99bU10/hqdefault.jpg',
      url: 'https://youtu.be/aqnHk99bU10'
    },
    {
      id: 'yt-02',
      youtubeId: 'xtyk7kYZnIc',
      title: 'LNC ROULETTE #1 Promo Video',
      tag: 'PROMO // PRODUCTION',
      isShort: false,
      thumb: 'https://img.youtube.com/vi/xtyk7kYZnIc/hqdefault.jpg',
      url: 'https://youtu.be/xtyk7kYZnIc'
    },
    {
      id: 'yt-03',
      youtubeId: '2T-4M01uAg4',
      title: 'Dani Enli Interview',
      tag: 'INTERVIEW // SHORTS',
      isShort: true,
      thumb: 'https://img.youtube.com/vi/2T-4M01uAg4/hqdefault.jpg',
      url: 'https://youtube.com/shorts/2T-4M01uAg4'
    },
    {
      id: 'yt-04',
      youtubeId: 'qwd63Jl4sDI',
      title: '4orttune Interview 2025',
      tag: 'INTERVIEW // SHORTS',
      isShort: true,
      thumb: 'https://img.youtube.com/vi/qwd63Jl4sDI/hqdefault.jpg',
      url: 'https://youtube.com/shorts/qwd63Jl4sDI'
    },
    {
      id: 'yt-05',
      youtubeId: '3hEzxi0jeSU',
      title: 'Cult Shotta Interview 2025',
      tag: 'INTERVIEW // SHORTS',
      isShort: true,
      thumb: 'https://img.youtube.com/vi/3hEzxi0jeSU/hqdefault.jpg',
      url: 'https://youtube.com/shorts/3hEzxi0jeSU'
    },
    {
      id: 'yt-06',
      youtubeId: '4VwbKWQOwg8',
      title: 'Living room callout promo',
      tag: 'PROMO // SHORTS',
      isShort: true,
      thumb: 'https://img.youtube.com/vi/4VwbKWQOwg8/hqdefault.jpg',
      url: 'https://youtube.com/shorts/4VwbKWQOwg8'
    },
    {
      id: 'yt-07',
      youtubeId: 'c1pEN37aM_0',
      title: 'Fokelore interview',
      tag: 'INTERVIEW // SHORTS',
      isShort: true,
      thumb: 'https://img.youtube.com/vi/c1pEN37aM_0/hqdefault.jpg',
      url: 'https://youtube.com/shorts/c1pEN37aM_0'
    },
    {
      id: 'yt-08',
      youtubeId: 'YHPG4uMQc18',
      title: 'Jonny Chopps Interview',
      tag: 'INTERVIEW // SHORTS',
      isShort: true,
      thumb: 'https://img.youtube.com/vi/YHPG4uMQc18/hqdefault.jpg',
      url: 'https://youtube.com/shorts/YHPG4uMQc18'
    }
  ];

  /* ==========================================================================
     2. BLOG / DISPATCHES DATA (From cheerscharlie.substack.com)
     ========================================================================== */
  const blogPostsData = [
    {
      id: 'post-01',
      title: 'Attending A Bible Meet.',
      date: 'AUG 27, 2026',
      readTime: '4 MIN READ',
      link: 'https://cheerscharlie.substack.com/p/attending-a-bible-meet',
      excerpt: 'A spontaneous journalistic endeavour. Stepping outside the bubble into religious community spaces with an open mind, acute curiosity, and gonzo observation.',
      tag: 'CULTURE // GONZO'
    },
    {
      id: 'post-02',
      title: 'The Price Of Invulnerability.',
      date: 'JUL 23, 2026',
      readTime: '6 MIN READ',
      link: 'https://cheerscharlie.substack.com/p/the-price-of-invulnerability',
      excerpt: 'Invulnerable, but at what cost? Examining the modern emotional armor we construct to survive online culture, and the unexpected disconnection that follows.',
      tag: 'PHILOSOPHY'
    },
    {
      id: 'post-03',
      title: 'Nobody Dances Anymore.',
      date: 'MAY 24, 2026',
      readTime: '3 MIN READ',
      link: 'https://cheerscharlie.substack.com/p/nobody-dances-anymore',
      excerpt: 'Matching your own freak, creating your own world (short and sweet). Why our nightlife turned into aesthetic self-surveillance and how to reclaim raw physical presence.',
      tag: 'NIGHTLIFE // ESSAY'
    },
    {
      id: 'post-04',
      title: 'A Handjob’s A Blowjob, If You Use Enough Lube.',
      date: 'MAR 05, 2026',
      readTime: '5 MIN READ',
      link: 'https://cheerscharlie.substack.com/p/a-handjobs-a-blowjob-if-you-use-enough',
      excerpt: 'My most self-indulgent dumpster fire yet — 3 tips for rationalising this shit show. An unfiltered exploration of modern romantic delusion and coping mechanisms.',
      tag: 'SATIRE // LIFE-STYLE'
    },
    {
      id: 'post-05',
      title: 'The Lost Art Of Surfing The Web.',
      date: 'DEC 05, 2025',
      readTime: '7 MIN READ',
      link: 'https://cheerscharlie.substack.com/p/the-lost-art-of-surfing-the-web-why',
      excerpt: 'Three ways the internet has evolved. From chaotic hyperlink rabbit holes and serendipitous discovery to the algorithmic monoculture of today.',
      tag: 'INTERNET CULTURE'
    }
  ];

  /* ==========================================================================
     3. THEME TOGGLE: BLACK MODE <-> WHITE MODE
     ========================================================================== */
  const themeToggleBtn = document.getElementById('theme-toggle');
  const htmlEl = document.documentElement;
  const STORAGE_KEY = 'statusquo_theme';

  function initTheme() {
    const savedTheme = localStorage.getItem(STORAGE_KEY);
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      setTheme('dark');
    }
  }

  function setTheme(theme) {
    htmlEl.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
  }

  function toggleTheme() {
    const current = htmlEl.getAttribute('data-theme') || 'dark';
    const next = current === 'dark' ? 'light' : 'dark';
    setTheme(next);
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', toggleTheme);
  }

  // Keyboard shortcut: Press 'T' or 't' to toggle theme
  window.addEventListener('keydown', (e) => {
    if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;
    if (e.key === 't' || e.key === 'T') {
      toggleTheme();
    }
  });

  initTheme();

  /* ==========================================================================
     4. RENDER VIDEO PORTFOLIO GRID (CLEAN - NO CAPTIONS)
     ========================================================================== */
  const portfolioGrid = document.getElementById('portfolio-grid');
  let currentFilteredItems = [...portfolioData];

  function renderPortfolio() {
    if (!portfolioGrid) return;
    portfolioGrid.innerHTML = '';
    currentFilteredItems = [...portfolioData];

    portfolioData.forEach((item, index) => {
      const card = document.createElement('article');
      card.className = 'portfolio-card clean-media-card';
      card.setAttribute('data-id', item.id);
      card.setAttribute('tabindex', '0');
      card.setAttribute('role', 'button');
      card.setAttribute('aria-label', `Play ${item.title}`);

      card.innerHTML = `
        <div class="card-media-wrapper yt-wrapper">
          <img src="${item.thumb}" alt="${item.title}" loading="lazy" class="yt-thumb-img">
          <span class="card-type-badge">${item.tag}</span>
          <div class="card-view-badge" title="Watch Video">▶</div>
        </div>
      `;

      // Trigger Lightbox
      card.addEventListener('click', () => {
        openLightbox(index);
      });
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openLightbox(index);
        }
      });

      portfolioGrid.appendChild(card);
    });
  }

  if (portfolioGrid) {
    renderPortfolio();
  }

  /* ==========================================================================
     5. LIGHTBOX MODAL (CLEAN - NO CAPTIONS)
     ========================================================================== */
  const lightbox = document.getElementById('lightbox');
  const lbStage = document.getElementById('lb-stage');
  const lbCategory = document.getElementById('lb-category');
  const lbDownload = document.getElementById('lb-download');
  const lbCloseBtn = document.getElementById('lb-close');
  const lbBackdrop = document.getElementById('lightbox-backdrop');
  const lbPrevBtn = document.getElementById('lb-prev');
  const lbNextBtn = document.getElementById('lb-next');

  let activeLightboxIndex = 0;

  function openLightbox(index) {
    if (!lightbox || !currentFilteredItems.length) return;
    activeLightboxIndex = (index >= 0 && index < currentFilteredItems.length) ? index : 0;
    updateLightboxContent();
    lightbox.classList.add('active');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('active');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lbStage) {
      lbStage.innerHTML = ''; // Instantly halts YouTube playback
    }
  }

  function updateLightboxContent() {
    const item = currentFilteredItems[activeLightboxIndex];
    if (!item) return;

    if (lbCategory) lbCategory.textContent = item.tag;
    if (lbDownload) {
      lbDownload.href = item.url;
      lbDownload.textContent = 'Watch on YouTube ↗';
    }

    if (lbStage) {
      lbStage.innerHTML = '';
      const iframe = document.createElement('iframe');
      iframe.className = item.isShort ? 'yt-player-frame yt-shorts-frame' : 'yt-player-frame yt-video-frame';
      iframe.src = `https://www.youtube-nocookie.com/embed/${item.youtubeId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`;
      iframe.title = item.title;
      iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
      iframe.allowFullscreen = true;
      lbStage.appendChild(iframe);
    }
  }

  function nextLightbox() {
    activeLightboxIndex = (activeLightboxIndex + 1) % currentFilteredItems.length;
    updateLightboxContent();
  }

  function prevLightbox() {
    activeLightboxIndex = (activeLightboxIndex - 1 + currentFilteredItems.length) % currentFilteredItems.length;
    updateLightboxContent();
  }

  if (lbCloseBtn) lbCloseBtn.addEventListener('click', closeLightbox);
  if (lbBackdrop) lbBackdrop.addEventListener('click', closeLightbox);
  if (lbNextBtn) lbNextBtn.addEventListener('click', nextLightbox);
  if (lbPrevBtn) lbPrevBtn.addEventListener('click', prevLightbox);

  window.addEventListener('keydown', (e) => {
    if (!lightbox || !lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextLightbox();
    if (e.key === 'ArrowLeft') prevLightbox();
  });

  /* ==========================================================================
     6. RENDER SUBSTACK ARTICLES FEED
     ========================================================================== */
  const articlesFeed = document.getElementById('articles-feed');

  // Load posts from posts-data.js, fallback to blogPostsData
  const activePosts = (typeof SUBSTACK_POSTS !== 'undefined' && Array.isArray(SUBSTACK_POSTS) && SUBSTACK_POSTS.length > 0)
    ? SUBSTACK_POSTS 
    : blogPostsData;

  function renderArticles() {
    if (!articlesFeed) return;
    articlesFeed.innerHTML = '';

    activePosts.forEach((post) => {
      const card = document.createElement('article');
      card.className = 'article-card';
      card.setAttribute('tabindex', '0');
      card.setAttribute('role', 'button');
      card.setAttribute('aria-label', `Read ${post.title} on Substack`);

      card.innerHTML = `
        <div>
          <div class="article-meta">
            <span class="mono-tag">${post.tag}</span>
            <span class="mono-tag">${post.date}</span>
          </div>
          <h3 class="article-title">${post.title}</h3>
          <p class="article-excerpt">${post.excerpt}</p>
        </div>
        <div class="article-footer">
          <span class="mono-tag">${post.readTime}</span>
          <div class="article-actions-row">
            <a href="${post.link}" target="_blank" rel="noopener noreferrer" class="btn-minimal sm" title="Read on Substack">
              <span>Read on Substack</span>
              <span class="btn-arrow">↗</span>
            </a>
          </div>
        </div>
      `;

      // Click card to open original essay on Substack
      card.addEventListener('click', () => {
        window.open(post.link, '_blank', 'noopener,noreferrer');
      });

      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          window.open(post.link, '_blank', 'noopener,noreferrer');
        }
      });

      articlesFeed.appendChild(card);
    });
  }

  if (articlesFeed) {
    renderArticles();
  }

  /* ==========================================================================
     7. COPY EMAIL TO CLIPBOARD
     ========================================================================== */
  const copyBtn = document.getElementById('copy-email-btn');
  const copyBtnText = document.getElementById('copy-btn-text');
  const emailVal = 'abam.enquiries@gmail.com';

  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(emailVal).then(() => {
        if (copyBtnText) copyBtnText.textContent = 'Copied!';
        copyBtn.style.borderColor = 'var(--text-primary)';
        setTimeout(() => {
          if (copyBtnText) copyBtnText.textContent = 'Copy';
          copyBtn.style.borderColor = '';
        }, 2000);
      }).catch(err => {
        console.error('Failed to copy email:', err);
      });
    });
  }

  /* ==========================================================================
     8. LIVE CLOCK (BRISBANE TIME: AEST / UTC+10)
     ========================================================================== */
  const liveClockEl = document.getElementById('live-clock');

  function updateClock() {
    if (!liveClockEl) return;
    const now = new Date();
    try {
      const timeStr = now.toLocaleTimeString('en-AU', {
        timeZone: 'Australia/Brisbane',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
      liveClockEl.textContent = `BRISBANE TIME: ${timeStr}`;
    } catch (e) {
      const timeStr = now.toLocaleTimeString();
      liveClockEl.textContent = `BRISBANE TIME: ${timeStr}`;
    }
  }

  updateClock();
  setInterval(updateClock, 1000);

  /* ==========================================================================
     9. MOBILE NAVIGATION DRAWER
     ========================================================================== */
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.toggle('open');
      mobileDrawer.setAttribute('aria-hidden', String(!isOpen));
      mobileToggle.classList.toggle('active');
    });

    mobileDrawer.querySelectorAll('.mobile-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
        mobileDrawer.setAttribute('aria-hidden', 'true');
        mobileToggle.classList.remove('active');
      });
    });
  }

  /* ==========================================================================
     10. BACK TO TOP BUTTON
     ========================================================================== */
  const backToTopBtn = document.getElementById('back-to-top');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  console.log('STATUS QUO. — Charlie | Video Portfolio & Substack Dispatches loaded.');
});
