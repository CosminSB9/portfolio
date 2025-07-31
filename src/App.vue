<template>
<div id="app">
        <div class="app">
            <!-- Mouse Highlight -->
            <div ref="highlight" class="mouse-highlight"></div>

            <!-- Background Blobs -->
            <div ref="blob1" class="blob blob-1"></div>
            <div ref="blob2" class="blob blob-2"></div>
            <div ref="blob3" class="blob blob-3"></div>
            <div ref="blob4" class="blob blob-4"></div>

            <!-- Navigation -->
            <div class="nav-container">
                <button class="nav-btn" @click="(e) => scrollToSection('hero', e)" title="Home">
                    <i class="fas fa-home"></i>
                </button>
                <button class="nav-btn" @click="(e) => scrollToSection('skills', e)" title="Skills">
                    <i class="fas fa-code"></i>
                </button>
                <button class="nav-btn" @click="(e) => scrollToSection('experience', e)" title="Esperienza">
                    <i class="fas fa-briefcase"></i>
                </button>
                <button class="nav-btn" @click="(e) => scrollToSection('contact', e)" title="Contatti">
                    <i class="fas fa-envelope"></i>
                </button>
            </div>

            <!-- Hero Section -->
            <section id="hero" class="section hero-section">
                <div>
                    <h1 class="hero-title fade-in">
                        Cosmin Stefan<br>
                        <span style="color: #ffb347;">Bancescu</span>
                    </h1>
                    <p class="hero-subtitle fade-in">Full Stack Developer</p>
                    <div class="hero-description fade-in">
                        <p>Sviluppatore Full Stack specializzato in <strong>Vue/Nuxt</strong> e <strong>TypeScript</strong>, 
                        con solida esperienza in backend <strong>PHP/Laravel</strong>. 
                        Esperto in brand identity, e-commerce e software gestionali.</p>
                    </div>
                    <div class="contact-info fade-in">
                        <div class="contact-item" @click="openEmail">
                            <i class="fas fa-envelope"></i>
                            <span>stefanoo2013@gmail.com</span>
                        </div>
                        <div class="contact-item" @click="callPhone">
                            <i class="fas fa-phone"></i>
                            <span>3248722735</span>
                        </div>
                        <div class="contact-item">
                            <i class="fas fa-map-marker-alt"></i>
                            <span>Correggio (RE)</span>
                        </div>
                    </div>
                    <div style="margin-top: 40px;">
                        <button class="interactive-btn" @click="(e) => scrollToSection('skills', e)">
                            <i class="fas fa-arrow-down"></i> Scopri le mie competenze
                        </button>
                    </div>
                </div>
            </section>

            <!-- Skills Section -->
            <section id="skills" class="section skills-section">
                <div style="width: 100%; max-width: 1200px;">
                    <h2 class="section-title fade-in">Competenze Tecniche</h2>
                    <div class="skills-grid">
                        <div v-for="(skill, index) in skills" :key="skill.name" 
                             class="skill-card scale-in" 
                             @click="animateSkill(index)"
                             :style="{ animationDelay: index * 0.1 + 's' }">
                            <div class="skill-header">
                                <i :class="skill.icon" class="skill-icon"></i>
                                <h3 class="skill-name">{{ skill.name }}</h3>
                            </div>
                            <div class="skill-bar">
                                <div class="skill-progress" :style="{ width: skill.level + '%' }"></div>
                            </div>
                            <div class="skill-level">{{ skill.level }}%</div>
                        </div>
                    </div>
                    <div style="text-align: center; margin-top: 40px;">
                        <button class="interactive-btn" @click="(e) => scrollToSection('experience', e)">
                            <i class="fas fa-briefcase"></i> Vedi la mia esperienza
                        </button>
                    </div>
                </div>
            </section>

            <!-- Experience Section -->
            <section id="experience" class="section experience-section">
                <div style="width: 100%;">
                    <h2 class="section-title fade-in">Esperienza Lavorativa</h2>
                    <div class="timeline">
                        <div v-for="(exp, index) in experiences" :key="index" 
                             class="timeline-item" 
                             :class="index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'">
                            <div class="timeline-content">
                                <h3 style="color: #f5903d; font-size: 1.5rem; margin-bottom: 10px;">{{ exp.title }}</h3>
                                <h4 style="color: #333; font-size: 1.2rem; margin-bottom: 5px;">{{ exp.company }}</h4>
                                <p style="color: #666; margin-bottom: 15px;">
                                    <i class="fas fa-calendar"></i> {{ exp.period }} | 
                                    <i class="fas fa-map-marker-alt"></i> {{ exp.location }}
                                </p>
                                <ul style="list-style: none; padding: 0;">
                                    <li v-for="task in exp.tasks" :key="task" style="margin: 8px 0; color: #555;">
                                        <i class="fas fa-check" style="color: #f5903d; margin-right: 10px;"></i>
                                        {{ task }}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Projects Section -->
            <section id="projects" class="section" style="background: rgba(255, 255, 255, 0.05);">
                <div style="width: 100%; max-width: 1200px;">
                    <h2 class="section-title fade-in">I Miei Progetti</h2>
                    <div class="projects-grid">
                        <div v-for="(project, index) in projects" :key="project.name" 
                             class="project-card scale-in" 
                            
                             :style="{ animationDelay: index * 0.2 + 's' }">
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
                                <div class="project-status" :class="project.status.toLowerCase()">
                                    <i class="fas fa-circle"></i>
                                    {{ project.status }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Contact Section -->
            <section id="contact" class="section" style="background: linear-gradient(135deg, #f5903d 0%, #ff6b35 100%);">
                <div style="text-align: center; color: white;">
                    <h2 class="section-title fade-in" style="color: white;">Lavoriamo Insieme!</h2>
                    <p class="fade-in" style="font-size: 1.3rem; margin-bottom: 40px; max-width: 600px;">
                        Sono sempre aperto a nuove opportunità professionali e progetti interessanti.
                        Non esitare a contattarmi!
                    </p>
                    <div style="display: flex; gap: 20px; justify-content: center; flex-wrap: wrap;">
                        <button class="interactive-btn" @click="openEmail" style="background: rgba(255,255,255,0.2);">
                            <i class="fas fa-envelope"></i> Invia Email
                        </button>
                        <button class="interactive-btn" @click="callPhone" style="background: rgba(255,255,255,0.2);">
                            <i class="fas fa-phone"></i> Chiamami
                        </button>
                        <button class="interactive-btn" @click="openLinkedIn" style="background: rgba(255,255,255,0.2);">
                            <i class="fab fa-linkedin"></i> LinkedIn
                        </button>
                    </div>
                    <div style="margin-top: 40px; padding: 20px; background: rgba(255,255,255,0.1); border-radius: 15px; backdrop-filter: blur(10px);">
                        <p><strong>Lingue:</strong> Italiano (Madrelingua) • Rumeno (Madrelingua) • Inglese (Avanzato)</p>
                        <p style="margin-top: 10px;"><strong>Hobby:</strong> Videogiochi • Nuoto • Fumetti • Automobili</p>
                        <p style="margin-top: 10px;"><i class="fas fa-car"></i> Automunito - Patente B</p>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import ScrollToPlugin from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

const skills = ref([
  { name: 'TypeScript', icon: 'fab fa-js-square', level: 85 },
  { name: 'Vue & Nuxt', icon: 'fab fa-vuejs', level: 90 },
  { name: 'PHP & Laravel', icon: 'fab fa-php', level: 80 },
  { name: 'MySQL', icon: 'fas fa-database', level: 75 },
  { name: 'HTML/CSS', icon: 'fab fa-html5', level: 95 },
  { name: 'GSAP', icon: 'fas fa-magic', level: 70 }
])

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
])

 const openEmail = () => {
      window.location.href = 'mailto:stefanoo2013@gmail.com?subject=Contatto&body=Ciao, ti scrivo dal tuo portfolio...';
    }

    const callPhone = () => {
      window.location.href = 'tel:3248722735';
    }

    const openLinkedIn = () => {
      window.open('https://www.linkedin.com/in/cosmin-stefan-bancescu', '_blank');
    }

