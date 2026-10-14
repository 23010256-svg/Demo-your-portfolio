document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // EXTRA 1: Dark Mode Toggle with LocalStorage
  // ==========================================
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const savedTheme = localStorage.getItem('portfolio-theme');

  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggleBtn.textContent = '☀️ Light Mode';
  }

  themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    
    themeToggleBtn.textContent = isDark ? '☀️ Light Mode' : '🌙 Dark Mode';
    localStorage.setItem('portfolio-theme', isDark ? 'dark' : 'light');
  });


  // ==========================================
  // EXTRA 2: Dynamic Project Filtering
  // ==========================================
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectItems = document.querySelectorAll('.project-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update Active Button State
      filterBtns.forEach(b => {
        b.classList.remove('btn-primary', 'active');
        b.classList.add('btn-outline-primary');
      });
      btn.classList.remove('btn-outline-primary');
      btn.classList.add('btn-primary', 'active');

      const filterValue = btn.getAttribute('data-filter');

      // Filter Cards
      projectItems.forEach(item => {
        const category = item.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });


  // ==========================================
  // EXTRA 3: Contact Form Validation
  // ==========================================
  const contactForm = document.getElementById('contact-form');
  const formAlert = document.getElementById('form-alert');

  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (contactForm.checkValidity()) {
      formAlert.className = 'mt-3 alert alert-success';
      formAlert.textContent = 'Thank you! Your message has been sent successfully.';
      formAlert.classList.remove('d-none');
      contactForm.reset();
      contactForm.classList.remove('was-validated');
    } else {
      contactForm.classList.add('was-validated');
      formAlert.className = 'mt-3 alert alert-danger';
      formAlert.textContent = 'Please fix the errors in the form above.';
      formAlert.classList.remove('d-none');
    }
  });


  // ==========================================
  // EXTRA 4: Back-to-Top Button
  // ==========================================
  const backToTopBtn = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopBtn.style.display = 'block';
    } else {
      backToTopBtn.style.display = 'none';
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

});
