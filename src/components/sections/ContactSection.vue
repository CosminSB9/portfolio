<template>
  <section id="contact" class="section contact-section">
    <div style="text-align: center; color: white;">
      <SectionTitle :text="$t('contact.title')" />
      <p class="contact-description">
        {{ $t('contact.description') }}
      </p>
      <div class="contact-buttons-container">
        <InteractiveButton @click="openEmail" style="background: rgba(255,255,255,0.2);">
          <i class="fas fa-envelope"></i> {{ $t('contact.email_button') }}
        </InteractiveButton>
        <InteractiveButton @click="callPhone" style="background: rgba(255,255,255,0.2);">
          <i class="fas fa-phone"></i> {{ $t('contact.call_button') }}
        </InteractiveButton>
        <InteractiveButton @click="openLinkedIn" style="background: rgba(255,255,255,0.2);">
          <i class="fab fa-linkedin"></i> {{ $t('contact.linkedin_button') }}
        </InteractiveButton>
      </div>
      <div class="additional-info">
        <!-- eslint-disable vue/no-v-html -->
        <p v-html="$t('contact.additional_info.languages')"></p>
        <p style="margin-top: 10px;" v-html="$t('contact.additional_info.hobbies')"></p>
        <p style="margin-top: 10px;" v-html="$t('contact.additional_info.car')"></p>
        <!-- eslint-enable vue/no-v-html -->
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, nextTick } from 'vue';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import InteractiveButton from '../common/InteractiveButton.vue';
import SectionTitle from '../common/SectionTitle.vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const openEmail = () => {
  window.location.href = `mailto:${t('hero.email')}?subject=Contatto&body=Ciao, ti scrivo dal tuo portfolio...`;
};

const callPhone = () => {
  window.location.href = `tel:${t('hero.phone')}`;
};

const openLinkedIn = () => {
  window.open('[https://www.linkedin.com/in/cosmin-stefan-bancescu](https://www.linkedin.com/in/cosmin-stefan-bancescu)', '_blank');
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

  gsap.fromTo('.contact-buttons-container button', {opacity: 0},{
    opacity: 1,
    scale: 0.9,
    stagger: 0.2,
    duration: 0.6,
    ease: 'back.out(1.7)',
    scrollTrigger: {
      trigger: '.contact-buttons-container',
      start: 'top 95%',
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
