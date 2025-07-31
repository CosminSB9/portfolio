<template>
  <button class="interactive-btn" @click="$emit('click', $event)">
    <slot></slot> </button>
</template>

<script setup lang="ts">
const emit = defineEmits(['click']);
// Il comportamento di GSAP per il click del bottone è già nel parent
</script>

<style scoped>
/* Stili comuni per i bottoni interattivi */
.interactive-btn {
  background: linear-gradient(45deg, #f5903d, #ff6b35);
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  margin: 10px; /* Margine per distanziare i bottoni tra loro */
}

.interactive-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transition: left 0.5s;
}

.interactive-btn:hover::before {
  left: 100%;
}

.interactive-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(245, 144, 61, 0.4);
}
</style>