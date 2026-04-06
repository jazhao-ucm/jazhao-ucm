// Custom cursor
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0;
let rafId = null;

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const coarsePointer = window.matchMedia('(pointer: coarse)').matches;

if (cursor && ring && !prefersReducedMotion && !coarsePointer) {
  document.addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;

    if (rafId !== null) return;

    rafId = requestAnimationFrame(() => {
      cursor.style.transform = `translate(${mx - 4}px, ${my - 4}px)`;
      rafId = null;
    });
  });

  function animateRing() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.transform = `translate(${rx - 16}px, ${ry - 16}px)`;
    requestAnimationFrame(animateRing);
  }

  animateRing();
} else {
  // Avoid extra animation work when unsupported or unnecessary.
  document.body.style.cursor = 'auto';
  if (cursor) cursor.style.display = 'none';
  if (ring) ring.style.display = 'none';
}

// Scroll reveal (skip observer when reduced motion: CSS already shows content)
const reveals = document.querySelectorAll('.reveal');
if (prefersReducedMotion) {
  reveals.forEach(el => el.classList.add('visible'));
} else if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 60);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  reveals.forEach(el => observer.observe(el));
} else {
  reveals.forEach(el => el.classList.add('visible'));
}

// Week-based theming and active nav state.
const themes = {
  '1': { bg: '#1C1F3B', bgSoft: '#8B8FA8', bgMid: '#2E3153', surface: '#252948', ink: '#E8E4D9', muted: '#5C6070', accent: '#8B8FA8', accentDark: '#E8E4D9', line: 'rgba(92, 96, 112, 0.42)', textSoft: '#5C6070' },
  '2': { bg: '#2C3A47', bgSoft: '#95A5A6', bgMid: '#3D4B57', surface: '#364450', ink: '#E8E4D9', muted: '#8A9BA8', accent: '#95A5A6', accentDark: '#E8E4D9', line: 'rgba(138, 155, 168, 0.4)', textSoft: '#8A9BA8' },
  '3': { bg: '#1a1a2e', bgSoft: '#4A90D9', bgMid: '#16213e', surface: '#212744', ink: '#E8E4D9', muted: '#3A4A6B', accent: '#4A90D9', accentDark: '#E8E4D9', line: 'rgba(58, 74, 107, 0.42)', textSoft: '#3A4A6B' },
  '4': { bg: '#2C1810', bgSoft: '#E8A87C', bgMid: '#4B2A1A', surface: '#362016', ink: '#E8E4D9', muted: '#8B5A3A', accent: '#E8A87C', accentDark: '#D4752A', line: 'rgba(139, 90, 58, 0.42)', textSoft: '#8B5A3A' },
  '5': { bg: '#2A1F0E', bgSoft: '#C4A265', bgMid: '#3D2B13', surface: '#332615', ink: '#E8E4D9', muted: '#8B7355', accent: '#C4A265', accentDark: '#4A7C59', line: 'rgba(139, 115, 85, 0.42)', textSoft: '#8B7355' },
  '6': { bg: '#1B2A4A', bgSoft: '#FF6B35', bgMid: '#243966', surface: '#233355', ink: '#E8E4D9', muted: '#4A5A7A', accent: '#FF6B35', accentDark: '#F7C59F', line: 'rgba(74, 90, 122, 0.42)', textSoft: '#4A5A7A' },
  '7': { bg: '#1C3329', bgSoft: '#B8962E', bgMid: '#274739', surface: '#223C30', ink: '#E8E4D9', muted: '#3A5C4A', accent: '#B8962E', accentDark: '#E8E4D9', line: 'rgba(58, 92, 74, 0.42)', textSoft: '#3A5C4A' },
  '8': { bg: '#1C1C1C', bgSoft: '#F4B942', bgMid: '#2A2A2A', surface: '#252525', ink: '#E8E8E8', muted: '#4A4A4A', accent: '#F4B942', accentDark: '#E8E8E8', line: 'rgba(74, 74, 74, 0.45)', textSoft: '#4A4A4A' },
  '9': { bg: '#2A1A16', bgSoft: '#C4856A', bgMid: '#3A241F', surface: '#35221D', ink: '#E8DDD5', muted: '#6B4A42', accent: '#C4856A', accentDark: '#8C5E52', line: 'rgba(107, 74, 66, 0.42)', textSoft: '#6B4A42' },
  '10': { bg: '#2A2420', bgSoft: '#C4A882', bgMid: '#3A332D', surface: '#342D28', ink: '#E8E4D9', muted: '#8B7355', accent: '#C4A882', accentDark: '#7A8FA6', line: 'rgba(139, 115, 85, 0.42)', textSoft: '#8B7355' },
  '11': { bg: '#1C1408', bgSoft: '#D4A017', bgMid: '#2D210E', surface: '#261C0C', ink: '#E8E4D9', muted: '#6B5A2A', accent: '#D4A017', accentDark: '#C4856A', line: 'rgba(107, 90, 42, 0.42)', textSoft: '#6B5A2A' },
  '12': { bg: '#0A1628', bgSoft: '#006994', bgMid: '#132538', surface: '#122033', ink: '#E8E4D9', muted: '#1A3A4A', accent: '#006994', accentDark: '#2D4A22', line: 'rgba(26, 58, 74, 0.42)', textSoft: '#1A3A4A' }
};

