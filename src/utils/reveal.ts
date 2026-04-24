export function initRevealObserver(scope?: string): void {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  const selector = scope ? `${scope} .reveal` : '.reveal';
  document.querySelectorAll(selector).forEach(el => {
    observer.observe(el);
  });
}

export function initLucideIcons(): void {
  // @ts-ignore - External CDN import
  import('https://unpkg.com/lucide@latest/dist/esm/lucide.js').then((lucide) => {
    lucide.createIcons();
  });
}
