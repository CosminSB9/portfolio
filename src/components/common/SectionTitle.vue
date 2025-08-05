<template>
  <!-- Associa il ref 'titleEl' all'elemento h2 -->
  <h2 ref="titleEl" class="section-title fade-in">{{ text }}</h2>
</template>

<script setup lang="ts">
import { defineProps, onMounted, nextTick, ref } from 'vue';
import { gsap } from 'gsap';

const props = defineProps({
  text: {
    type: String,
    required: true
  }
});

// Crea un ref per l'elemento del titolo
const titleEl = ref<HTMLElement | null>(null);

onMounted(() => {
  nextTick(() => {
    // Assicurati che l'elemento esista prima di animarlo
    if (titleEl.value) {
      gsap.fromTo(titleEl.value,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: titleEl.value,
            start: 'top 80%',
            toggleActions: 'play none none none',
          }
        }
      );
    }
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
  overflow-y: hid;
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
