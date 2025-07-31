import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n';
import App from './App.vue'
import '@fortawesome/fontawesome-free/css/all.min.css'
import it from './locales/it.json';
import en from './locales/en.json';

const app = createApp(App)

// Inizializza i18n
const i18n = createI18n({
  locale: 'it', // Imposta la lingua di default
  fallbackLocale: 'en',
  legacy: false, // Per usare l'API Composition
  messages: {
    it,
    en
  }
});

app.use(createPinia())
app.use(i18n); // Aggiungi il plugin i18n

app.mount('#app')




