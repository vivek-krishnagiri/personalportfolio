document.addEventListener("DOMContentLoaded", () => {
  const introCanvas = document.getElementById('intro-canvas');
  const mainCanvas = document.getElementById('main-canvas');
  const getToKnowMeBtn = document.getElementById('get-to-know-me');
  const navLinks = document.querySelectorAll('nav ul li a');

  /* Project Media Hover Effect */
  const projectMediaElements = document.querySelectorAll('.project-card img, .project-card video');

  projectMediaElements.forEach(media => {
    media.addEventListener('mouseenter', () => {
      media.style.transform = 'scale(1.05)';
      media.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
    });

    media.addEventListener('mouseleave', () => {
      media.style.transform = 'scale(1)';
      media.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    });
  });

  // Function to trigger confetti explosion outward from the button to the edges of the screen
  function triggerConfetti() {
    const buttonRect = getToKnowMeBtn.getBoundingClientRect();
    const buttonCenterX = buttonRect.left + buttonRect.width / 2;
    const buttonCenterY = buttonRect.top + buttonRect.height / 2;

    // Multiple bursts for a large explosion effect
    for (let i = 0; i < 3; i++) {
      setTimeout(() => {
        confetti({
          particleCount: 100,
          spread: 160,
          startVelocity: 40,
          origin: {
            x: buttonCenterX / window.innerWidth,
            y: buttonCenterY / window.innerHeight
          },
          colors: ['#FF5733', '#33FF57', '#3357FF', '#FFD700']
        });
      }, i * 200);
    }
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
