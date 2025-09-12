// Typed text animation on Home
(function () {
    const typedText = document.querySelector('.typed-text');
    if (typedText) {
        const texts = ['Passionate Enginnering Student', 'Full Stack Developer', 'Tech Explorer' ,'Dedicated Learner'];
        let textIndex = 0;
        let charIndex = 0;
        let currentText = '';

        function type() {
            if (charIndex < texts[textIndex].length) {
                currentText += texts[textIndex].charAt(charIndex);
                typedText.textContent = currentText;
                charIndex++;
                setTimeout(type, 100);
            } else {
                setTimeout(erase, 2000);
            }
        }

        function erase() {
            if (charIndex > 0) {
                currentText = currentText.slice(0, -1);
                typedText.textContent = currentText;
                charIndex--;
                setTimeout(erase, 50);
            } else {
                textIndex = (textIndex + 1) % texts.length;
                setTimeout(type, 500);
            }
        }

        type();
    }
})();

// Animate skill bars on Education
(function () {
    const bars = document.querySelectorAll('.skill-level');
    if (bars.length) {
        bars.forEach(function (bar) {
            const level = bar.getAttribute('data-level');
            setTimeout(function () {
                bar.style.width = level;
            }, 500);
        });
    }
})();

// Contact form demo handler
(function () {
    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('Message sent successfully! ');
        });
    }
})();

// Mobile Navigation Toggle
(function () {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    if (hamburger && navMenu) {
        // Toggle menu on hamburger click
        hamburger.addEventListener('click', function () {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Toggle body scroll lock
            if (navMenu.classList.contains('active')) {
                document.body.classList.add('menu-open');
            } else {
                document.body.classList.remove('menu-open');
            }
        });

        // Close menu when clicking on a link
        navLinks.forEach(link => {
            link.addEventListener('click', function () {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.classList.remove('menu-open');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function (e) {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.classList.remove('menu-open');
            }
        });

        // Close menu on window resize if screen becomes larger
        window.addEventListener('resize', function () {
            if (window.innerWidth > 768) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.classList.remove('menu-open');
            }
        });
    }
})();

