document.addEventListener("DOMContentLoaded", () => {
  const introCanvas = document.getElementById('intro-canvas');
  const mainCanvas = document.getElementById('main-canvas');
  const getToKnowMeBtn = document.getElementById('get-to-know-me');
  const navLinks = document.querySelectorAll('nav ul li a');

  // Function to trigger confetti explosion
  function triggerConfetti() {
    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.6 }
    });
  }

  getToKnowMeBtn.addEventListener('click', () => {
    introCanvas.classList.add('hidden');
    mainCanvas.classList.remove('hidden');
    mainCanvas.classList.add('fade-in');

    // Trigger confetti explosion
    triggerConfetti();
  });

  // Smooth scrolling for navigation links
  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      const offset = 80; // Adjusted value for better spacing
      const elementPosition = targetSection.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    });
  });

  // Fade-in effect for main content
  mainCanvas.classList.add('fade-in');
});
