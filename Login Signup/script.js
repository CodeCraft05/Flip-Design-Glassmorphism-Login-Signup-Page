// const card = document.getElementById("authCard");

// // Flip handlers
// document.addEventListener("click", (e) => {
//   const flipBtn = e.target.closest("[data-flip]");
//   if (flipBtn) {
//     const mode = flipBtn.dataset.flip; // "signup" or "login"
//     card.classList.toggle("is-flipped", mode === "signup");

//     // Update aria-hidden for accessibility
//     const front = card.querySelector(".front");
//     const back = card.querySelector(".back");
//     const flipped = card.classList.contains("is-flipped");
//     front.setAttribute("aria-hidden", flipped ? "true" : "false");
//     back.setAttribute("aria-hidden", flipped ? "false" : "true");
//   }

//   // Toggle password visibility
//   const toggle = e.target.closest("[data-toggle-pass]");
//   if (toggle) {
//     const selector = toggle.dataset.togglePass;
//     const input = document.querySelector(selector);
//     if (!input) return;

//     input.type = input.type === "password" ? "text" : "password";
//   }
// });

// // Optional: flip with keyboard (Enter/Space on the link-buttons)
// document.addEventListener("keydown", (e) => {
//   if ((e.key === "Enter" || e.key === " ") && e.target.matches("[data-flip]")) {
//     e.preventDefault();
//     e.target.click();
//   }
// });


const card = document.getElementById("authCard");

// flip
document.addEventListener("click", (e) => {
  if (e.target.closest(".go-signup")) {
    e.preventDefault();
    card.classList.add("is-flipped");
  }

  if (e.target.closest(".go-login")) {
    e.preventDefault();
    card.classList.remove("is-flipped");
  }

  // password toggle (works for both login + signup)
  const t = e.target.closest(".toggle-password");
  if (t) {
    const input = document.querySelector(t.dataset.toggle);
    if (!input) return;

    const icon = t.querySelector("i");
    const isPass = input.type === "password";
    input.type = isPass ? "text" : "password";

    if (icon) {
      icon.className = isPass ? "fa-solid fa-eye-slash" : "fa-solid fa-eye";
    }
  }
});