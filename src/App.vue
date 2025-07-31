<template>
  <div id="app">
    <div class="app">
      <!-- Layout Components -->
      <MouseHighlight />
      <BackgroundBlobs />
      <NavigationBar @scroll-to-section="scrollToSection" />

      <!-- Sections -->
      <HeroSection @scroll-to-section="scrollToSection" />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

// Importazione dei componenti
import MouseHighlight from './components/layout/MouseHighlight.vue';
import BackgroundBlobs from './components/layout/BackgroundBlobs.vue';
import NavigationBar from './components/layout/NavigationBar.vue';
import HeroSection from './components/sections/HeroSection.vue';
import SkillsSection from './components/sections/SkillsSection.vue';
import ExperienceSection from './components/sections/ExperienceSection.vue';
import ProjectsSection from './components/sections/ProjectsSection.vue';
import ContactSection from './components/sections/ContactSection.vue';

// Registra i plugin GSAP una sola volta nell'app principale
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// Funzione per lo scroll tra le sezioni (potrebbe essere centralizzata qui o in un util)
const scrollToSection = (sectionId: string, event?: Event) => {
  const element = document.getElementById(sectionId);
  if (event) {
    const btn = (event.target as HTMLElement).closest('.nav-btn');
    if (btn) {
      gsap.to(btn, {
        scale: 0.9,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
        ease: 'power2.inOut',
      });
    }
  }

  if (element) {
    gsap.to(window, {
      duration: 1.5,
      scrollTo: { y: element, offsetY: 0 },
      ease: 'power2.inOut',
    });
  }
};

onMounted(() => {
  // Le animazioni iniziali e di scroll saranno gestite all'interno dei singoli componenti
  // o da una funzione importata da 'utils/gsapAnimations.ts' se sono globali o inter-componente.
});
</script>

<style>
/* Stili globali, come font, reset, body, .app */
@import './assets/styles/main.css';
</style>
