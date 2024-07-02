function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}



let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }

    const offset = -currentSlide * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
});








// let currentSlide = 0;

// function showSlide(index) {
//     const slides = document.querySelectorAll('.carousel-item');
//     const totalSlides = slides.length;

//     if (index >= totalSlides) {
//         currentSlide = 0;
//     } else if (index < 0) {
//         currentSlide = totalSlides - 1;
//     } else {
//         currentSlide = index;
//     }

//     const offset = -currentSlide * 100;
//     document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
// }

// function nextSlide() {
//     const slides = document.querySelectorAll('.carousel-item');
//     currentSlide = (currentSlide + 1) % slides.length;
//     showSlide(currentSlide);
// }

// function prevSlide() {
//     const slides = document.querySelectorAll('.carousel-item');
//     currentSlide = (currentSlide - 1 + slides.length) % slides.length;
//     showSlide(currentSlide);
// }

// function handleButtonClick(action) {
//     alert(`You clicked ${action}`);
// }

// document.addEventListener('DOMContentLoaded', () => {
//     showSlide(currentSlide);
// });



