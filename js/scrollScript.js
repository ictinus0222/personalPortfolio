
        // JavaScript for accordion functionality
        document.querySelectorAll('.accordion').forEach(button => {
            button.addEventListener('click', () => {
                button.classList.toggle('active');
                const panel = button.nextElementSibling;
                if (panel.style.maxHeight) {
                    panel.style.maxHeight = null;
                } else {
                    panel.style.maxHeight = panel.scrollHeight + "px";
                }
            });
        });

        // JavaScript for projects carousel scroll effect
        const projectsContainer = document.querySelector('.projects-container');
        const projectsSection = document.querySelector('.projects');
        
        projectsContainer.addEventListener('scroll', () => {
            if (projectsContainer.scrollLeft > 0) {
                projectsSection.classList.add('scrolled');
            } else {
                projectsSection.classList.remove('scrolled');
            }
        });

        // JavaScript for carousel functionality
        const indicators = document.querySelectorAll('.indicator');
        let currentIndex = 0;

        // Update indicators based on scroll position
        projectsContainer.addEventListener('scroll', () => {
            const scrollPosition = projectsContainer.scrollLeft;
            const cardWidth = projectsContainer.querySelector('.project-card').offsetWidth;
            const gap = 24; // Same as gap in CSS
            currentIndex = Math.round(scrollPosition / (cardWidth + gap));
            
            indicators.forEach((indicator, index) => {
                indicator.classList.toggle('active', index === currentIndex);
            });
        });

        // Click handler for indicators
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                const cardWidth = projectsContainer.querySelector('.project-card').offsetWidth;
                const gap = 24;
                projectsContainer.scrollTo({
                    left: index * (cardWidth + gap),
                    behavior: 'smooth'
                });
            });
        });

        // JavaScript for projects carousel enhanced scrolling
        let isDown = false;
        let startX;
        let scrollLeft;
        let velocity = 0;
        let lastTime = 0;
        let animationFrame;

        projectsContainer.addEventListener('mousedown', (e) => {
            isDown = true;
            startX = e.pageX - projectsContainer.offsetLeft;
            scrollLeft = projectsContainer.scrollLeft;
            cancelAnimationFrame(animationFrame);
        });

        projectsContainer.addEventListener('mouseleave', () => {
            isDown = false;
        });

        projectsContainer.addEventListener('mouseup', () => {
            isDown = false;
            // Apply momentum scrolling
            if (Math.abs(velocity) > 0.5) {
                momentumScroll();
            }
        });

        projectsContainer.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - projectsContainer.offsetLeft;
            const walk = (x - startX) * 2;
            projectsContainer.scrollLeft = scrollLeft - walk;
            
            // Calculate velocity
            const now = Date.now();
            const deltaTime = now - lastTime;
            if (deltaTime > 0) {
                velocity = walk / deltaTime;
            }
            lastTime = now;
        });

        function momentumScroll() {
            velocity *= 0.95; // Friction
            projectsContainer.scrollLeft += velocity;
            
            if (Math.abs(velocity) > 0.5) {
                animationFrame = requestAnimationFrame(momentumScroll);
            }
        }

        // Combined intersection observer for cards and sections
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (entry.target.classList.contains('project-card')) {
                        entry.target.classList.add('center');
                    } else if (entry.target.classList.contains('card')) {
                        entry.target.classList.add('visible');
                    } else if (entry.target.tagName === 'SECTION') {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                } else {
                    if (entry.target.classList.contains('project-card')) {
                        entry.target.classList.remove('center');
                    }
                }
            });
        }, {
            threshold: 0.1
        });

        // Observe all project cards
        document.querySelectorAll('.project-card').forEach(card => {
            observer.observe(card);
        });

        // Observe all cards
        document.querySelectorAll('.card').forEach(card => {
            observer.observe(card);
        });

        // Observe all sections
        document.querySelectorAll('section').forEach(section => {
            observer.observe(section);
        });

        // JavaScript for header scroll effect
        const header = document.querySelector('header');
        const navLinks = document.querySelectorAll('.nav-links a');
        const sections = document.querySelectorAll('section');

        window.addEventListener('scroll', () => {
            // Add scrolled class to header when scrolling
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }

            // Update active navigation link
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (window.scrollY >= (sectionTop - sectionHeight/3)) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').slice(1) === current) {
                    link.classList.add('active');
                }
            });
        });