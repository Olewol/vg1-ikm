// ─── NAVIGATION ───
function initNav() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

// ─── MOBILE SIDEBAR ───
function initMobile() {
  const hamburger = document.querySelector('.hamburger');
  const sidebar = document.querySelector('.sidebar');
  const overlay = document.querySelector('.overlay');

  if (!hamburger) return;

  hamburger.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    overlay.classList.toggle('open');
  });

  overlay?.addEventListener('click', () => {
    sidebar.classList.remove('open');
    overlay.classList.remove('open');
  });
}

// ─── TABS ───
function initTabs() {
  document.querySelectorAll('.tab-bar').forEach(bar => {
    bar.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const group = btn.dataset.tab;
        const container = bar.closest('.tab-group');

        bar.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        container.querySelectorAll('.tab-content').forEach(content => {
          content.classList.toggle('active', content.dataset.tabContent === group);
        });
      });
    });
  });
}

// ─── COPY CODE ───
function initCopyButtons() {
  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const pre = btn.closest('.code-block').querySelector('pre');
      navigator.clipboard.writeText(pre.innerText).then(() => {
        btn.textContent = '✓ Kopiert';
        btn.classList.add('copied');
        setTimeout(() => {
          btn.textContent = 'Kopier';
          btn.classList.remove('copied');
        }, 2000);
      });
    });
  });
}

// ─── SMOOTH HIGHLIGHT ACTIVE SECTION ───
function initScrollSpy() {
  const sections = document.querySelectorAll('[data-section]');
  if (!sections.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.dataset.section;
        document.querySelectorAll('.sub-nav-link').forEach(l => {
          l.classList.toggle('active', l.dataset.target === id);
        });
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(s => observer.observe(s));
}

// ─── INIT ───
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initMobile();
  initTabs();
  initCopyButtons();
  initScrollSpy();
});

// ─── SIDEBAR HTML (shared) ───
function renderSidebar() {
  return `
  <aside class="sidebar">
    <div class="sidebar-logo">
      <div class="logo-tag">VG1 IKM – Teknologiforståelse</div>
      <h1>Virtuelle maskiner & Nettverk</h1>
    </div>
    <nav class="sidebar-nav">
      <div class="nav-section-label">Oversikt</div>
      <a href="index.html" class="nav-link">
        <span class="icon">🏠</span> Startside
      </a>
      <a href="kunnskapstest.html" class="nav-link">
        <span class="icon">🧠</span> Kunnskapstest
      </a>
      <a href="dokumentasjonsmal.html" class="nav-link">
        <span class="icon">📎</span> Dokumentasjonsmal
      </a>

      <div class="nav-section-label">Dager</div>
      <a href="dag1.html" class="nav-link">
        <span class="icon">📖</span> Dag 1 – Virtualisering
      </a>
      <a href="dag2.html" class="nav-link">
        <span class="icon">🌐</span> Dag 2 – Nettverk
      </a>
      <a href="dag3.html" class="nav-link">
        <span class="icon">👥</span> Dag 3 – Brukeradmin
      </a>

      <div class="nav-section-label">Ressurser</div>
      <a href="ad-guide.html" class="nav-link">
        <span class="icon">🖥️</span> AD-guide (DC01)
      </a>
      <a href="oppslagsverk.html" class="nav-link">
        <span class="icon">📚</span> Oppslagsverk
      </a>
    </nav>
    <div class="sidebar-footer">
      VG1 IKM · Teknologiforståelse<br>
      Basert på IKM01-01 (Udir)
    </div>
  </aside>
  <div class="overlay"></div>`;
}
