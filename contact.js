document.addEventListener('DOMContentLoaded', function() {
    // ========================================
    // CONTACT FORM VALIDATION
    // ========================================
    window.validateForm = function() {
        const name = document.getElementById('fullName');
        const email = document.getElementById('emailAddress');
        const message = document.getElementById('message');

        if (!name.value.trim()) {
            alert('Please enter your full name.');
            name.focus();
            return false;
        }

        if (!email.value.trim() || !email.value.includes('@')) {
            alert('Please enter a valid email address.');
            email.focus();
            return false;
        }

        if (!message.value.trim()) {
            alert('Please enter your message.');
            message.focus();
            return false;
        }

        alert('Thank you for your message! We will get back to you soon.');
        document.getElementById('contactForm').reset();
        return false;
    };

    // ========================================
    // FAQ TOGGLE
    // ========================================
    window.toggleFAQ = function(button) {
        const answer = button.nextElementSibling;
        const icon = button.querySelector('i');

        if (answer.classList.contains('open')) {
            answer.classList.remove('open');
            icon.className = 'fa-solid fa-plus';
        } else {
            // Close other FAQs
            document.querySelectorAll('.faq-answer').forEach(a => a.classList.remove('open'));
            document.querySelectorAll('.faq-question i').forEach(i => i.className = 'fa-solid fa-plus');

            answer.classList.add('open');
            icon.className = 'fa-solid fa-minus';
        }
    };
});