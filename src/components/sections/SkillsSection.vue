<template>
  <section id="skills" class="section skills-section">
    <div style="width: 100%; max-width: 1200px;">
      <SectionTitle :text="$t('skills.title')" />
      <div class="skills-grid">
        <div v-for="(skill, index) in skills" :key="skill.name"
             class="skill-card scale-in">
          <div class="skill-header">
            <i :class="skill.icon" class="skill-icon"></i>
            <h3 class="skill-name">{{ $t(`skills.list.${skill.key}`) }}</h3>
          </div>
          <div class="skill-bar">
            <!-- La barra di progresso è scalata in orizzontale, più performante -->
            <div class="skill-progress" :data-target="skill.level" :style="{ transform: `scaleX(${skill.level / 100})` }"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue';
import { gsap } from 'gsap';
import SectionTitle from '../common/SectionTitle.vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const emit = defineEmits(['scrollToSection']);

const skills = ref([
  { name: 'TypeScript', key: 'typescript', icon: 'fab fa-js-square', level: 100 },
  { name: 'Vue & Nuxt', key: 'vue-nuxt', icon: 'fab fa-vuejs', level: 100 },
  { name: 'PHP & Laravel', key: 'php-laravel', icon: 'fab fa-php', level: 100 },
  { name: 'MySQL', key: 'mysql', icon: 'fas fa-database', level: 100 },
  { name: 'HTML/CSS', key: 'html-css', icon: 'fab fa-html5', level: 100 },
  { name: 'GSAP', key: 'gsap', icon: 'fas fa-magic', level: 100 }
]);

const setupSkillsScrollAnimations = () => {
  // Animazione per le skill card
  const skillCards = document.querySelectorAll('.skills-grid .skill-card');
  skillCards.forEach((el, i) => {
    gsap.fromTo(el, { opacity: 0, scale: 0.8 }, {
      opacity: 1,
      scale: 1,
      duration: 0.8,
      delay: i * 0.1, // Staggered delay
      ease: 'back.out(1.7)',
      scrollTrigger: {
        trigger: el,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      }
    });
  });

  // Animazione per le skill bars (riempimento progressivo usando scaleX)
  const skillProgressBars = document.querySelectorAll('.skill-progress');
  skillProgressBars.forEach(bar => {
    gsap.fromTo(bar, { scaleX: 0 }, {
      scaleX: bar.getAttribute('data-target') as unknown as number / 100, // Usa data-target per il valore finale
      duration: 1.5,
      ease: 'power2.out',
      transformOrigin: 'left', // Scala da sinistra a destra
      scrollTrigger: {
        trigger: bar,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      }
    });
  });
};

onMounted(() => {
  // Assicurati che il DOM sia aggiornato prima di applicare ScrollTrigger
  nextTick(() => {
    setupSkillsScrollAnimations();
  });
});
</script>

<style scoped>
/* Stili specifici della sezione Skills */
.skills-section {
  background: rgba(255, 255, 255, 0.1);
  /* Ho rimosso il backdrop-filter per migliorare le performance */
  /* backdrop-filter: blur(20px); */
  min-height: 100vh;
  padding: 80px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 10;
  color: #333; /* Colore testo per questa sezione */
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1200px;
  width: 100%;
}

.skill-card {
  background: rgba(255, 255, 255, 0.9);
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.skill-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(245, 144, 61, 0.1), transparent);
  transition: left 0.5s;
}

.skill-card:hover::before {
  left: 100%;
}

.skill-card:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

.skill-header {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
}

.skill-icon {
  font-size: 2rem;
  color: #f5903d;
}

.skill-name {
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
}

.skill-bar {
  width: 100%;
  height: 8px;
  background: #e0e0e0;
  border-radius: 4px;
  overflow: hidden;
}

.skill-progress {
  height: 100%;
  background: linear-gradient(90deg, #f5903d, #ff6b35);
  border-radius: 4px;
  /* La transizione è rimossa per evitare conflitti con GSAP */
  /* transition: width 0.5s ease; */
  transform-origin: left; /* Il punto di origine della scala è a sinistra */
}

.skill-level {
  text-align: right;
  margin-top: 10px;
  font-weight: 600;
  color: #f5903d;
}

/* Scroll Animations */
.scale-in {
  opacity: 0;
  transform: scale(0.8);
}

@media (max-width: 768px) {
  .skills-grid {
    grid-template-columns: 1fr;
  }
}
</style>
