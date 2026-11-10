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
      id: 'clip-01',
      tag: 'LIVE PRODUCTION',
      src: './MY%20EVENTS/SaveClip.App_AQM54qsq0htHnZdYuyEoe65tch8ApF83Sfn44NOok0VPFtt99bKWgdoDoW9UsZRcYVrsmNp2i3sptvMIOfNJJAD6zSNJr3NOJsurGcs.mp4'
    },
    {
      id: 'clip-02',
      tag: 'LIVE PRODUCTION',
      src: './MY%20EVENTS/SaveClip.App_AQOzLVagi5nhQMq9LuCjfjpyCyO4zT4ZWkaN-ozw1k9LLMoaU7iCzRiBu80rD3BtVG2qmpeA0g7Ifx5Zxil-MUYd7pHNOxYE-pK1P2k.mp4'
    },
    {
      id: 'clip-03',
      tag: 'LIVE PRODUCTION',
      src: './MY%20EVENTS/SaveClip.App_AQPOab646wyNT3us49Whj5tzFd2-yxPTnGYDhLkcxn0yduYvGtycm-APyQozK3w348TxIb3I_owbA10wSW6Yz6PZEsuyuTXvO8sOzis.mp4'
    },
    {
      id: 'clip-04',
      tag: 'LIVE PRODUCTION',
      src: './MY%20EVENTS/SaveClip.App_AQON_m1HjPIYS2mocmA60Rp5tCs5ydp_cbrA2o2GnyIoZtDPcK3OskZbwtJQc_ZIKjpOs6X5BvH1K6RHfrUMhy1JsWdYCfwKTrsfKg0.mp4'
    },
    {
      id: 'clip-05',
      tag: 'LIVE PRODUCTION',
      src: './MY%20EVENTS/SaveClip.App_AQOF17mDmsV3EtCe0d_pQMrU4wRiyKXIl_5PIxzIG5NZ_bsv4D7QA-WCEK12renYfmThkrv7YIr_bvFNi6fMebaa5KlqktrT-QWQM98.mp4'
    },
    {
      id: 'clip-06',
      tag: 'LIVE PRODUCTION',
      src: './MY%20EVENTS/SaveClip.App_AQNIBYr2r_RHWHi6z0MFXypETa8q2HLhraz6FXI-k08X4h2Cqh1zAPl73R1ipWDfTZmer831wXLWC95Wgk1wLriDb0ZDvHA_FJGyGAQ.mp4'
    },
    {
      id: 'clip-07',
      tag: 'LIVE PRODUCTION',
      src: './MY%20EVENTS/SaveClip.App_AQPiCW1dnMi6EJiwZMvFbPNbxSzFRKoexFKyqpwcSpYwhEfcd9WozjduIv3lLON2mEl_6PkjjeDE68KqZL8LCsG0RPgRStShNXB4OyA.mp4'
    },
    {
      id: 'clip-08',
      tag: 'LIVE PRODUCTION',
      src: './MY%20EVENTS/SaveClip.App_AQOYdI4FIzRKp5qtnTKIUrYQkwJ8sPsHMFGeg2H6kOX-pxT1aT_WwEwxNcoVX3-p6G0pd-Z29z9VF8iiCP7fXG7r87cfEPptgVTj5XE.mp4'
    },
    {
      id: 'clip-09',
      tag: 'LIVE PRODUCTION',
      src: './MY%20EVENTS/SaveClip.App_AQOczq5cKaxu-Yaf-TSkNj4N6oae3owW77bBN1LkfRGgyu0MfJIqb0kwJr9bqJfDWA8aCGZ9y2N01aPYDtrn2RvT72GnHfamltaaM3g.mp4'
    },
    {
      id: 'clip-10',
      tag: 'LIVE PRODUCTION',
      src: './MY%20EVENTS/SaveClip.App_AQNz6_OjiKt-q1RbER-3ZPCZrgrki1c_1DpLO1xp--RSKvb0kjBQBnDXZETQfHZTwf3Li-SmJbAPKP7XL0yRmZs9ki0ZW7iYFHhfqtcNfw.mp4'
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
    },
    {
      id: 'post-06',
      title: 'Regret, Acceptance, Change, Growth.',
      date: 'MAY 19, 2025',
      readTime: '5 MIN READ',
      link: 'https://cheerscharlie.substack.com/p/regret-acceptance-change-growth',
      excerpt: 'Clearing Out The Vault — This one’s from 2024. After this we move from poetry and get analytical as f*ck! Stay tuned for more pseudo intellectualism and gonzo journo stuff.',
      tag: 'VAULT // MEMOIR'
    },
    {
      id: 'post-07',
      title: 'It’s Almost Winter, Again.',
      date: 'MAY 14, 2025',
      readTime: '4 MIN READ',
      link: 'https://cheerscharlie.substack.com/p/its-almost-winter-again',
      excerpt: 'My relationship with the seasons has been a tumultuous one. Seasonal affective shifts, autumn cooling into winter, and the internal reset that arrives with overcast skies.',
      tag: 'REFLECTIONS'
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
      card.setAttribute('aria-label', 'Play Live Production Video');

      card.innerHTML = `
        <div class="card-media-wrapper video-wrapper">
          <video muted playsinline loop preload="metadata">
            <source src="${item.src}" type="video/mp4">
          </video>
          <span class="card-type-badge">▶ VIDEO</span>
          <span class="card-view-badge" title="Play full size">▶</span>
        </div>
      `;

      // Video hover preview
      const vid = card.querySelector('video');
      card.addEventListener('mouseenter', () => {
        if (vid) vid.play().catch(() => {});
      });
      card.addEventListener('mouseleave', () => {
        if (vid) {
          vid.pause();
          vid.currentTime = 0;
        }
      });

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
      const vid = lbStage.querySelector('video');
      if (vid) vid.pause();
    }
  }

  function updateLightboxContent() {
    const item = currentFilteredItems[activeLightboxIndex];
    if (!item) return;

    if (lbCategory) lbCategory.textContent = item.tag;
    if (lbDownload) lbDownload.href = item.src;

    if (lbStage) {
      lbStage.innerHTML = '';
      const video = document.createElement('video');
      video.src = item.src;
      video.controls = true;
      video.autoplay = true;
      video.playsInline = true;
      lbStage.appendChild(video);
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
     6. RENDER BLOG DISPATCHES & FULL ON-SITE READER (RIPPED SUBSTACK)
     ========================================================================== */
  const articlesFeed = document.getElementById('articles-feed');
  const feedView = document.getElementById('blog-feed-view');
  const readerView = document.getElementById('article-reader-view');
  const readerBackBtn = document.getElementById('reader-back-btn');
  const readerBackBottomBtn = document.getElementById('reader-back-bottom-btn');
  const readerTag = document.getElementById('reader-tag');
  const readerDate = document.getElementById('reader-date');
  const readerTitle = document.getElementById('reader-title');
  const readerReadTime = document.getElementById('reader-read-time');
  const readerBody = document.getElementById('reader-body');
  const readerSubstackLink = document.getElementById('reader-substack-link');
  const readerPrevBtn = document.getElementById('reader-prev-btn');
  const readerNextBtn = document.getElementById('reader-next-btn');

  // Load ripped posts from posts-data.js, fallback to blogPostsData
  const activePosts = (typeof SUBSTACK_POSTS !== 'undefined' && Array.isArray(SUBSTACK_POSTS) && SUBSTACK_POSTS.length > 0)
    ? SUBSTACK_POSTS 
    : blogPostsData;

  let currentPostIndex = -1;

  function renderArticles() {
    if (!articlesFeed) return;
    articlesFeed.innerHTML = '';

    activePosts.forEach((post, index) => {
      const card = document.createElement('article');
      card.className = 'article-card';
      card.setAttribute('tabindex', '0');
      card.setAttribute('role', 'button');
      card.setAttribute('aria-label', `Read ${post.title}`);

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
            <button class="btn-minimal sm open-post-btn" type="button">
              <span>Read Essay</span>
              <span class="btn-arrow">→</span>
            </button>
            <a href="${post.link}" target="_blank" rel="noopener noreferrer" class="btn-ghost sm" title="Open original on Substack">
              <span>Substack</span>
              <span class="btn-arrow">↗</span>
            </a>
          </div>
        </div>
      `;

      // Click card to open full ripped article
      card.addEventListener('click', (e) => {
        // Don't intercept if clicking direct Substack link
        if (e.target.closest('a[target="_blank"]')) return;
        openArticle(index);
      });

      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openArticle(index);
        }
      });

      articlesFeed.appendChild(card);
    });
  }

  function openArticle(indexOrSlug) {
    if (!readerView || !feedView) return;

    let index = -1;
    if (typeof indexOrSlug === 'number') {
      index = indexOrSlug;
    } else if (typeof indexOrSlug === 'string') {
      const cleanSlug = indexOrSlug.replace(/^#/, '');
      index = activePosts.findIndex(p => p.id === cleanSlug);
    }

    if (index < 0 || index >= activePosts.length) return;

    currentPostIndex = index;
    const post = activePosts[index];

    // Populate Reader View
    if (readerTag) readerTag.textContent = post.tag;
    if (readerDate) readerDate.textContent = post.date;
    if (readerTitle) readerTitle.textContent = post.title;
    if (readerReadTime) readerReadTime.textContent = post.readTime;
    if (readerSubstackLink) readerSubstackLink.href = post.link;

    if (readerBody) {
      // Injected full ripped HTML
      readerBody.innerHTML = post.body || `<p>${post.excerpt}</p>`;
    }

    // Configure Prev/Next buttons
    if (readerPrevBtn) {
      if (index > 0) {
        readerPrevBtn.style.display = 'inline-flex';
        readerPrevBtn.onclick = () => openArticle(index - 1);
      } else {
        readerPrevBtn.style.display = 'none';
      }
    }

    if (readerNextBtn) {
      if (index < activePosts.length - 1) {
        readerNextBtn.style.display = 'inline-flex';
        readerNextBtn.onclick = () => openArticle(index + 1);
      } else {
        readerNextBtn.style.display = 'none';
      }
    }

    // Switch view
    feedView.classList.add('hidden');
    readerView.classList.add('active');
    readerView.setAttribute('aria-hidden', 'false');

    // Update URL hash without breaking history
    if (window.location.hash !== `#${post.id}`) {
      history.pushState(null, '', `#${post.id}`);
    }

    // Scroll smoothly to top of article
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  function closeArticle() {
    if (!readerView || !feedView) return;
    readerView.classList.remove('active');
    readerView.setAttribute('aria-hidden', 'true');
    feedView.classList.remove('hidden');

    // Clear hash
    if (window.location.hash) {
      history.pushState(null, '', window.location.pathname);
    }

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  if (readerBackBtn) readerBackBtn.addEventListener('click', closeArticle);
  if (readerBackBottomBtn) readerBackBottomBtn.addEventListener('click', closeArticle);

  // Check URL hash on page load
  function checkHashRoute() {
    if (window.location.hash) {
      const slug = window.location.hash.replace(/^#/, '');
      const match = activePosts.find(p => p.id === slug);
      if (match) {
        openArticle(slug);
      }
    } else if (readerView && readerView.classList.contains('active')) {
      closeArticle();
    }
  }

  window.addEventListener('hashchange', checkHashRoute);

  if (articlesFeed) {
    renderArticles();
    checkHashRoute();
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