const animateSkill = (index: number) => {
  const skillCard = document.querySelectorAll('.skill-card')[index] as HTMLElement
  const progressBar = skillCard.querySelector('.skill-progress') as HTMLElement

  gsap.to(skillCard, {
    scale: 1.1,
    rotation: 5,
    duration: 0.3,
    yoyo: true,
    repeat: 1,
    ease: 'power2.inOut'
  })

  gsap.fromTo(
    progressBar,
    { width: '0%' },
    {
      width: skills.value[index].level + '%',
      duration: 1.5,
      ease: 'power2.out'
    }
  )

  createParticleEffect(skillCard)
}

const createParticleEffect = (element: HTMLElement) => {
  const rect = element.getBoundingClientRect()
  const centerX = rect.left + rect.width / 2
  const centerY = rect.top + rect.height / 2

  for (let i = 0; i < 6; i++) {
    const particle = document.createElement('div')
    Object.assign(particle.style, {
      position: 'fixed',
      left: `${centerX}px`,
      top: `${centerY}px`,
      width: '6px',
      height: '6px',
      background: '#f5903d',
      borderRadius: '50%',
      pointerEvents: 'none',
      zIndex: '1000'
    })
    document.body.appendChild(particle)

    const angle = (i / 6) * Math.PI * 2
    const distance = 100

    gsap.to(particle, {
      x: Math.cos(angle) * distance,
      y: Math.sin(angle) * distance,
      opacity: 0,
      scale: 0,
      duration: 1,
      ease: 'power2.out',
    })
  }
}

