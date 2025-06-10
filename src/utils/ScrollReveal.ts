
// Este script es para animar la aparición de elementos cuando se hace scroll

export const initScrollReveal = () => {
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  
  const reveal = () => {
    for (let i = 0; i < revealElements.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = revealElements[i].getBoundingClientRect().top;
      const elementVisible = 150;
      
      if (elementTop < windowHeight - elementVisible) {
        revealElements[i].classList.add("active");
      } else {
        revealElements[i].classList.remove("active");
      }
    }
  };
  
  window.addEventListener("scroll", reveal);
  // Para llamar la función una vez cuando carga la página
  reveal();
};
