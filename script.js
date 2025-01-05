// Simple scroll animation effect for the call-to-action button
document.addEventListener("DOMContentLoaded", () => {
  const ctaButton = document.querySelector('.cta-button');
  ctaButton.addEventListener('click', () => {
    window.scrollTo({ top: document.querySelector("#product").offsetTop, behavior: "smooth" });
  });
});
