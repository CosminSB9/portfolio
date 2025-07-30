<template>
  <div class="app">
    <div ref="highlight" class="mouse-highlight"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const highlight = ref<HTMLElement | null>(null)

onMounted(() => {
  window.addEventListener('mousemove', (e) => {
    if (highlight.value) {
      // Impostazione diretta — istantanea
      highlight.value.style.left = `${e.clientX}px`
      highlight.value.style.top = `${e.clientY}px`
    }
  })
})
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  background: #f0a262; /* Arancione chiaro */
  height: 100%;
}

.app {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.mouse-highlight {
  position: absolute;
  width: 500px;
  height: 500px;
  pointer-events: none;
  border-radius: 50%;
  background: radial-gradient(circle, #f5903d 0%, transparent 70%);
  filter: blur(60px);
  transform: translate(-50%, -50%);
  mix-blend-mode: multiply;
  z-index: 10;
  top: 0;
  left: 0;
}
</style>
