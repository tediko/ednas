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

export default document.addEventListener('scroll', hideNavOnScroll)