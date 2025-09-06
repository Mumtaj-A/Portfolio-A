document.addEventListener('DOMContentLoaded', () => {
    // Navbar Toggler
    const navToggler = document.querySelector('.nav-toggler');
    const navMenu = document.querySelector('.nav-menu');
    
    navToggler.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggler.classList.toggle('active');
        navToggler.setAttribute('aria-expanded', navMenu.classList.contains('active'));
    });

    // Close menu when clicking a link on mobile
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            if (window.innerWidth <= 767) {
                navMenu.classList.remove('active');
                navToggler.classList.remove('active');
                navToggler.setAttribute('aria-expanded', 'false');
            }
            // Smooth scroll to section
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 60,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Set active link on click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // Set active link on scroll
    const sections = document.querySelectorAll('.section');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 60;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // Typed.js for typing effect
    if (document.querySelector('.typing')) {
        new Typed('.typing', {
            strings: ['Web Designer', 'Web Developer', 'Coder'],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true
        });
    }
 });
    
 // --- Toggle Mode Here ---
  const USE_AJAX = true; // ✅ true = show popup, false = redirect to thankyou.html

  const form = document.getElementById("contact-form");
  const thankYou = document.getElementById("thank-you");

  if (USE_AJAX) {
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      const formData = new FormData(form);

      fetch("/", { method: "POST", body: formData })
        .then(() => {
          form.style.display = "none";
          thankYou.style.display = "block";
        })
        .catch(error => alert("Oops! Something went wrong: " + error));
    });
  }