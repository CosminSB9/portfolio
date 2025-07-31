<template>
  <section id="projects" class="section projects-section">
    <div style="width: 100%; max-width: 1200px;">
      <SectionTitle text="I Miei Progetti" />
      <div class="projects-grid">
        <div v-for="(project, index) in projects" :key="project.name"
             class="project-card scale-in"
             :style="{ animationDelay: index * 0.2 + 's' }"
             @click="openProjectLink(project.link)">
          <div class="project-image">
            <i :class="project.icon" class="project-icon"></i>
            <div class="project-overlay">
              <button class="project-btn">
                <i class="fas fa-external-link-alt"></i>
              </button>
            </div>
          </div>
          <div class="project-content">
            <h3 class="project-title">{{ project.name }}</h3>
            <p class="project-description">{{ project.description }}</p>
            <div class="project-tech">
              <span v-for="tech in project.technologies" :key="tech" class="tech-tag">
                {{ tech }}
              </span>
            </div>
            <div class="project-status" :class="project.status.toLowerCase().replace(' ', '-')">
              <i class="fas fa-circle"></i>
              {{ project.status }}
            </div>
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

const projects = ref([
  {
    name: 'Portfolio Personale',
    description: 'Portfolio interattivo sviluppato con Vue.js e GSAP. Features: blob animati, scroll animations, design responsive e micro-interazioni avanzate.',
    technologies: ['Vue.js', 'GSAP', 'CSS3', 'HTML5', 'TypeScript'],
    icon: 'fas fa-user-circle',
    status: 'Completato',
    link: '#hero' // Link interno per esempio, in un vero progetto sarebbero URL esterni
  }
  // Aggiungi altri progetti qui!
  /*
  {
    name: 'E-commerce Example',
    description: 'Piattaforma e-commerce completa con gestione prodotti, carrello e checkout sicuro.',
    technologies: ['Nuxt.js', 'TailwindCSS', 'Stripe', 'Laravel'],
    icon: 'fas fa-shopping-cart',
    status: 'In Sviluppo',
    link: 'https://example.com/ecommerce'
  },
  {
    name: 'CRM Web App',
    description: 'Applicazione CRM per la gestione dei clienti, contatti e interazioni.',
    technologies: ['Vue.js', 'Node.js', 'MongoDB', 'GraphQL'],
    icon: 'fas fa-users',
    status: 'Prototipo',
    link: 'https://example.com/crm'
  }
  */
]);

const openProjectLink = (link: string) => {
  if (link.startsWith('#')) {
    // Gestisce lo scroll interno se il link è un ID di sezione
    const element = document.getElementById(link.substring(1));
    if (element) {
      gsap.to(window, {
        duration: 1.5,
        scrollTo: { y: element, offsetY: 0 },
        ease: 'power2.inOut'
      });
    }
  } else {
    window.open(link, '_blank');
  }
};

const setupProjectsScrollAnimations = () => {
  const projectCards = document.querySelectorAll('.projects-grid .project-card');
  projectCards.forEach((el, i) => {
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
};

onMounted(() => {
  nextTick(() => {
    setupProjectsScrollAnimations();
  });
});
</script>

<style scoped>
/* Stili specifici della sezione Projects */
.projects-section {
  background: rgba(255, 255, 255, 0.05);
  min-height: 100vh;
  padding: 80px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 10;
  color: #333;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  max-width: 1200px;
  width: 100%;
}

.project-card {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.4s ease;
  cursor: pointer;
  position: relative;
}

.project-card:hover {
  transform: translateY(-15px) scale(1.02);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
}

.project-image {
  height: 200px;
  background: linear-gradient(135deg, #f5903d, #ff6b35);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.project-icon {
  font-size: 4rem;
  color: white;
  z-index: 2;
  position: relative;
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.3s ease;
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.project-btn {
  background: white;
  color: #f5903d;
  border: none;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.project-btn:hover {
  background: #f5903d;
  color: white;
  transform: scale(1.1);
}

.project-content {
  padding: 25px;
}

.project-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 10px;
}

.project-description {
  color: #666;
  line-height: 1.6;
  margin-bottom: 20px;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 15px;
}

.tech-tag {
  background: rgba(245, 144, 61, 0.1);
  color: #f5903d;
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  border: 1px solid rgba(245, 144, 61, 0.2);
}

.project-status {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  font-size: 0.9rem;
}

.project-status.completato {
  color: #10b981;
}

.project-status.in-sviluppo {
  color: #f59e0b;
}

.project-status.prototipo {
  color: #6366f1;
}

/* Scroll Animations */
.scale-in {
  opacity: 0;
  transform: scale(0.8);
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>