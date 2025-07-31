// utils/gsapAnimations.ts
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// Example: A generic fade-in animation function
export const setupFadeInAnimation = (selector: string, startTrigger = 'top 80%') => {
  const elements = document.querySelectorAll(selector);
  elements.forEach(el => {
    gsap.fromTo(el, { opacity: 0, y: 50 }, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start: startTrigger,
        toggleActions: 'play none none none',
         onEnter: () => el.classList.remove('fade-in') // Rimuovi la classe se GSAP la gestisce
      }
    });
  });
};

// ... altre funzioni di animazione generiche