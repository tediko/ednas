import './sass/main.scss';

// ----------------
// MENU NAVIGATION
// ----------------
const menuButton = document.querySelector('[data-menu]');
let isOpen = false;
let isClosing = false;
let menuTriggerDelay = 500;

// Adding some delay to prevent user from toggling menu instantly.
const setTriggerDelay = () => {
    isClosing = true;

    setTimeout(() => {
        isClosing = false;
    }, menuTriggerDelay);
}

// Toggle menu
const toggleMenu = () => {
    if (isClosing) return;
    isOpen = !isOpen;
    setTriggerDelay()
        
    if (isOpen) {
        menuButton.setAttribute("aria-expanded", isOpen);
    }
    
    if (!isOpen) {
        menuButton.setAttribute("aria-expanded", isOpen);
    }
}

// Event listeners
menuButton.addEventListener('click', () => toggleMenu());

// ----------------
// NAV ON SCROLL
// ----------------
const navElement = document.querySelector('[data-nav]');
const headerElement = document.querySelector('[data-header]');

const hideNavOnScroll = () => {
    let offsetScrollY = window.scrollY;
    let triggerOffset = 20;

    if (offsetScrollY > triggerOffset) {
        navElement.classList.add('on-scroll');
        headerElement.classList.add('on-scroll');
    } else {
        navElement.classList.remove('on-scroll')
        headerElement.classList.remove('on-scroll');
    }
}

// Event listeners
document.addEventListener('scroll', hideNavOnScroll)

// ----------------
// VIDEO PLAYER
// ----------------
const videoWrapper = document.querySelector('[data-video-wrapper]');
const videoElement = document.querySelector('[data-video]');

// Event listeners
videoWrapper.addEventListener('click', () => {
    videoElement.classList.add('active');
    videoElement.src += "&autoplay=1";
}, {once : true})

// ----------------
// MAKE WHOLE SLIDE CLICKABLE
// ----------------
const slides = document.querySelectorAll('[data-slide]');
slides.forEach(slide => {  
    let link = slide.querySelector('a');
    slide.addEventListener('click', () => {
        link.click();
    })
});

// ----------------
// SWIPER
// ----------------
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

const swiper = new Swiper(".swiper", {
    modules: [Navigation],
    loop: false,
    slidesPerView: "auto",
    spaceBetween: 20,
    centeredSlides: false,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
  });

// ----------------
// IMAGE SWIPE
// ----------------
const overlays = document.querySelectorAll('[data-kv-overlay]');
const imageElement1 = document.querySelector('[data-kv-image1]');
const imageElement2 = document.querySelector('[data-kv-image2]');
const imagesSrc = [imageElement1.src, imageElement2.src]

function change() {
    let randomNumber = Math.round(Math.random());
    overlays.forEach(overlay => {
        overlay.classList.add('active');

        overlay.addEventListener('transitionend', function transition() {
            imageElement1.src = imagesSrc[randomNumber == 1 ? 0 : 1];
            imageElement2.src = imagesSrc[randomNumber == 1 ? 1 : 0];
            overlay.classList.remove('active');

            overlay.removeEventListener('transitionend', transition);
        })
    })
}

window.onload = function () {
    setInterval(change, 4000);
};
