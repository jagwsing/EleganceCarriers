const menuToggle = document.getElementById('menuToggle');
const siteNav = document.getElementById('siteNav');
const form = document.getElementById('quoteForm');
const formMessage = document.getElementById('formMessage');
const year = document.getElementById('year');

if (year) year.textContent = String(new Date().getFullYear());

if (menuToggle && siteNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  siteNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.checkValidity()) {
      formMessage.textContent = 'Please complete all required fields.';
      formMessage.style.color = '#9c2f2f';
      return;
    }

    const pickup = document.getElementById('pickup').value.trim();
    const delivery = document.getElementById('delivery').value.trim();
    const vehicle = document.getElementById('vehicle').value.trim();

    formMessage.textContent = `Thanks. Quote request received for ${vehicle} from ${pickup} to ${delivery}. We will contact you shortly.`;
    formMessage.style.color = '#0e2a47';
    form.reset();
  });
}

const revealItems = document.querySelectorAll('.card, .steps article, .route, .hero-card');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealItems.forEach((el) => {
  el.classList.add('reveal');
  observer.observe(el);
});
