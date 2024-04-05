const videoWrapper = document.querySelector('[data-video-wrapper]');
const videoElement = document.querySelector('[data-video]');

export default videoWrapper.addEventListener('click', () => {
    videoElement.classList.add('active');
    videoElement.src += "&autoplay=1";
}, {once : true})
