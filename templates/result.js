 // Counter animation
        function animateCounters() {
            const counters = document.querySelectorAll('.stats-counter');
            
            counters.forEach(counter => {
                const target = parseInt(counter.getAttribute('data-target'));
                const duration = 2000;
                const step = target / (duration / 16);
                let current = 0;
                
                const timer = setInterval(() => {
                    current += step;
                    if (current >= target) {
                        counter.textContent = target;
                        clearInterval(timer);
                    } else {
                        counter.textContent = Math.floor(current);
                    }
                }, 16);
            });
        }

        // Progress bar animation
        function animateProgressBars() {
            const progressBars = document.querySelectorAll('.progress-bar');
            
            progressBars.forEach((bar, index) => {
                setTimeout(() => {
                    const width = bar.style.width;
                    bar.style.width = '0%';
                    setTimeout(() => {
                        bar.style.width = width;
                    }, 100);
                }, index * 200);
            });
        }

        // Celebration particles
        function createCelebrationParticles() {
            const colors = ['#fbbf24', '#10b981', '#3b82f6', '#8b5cf6', '#ec4899'];
            
            for (let i = 0; i < 20; i++) {
                setTimeout(() => {
                    const particle = document.createElement('div');
                    particle.className = 'celebration-particle';
                    particle.style.left = Math.random() * window.innerWidth + 'px';
                    particle.style.top = window.innerHeight + 'px';
                    particle.style.background = colors[Math.floor(Math.random() * colors.length)];
                    
                    document.body.appendChild(particle);
                    
                    setTimeout(() => {
                        particle.remove();
                    }, 2000);
                }, i * 100);
            }
        }

        // Share functionality
        function shareResults() {
            if (navigator.share) {
                navigator.share({
                    title: 'My CareerCraft Analysis Results',
                    text: 'Check out my resume analysis results from CareerCraft AI!',
                    url: window.location.href
                });
            } else {
                // Fallback for browsers that don't support Web Share API
                const url = window.location.href;
                navigator.clipboard.writeText(url).then(() => {
                    alert('Results URL copied to clipboard!');
                });
            }
        }

        // Skill badge hover effects
        function initSkillBadges() {
            const skillBadges = document.querySelectorAll('.skill-badge');
            
            skillBadges.forEach(badge => {
                badge.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-3px) scale(1.05) rotate(2deg)';
                });
                
                badge.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0) scale(1) rotate(0deg)';
                });
            });
        }

        // Job card interactions
        function initJobCards() {
            const jobCards = document.querySelectorAll('.job-card');
            
            jobCards.forEach(card => {
                card.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-8px) scale(1.02)';
                    this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.2)';
                });
                
                card.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0) scale(1)';
                    this.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.1)';
                });
            });
        }

        // Initialize everything when page loads
        window.addEventListener('load', function() {
            setTimeout(animateCounters, 500);
            setTimeout(animateProgressBars, 1000);
            setTimeout(createCelebrationParticles, 1500);
            initSkillBadges();
            initJobCards();
            
            // Add loading animation
            document.body.classList.add('animate-fade-in');
        });

        // Smooth scrolling
        document.documentElement.style.scrollBehavior = 'smooth';

        // Add intersection observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in');
                }
            });
        }, observerOptions);

        // Observe all animatable elements
        document.querySelectorAll('.glass-card, .job-card').forEach(el => {
            observer.observe(el);
        });

        // Print styles
        window.addEventListener('beforeprint', function() {
            document.body.style.background = 'white';
        });

        window.addEventListener('afterprint', function() {
            document.body.style.background = '';
        });