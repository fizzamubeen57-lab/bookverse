document.addEventListener('DOMContentLoaded', function() {
    // ========================================
    // CATEGORIES DATA
    // ========================================
    const categories = [
        { id: 1, name: 'Fiction', icon: 'fa-book', books: '500+', description: 'Novels, Mystery, Romance & Fantasy', tag: 'Popular' },
        { id: 2, name: 'Programming', icon: 'fa-laptop-code', books: '350+', description: 'HTML, CSS, JavaScript, Python & C++', tag: 'Trending' },
        { id: 3, name: 'Business', icon: 'fa-chart-line', books: '280+', description: 'Leadership, Marketing & Entrepreneurship', tag: 'Best Seller' },
        { id: 4, name: 'Islamic', icon: 'fa-mosque', books: '420+', description: 'Quran, Hadith & Islamic History', tag: 'Featured' },
        { id: 5, name: 'History', icon: 'fa-landmark', books: '300+', description: 'World History & Historical Events', tag: 'Classic' },
        { id: 6, name: 'Academic', icon: 'fa-graduation-cap', books: '450+', description: 'Computer Science, Engineering & Mathematics', tag: 'Students' },
        { id: 7, name: 'Philosophy', icon: 'fa-brain', books: '180+', description: 'Plato, Aristotle, Nietzsche & more', tag: "Editor's Pick" },
        { id: 8, name: 'Self Development', icon: 'fa-heart', books: '240+', description: 'Improve productivity, confidence & growth', tag: 'Motivation' },
        { id: 9, name: 'Finance', icon: 'fa-money-bill-trend-up', books: '200+', description: 'Investing, saving & wealth creation', tag: 'Finance' },
        { id: 10, name: 'Science', icon: 'fa-flask', books: '260+', description: 'Physics, Chemistry & Biology', tag: 'Science' },
        { id: 11, name: 'Geography', icon: 'fa-earth-americas', books: '150+', description: 'Countries, maps & natural resources', tag: 'Explore' },
        { id: 12, name: 'Biography', icon: 'fa-user-graduate', books: '170+', description: 'Inspiring life stories of great leaders', tag: 'Inspiring' }
    ];

    // ========================================
    // RENDER CATEGORIES
    // ========================================
    function renderCategories(categoriesArray) {
        const container = document.getElementById('categoriesGrid');
        if (!container) return;
        container.innerHTML = '';
        categoriesArray.forEach(cat => {
            const card = document.createElement('div');
            card.className = 'category-card';
            card.innerHTML = `
                <div class="category-icon"><i class="fa-solid ${cat.icon}"></i></div>
                <span class="popular">${cat.tag}</span>
                <h3>${cat.name}</h3>
                <h4>${cat.books} Books</h4>
                <p>${cat.description}</p>
                <a href="books.html" class="explore-btn">Explore <i class="fa-solid fa-arrow-right"></i></a>
            `;
            container.appendChild(card);
        });
    }

    renderCategories(categories);

    // ========================================
    // FILTER CATEGORIES
    // ========================================
    window.filterCategories = function() {
        const input = document.getElementById('categorySearch');
        const query = input.value.toLowerCase();
        const filtered = categories.filter(cat =>
            cat.name.toLowerCase().includes(query) ||
            cat.description.toLowerCase().includes(query) ||
            cat.tag.toLowerCase().includes(query)
        );
        renderCategories(filtered);
    };
});