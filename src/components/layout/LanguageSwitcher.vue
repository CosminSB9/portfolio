<template>
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
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { gsap } from 'gsap';

const { availableLocales, locale } = useI18n();

const setLocale = (newLocale: string) => {
  locale.value = newLocale;
};

const getFlagSrc = (lang: string) => {
  // Ho utilizzato un placeholder che dovrai sostituire con le immagini reali delle bandiere
  // Esempio per le tue immagini:
  // if (lang === 'it') return '/path/to/italy-flag.svg';
  // if (lang === 'en') return '/path/to/uk-flag.svg';

  // Per ora usiamo un placeholder
  if (lang === 'it') {
    return '/images/it.png';
  }
  if (lang === 'en') {
    return '/images/uk.png';
  }
};

// Funzione di animazione per i bottoni
const animateButton = (event: Event) => {
  const btn = (event.target as HTMLElement).closest('.lang-btn');
  if (btn) {
    gsap.to(btn, {
      scale: 0.9,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      ease: 'power2.inOut',
    });
  }
};
</script>

<style scoped>
.lang-switcher {
  position: fixed;
  top: 30px;
  right: 120px; /* Posizionato a sinistra della Navigazione */
  z-index: 1000;
  display: flex;
  gap: 8px;
}

.lang-btn {
  background: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  overflow: hidden;
  padding: 0;
}

.lang-btn.active-lang {
  background: #f5903d;
  box-shadow: 0 8px 24px rgba(245, 144, 61, 0.4);
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
</style>
