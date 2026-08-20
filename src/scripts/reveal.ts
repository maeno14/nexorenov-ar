function initReveal(): void {
  const elements = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));
  if (elements.length === 0) return;

  const reveal = (element: HTMLElement): void => {
    element.classList.add('is-visible');
  };

  if (!('IntersectionObserver' in window)) {
    for (const element of elements) reveal(element);
    document.documentElement.dataset.reveal = 'active';
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
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight - 40 && rect.bottom > 0) {
      reveal(element);
    } else {
      observer.observe(element);
    }
  }

  document.documentElement.dataset.reveal = 'active';
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initReveal, { once: true });
} else {
  initReveal();
}
