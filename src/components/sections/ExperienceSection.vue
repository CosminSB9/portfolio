<template>
  <section id="experience" class="section experience-section">
    <div style="width: 100%;">
      <SectionTitle :text="$t('experience.title')" />
      <div class="timeline">
        <div v-for="(exp, index) in experiences" :key="index"
             class="timeline-item"
             :class="index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'">
          <div class="timeline-content">
            <h3 style="color: #f5903d; font-size: 1.5rem; margin-bottom: 10px;">{{ $t(`experience.job${index + 1}.title`) }}</h3>
            <h4 style="color: #333; font-size: 1.2rem; margin-bottom: 5px;">{{ $t(`experience.job${index + 1}.company`) }}</h4>
            <p style="color: #666; margin-bottom: 15px;">
              <i class="fas fa-calendar"></i> {{ $t(`experience.job${index + 1}.period`) }} |
              <i class="fas fa-map-marker-alt"></i> {{ $t(`experience.job${index + 1}.location`) }}
            </p>
            <ul style="list-style: none; padding: 0;">
              <li v-for="task in $tm(`experience.job${index + 1}.tasks`)" :key="task" style="margin: 8px 0; color: #555;">
                <i class="fas fa-check" style="color: #f5903d; margin-right: 10px;"></i>
                {{ task }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SectionTitle from '../common/SectionTitle.vue';
import { useI18n } from 'vue-i18n';
const { t, tm } = useI18n();

const experiences = ref([
  {
    title: 'Full Stack Developer',
    company: 'Studio il Granello',
    period: '11/2023 - Presente',
    location: 'Correggio (RE)',
    tasks: [
      'Progettazione e sviluppo siti web con Vue/Nuxt e TypeScript',
      'Sviluppo backend con PHP e gestione database MySQL',
      'Gestione relazioni clienti e stakeholder',
      'Testing e validazione codice per sicurezza e compatibilità'
    ]
  },
  {
    title: 'Junior Full Stack Developer & Data Analyst',
    company: 'Studio il Granello',
    period: '06/2023 - 10/2023',
    location: 'Correggio (RE)',
    tasks: [
      'Sviluppo applicazioni web con Vue e TypeScript',
      'Analisi dati Google Analytics',
      'Progettazione wireframe e interfacce grafiche',
      'Testing e manutenzione codice'
    ]
  }
]);

const setupExperienceScrollAnimations = () => {
  const slideInLeft = document.querySelectorAll('.slide-in-left');
  slideInLeft.forEach(el => {
    gsap.fromTo(el, { opacity: 0, x: -100 }, {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    });
  });

  const slideInRight = document.querySelectorAll('.slide-in-right');
  slideInRight.forEach(el => {
    gsap.fromTo(el, { opacity: 0, x: 100 }, {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    });
  });
};

onMounted(() => {
  nextTick(() => {
    setupExperienceScrollAnimations();
  });
});
</script>

<style scoped>
/* Stili specifici della sezione Experience */
.experience-section {
  background: rgba(0, 0, 0, 0.05);
  min-height: 100vh;
  padding: 80px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 10;
}

.timeline {
  max-width: 1000px;
  width: 100%;
  position: relative;
  margin: 0 auto; /* Centra la timeline */
  overflow-y: hidden;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 4px;
  background: linear-gradient(to bottom, #f5903d, #ff6b35);
  transform: translateX(-50%);
}

.timeline-item {
  position: relative;
  margin: 50px 0;
  width: 45%;
}

.timeline-item:nth-child(odd) {
  left: 0;
  text-align: right;
}

.timeline-item:nth-child(even) {
  left: 55%;
}

.timeline-content {
  background: white;
  padding: 30px;
  border-radius: 20px;
  position: relative;
  transition: all 0.3s ease;
  color: #333; /* Colore testo all'interno della card */
}

.timeline-content:hover {
  box-shadow: 0 10px 30px rgba(245, 144, 61, 0.4);
}


.timeline-content::before {
  content: '';
  position: absolute;
  top: 50%;
  width: 20px;
  height: 20px;
  background: #f5903d;
  border-radius: 50%;
  transform: translateY(-50%);
  z-index: 1; /* Assicura che il cerchio sia sopra la linea */
}

.timeline-item:nth-child(odd) .timeline-content::before {
  right: -35px;
}

.timeline-item:nth-child(even) .timeline-content::before {
  left: -35px;
}

/* Scroll Animations */
.slide-in-left {
  opacity: 0;
  transform: translateX(-100px);
}

.slide-in-right {
  opacity: 0;
  transform: translateX(100px);
}

@media (max-width: 768px) {
  .timeline::before {
    left: 20px;
  }

  .timeline-item {
    width: calc(100% - 60px);
    left: 40px !important;
    text-align: left !important;
  }

  .timeline-item:nth-child(odd) .timeline-content::before,
  .timeline-item:nth-child(even) .timeline-content::before {
    left: -35px !important;
    right: auto !important;
  }
}
</style>