function ensureHoverCaptions() {
  const slots = document.querySelectorAll('.photo-slot');
  slots.forEach(slot => {
    const img = slot.querySelector('img');
    if (!img) return;

    // Reuse the finalized two-line copy already stored in title attributes.
    const captionRaw = img.getAttribute('title');
    if (!captionRaw) return;

    if (slot.querySelector('.photo-hover-caption')) return;

    const normalizedCaption = captionRaw.replace(/&#10;/g, '\n');
    const lines = normalizedCaption.split('\n').map(line => line.trim()).filter(Boolean);
    const caption = document.createElement('div');
    caption.className = 'photo-hover-caption';

    const lineOne = document.createElement('p');
    lineOne.className = 'photo-hover-line-main';
    lineOne.textContent = lines[0] || '';

    const lineTwo = document.createElement('p');
    lineTwo.className = 'photo-hover-line-meta';
    lineTwo.textContent = lines[1] || '';

    caption.appendChild(lineOne);
    caption.appendChild(lineTwo);
    slot.appendChild(caption);
  });
}

ensureHoverCaptions();

const navLinks = Array.from(document.querySelectorAll('.nav-links a'));
const sections = Array.from(document.querySelectorAll('main section[id^="episode"]'));

function applyTheme(episodeNumber) {
  const theme = themes[episodeNumber] || themes['1'];
  const root = document.documentElement;
  root.style.setProperty('--bg', theme.bg);
  root.style.setProperty('--bg-soft', theme.bgSoft);
  root.style.setProperty('--bg-mid', theme.bgMid);
  root.style.setProperty('--surface', theme.surface);
  root.style.setProperty('--ink', theme.ink);
  root.style.setProperty('--muted', theme.muted);
  root.style.setProperty('--accent', theme.accent);
  root.style.setProperty('--accent-dark', theme.accentDark);
  root.style.setProperty('--line', theme.line);
  root.style.setProperty('--text-soft', theme.textSoft);
}

function setActiveNav(episodeId) {
  navLinks.forEach(link => {
    const isActive = link.getAttribute('href') === `#${episodeId}`;
    link.classList.toggle('active', isActive);
  });
}

function activateEpisode(episodeId) {
  const episodeNumber = episodeId.replace('episode', '');
  applyTheme(episodeNumber);
  setActiveNav(episodeId);
}

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    const episodeId = link.getAttribute('href').replace('#', '');
    activateEpisode(episodeId);
  });
});

if ('IntersectionObserver' in window && sections.length > 0) {
  const activeObserver = new IntersectionObserver(entries => {
    const visible = entries
      .filter(entry => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

    if (visible.length > 0) {
      activateEpisode(visible[0].target.id);
    }
  }, {
    threshold: [0.4, 0.6],
    rootMargin: '-20% 0px -35% 0px'
  });

  sections.forEach(section => activeObserver.observe(section));
}

const initialFromHash = window.location.hash.replace('#', '');
if (initialFromHash && initialFromHash.startsWith('episode')) {
  activateEpisode(initialFromHash);
} else {
  activateEpisode('episode1');
}