/* ============================================================
   DELIZA WELLNESS SPA — script.js
   Navbar + hamburger + active menu + floating contact
   ============================================================ */

document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.querySelector(".nav-links");
  const navAnchors = document.querySelectorAll(".nav-links a");
  const floatingContact = document.querySelector(".floating-contact");
  const heroSection = document.querySelector(".location-hero, .hero-section");

  /* ============================================================
     1. HAMBURGER TOGGLE
     ============================================================ */
  if (hamburger && navLinks) {
    hamburger.addEventListener("click", function (e) {
      e.stopPropagation();
      hamburger.classList.toggle("active");
      navLinks.classList.toggle("open");
    });

    /* close menu when clicking any nav link */
    navAnchors.forEach(function (link) {
      link.addEventListener("click", function () {
        hamburger.classList.remove("active");
        navLinks.classList.remove("open");
      });
    });

    /* close menu when clicking outside */
    document.addEventListener("click", function (e) {
      const clickedInsideNavbar =
        (navbar && navbar.contains(e.target)) ||
        hamburger.contains(e.target) ||
        navLinks.contains(e.target);

      if (!clickedInsideNavbar) {
        hamburger.classList.remove("active");
        navLinks.classList.remove("open");
      }
    });

    /* prevent menu from closing when clicking inside menu */
    navLinks.addEventListener("click", function (e) {
      e.stopPropagation();
    });
  }

  /* ============================================================
     2. ACTIVE MENU LINK
     ============================================================ */
  const currentPage = window.location.pathname.split("/").pop().toLowerCase();

  navAnchors.forEach(function (link) {
    const linkHref = link.getAttribute("href");

    if (!linkHref) return;

    const cleanHref = linkHref.split("/").pop().toLowerCase();

    if (
      cleanHref === currentPage ||
      (currentPage === "" && (cleanHref === "index.html" || cleanHref === "./"))
    ) {
      link.classList.add("active");
    }
  });

  /* ============================================================
     3. NAVBAR SCROLL EFFECT
     ============================================================ */
  function handleNavbarScroll() {
    if (!navbar) return;

    if (window.scrollY > 20) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }

  window.addEventListener("scroll", handleNavbarScroll);
  handleNavbarScroll();

  /* ============================================================
     4. FLOATING CONTACT SHOW AFTER HERO
     ============================================================ */
  function handleFloatingContact() {
    if (!floatingContact) return;

    if (!heroSection) {
      floatingContact.classList.add("show");
      return;
    }

    const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
    const scrollTop = window.scrollY;

    if (scrollTop > heroBottom - 80) {
      floatingContact.classList.add("show");
    } else {
      floatingContact.classList.remove("show");
    }
  }

  window.addEventListener("scroll", handleFloatingContact);
  handleFloatingContact();

  /* ============================================================
     5. RESIZE RESET
     ============================================================ */
  function handleResize() {
    if (window.innerWidth > 767) {
      if (hamburger) hamburger.classList.remove("active");
      if (navLinks) navLinks.classList.remove("open");
    }
  }

  window.addEventListener("resize", handleResize);
  handleResize();
});