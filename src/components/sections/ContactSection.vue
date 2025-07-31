<template>
  <section id="contact" class="section contact-section">
    <div style="text-align: center; color: white;">
      <h2 class="section-title fade-in" style="color: white;">Lavoriamo Insieme!</h2>
      <p class="fade-in contact-description">
        Sono sempre aperto a nuove opportunità professionali e progetti interessanti.
        Non esitare a contattarmi!
      </p>
      <div class="contact-buttons-container">
        <InteractiveButton @click="openEmail" style="background: rgba(255,255,255,0.2);">
          <i class="fas fa-envelope"></i> Invia Email
        </InteractiveButton>
        <InteractiveButton @click="callPhone" style="background: rgba(255,255,255,0.2);">
          <i class="fas fa-phone"></i> Chiamami
        </InteractiveButton>
        <InteractiveButton @click="openLinkedIn" style="background: rgba(255,255,255,0.2);">
          <i class="fab fa-linkedin"></i> LinkedIn
        </InteractiveButton>
      </div>
      <div class="additional-info">
        <p><strong>Lingue:</strong> Italiano (Madrelingua) • Rumeno (Madrelingua) • Inglese (Avanzato)</p>
        <p style="margin-top: 10px;"><strong>Hobby:</strong> Videogiochi • Nuoto • Fumetti • Automobili</p>
        <p style="margin-top: 10px;"><i class="fas fa-car"></i> Automunito - Patente B</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, nextTick } from 'vue';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import InteractiveButton from '../common/InteractiveButton.vue';

const openEmail = () => {
  window.location.href = 'mailto:stefanoo2013@gmail.com?subject=Contatto&body=Ciao, ti scrivo dal tuo portfolio...';
};

const callPhone = () => {
  window.location.href = 'tel:3248722735';
};

const openLinkedIn = () => {
  window.open('https://www.linkedin.com/in/cosmin-stefan-bancescu', '_blank');
};

const setupContactScrollAnimations = () => {
  const fadeInEls = document.querySelectorAll('#contact .fade-in');
  fadeInEls.forEach(el => {
    gsap.fromTo(el, { opacity: 0, y: 50 }, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 80%',
        toggleActions: 'play none none none',
      }
    });
  });

  gsap.from('.contact-buttons-container button', {
    opacity: 0,
    scale: 0.8,
    y: 30,
    stagger: 0.2,
    duration: 0.6,
    ease: 'back.out(1.7)',
    scrollTrigger: {
      trigger: '.contact-buttons-container',
      start: 'top 80%',
      toggleActions: 'play none none reverse',
    }
  });

  gsap.from('.additional-info p', {
    opacity: 0,
    y: 20,
    stagger: 0.1,
    duration: 0.5,
    ease: 'power1.out',
    scrollTrigger: {
      trigger: '.additional-info',
      start: 'top 80%',
      toggleActions: 'play none none reverse',
    }
  });
};

onMounted(() => {
  nextTick(() => {
    setupContactScrollAnimations();
  });
});
</script>

<style scoped>
/* Stili specifici della sezione Contact */
.contact-section {
  background: linear-gradient(135deg, #f5903d 0%, #ff6b35 100%);
  min-height: 100vh;
  padding: 80px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 10;
}

.contact-description {
  font-size: 1.3rem;
  margin-bottom: 40px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.contact-buttons-container {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}

.additional-info {
  margin-top: 40px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  backdrop-filter: blur(10px);
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.additional-info p {
  margin: 0;
  line-height: 1.6;
}

/* Animazioni base per GSAP ScrollTrigger */
.fade-in {
  opacity: 0;
  transform: translateY(50px);
}

@media (max-width: 768px) {
  .contact-description {
    font-size: 1.1rem;
  }
  .contact-buttons-container {
    flex-direction: column;
    align-items: center;
  }
  .additional-info {
    padding: 15px;
  }
}
</style>