const menuButton = document.querySelector('[data-menu]');
let isOpen = false;
let isClosing = false;
let menuTriggerDelay = 500;

const setTriggerDelay = () => {
    isClosing = true;

    setTimeout(() => {
        isClosing = false;
    }, menuTriggerDelay);
}

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

export default menuButton.addEventListener('click', () => toggleMenu());