const scrollToSection = (sectionId: string, event: Event) => {
  const element = document.getElementById(sectionId)
  const btn = (event.target as HTMLElement).closest('.nav-btn')

  if (btn) {
    gsap.to(btn, {
      scale: 0.9,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      ease: 'power2.inOut'
    })
  }

  if (element) {
    gsap.to(window, {
      duration: 1.5,
      scrollTo: { y: element, offsetY: 0 },
      ease: 'power2.inOut'
    })
  }
}

const animateHero = () => {
  const tl = gsap.timeline()
  tl.from('.hero-title', { opacity: 0, y: 100, duration: 1.2, ease: 'power3.out' })
    .from('.hero-subtitle', { opacity: 0, y: 50, duration: 1, ease: 'power2.out' }, '-=0.5')
    .from('.hero-description', { opacity: 0, scale: 0.9, duration: 1, ease: 'back.out(1.7)' }, '-=0.3')
    .from('.contact-item', { opacity: 0, y: 30, duration: 0.8, stagger: 0.2, ease: 'power2.out' }, '-=0.5')
    .from('.interactive-btn', { opacity: 0, scale: 0.8, duration: 0.6, ease: 'back.out(1.7)' }, '-=0.3')
}

const setupScrollAnimations = () => {
  const fadeInEls = document.querySelectorAll('.fade-in')
  fadeInEls.forEach(el => {
    gsap.fromTo(el, { opacity: 0, y: 50 }, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 80%',
        toggleActions: 'play none none none',
        onEnter: () => el.classList.remove('fade-in')
      }
    })
  })

  const slideInLeft = document.querySelectorAll('.slide-in-left')
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
    })
  })

  const slideInRight = document.querySelectorAll('.slide-in-right')
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
    })
  })

  const scaleInEls = document.querySelectorAll('.scale-in')
  scaleInEls.forEach((el, i) => {
    gsap.fromTo(el, { opacity: 0, scale: 0.8 }, {
      opacity: 1,
      scale: 1,
      duration: 0.8,
      delay: i * 0.1,
      ease: 'back.out(1.7)',
      scrollTrigger: {
        trigger: el,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    })
  })

  const skillBars = document.querySelectorAll('.skill-progress')
  skillBars.forEach(bar => {
    gsap.fromTo(bar, { width: '0%' }, {
      width: bar.getAttribute('data-target') || '0%',
      duration: 1.5,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: bar,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    })
  })
}

 const projects = ref([
                        {
                            name: 'Portfolio Personale',
                            description: 'Portfolio interattivo sviluppato con Vue.js e GSAP. Features: blob animati, scroll animations, design responsive e micro-interazioni avanzate.',
                            technologies: ['Vue.js', 'GSAP', 'CSS3', 'HTML5', 'TypeScript'],
                            icon: 'fas fa-user-circle',
                            status: 'Completato',
                            link: '#hero'
                
                }
                    ])

        

                    

