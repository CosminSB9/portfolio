<template>
  <div>
    <div class="blob blob-1"></div>
    <div class="blob blob-2"></div>
    <div class="blob blob-3"></div>
    <div class="blob blob-4"></div>
  </div>
</template>

<script setup lang="ts">
// Nessuna logica JS specifica, solo CSS-driven animations
</script>

<style scoped>
/* Blobs */
.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(2px);
  opacity: 0.8;
  animation: float 6s ease-in-out infinite;
}

.blob-1 {
  width: 200px;
  height: 200px;
  background: linear-gradient(45deg, #ff6b35, #f5903d);
  top: 20%;
  left: 10%;
  animation-delay: 0s;
}

.blob-2 {
  width: 150px;
  height: 150px;
  background: linear-gradient(45deg, #ffb347, #ffa500);
  top: 60%;
  right: 15%;
  animation-delay: 2s;
}

.blob-3 {
  width: 180px;
  height: 180px;
  background: linear-gradient(45deg, #ff8c42, #ff7f50);
  bottom: 20%;
  left: 60%;
  animation-delay: 4s;
}

.blob-4 {
  width: 120px;
  height: 120px;
  background: linear-gradient(45deg, #ffd700, #ffb347);
  top: 40%;
  left: 70%;
  animation-delay: 1s;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px) scale(1) rotate(0deg);
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  }
  25% {
    transform: translateY(-20px) scale(1.05) rotate(90deg);
    border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
  }
  50% {
    transform: translateY(10px) scale(0.95) rotate(180deg);
    border-radius: 50% 60% 30% 60% / 60% 30% 60% 30%;
  }
  75% {
    transform: translateY(-10px) scale(1.02) rotate(270deg);
    border-radius: 60% 30% 60% 40% / 30% 70% 40% 60%;
  }
}

/* Responsive per i blobs se necessario */
@media (max-width: 768px) {
  .blob {
    width: 100px;
    height: 100px;
    filter: blur(1px); /* Meno blur per schermi più piccoli */
  }
}
</style>