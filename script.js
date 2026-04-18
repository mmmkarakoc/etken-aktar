// Form gönderme
function formGonder(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button');
  btn.textContent = '✓ Mesajınız iletildi!';
  btn.style.background = '#2d6a4f';
  setTimeout(() => {
    btn.textContent = 'Gönder';
    btn.style.background = '';
    e.target.reset();
  }, 3000);
}

// Nav scroll efekti
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > 50) {
    nav.style.boxShadow = '0 2px 20px rgba(26,61,43,0.1)';
  } else {
    nav.style.boxShadow = 'none';
  }
});

// Sayfa yüklenince kartlar yumuşak giriş
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.feature-card, .product-card, .about-card');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
  });
});