onMounted(() => {
  animateHero()
  setupScrollAnimations()
})
</script>

<style>
 * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #f0a262 0%, #f5903d 100%);
            overflow-x: hidden;
        }

        .app {
            position: relative;
            width: 100%;
            min-height: 100vh;
        }

        /* Mouse Highlight */
        .mouse-highlight {
            position: fixed;
            width: 400px;
            height: 400px;
            pointer-events: none;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%);
            filter: blur(40px);
            transform: translate(-50%, -50%);
            mix-blend-mode: screen;
            z-index: 100;
            transition: all 0.1s ease-out;
        }

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

        /* Sections */
        .section {
            min-height: 100vh;
            padding: 80px 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            z-index: 10;
        }

        .hero-section {
            text-align: center;
            color: white;
        }

        .hero-title {
            font-size: clamp(3rem, 8vw, 6rem);
            font-weight: 900;
            margin-bottom: 20px;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
            line-height: 1.1;
        }

        .hero-subtitle {
            font-size: clamp(1.5rem, 4vw, 2.5rem);
            font-weight: 300;
            margin-bottom: 30px;
            opacity: 0.9;
        }

        .hero-description {
            max-width: 800px;
            font-size: 1.2rem;
            line-height: 1.6;
            margin: 0 auto 40px;
            background: rgba(255, 255, 255, 0.1);
            padding: 30px;
            border-radius: 20px;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .contact-info {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 30px;
            margin-top: 40px;
        }

        .contact-item {
            display: flex;
            align-items: center;
            gap: 10px;
            background: rgba(255, 255, 255, 0.15);
            padding: 15px 25px;
            border-radius: 50px;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            transition: all 0.3s ease;
            cursor: pointer;
        }

        .contact-item:hover {
            background: rgba(255, 255, 255, 0.25);
            transform: translateY(-5px);
        }

        /* Skills Section */
        .skills-section {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(20px);
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
            transition: width 2s ease;
        }

        .skill-level {
            text-align: right;
            margin-top: 10px;
            font-weight: 600;
            color: #f5903d;
        }

        /* Experience Section */
        .experience-section {
            background: rgba(0, 0, 0, 0.05);
        }

        .timeline {
            max-width: 1000px;
            width: 100%;
            position: relative;
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
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            position: relative;
            transition: all 0.3s ease;
        }

        .timeline-content:hover {
            transform: scale(1.05);
            box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
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
        }

        .timeline-item:nth-child(odd) .timeline-content::before {
            right: -35px;
        }

        .timeline-item:nth-child(even) .timeline-content::before {
            left: -35px;
        }

        .section-title {
            font-size: clamp(2.5rem, 6vw, 4rem);
            font-weight: 800;
            text-align: center;
            margin-bottom: 60px;
            color: #333;
            position: relative;
        }

        .section-title::after {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            width: 100px;
            height: 4px;
            background: linear-gradient(90deg, #f5903d, #ff6b35);
            border-radius: 2px;
        }

        /* Projects Section */
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

        /* Interactive Elements */
        .interactive-btn {
            background: linear-gradient(45deg, #f5903d, #ff6b35);
            color: white;
            border: none;
            padding: 15px 30px;
            border-radius: 50px;
            font-size: 1.1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
            margin: 10px;
        }

        .interactive-btn::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
            transition: left 0.5s;
        }

        .interactive-btn:hover::before {
            left: 100%;
        }

        .interactive-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 30px rgba(245, 144, 61, 0.4);
        }

        /* Responsive */
        @media (max-width: 768px) {
            .nav-container {
                top: 20px;
                right: 20px;
            }

            .timeline::before {
                left: 20px;
            }

            .timeline-item {
                width: calc(100% - 60px);
                left: 40px !important;
                text-align: left !important;
            }

            .timeline-content::before {
                left: -35px !important;
            }
        }

        /* Scroll Animations */
        .fade-in {
            opacity: 0;
            transform: translateY(50px);
        }

        .slide-in-left {
            opacity: 0;
            transform: translateX(-100px);
        }

        .slide-in-right {
            opacity: 0;
            transform: translateX(100px);
        }

        .scale-in {
            opacity: 0;
            transform: scale(0.8);
        }
</style>
