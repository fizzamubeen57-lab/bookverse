/*=========================================
        BOOKVERSE JAVASCRIPT
=========================================*/

document.addEventListener("DOMContentLoaded", function () {

    console.log("BookVerse Loaded Successfully!");

    /*=========================================
            LIVE BOOK SEARCH
    =========================================*/

    const searchInput = document.getElementById("bookSearch");

    const books = document.querySelectorAll(".book-card");

    if (searchInput) {

        searchInput.addEventListener("keyup", function () {

            const value = this.value.toLowerCase();

            books.forEach(function (book) {

                const title = book.querySelector("h3").textContent.toLowerCase();

                const author = book.querySelector("h4").textContent.toLowerCase();

                if (title.includes(value) || author.includes(value)) {

                    book.style.display = "block";

                }

                else {

                    book.style.display = "none";

                }

            });

        });

    }

    /*=========================================
            BUY NOW BUTTON
    =========================================*/

    const buyButtons = document.querySelectorAll(".buy-btn");

    buyButtons.forEach(function(button){

        button.addEventListener("click",function(e){

            e.preventDefault();

            alert("Thank you for choosing this book! Redirecting to checkout...");

        });

    });

    /*=========================================
            VIEW DETAILS BUTTON
    =========================================*/

    const detailButtons = document.querySelectorAll(".details-btn");

    detailButtons.forEach(function(button){

        button.addEventListener("click",function(e){

            e.preventDefault();

            alert("Book details page will be available soon.");

        });

    });

});
/*=========================================
        SCROLL TO TOP BUTTON
=========================================*/

const topBtn = document.createElement("button");

topBtn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

/* Show / Hide Button */

window.addEventListener("scroll", function () {

    if (window.scrollY > 400) {

        topBtn.classList.add("show");

    } else {

        topBtn.classList.remove("show");

    }

});

/* Scroll to Top */

topBtn.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/*=========================================
        BOOK CARD ANIMATION
=========================================*/

const cards = document.querySelectorAll(".book-card");

cards.forEach(function(card){

    card.addEventListener("mouseenter",function(){

        this.style.transition="0.4s";

        this.style.transform="translateY(-12px)";

    });

    card.addEventListener("mouseleave",function(){

        this.style.transform="translateY(0px)";

    });

});


/*=========================================
        NEWSLETTER
=========================================*/

const newsletter = document.querySelector(".newsletter form");

if(newsletter){

newsletter.addEventListener("submit",function(e){

    e.preventDefault();

    alert("🎉 Thank you for subscribing to BookVerse!");

    this.reset();

});

}


/*=========================================
        NAVIGATION TOGGLE
=========================================*/

    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function () {
            navMenu.classList.toggle('show');
        });

        navMenu.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                navMenu.classList.remove('show');
            });
        });
    }

    /*=========================================
        ACTIVE NAVIGATION
=========================================*/

    const navLinks=document.querySelectorAll(".menu a");

    navLinks.forEach(function(link){

        link.addEventListener("click",function(){

            navLinks.forEach(function(item){

                item.classList.remove("active");

            });

            this.classList.add("active");

        });

    });

/*=========================================
        LOADING MESSAGE
=========================================*/

window.addEventListener("load",function(){

    console.log("Books Page Loaded Successfully.");

});


/*=========================================
        CONSOLE MESSAGE
=========================================*/

console.log("Welcome to BookVerse 📚");
/*=========================================
        BOOK CARD FADE ANIMATION
=========================================*/

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show-card");

        }

    });

});

document.querySelectorAll(".book-card").forEach((card) => {

    observer.observe(card);

});


/*=========================================
        CATEGORY CARD ANIMATION
=========================================*/

document.querySelectorAll(".category-card").forEach((card) => {

    card.addEventListener("mouseenter", function () {

        this.style.transform = "translateY(-12px) scale(1.03)";

    });

    card.addEventListener("mouseleave", function () {

        this.style.transform = "translateY(0) scale(1)";

    });

});


/*=========================================
        IMAGE HOVER EFFECT
=========================================*/

document.querySelectorAll(".book-image img").forEach((image) => {

    image.addEventListener("mouseenter", function () {

        this.style.transform = "scale(1.08)";

    });

    image.addEventListener("mouseleave", function () {

        this.style.transform = "scale(1)";

    });

});


/*=========================================
        BUTTON RIPPLE EFFECT
=========================================*/

document.querySelectorAll(".buy-btn,.details-btn").forEach((button) => {

    button.addEventListener("click", function () {

        this.style.transform = "scale(0.95)";

        setTimeout(() => {

            this.style.transform = "scale(1)";

        }, 150);

    });

});


/*=========================================
        CURRENT YEAR IN FOOTER
=========================================*/

const year = document.getElementById("year");

if (year) {

    year.textContent = new Date().getFullYear();

}


/*=========================================
        WELCOME MESSAGE
=========================================*/

setTimeout(function () {

    console.log("📚 Welcome to BookVerse!");

}, 1000);


/*=========================================
        END OF FILE
=========================================*/