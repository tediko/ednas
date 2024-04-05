const overlays = document.querySelectorAll('[data-kv-overlay]');
const imageElement1 = document.querySelector('[data-kv-image1]');
const imageElement2 = document.querySelector('[data-kv-image2]');

function change() {
    let imagesSrc = [imageElement1.src, imageElement2.src]

    overlays.forEach(overlay => {
        overlay.classList.add('active');

        overlay.addEventListener('transitionend', function transition() {
            imageElement1.src = imagesSrc[1];
            imageElement2.src = imagesSrc[0];
            overlay.classList.remove('active');

            overlay.removeEventListener('transitionend', transition);
        })
    })
}

export default window.onload = function () {
    setInterval(change, 4000);
};