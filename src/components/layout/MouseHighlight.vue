<template>
  <div ref="highlight" class="mouse-highlight"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { gsap } from 'gsap';

const highlight = ref<HTMLElement | null>(null);

const moveHighlight = (e: MouseEvent) => {
  if (highlight.value) {
    gsap.to(highlight.value, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.1, // Mantieni la transizione CSS o usa GSAP per controllo fine
      ease: 'power2.out',
    });
  }
};

onMounted(() => {
  window.addEventListener('mousemove', moveHighlight);
});

onUnmounted(() => {
  window.removeEventListener('mousemove', moveHighlight);
});
</script>

<style scoped>
/* Mouse Highlight */
.mouse-highlight {
  position: fixed;
  width: 400px;
  height: 400px;
  pointer-events: none;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%);
  filter: blur(40px);
  transform: translate(-50%, -50%); /* Centra l'elemento rispetto al cursore */
  mix-blend-mode: screen;
  z-index: 100;
  /* Rimuovi la transition CSS se usi GSAP per il movimento */
  /* transition: all 0.1s ease-out; */
}
</style>