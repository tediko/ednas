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

export default window.onload = function () {
    setInterval(change, 4000);
};