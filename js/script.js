document.addEventListener('DOMContentLoaded', () => {
    // Inicialização dos ícones Lucide
    if (window.lucide) {
        lucide.createIcons();
    }

    // Menu Hamburger Mobile
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const toggleIcon = document.getElementById('toggle-icon');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const isActive = navMenu.classList.contains('active');
            
            // Altera ícone entre Menu e X
            if (toggleIcon) {
                toggleIcon.setAttribute('data-lucide', isActive ? 'x' : 'menu');
                lucide.createIcons();
            }
        });

        // Fechar menu ao clicar em um link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                if (toggleIcon) {
                    toggleIcon.setAttribute('data-lucide', 'menu');
                    lucide.createIcons();
                }
            });
        });
    }

    // Animações GSAP (Respeitando prefers-reduced-motion)
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!prefersReducedMotion && typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);

        // Animação Hero
        gsap.from('.hero-content > *', {
            opacity: 0,
            y: 30,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power2.out'
        });

        gsap.from('.hero-media', {
            opacity: 0,
            scale: 0.95,
            duration: 1,
            ease: 'power2.out',
            delay: 0.2
        });

        // Animação genérica para títulos de seção
        gsap.utils.toArray('.section-header, .sobre-content').forEach(section => {
            gsap.from(section, {
                scrollTrigger: {
                    trigger: section,
                    start: 'top 80%'
                },
                opacity: 0,
                y: 30,
                duration: 0.8,
                ease: 'power2.out'
            });
        });

        // Animação de entrada dos cards de serviços
        gsap.from('.servico-card', {
            scrollTrigger: {
                trigger: '.servicos-grid',
                start: 'top 80%'
            },
            opacity: 0,
            y: 40,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out'
        });

        // Animação dos cards de diferenciais
        gsap.from('.diferencial-card', {
            scrollTrigger: {
                trigger: '.diferenciais-grid',
                start: 'top 80%'
            },
            opacity: 0,
            scale: 0.9,
            duration: 0.6,
            stagger: 0.1,
            ease: 'back.out(1.5)'
        });

        // Animação da Galeria
        gsap.from('.galeria-item', {
            scrollTrigger: {
                trigger: '.galeria-grid',
                start: 'top 80%'
            },
            opacity: 0,
            y: 30,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out'
        });

        // Animação de Depoimentos
        gsap.from('.depoimento-card', {
            scrollTrigger: {
                trigger: '.depoimentos-grid',
                start: 'top 80%'
            },
            opacity: 0,
            y: 30,
            duration: 0.6,
            stagger: 0.15,
            ease: 'power2.out'
        });

        // Animação do CTA
        gsap.from('.cta-box', {
            scrollTrigger: {
                trigger: '.cta-section',
                start: 'top 80%'
            },
            opacity: 0,
            scale: 0.95,
            duration: 0.8,
            ease: 'power2.out'
        });
    }
});