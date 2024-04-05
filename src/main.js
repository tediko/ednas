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

const hideNavOnScroll = () => {
    let offsetScrollY = window.scrollY;
    let triggerOffset = 20;

    if (offsetScrollY > triggerOffset) {
        navElement.classList.add('on-scroll')
    } else {
        navElement.classList.remove('on-scroll')
    }
}

// Event listeners
document.addEventListener('scroll', hideNavOnScroll)
