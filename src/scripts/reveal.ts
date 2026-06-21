function initReveal(): void {
  const elements = document.querySelectorAll<HTMLElement>('.reveal');
  if (elements.length === 0) return;

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
  );

  for (const el of elements) {
    observer.observe(el);
  }
}

initReveal();
