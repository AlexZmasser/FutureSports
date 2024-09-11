document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const query = document.getElementById('search-bar').value;
    console.log("Search Query:", query);
});

document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    console.log("Registered Name:", name);
    console.log("Registered Email:", email);
});

// Basic image carousel functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel img');
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
}
setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}, 3000);
showSlide(currentSlide);
