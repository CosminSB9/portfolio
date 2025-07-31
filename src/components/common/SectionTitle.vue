<template>
  <h2 class="section-title fade-in">{{ text }}</h2>
</template>

<script setup lang="ts">
import { defineProps, onMounted, nextTick } from 'vue';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const props = defineProps({
  text: {
    type: String,
    required: true
  }
});

onMounted(() => {
  nextTick(() => {
    // Applica animazione solo al titolo di questa istanza
    gsap.fromTo(document.querySelector(`#${gsap.utils.toArray('.section-title').find(el => el.textContent === props.text)?.parentElement?.parentElement?.id} .section-title`),
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: document.querySelector(`#${gsap.utils.toArray('.section-title').find(el => el.textContent === props.text)?.parentElement?.parentElement?.id}`),
          start: 'top 80%',
          toggleActions: 'play none none none',
        }
      }
    );
  });
});
</script>

<style scoped>
/* Stili comuni per i titoli di sezione */
.section-title {
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 800;
  text-align: center;
  margin-bottom: 60px;
  color: #333;
  position: relative;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 4px;
  background: linear-gradient(90deg, #f5903d, #ff6b35);
  border-radius: 2px;
}

/* Animazione base per il titolo (gestita da GSAP) */
.fade-in {
  opacity: 0;
  transform: translateY(50px);
}
</style>