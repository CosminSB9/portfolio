<template>
  <section id="contact" class="section contact-section">
    <div style="text-align: center; color: white;">
      <!-- Rimosso `fade-in` da qui -->
      <SectionTitle text="Lavoriamo Insieme!" />
      <!-- Rimosso `fade-in` da qui -->
      <p class="contact-description">
        Sono sempre aperto a nuove opportunità professionali e progetti interessanti.
        Non esitare a contattarmi!
      </p>
      <div class="contact-buttons-container">
        <!-- Questi pulsanti non hanno classi di animazione nel template -->
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
import SectionTitle from '../common/SectionTitle.vue'; // Aggiunto import del titolo

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
  // Animazione del titolo e descrizione
  gsap.fromTo('.contact-section .section-title, .contact-section .contact-description', { opacity: 0, y: 50 }, {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: 'power2.out',
    stagger: 0.2, // Stagger per il titolo e la descrizione
    scrollTrigger: {
      trigger: '.contact-section',
      start: 'top 80%',
      toggleActions: 'play none none none',
    }
  });

  gsap.fromTo('.contact-buttons-container button', { opacity: 0},{
    opacity: 1,
    scale: 0.9,
    y: 0,
    stagger: 0.1,
    duration: 0.6,
    ease: 'back.out(1.5)',
    scrollTrigger: {
      trigger: '.contact-buttons-container',
      start: 'top 90%',
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
      start: 'top 90%',
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
/* Queste classi sono definite nel main.css e usate da GSAP */
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
