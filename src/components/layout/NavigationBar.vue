<template>
  <div class="nav-container">
    <button class="nav-btn" @click="(e) => $emit('scrollToSection', 'hero', e)" title="Home">
      <i class="fas fa-home"></i>
    </button>
    <button class="nav-btn" @click="(e) => $emit('scrollToSection', 'skills', e)" title="Skills">
      <i class="fas fa-code"></i>
    </button>
    <button class="nav-btn" @click="(e) => $emit('scrollToSection', 'experience', e)" title="Esperienza">
      <i class="fas fa-briefcase"></i>
    </button>
    <button class="nav-btn" @click="(e) => $emit('scrollToSection', 'contact', e)" title="Contatti">
      <i class="fas fa-envelope"></i>
    </button>
  </div>
</template>

<script setup lang="ts">
// Non c'è bisogno di logica GSAP qui, l'evento viene emesso e gestito dal parent (App.vue)
const emit = defineEmits(['scrollToSection']);
</script>

<style scoped>
/* Navigation */
.nav-container {
  position: fixed;
  top: 30px;
  right: 30px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.nav-btn {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: #f5903d;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.nav-btn:hover {
  transform: scale(1.1);
  background: rgba(255, 255, 255, 1);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
}

.nav-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(245, 144, 61, 0.2), transparent);
  transition: left 0.5s;
}

.nav-btn:hover::before {
  left: 100%;
}

@media (max-width: 768px) {
  .nav-container {
    top: 20px;
    right: 20px;
  }
  .nav-btn {
    width: 50px;
    height: 50px;
    font-size: 18px;
  }
}
</style>