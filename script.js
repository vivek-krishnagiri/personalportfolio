document.addEventListener("DOMContentLoaded", () => {
  const introCanvas = document.getElementById('intro-canvas');
  const mainCanvas = document.getElementById('main-canvas');
  const getToKnowMeBtn = document.getElementById('get-to-know-me');
  const navLinks = document.querySelectorAll('nav ul li a');

  getToKnowMeBtn.addEventListener('click', () => {
    introCanvas.classList.add('hidden');
    mainCanvas.classList.remove('hidden');
    mainCanvas.classList.add('fade-in');
  });

  // Smooth scrolling for navigation links
  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      targetSection.scrollIntoView({ behavior: "smooth" });
    });
  });

  // Fade-in effect for main content
  mainCanvas.classList.add('fade-in');
});
