<template>
  <section id="hero" class="section hero-section">
    <div>
      <h1 class="hero-title">
        Cosmin Stefan<br />
        <span style="color: #ffb347;">Bancescu</span>
      </h1>
      <p class="hero-subtitle">Full Stack Developer</p>
      <div class="hero-description">
        <p>Sviluppatore Full Stack specializzato in <strong>Vue/Nuxt</strong> e <strong>TypeScript</strong>,
          con solida esperienza in backend <strong>PHP/Laravel</strong>.
          Esperto in brand identity, e-commerce e software gestionali.</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { gsap } from 'gsap';
import InteractiveButton from '../common/InteractiveButton.vue'; // Importa il componente bottone

const emit = defineEmits(['scrollToSection']);

const openEmail = () => {
  window.location.href = 'mailto:stefanoo2013@gmail.com?subject=Contatto&body=Ciao, ti scrivo dal tuo portfolio...';
};

const callPhone = () => {
  window.location.href = 'tel:3248722735';
};

const animateHero = () => {
  const tl = gsap.timeline();
  tl.from('.hero-title', { opacity: 0, y: 100, duration: 1.2, ease: 'power3.out' })
    .from('.hero-subtitle', { opacity: 0, y: 50, duration: 1.0, ease: 'power2.out' }, '-=0.8')
    .from('.hero-description', { opacity: 0, y: 50, duration: 1.0, ease: 'power2.out' }, '-=0.6')
    .from('.contact-item', { opacity: 0, y: 30, duration: 0.8, stagger: 0.2, ease: 'power2.out' }, '-=0.5')
    .from('.interactive-btn', { opacity: 0, scale: 0.8, duration: 0.6, ease: 'back.out(1.7)' }, '-=0.3');
};

onMounted(() => {
  animateHero();
});
</script>

<style scoped>
/* Stili specifici della sezione Hero */
.hero-section {
  text-align: center;
  color: white;
  min-height: 100vh;
  padding: 80px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 10;
}

.hero-title {
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 900;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  line-height: 1.1;
}

.hero-subtitle {
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  font-weight: 300;
  margin-bottom: 30px;
  opacity: 0.9;
}

.hero-description {
  max-width: 800px;
  font-size: 1.2rem;
  line-height: 1.6;
  margin: 0 auto 40px;
  background: rgba(255, 255, 255, 0.1);
  padding: 30px;
  border-radius: 20px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.contact-info {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  margin-top: 40px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 10px;
  background: rgba(255, 255, 255, 0.15);
  padding: 15px 25px;
  border-radius: 50px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  cursor: pointer;
  color: white; /* Assicurati che il testo sia visibile */
}

.contact-item i {
  color: #ffb347; /* Icon color */
}

.contact-item:hover {
  background: rgba(255, 255, 255, 0.25);
  transform: translateY(-5px);
}

@media (max-width: 768px) {
  .hero-description {
    padding: 20px;
    font-size: 1rem;
  }
  .contact-info {
    flex-direction: column;
    align-items: center;
  }
}
</style>