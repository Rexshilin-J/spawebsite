/* ============================================================
   DELIZA WELLNESS SPA — treatement.js
   Navbar + scroll logic — matches index.html pattern exactly
============================================================ */

document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.querySelector('.nav-links');
  const navbar    = document.querySelector('.navbar');

  /* --- Hamburger toggle --- */
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function (e) {
      e.stopPropagation();
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('open');
    });

    /* Close on outside click */
    document.addEventListener('click', function (e) {
      if (!navbar.contains(e.target)) {
        hamburger.classList.remove('active');
        navLinks.classList.remove('open');
      }
    });

    /* Close when any nav link is tapped */
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        hamburger.classList.remove('active');
        navLinks.classList.remove('open');
      });
    });
  }

  /* --- Navbar scroll shrink --- */
  window.addEventListener('scroll', function () {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  });
});

const tabs = document.querySelectorAll(".tab");
  const sections = document.querySelectorAll(".tab-content-section");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 180;
      const sectionHeight = section.offsetHeight;

      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }
    });

    tabs.forEach(tab => {
      tab.classList.remove("active");
      if (tab.getAttribute("href") === "#" + current) {
        tab.classList.add("active");
      }
    });
  });