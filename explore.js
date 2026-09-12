document.addEventListener('DOMContentLoaded', function() {
    // ========================================
    // PHILOSOPHERS DATA
    // ========================================
    const philosophers = [
        {
            id: 1,
            name: 'Socrates',
            era: '470 BC – 399 BC',
            location: 'Greece',
            description: 'Known as the Father of Western Philosophy. He encouraged people to question everything and search for truth through dialogue.',
            famousWork: "Plato's Dialogues",
            quote: '"The unexamined life is not worth living."',
            image: 'socrates.jpg'
        },
        {
            id: 2,
            name: 'Plato',
            era: '428 BC – 348 BC',
            location: 'Greece',
            description: 'Student of Socrates and founder of the Academy in Athens, one of the first institutions of higher learning.',
            famousWork: 'The Republic',
            quote: '"Wise men speak because they have something to say."',
            image: 'plato.jpg'
        },
        {
            id: 3,
            name: 'Aristotle',
            era: '384 BC – 322 BC',
            location: 'Greece',
            description: 'Teacher of Alexander the Great and one of the greatest thinkers in philosophy, science and logic.',
            famousWork: 'Politics • Metaphysics • Nicomachean Ethics',
            quote: '"Knowing yourself is the beginning of all wisdom."',
            image: 'aristotle.jpg'
        },
        {
            id: 4,
            name: 'Confucius',
            era: '551 BC – 479 BC',
            location: 'China',
            description: 'Chinese philosopher whose teachings focused on morality, education, respect and social harmony.',
            famousWork: 'The Analects',
            quote: '"Everything has beauty, but not everyone sees it."',
            image: 'confucius.jpg'
        },
        {
            id: 5,
            name: 'Ibn Sina (Avicenna)',
            era: '980 – 1037',
            location: 'Persia',
            description: 'One of the greatest Islamic philosophers, physicians and scientists. His work influenced medicine for centuries.',
            famousWork: 'The Canon of Medicine',
            quote: '"Knowledge begins with observation."',
            image: 'ibn-sina.jpg'
        },
        {
            id: 6,
            name: 'Al-Farabi',
            era: '872 – 950',
            location: 'Central Asia',
            description: 'Known as the Second Teacher after Aristotle. He made major contributions to political philosophy and logic.',
            famousWork: 'The Virtuous City',
            quote: '"True happiness comes through knowledge."',
            image: 'al-farabi.jpg'
        },
        {
            id: 7,
            name: 'Friedrich Nietzsche',
            era: '1844 – 1900',
            location: 'Germany',
            description: 'German philosopher known for his ideas on individuality, morality, and the concept of the "Übermensch".',
            famousWork: 'Thus Spoke Zarathustra',
            quote: '"He who has a why to live can bear almost any how."',
            image: 'nietzsche.jpg'
        },
        {
            id: 8,
            name: 'René Descartes',
            era: '1596 – 1650',
            location: 'France',
            description: 'Father of Modern Philosophy and founder of analytical thinking.',
            famousWork: 'Discourse on the Method',
            quote: '"I think, therefore I am."',
            image: 'descartes.jpg'
        },
        {
            id: 9,
            name: 'Immanuel Kant',
            era: '1724 – 1804',
            location: 'Germany',
            description: 'One of the most influential philosophers in ethics, reason, and human knowledge.',
            famousWork: 'Critique of Pure Reason',
            quote: '"Science is organized knowledge. Wisdom is organized life."',
            image: 'kant.jpg'
        },
        {
            id: 10,
            name: 'Lao Tzu',
            era: '6th Century BC',
            location: 'China',
            description: 'Ancient Chinese philosopher and founder of Taoism.',
            famousWork: 'Tao Te Ching',
            quote: '"The journey of a thousand miles begins with one step."',
            image: 'lao-tzu.jpg'
        },
        {
            id: 11,
            name: 'Ibn Rushd (Averroes)',
            era: '1126 – 1198',
            location: 'Spain',
            description: 'Muslim philosopher and scholar who explained Aristotle\'s works and influenced European philosophy.',
            famousWork: 'The Incoherence of the Incoherence',
            quote: '"Knowledge is the path to truth."',
            image: 'ibn-rushd.jpg'
        },
        {
            id: 12,
            name: 'Allama Muhammad Iqbal',
            era: '1877 – 1938',
            location: 'Pakistan',
            description: 'National Poet of Pakistan and philosopher of selfhood (Khudi), whose ideas inspired generations.',
            famousWork: 'Asrar-e-Khudi',
            quote: '"Raise yourself so high that destiny asks your permission."',
            image: 'iqbal.jpg'
        }
    ];

    // ========================================
    // RENDER PHILOSOPHERS
    // ========================================
    function renderPhilosophers(philosophersArray) {
        const container = document.getElementById('philosopherGrid');
        if (!container) return;
        container.innerHTML = '';
        philosophersArray.forEach(ph => {
            const card = document.createElement('div');
            card.className = 'philosopher-card';
            card.innerHTML = `
                <img src="images/${ph.image}" alt="${ph.name}" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22300%22 height=%22260%22%3E%3Crect width=%22300%22 height=%22260%22 fill=%22%23ddd%22/%3E%3Ctext x=%2250%22 y=%22130%22 fill=%22%23555%22 font-size=%2220%22%3E${ph.name}%3C/text%3E%3C/svg%3E'">
                <div class="philosopher-info">
                    <h3>${ph.name}</h3>
                    <span><i class="fa-solid fa-location-dot"></i> ${ph.location} | ${ph.era}</span>
                    <p>${ph.description}</p>
                    <h4>Famous Work</h4>
                    <p>${ph.famousWork}</p>
                    <blockquote>${ph.quote}</blockquote>
                    <a href="#" class="read-btn" onclick="alert('Read more about ${ph.name}')">Read More</a>
                </div>
            `;
            container.appendChild(card);
        });
    }

    renderPhilosophers(philosophers);

    // ========================================
    // FILTER PHILOSOPHERS
    // ========================================
    window.filterPhilosophers = function() {
        const input = document.getElementById('philosopherSearch');
        const query = input.value.toLowerCase();
        const filtered = philosophers.filter(ph =>
            ph.name.toLowerCase().includes(query) ||
            ph.location.toLowerCase().includes(query) ||
            ph.description.toLowerCase().includes(query) ||
            ph.famousWork.toLowerCase().includes(query)
        );
        renderPhilosophers(filtered);
    };
});