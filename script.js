/* ===========================
   DELIZA WELLNESS SPA — JS
   =========================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ---- NAVBAR SCROLL ---- */
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (!navbar) return;
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });

  /* ---- HAMBURGER MENU (class-only toggle, no inline styles) ---- */
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.querySelector('.nav-links');

  if (hamburger && navLinks) {

    // Toggle open/close
    hamburger.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = navLinks.classList.contains('open');

      navLinks.classList.toggle('open');
      hamburger.classList.toggle('active');
    });

    // Close on nav link click
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        hamburger.classList.remove('active');
      });
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (!navbar.contains(e.target)) {
        navLinks.classList.remove('open');
        hamburger.classList.remove('active');
      }
    });
  }


  /* ---- FLOATING CONTACT ---- */
  const floatingContact = document.getElementById('floatingContact');
  const heroSection = document.querySelector('.hero');

  if (floatingContact && heroSection) {
    window.addEventListener('scroll', () => {
      const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
      floatingContact.classList.toggle('sticky', window.scrollY >= heroBottom - 140);
    });
  }


  /* ---- SCROLL REVEAL ---- */
  const revealEls = document.querySelectorAll('.reveal-up, .reveal-fade, .reveal-left, .reveal-right');

  if (revealEls.length) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -60px 0px'
    });

    revealEls.forEach(el => {
      revealObserver.observe(el);
      if (el.getBoundingClientRect().top < window.innerHeight) {
        el.classList.add('visible');
      }
    });
  }


  /* ---- COUNTER ANIMATION ---- */
  const statNums = document.querySelectorAll('.stat-num');

  if (statNums.length) {
    const animateCounter = (el) => {
      const target    = parseFloat(el.dataset.target || '0');
      const isDecimal = target % 1 !== 0;
      const duration  = 1800;
      const step      = duration / 60;
      let current     = 0;
      const increment = target / (duration / step);

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        el.textContent = isDecimal ? current.toFixed(1) : Math.floor(current);
      }, step);
    };

    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    statNums.forEach(el => counterObserver.observe(el));
  }


  /* ---- FEATURES MARQUEE ---- */
  const marqueeTrack = document.getElementById('marqueeTrack');

  if (marqueeTrack) {
    // Duplicate items for seamless loop if not already duplicated by HTML
    let scrollAmount = 0;
    const speed = 0.5;

    function autoScrollMarquee() {
      scrollAmount += speed;
      const halfWidth = marqueeTrack.scrollWidth / 2;
      if (scrollAmount >= halfWidth) scrollAmount = 0;
      marqueeTrack.scrollLeft = scrollAmount;
      requestAnimationFrame(autoScrollMarquee);
    }

    requestAnimationFrame(autoScrollMarquee);
  }


  /* ---- SMOOTH ANCHOR SCROLL ---- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (!href || href === '#') return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const navHeight = navbar ? navbar.offsetHeight : 0;
        const top = target.getBoundingClientRect().top + window.scrollY - navHeight - 16;
        window.scrollTo({ top, behavior: 'smooth' });

        // Close mobile menu on anchor click
        if (navLinks) {
          navLinks.classList.remove('open');
          hamburger && hamburger.classList.remove('active');
        }
      }
    });
  });


  /* ---- NAVBAR ACTIVE LINK ---- */
  const sections = document.querySelectorAll('section[id]');
  const links    = document.querySelectorAll('.nav-links a');

  const activateLink = () => {
    let curr = '';
    sections.forEach(section => {
      if (window.scrollY >= section.offsetTop - 100) {
        curr = section.getAttribute('id');
      }
    });

    links.forEach(link => {
      link.style.color = '';
      if (link.getAttribute('href') === '#' + curr) {
        link.style.color = 'var(--green-btn)';
      }
    });
  };

  window.addEventListener('scroll', activateLink);

});


/* ---- FAQ ACCORDION ---- */
const faqCards = document.querySelectorAll('.faq-card');

faqCards.forEach((card) => {
  const question = card.querySelector('.faq-question');
  const answer   = card.querySelector('.faq-answer');
  const icon     = card.querySelector('.faq-icon');

  if (!question) return;

  question.addEventListener('click', () => {
    const isActive = card.classList.contains('active');

    faqCards.forEach((item) => {
      item.classList.remove('active');
      const a = item.querySelector('.faq-answer');
      const i = item.querySelector('.faq-icon');
      if (a) a.style.maxHeight = null;
      if (i) i.textContent = '+';
    });

    if (!isActive) {
      card.classList.add('active');
      if (answer) answer.style.maxHeight = answer.scrollHeight + 'px';
      if (icon)   icon.textContent = '×';
    }
  });
});


/* ---- BENEFIT CARD ANIMATION ---- */
document.querySelectorAll('.benefit-card').forEach(card => {
  card.addEventListener('click', () => {
    const icon = card.querySelector('.icon-box');
    if (!icon) return;
    icon.classList.add('boom');
    setTimeout(() => icon.classList.remove('boom'), 300);
  });
});
