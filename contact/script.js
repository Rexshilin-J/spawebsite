document.addEventListener("DOMContentLoaded", function () {

  const hamburger = document.getElementById("hamburger");
  const navLinks = document.querySelector(".nav-links");
  const navbar = document.querySelector(".navbar");

  /* =========================
     HAMBURGER TOGGLE
     ========================= */
  if (hamburger && navLinks) {

    hamburger.addEventListener("click", function (e) {
      e.stopPropagation();
      hamburger.classList.toggle("active");
      navLinks.classList.toggle("open");
    });

    // click outside → close menu
    document.addEventListener("click", function (e) {
      if (!navbar.contains(e.target)) {
        hamburger.classList.remove("active");
        navLinks.classList.remove("open");
      }
    });

    // click link → close menu
    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navLinks.classList.remove("open");
      });
    });
  }

  /* =========================
     NAVBAR SCROLL EFFECT
     ========================= */
  window.addEventListener("scroll", function () {
    if (window.scrollY > 40) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

});