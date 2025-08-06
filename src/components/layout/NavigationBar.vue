<template>
  <div class="nav-container">
    <div class="menu-toggle" @click="toggleMenu">
      <!-- Sostituito i 3 div con un'icona Font Awesome -->
      <i class="fas" :class="isMenuOpen ? 'fa-times' : 'fa-bars'"></i>
    </div>
    <div class="nav-wrapper" :class="{ 'open': isMenuOpen }">
      <div class="lang-switcher">
        <button
          v-for="lang in availableLocales"
          :key="lang"
          @click="setLocale(lang)"
          :class="{ 'active-lang': locale === lang }"
          class="lang-btn"
        >
          <img :src="getFlagSrc(lang)" :alt="`Bandiera ${lang}`" class="flag-icon" />
        </button>
      </div>
      <div class="nav-buttons">
        <button class="nav-btn" @click="(e) => scrollToSection('hero', e)" :data-title="$t('general.home')">
          <i class="fas fa-home"></i>
        </button>
        <button class="nav-btn" @click="(e) => scrollToSection('skills', e)" :data-title="$t('general.skills')">
          <i class="fas fa-code"></i>
        </button>
        <button class="nav-btn" @click="(e) => scrollToSection('experience', e)" :data-title="$t('general.experience')">
          <i class="fas fa-briefcase"></i>
        </button>
        <button class="nav-btn" @click="(e) => scrollToSection('projects', e)" :data-title="$t('general.projects')">
          <i class="fas fa-project-diagram"></i>
        </button>
        <button class="nav-btn" @click="(e) => scrollToSection('contact', e)" :data-title="$t('general.contact')">
          <i class="fas fa-envelope"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'; // Importato watch
import { useI18n } from 'vue-i18n';
import { gsap } from 'gsap';

const isMenuOpen = ref(false);
const { availableLocales, locale } = useI18n();

// Watcher per disabilitare/abilitare lo scorrimento del body
watch(isMenuOpen, (isOpen) => {
  if (isOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
});

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const setLocale = (newLocale: string) => {
  locale.value = newLocale;
  isMenuOpen.value = false; // Chiude il menu dopo la selezione della lingua
};

const getFlagSrc = (lang: string) => {
  if (lang === 'it') {
    return '/images/it.png';
  }
  if (lang === 'en') {
    return '/images/uk.png';
  }
};

const scrollToSection = (sectionId: string, event?: Event) => {
  isMenuOpen.value = false; // Chiude il menu dopo lo scroll
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

</script>

<style scoped>
.nav-container {
  position: fixed;
  top: 30px;
  right: 30px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}

.nav-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}

.lang-switcher {
  display: flex;
  gap: 8px;
  margin-bottom: 15px;
}

.nav-buttons {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.lang-btn {
  background: #fff; /* Sfondo bianco puro */
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); /* Ombra più sottile e rotonda */
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  overflow: hidden;
  padding: 0;
  margin: 5px;
}

.lang-btn.active-lang {
  border:2px solid #f5903d;
}

.lang-btn:hover {
  transform: translateY(-2px);
}

.flag-icon {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

.nav-btn {
  background: #fff; /* Sfondo bianco puro */
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: #f5903d;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  position: relative; /* Necessario per posizionare il tooltip */
  overflow: visible; /* Assicurati che il tooltip non venga tagliato */
  width: 60px; /* Mantieni le dimensioni originali */
  height: 60px; /* Mantieni le dimensioni originali */
  border-radius: 50%; /* Mantieni il bordo arrotondato */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); /* Ombra più sottile e rotonda */
  margin: 5px;
}

.nav-btn:hover {
  transform: scale(1.1);
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

/* Stili per il tooltip personalizzato */
.nav-btn::after {
  content: attr(data-title); /* Prende il testo dall'attributo data-title */
  position: absolute;
  left: -10px; /* Posiziona il tooltip a sinistra del pulsante */
  top: 50%;
  transform: translate(-100%, -50%); /* Sposta il tooltip a sinistra e lo centra verticalmente */
  background: #333; /* Sfondo scuro per il tooltip */
  color: #fff; /* Testo bianco */
  padding: 8px 12px;
  border-radius: 8px;
  white-space: nowrap; /* Impedisce al testo di andare a capo */
  font-size: 0.9rem;
  opacity: 0; /* Inizialmente invisibile */
  visibility: hidden; /* Inizialmente nascosto */
  transition: opacity 0.3s ease, visibility 0.3s ease, transform 0.3s ease;
  z-index: 1002; /* Assicurati che sia sopra tutto */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.nav-btn:hover::after {
  opacity: 1; /* Rende visibile al passaggio del mouse */
  visibility: visible;
  transform: translate(-110%, -50%); /* Sposta leggermente per un effetto più fluido */
}

  .menu-toggle { 
    display: none;
  }

/* Menu mobile */
@media (max-width: 768px) {
  .menu-toggle {
    display: flex;
    justify-content: center; /* Centra orizzontalmente l'icona */
    align-items: center; /* Centra verticalmente l'icona */
    width: 60px; /* Larghezza per renderlo circolare */
    height: 60px; /* Altezza per renderlo circolare */
    cursor: pointer;
    z-index: 1001;
    position: fixed;
    top: 20px;
    right: 20px;
    background: linear-gradient(45deg, #f5903d, #ff6b35); /* Sfondo con gradiente */
    border-radius: 50%; /* Bordo arrotondato per renderlo circolare */
    box-shadow: 0 10px 30px rgba(245, 144, 61, 0.4); /* Ombra simile ai bottoni interattivi */
    border: none; /* Rimosso il bordo */
    transition: all 0.3s ease; /* Transizione per hover */
    font-size: 24px; /* Dimensione dell'icona */
    color: #fff; /* Colore dell'icona */
  }

  .menu-toggle:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 40px rgba(245, 144, 61, 0.5);
  }

  /* Rimosse le regole per i div interni, ora si gestisce l'icona Font Awesome */
  .menu-toggle i {
    transition: transform 0.3s ease; /* Transizione per la rotazione dell'icona */
  }

  .menu-toggle i.fa-times {
    transform: rotate(90deg); /* Ruota l'icona X quando il menu è aperto */
  }

  .nav-container {
    position: static;
    top: auto;
    right: auto;
    z-index: auto;
  }

  .nav-wrapper {
    position: fixed;
    top: 0;
    right: -100%;
    width: 100%;
    height: 100%;
    background: #fff; /* Ora è completamente opaco */
    backdrop-filter: blur(10px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    transition: all 0.5s ease-in-out;
    z-index: 999;
    /* Rimosso box-shadow da qui */
  }

  .nav-wrapper.open {
    right: 0;
  }

  .nav-buttons {
    gap: 20px;
    padding: 5px
  }

  .nav-btn {
    width: 70px;
    height: 70px;
    font-size: 24px;
    box-shadow: 1px 3px 3px rgba(0, 0, 0, 0.15); /* Ombra più sottile per mobile */
    overflow-y: visible;
  }

  .lang-switcher {
    margin-bottom: 20px;
  }

  .nav-btn::before {
    display:none;
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(245, 144, 61, 0.2), transparent);
  transition: left 0.5s;
}
}
</style>
