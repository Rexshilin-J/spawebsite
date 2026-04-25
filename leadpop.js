(function () {
  var style = document.createElement("style");

  style.innerHTML = `
    .lead-overlay {
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.62);
      backdrop-filter: blur(7px);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 18px;
      opacity: 0;
      visibility: hidden;
      transition: 0.3s ease;
      z-index: 9999;
    }

    .lead-overlay.lead-visible {
      opacity: 1;
      visibility: visible;
    }

    .lead-popup {
      width: min(1050px, 96vw);
      max-height: 92vh;
      overflow-y: auto;
      background: #fffaf3;
      border-radius: 26px;
      display: grid;
      grid-template-columns: 0.9fr 1.1fr;
      position: relative;
      box-shadow: 0 30px 80px rgba(0,0,0,0.35);
      transform: translateY(24px) scale(0.96);
      transition: 0.3s ease;
    }

    .lead-overlay.lead-visible .lead-popup {
      transform: translateY(0) scale(1);
    }

    .lead-close {
      position: absolute;
      top: 18px;
      right: 18px;
      width: 42px;
      height: 42px;
      border-radius: 50%;
      border: none;
      background: #ffffff;
      color: #163724;
      font-size: 26px;
      cursor: pointer;
      z-index: 5;
      box-shadow: 0 8px 24px rgba(0,0,0,0.18);
    }

    .lead-left {
      min-height: 560px;
      padding: 42px;
      background: linear-gradient(135deg, #0b3a17 0%, #163724 55%, #2b4d35 100%);
      color: #fff;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
    }

    .lead-offer-badge {
      display: inline-flex;
      width: fit-content;
      padding: 10px 18px;
      border-radius: 999px;
      background: rgba(255,255,255,0.92);
      color: #163724;
      font: 700 13px/1 Poppins, sans-serif;
      letter-spacing: 0.08em;
      margin-bottom: 20px;
    }

    .lead-title {
      font-family: "Cormorant Garamond", serif;
      font-size: clamp(42px, 4vw, 62px);
      line-height: 0.98;
      font-weight: 500;
      margin-bottom: 16px;
    }

    .lead-sub {
      font: 400 16px/1.7 Poppins, sans-serif;
      max-width: 420px;
      color: rgba(255,255,255,0.88);
    }

    .lead-right {
      padding: 54px 48px;
      background: #fffaf3;
    }

    .lead-form-label {
      font: 700 13px/1 Poppins, sans-serif;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: #8a6f43;
      margin-bottom: 12px;
    }

    .lead-form-title {
      font-family: "Cormorant Garamond", serif;
      font-size: clamp(36px, 4vw, 54px);
      line-height: 1.02;
      color: #163724;
      margin-bottom: 18px;
    }

    .lead-text {
      font: 400 15px/1.7 Poppins, sans-serif;
      color: #66715f;
      margin-bottom: 28px;
    }

    .lead-form {
      display: grid;
      gap: 14px;
    }

    .form-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 14px;
    }

    .lead-form input,
    .lead-form select,
    .lead-form textarea {
      width: 100%;
      border: 1px solid #d6cdbd;
      border-radius: 13px;
      background: #fff;
      color: #163724;
      font: 500 14px Poppins, sans-serif;
      outline: none;
    }

    .lead-form input,
    .lead-form select {
      height: 50px;
      padding: 0 15px;
    }

    .lead-form select {
      padding-right: 42px;
      cursor: pointer;
      appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      background-image:
        linear-gradient(45deg, transparent 50%, #163724 50%),
        linear-gradient(135deg, #163724 50%, transparent 50%);
      background-position:
        calc(100% - 22px) 22px,
        calc(100% - 15px) 22px;
      background-size: 7px 7px, 7px 7px;
      background-repeat: no-repeat;
    }

    .lead-form textarea {
      min-height: 100px;
      padding: 14px 15px;
      resize: vertical;
    }

    .lead-form input:focus,
    .lead-form select:focus,
    .lead-form textarea:focus {
      border-color: #163724;
      box-shadow: 0 0 0 4px rgba(22,55,36,0.08);
    }

    .lead-submit {
      height: 52px;
      border: none;
      border-radius: 14px;
      background: #163724;
      color: #fff;
      font: 700 14px/1 Poppins, sans-serif;
      letter-spacing: 0.08em;
      cursor: pointer;
      margin-top: 6px;
    }

    .success-popup {
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.62);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 10000;
      padding: 18px;
    }

    .success-box {
      width: min(380px, 92vw);
      background: #fffaf3;
      border-radius: 20px;
      padding: 36px 26px;
      text-align: center;
      box-shadow: 0 24px 70px rgba(0,0,0,0.35);
    }

    .success-box h2 {
      font-family: "Cormorant Garamond", serif;
      font-size: 34px;
      color: #163724;
      margin-bottom: 10px;
    }

    .success-box p {
      font: 400 15px/1.7 Poppins, sans-serif;
      color: #66715f;
    }

    @media (max-width: 900px) {
      .lead-popup {
        grid-template-columns: 1fr;
      }

      .lead-left {
        min-height: 300px;
        padding: 34px 26px;
      }

      .lead-right {
        padding: 34px 26px;
      }

      .lead-title {
        font-size: 40px;
      }

      .lead-form-title {
        font-size: 36px;
      }
    }

    @media (max-width: 520px) {
      .lead-overlay {
        padding: 10px;
        align-items: flex-start;
      }

      .lead-popup {
        width: 100%;
        max-height: calc(100vh - 20px);
        border-radius: 20px;
      }

      .lead-left {
        min-height: 220px;
        padding: 28px 18px;
      }

      .lead-right {
        padding: 28px 18px;
      }

      .form-grid {
        grid-template-columns: 1fr;
      }

      .lead-close {
        top: 12px;
        right: 12px;
      }

      .lead-title {
        font-size: 32px;
      }

      .lead-form-title {
        font-size: 30px;
      }
    }
  `;

  document.head.appendChild(style);

  var div = document.createElement("div");

  div.innerHTML = `
    <div class="lead-overlay" id="leadOverlay">
      <div class="lead-popup">
        <button class="lead-close" id="leadClose" aria-label="Close">&times;</button>

        <div class="lead-left">
          <span class="lead-offer-badge">25% OFF FIRST VISIT</span>
          <h2 class="lead-title">A Softer Start<br>to Your Wellness</h2>
          <p class="lead-sub">
            New guests receive 25% off their first Deliza Wellness Spa experience.
          </p>
        </div>

        <div class="lead-right">
          <p class="lead-form-label">Book Appointment</p>
          <h3 class="lead-form-title">Reserve an Appointment</h3>
          <p class="lead-text">All fields required. Your data is never shared.</p>

          <form class="lead-form" id="leadForm">
            <div class="form-grid">
              <input type="text" name="name" placeholder="Full Name" required>
              <input type="tel" name="phone" placeholder="Phone Number" required>
            </div>

            <select name="branch" required>
              <option value="" selected disabled>Select Branch</option>
              <option>Chikkajala</option>
              <option>Devanahalli</option>
            </select>

            <select name="treatment" required>
              <option value="" selected disabled>Select Treatment</option>
              <option>Swedish Massage</option>
              <option>Deep Tissue</option>
              <option>Ayurvedic Abhyanga</option>
              <option>Hot Stone Therapy</option>
              <option>Aromatherapy</option>
              <option>Body Scrub & Wrap</option>
            </select>

            <div class="form-grid">
              <input type="date" name="date" required>
              <input type="time" name="time" required>
            </div>

            <textarea name="notes" placeholder="Additional Notes"></textarea>

            <button type="submit" class="lead-submit">BOOK APPOINTMENT</button>
          </form>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(div.firstElementChild);

  var overlay = document.getElementById("leadOverlay");
  var closeBtn = document.getElementById("leadClose");
  var form = document.getElementById("leadForm");

  function goHome() {
    window.location.href = "./index.html";
  }

  function openPopup() {
    overlay.classList.add("lead-visible");
    document.body.style.overflow = "hidden";
  }

  function closePopup() {
    overlay.classList.remove("lead-visible");
    document.body.style.overflow = "";
  }

  var bookBtns = document.querySelectorAll(
    ".btn-book, .mobile-book-btn, .btn-outline, .btn-filled, .btn-view, .btn-filled-sm, .btn-white"
  );

  bookBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();

      setTimeout(function () {
        openPopup();
      }, 5000);
    });
  });

  closeBtn.addEventListener("click", function () {
    closePopup();
    goHome();
  });

  overlay.addEventListener("click", function (e) {
    if (e.target === overlay) closePopup();
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closePopup();
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    var data = {
      name: form.name.value.trim(),
      phone: form.phone.value.trim(),
      branch: form.branch.value,
      treatment: form.treatment.value,
      date: form.date.value,
      time: form.time.value,
      notes: form.notes.value.trim()
    };

    console.log("Booking Data:", data);

    closePopup();

    var success = document.createElement("div");
    success.innerHTML = `
      <div class="success-popup">
        <div class="success-box">
          <h2>Booking Completed</h2>
          <p>Your booking is successfully completed.<br>We will get in touch soon.</p>
        </div>
      </div>
    `;

    document.body.appendChild(success.firstElementChild);

    setTimeout(function () {
      goHome();
    }, 2200);
  });
})();