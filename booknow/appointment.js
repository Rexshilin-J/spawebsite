closeBtn.addEventListener("click", function () {
  document.body.style.opacity = "0";
  setTimeout(() => {
    window.location.href = "../index.html";
  }, 200);
});