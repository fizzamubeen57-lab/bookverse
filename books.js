document.addEventListener('DOMContentLoaded', function() {
    // ========================================
    // BOOKS DATA
    // ========================================
    const books = [
        { id: 1, title: 'Atomic Habits', author: 'James Clear', category: 'Self Development', price: '$15.99', rating: 5, image: 'atomic-habits.jpg' },
        { id: 2, title: 'Rich Dad Poor Dad', author: 'Robert Kiyosaki', category: 'Business', price: '$18.99', rating: 5, image: 'rich-dad.jpg' },
        { id: 3, title: 'Psychology of Money', author: 'Morgan Housel', category: 'Business', price: '$16.50', rating: 5, image: 'psychology-money.jpg' },
        { id: 4, title: 'Clean Code', author: 'Robert C. Martin', category: 'Programming', price: '$22.99', rating: 5, image: 'clean-code.jpg' },
        { id: 5, title: 'Think and Grow Rich', author: 'Napoleon Hill', category: 'Self Development', price: '$12.99', rating: 4, image: 'think-grow-rich.jpg' },
        { id: 6, title: 'Zero to One', author: 'Peter Thiel', category: 'Business', price: '$14.99', rating: 4, image: 'zero-to-one.jpg' },
        { id: 7, title: 'Python Crash Course', author: 'Eric Matthes', category: 'Programming', price: '$29.99', rating: 5, image: 'python-crash-course.jpg' },
        { id: 8, title: 'The Sealed Nectar', author: 'Safi-ur-Rahman', category: 'Islamic', price: '$21.99', rating: 5, image: 'sealed-nectar.jpg' },
        { id: 9, title: 'Deep Work', author: 'Cal Newport', category: 'Self Development', price: '$19.99', rating: 4, image: 'deep-work.jpg' },
        { id: 10, title: 'C++ Primer', author: 'Stanley Lippman', category: 'Programming', price: '$32.99', rating: 4, image: 'cpp-primer.jpg' },
        { id: 11, title: 'The Lean Startup', author: 'Eric Ries', category: 'Business', price: '$18.99', rating: 4, image: 'lean-startup.jpg' },
        { id: 12, title: 'History of Islam', author: 'Various Authors', category: 'Islamic', price: '$21.99', rating: 4, image: 'history-islam.jpg' }
    ];

    // ========================================
    // RENDER BOOKS
    // ========================================
    function renderBooks(booksArray) {
        const container = document.getElementById('booksGrid');
        if (!container) return;
        container.innerHTML = '';
        booksArray.forEach(book => {
            const stars = '⭐'.repeat(book.rating) + '☆'.repeat(5 - book.rating);
            const card = document.createElement('div');
            card.className = 'book-card';
            card.innerHTML = `
                <span class="badge">${book.category}</span>
                <img src="images/${book.image}" alt="${book.title}" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22130%22 height=%22180%22%3E%3Crect width=%22130%22 height=%22180%22 fill=%22%23ddd%22/%3E%3Ctext x=%2220%22 y=%2290%22 fill=%22%23555%22 font-size=%2212%22%3E${book.title}%3C/text%3E%3C/svg%3E'">
                <div class="book-info">
                    <h3>${book.title}</h3>
                    <p>${book.author}</p>
                    <div class="rating">${stars}</div>
                    <h4>${book.price}</h4>
                    <div class="book-buttons">
                        <a href="#" onclick="addToCart('${book.title}')"><i class="fa-solid fa-cart-plus"></i> Add to Cart</a>
                        <i class="fa-regular fa-heart" onclick="toggleWishlist(this)"></i>
                    </div>
                </div>
            `;
            container.appendChild(card);
        });
    }

    renderBooks(books);

    // ========================================
    // SEARCH FUNCTIONALITY
    // ========================================
    const searchInput = document.getElementById('bookSearch');
    if (searchInput) {
        searchInput.addEventListener('keyup', function() {
            const query = this.value.toLowerCase();
            const filtered = books.filter(book =>
                book.title.toLowerCase().includes(query) ||
                book.author.toLowerCase().includes(query) ||
                book.category.toLowerCase().includes(query)
            );
            renderBooks(filtered);
        });
    }
});

// ========================================
// ADD TO CART (global)
// ========================================
function addToCart(bookName) {
    alert('Added "' + bookName + '" to your cart!');
}

// ========================================
// WISHLIST TOGGLE (global)
// ========================================
function toggleWishlist(element) {
    element.classList.toggle('fa-regular');
    element.classList.toggle('fa-solid');
    if (element.classList.contains('fa-solid')) {
        alert('Added to wishlist!');
    } else {
        alert('Removed from wishlist!');
    }
}