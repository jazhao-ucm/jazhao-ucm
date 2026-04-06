let activeEpisodeId = '';

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Scroll reveal (skip observer when reduced motion: CSS already shows content)
const reveals = document.querySelectorAll('.reveal');
if (prefersReducedMotion) {
  reveals.forEach(el => el.classList.add('visible'));
} else if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  reveals.forEach(el => observer.observe(el));
} else {
  reveals.forEach(el => el.classList.add('visible'));
}

// Week-based nav active state and CSS theme switching.

function ensureHoverCaptions() {
  const slots = document.querySelectorAll('.photo-slot');
  slots.forEach(slot => {
    const img = slot.querySelector('img');
    if (!img) return;

    // Reuse the finalized two-line copy already stored in title attributes.
    const captionRaw = img.getAttribute('title');
    if (!captionRaw) return;

    if (slot.querySelector('.photo-hover-caption')) return;

    const lines = captionRaw.replace(/&#10;/g, '\n').split('\n').map(line => line.trim()).filter(Boolean);
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
const sectionById = new Map(sections.map(section => [section.id, section]));

let scrollRafId = null;

function setActiveNav(episodeId) {
  navLinks.forEach(link => {
    const isActive = link.getAttribute('href') === `#${episodeId}`;
    link.classList.toggle('active', isActive);
  });
}

function activateEpisode(episodeId) {
  if (episodeId === activeEpisodeId) return;
  activeEpisodeId = episodeId;
  const episodeNumber = episodeId.replace('episode', '');
  document.body.setAttribute('data-episode', episodeNumber);
  setActiveNav(episodeId);
}

navLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const episodeId = link.getAttribute('href').replace('#', '');
    const section = sectionById.get(episodeId);
    if (section) {
      section.scrollIntoView({
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
        block: 'start'
      });
    }
    history.replaceState(null, '', `#${episodeId}`);
    activateEpisode(episodeId);
  });
});

function updateActiveFromScroll() {
  scrollRafId = null;
  if (sections.length === 0) return;

  const targetY = window.innerHeight * 0.38;
  let bestSection = sections[0];
  let bestDistance = Number.POSITIVE_INFINITY;

  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    // Skip sections that are fully above the viewport.
    if (rect.bottom <= 0) return;

    const distance = Math.abs(rect.top - targetY);
    if (distance < bestDistance) {
      bestDistance = distance;
      bestSection = section;
    }
  });

  activateEpisode(bestSection.id);
}

function queueScrollUpdate() {
  if (scrollRafId !== null) return;
  scrollRafId = requestAnimationFrame(updateActiveFromScroll);
}

if (sections.length > 0) {
  window.addEventListener('scroll', queueScrollUpdate, { passive: true });
  window.addEventListener('resize', queueScrollUpdate, { passive: true });
}

const initialFromHash = window.location.hash.replace('#', '');
if (initialFromHash && initialFromHash.startsWith('episode')) {
  activateEpisode(initialFromHash);
} else {
  activateEpisode('episode1');
}

queueScrollUpdate();

window.addEventListener('hashchange', () => {
  const episodeId = window.location.hash.replace('#', '');
  if (sectionById.has(episodeId)) {
    activateEpisode(episodeId);
  }
});