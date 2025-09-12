// Typed text animation on Home
(function () {
    const typedText = document.querySelector('.typed-text');
    if (typedText) {
        const texts = ['Passionate Enginnering Student', 'Full Stack Developer', 'Tech Explorer'];
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

