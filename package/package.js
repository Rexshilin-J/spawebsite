/* ============================================================
   DELIZA WELLNESS SPA — package.js
   Navbar + hamburger + scroll logic
   ============================================================ */

document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.querySelector(".nav-links");
  const navbar = document.querySelector(".navbar");

  /* =========================
     HAMBURGER TOGGLE
     ========================= */
  if (hamburger && navLinks && navbar) {
    hamburger.addEventListener("click", function (e) {
      e.stopPropagation();
      hamburger.classList.toggle("active");
      navLinks.classList.toggle("open");
    });

    document.addEventListener("click", function (e) {
      if (!navbar.contains(e.target)) {
        hamburger.classList.remove("active");
        navLinks.classList.remove("open");
      }
    });

    navLinks.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        hamburger.classList.remove("active");
        navLinks.classList.remove("open");
      });
    });
  }

  /* =========================
     NAVBAR SCROLL EFFECT
     ========================= */
  if (navbar) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 40) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });
  }
});

