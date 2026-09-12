// ========================================
// FONT SIZE CONTROL
// ========================================
let currentFontSize = 20;

function increaseFont() {
    currentFontSize += 2;
    document.getElementById('bookContent').style.fontSize = currentFontSize + 'px';
}

function decreaseFont() {
    if (currentFontSize > 12) {
        currentFontSize -= 2;
        document.getElementById('bookContent').style.fontSize = currentFontSize + 'px';
    }
}

// ========================================
// DARK MODE TOGGLE
// ========================================
let isDarkMode = false;

function toggleDarkMode() {
    const content = document.getElementById('bookContent');
    const reader = document.querySelector('.reader');
    isDarkMode = !isDarkMode;
    if (isDarkMode) {
        content.style.color = '#e0e0e0';
        reader.style.background = '#1a1a2e';
        reader.style.color = '#e0e0e0';
    } else {
        content.style.color = '#1e1e2a';
        reader.style.background = '#fff';
        reader.style.color = '#1e1e2a';
    }
}

// ========================================
// BOOKMARK FUNCTION
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    const bookmarkBtn = document.querySelector('.bookmark');
    if (bookmarkBtn) {
        bookmarkBtn.addEventListener('click', function() {
            alert('Bookmarked this page!');
        });
    }

    // ========================================
    // BUY BUTTON
    // ========================================
    const buyBtn = document.querySelector('.buy');
    if (buyBtn) {
        buyBtn.addEventListener('click', function() {
            alert('Redirecting to checkout...');
        });
    }

    // ========================================
    // WISHLIST BUTTON
    // ========================================
    const wishlistBtn = document.querySelector('.wishlist');
    if (wishlistBtn) {
        wishlistBtn.addEventListener('click', function() {
            alert('Added to wishlist!');
        });
    }

    // ========================================
    // SAMPLE DOWNLOAD
    // ========================================
    const sampleBtn = document.querySelector('.sample');
    if (sampleBtn) {
        sampleBtn.addEventListener('click', function() {
            alert('Downloading sample...');
        });
    }
});