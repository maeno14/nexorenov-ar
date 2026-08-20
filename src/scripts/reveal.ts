function initReveal(): void {
  const elements = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));
  if (elements.length === 0) return;

  const pending = new Set(elements);

  const reveal = (element: HTMLElement): void => {
    element.classList.add('is-visible');
    pending.delete(element);
  };

  const revealInViewport = (): void => {
    for (const element of pending) {
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight - 40 && rect.bottom > 0) reveal(element);
    }

    if (pending.size === 0) {
      window.removeEventListener('scroll', revealInViewport);
      window.removeEventListener('resize', revealInViewport);
    }
  };

  if (!('IntersectionObserver' in window)) {
    for (const element of elements) reveal(element);
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          reveal(entry.target as HTMLElement);
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
  );

  for (const element of elements) {
    observer.observe(element);
  }

  window.addEventListener('scroll', revealInViewport, { passive: true });
  window.addEventListener('resize', revealInViewport);
  revealInViewport();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initReveal, { once: true });
} else {
  initReveal();
}
