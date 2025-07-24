// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});

// Add scroll effect to navigation
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > 100) {
    nav.style.background = 'rgba(255, 255, 255, 0.98)';
    nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
  } else {
    nav.style.background = 'rgba(255, 255, 255, 0.95)';
    nav.style.boxShadow = 'none';
  }
});

// Animate service cards on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px',
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe service cards
document.querySelectorAll('.service-card').forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(30px)';
  card.style.transition = 'all 0.6s ease';
  observer.observe(card);
});

// Form submission
document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault();
  const button = this.querySelector('.submit-btn');
  const originalText = button.textContent;

  button.textContent = 'Booking...';
  button.style.background = 'linear-gradient(45deg, #4ecdc4, #44a08d)';

  setTimeout(() => {
    button.textContent = 'Appointment Requested! ✨';
    button.style.background = 'linear-gradient(45deg, #56ab2f, #a8e6cf)';

    setTimeout(() => {
      button.textContent = originalText;
      button.style.background = 'linear-gradient(45deg, #ff6b6b, #feca57)';
      this.reset();
    }, 3000);
  }, 2000);
});
