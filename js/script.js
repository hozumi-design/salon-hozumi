document.addEventListener('DOMContentLoaded', () => {
  initHeroSlider();
});

function initHeroSlider() {
  const hero = document.querySelector('.hero');
  if (!hero) return;

  const slides = hero.querySelectorAll('.hero-slide');
  const pages = hero.querySelectorAll('.hero-page');
  const interval = 5000;
  let current = 0;
  let timer = null;

  function showSlide(index) {
    slides.forEach((slide, i) => slide.classList.toggle('is-active', i === index));
    pages.forEach((page, i) => page.classList.toggle('is-active', i === index));
    current = index;
  }

  function startAutoPlay() {
    timer = setInterval(() => {
      showSlide((current + 1) % slides.length);
    }, interval);
  }

  function resetAutoPlay() {
    clearInterval(timer);
    startAutoPlay();
  }

  pages.forEach((page, i) => {
    page.addEventListener('click', () => {
      showSlide(i);
      resetAutoPlay();
    });
  });

  startAutoPlay();
}
