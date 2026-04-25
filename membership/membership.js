/* ============================================================
   DELIZA WELLNESS SPA — package.js
   Navbar + hamburger + scroll logic
   ============================================================ */

document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.querySelector(".nav-links");
  const navbar = document.querySelector(".navbar");
  const navItems = navLinks ? navLinks.querySelectorAll("a") : [];

  /* =========================
     OPEN / CLOSE MENU
     ========================= */
  function openMenu() {
    hamburger.classList.add("active");
    navLinks.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeMenu() {
    hamburger.classList.remove("active");
    navLinks.classList.remove("open");
    document.body.style.overflow = "";
  }

  function toggleMenu() {
    const isOpen = navLinks.classList.contains("open");
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  /* =========================
     HAMBURGER TOGGLE
     ========================= */
  if (hamburger && navLinks && navbar) {
    hamburger.addEventListener("click", function (e) {
      e.stopPropagation();
      toggleMenu();
    });

    /* Close when clicking nav link */
    navItems.forEach(function (link) {
      link.addEventListener("click", function () {
        closeMenu();
      });
    });

    /* Close when clicking outside navbar */
    document.addEventListener("click", function (e) {
      if (!navbar.contains(e.target)) {
        closeMenu();
      }
    });

    /* Prevent menu close when clicking inside nav menu */
    navLinks.addEventListener("click", function (e) {
      e.stopPropagation();
    });

    /* Close on ESC key */
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        closeMenu();
      }
    });

    /* Reset menu when resizing to desktop */
    window.addEventListener("resize", function () {
      if (window.innerWidth > 768) {
        closeMenu();
      }
    });
  }

  /* =========================
     NAVBAR SCROLL EFFECT
     ========================= */
  if (navbar) {
    function handleNavbarScroll() {
      if (window.scrollY > 40) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    }

    window.addEventListener("scroll", handleNavbarScroll);
    handleNavbarScroll();
  }
});