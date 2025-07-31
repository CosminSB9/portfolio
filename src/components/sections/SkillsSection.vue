<template>
  <section id="skills" class="section skills-section">
    <div style="width: 100%; max-width: 1200px;">
      <SectionTitle text="Competenze Tecniche" />
      <div class="skills-grid">
        <div v-for="(skill, index) in skills" :key="skill.name"
             class="skill-card scale-in"
             @click="animateSkill(index)">
          <div class="skill-header">
            <i :class="skill.icon" class="skill-icon"></i>
            <h3 class="skill-name">{{ skill.name }}</h3>
          </div>
          <div class="skill-bar">
            <div class="skill-progress" :data-target="skill.level" :style="{ width: skill.level + '%' }"></div>
          </div>
          <div class="skill-level">{{ skill.level }}%</div>
        </div>
      </div>
      <div style="text-align: center; margin-top: 40px;">
        <InteractiveButton @click="(e) => $emit('scrollToSection', 'experience', e)">
          <i class="fas fa-briefcase"></i> Vedi la mia esperienza
        </InteractiveButton>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'; // Assicurati sia registrato in App.vue o qui
import SectionTitle from '../common/SectionTitle.vue';
import InteractiveButton from '../common/InteractiveButton.vue';

const emit = defineEmits(['scrollToSection']);

const skills = ref([
  { name: 'TypeScript', icon: 'fab fa-js-square', level: 85 },
  { name: 'Vue & Nuxt', icon: 'fab fa-vuejs', level: 90 },
  { name: 'PHP & Laravel', icon: 'fab fa-php', level: 80 },
  { name: 'MySQL', icon: 'fas fa-database', level: 75 },
  { name: 'HTML/CSS', icon: 'fab fa-html5', level: 95 },
  { name: 'GSAP', icon: 'fas fa-magic', level: 70 }
]);

const animateSkill = (index: number) => {
  const skillCard = document.querySelectorAll('.skill-card')[index] as HTMLElement;
  const progressBar = skillCard.querySelector('.skill-progress') as HTMLElement;

  gsap.to(skillCard, {
    scale: 1.1,
    rotation: 5,
    duration: 0.3,
    yoyo: true,
    repeat: 1,
    ease: 'power2.inOut'
  });

  gsap.fromTo(
    progressBar,
    { width: '0%' }, // Iniziale (GSAP lo fa anche se c'è un width inline)
    {
      width: skills.value[index].level + '%',
      duration: 1.5,
      ease: 'power2.out'
    }
  );

  createParticleEffect(skillCard);
};

const createParticleEffect = (element: HTMLElement) => {
  const rect = element.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  for (let i = 0; i < 6; i++) {
    const particle = document.createElement('div');
    Object.assign(particle.style, {
      position: 'fixed',
      left: `${centerX}px`,
      top: `${centerY}px`,
      width: '6px',
      height: '6px',
      background: '#f5903d',
      borderRadius: '50%',
      pointerEvents: 'none',
      zIndex: '1000',
    });
    document.body.appendChild(particle);

    const angle = (i / 6) * Math.PI * 2;
    const distance = 100;

    gsap.to(particle, {
      x: Math.cos(angle) * distance,
      y: Math.sin(angle) * distance,
      opacity: 0,
      scale: 0,
      duration: 1,
      ease: 'power2.out',
      onComplete: () => {
        particle.remove();
      }
    });
  }
};

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

  // Animazione per le skill bars (riempimento progressivo)
  const skillProgressBars = document.querySelectorAll('.skill-progress');
  skillProgressBars.forEach(bar => {
    gsap.fromTo(bar, { width: '0%' }, {
      width: bar.getAttribute('data-target') + '%', // Usa data-target per il valore finale
      duration: 1.5,
      ease: 'power2.out',
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
  backdrop-filter: blur(20px);
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
  /* La transizione sarà gestita da GSAP, ma mantieni per fallback */
  transition: width 0.5s ease;
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