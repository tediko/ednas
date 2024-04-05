const overlays = document.querySelectorAll('[data-kv-overlay]');
const imageElement1 = document.querySelector('[data-kv-image1]');
const imageElement2 = document.querySelector('[data-kv-image2]');
const imageElement3 = document.querySelector('[data-kv-image3]');
let windowSize = window.innerWidth;
let imagesSrcFirst = [imageElement1.src, imageElement2.src, imageElement3.src]

function change() {
    let imagesSrc = [imageElement1.src, imageElement2.src, imageElement3.src]

    overlays.forEach(overlay => {
        overlay.classList.add('active');
        const transition = setTimeout(() => {
            if (windowSize < 769) {
                imageElement1.src = imagesSrc[2];
                imageElement3.src = imagesSrc[0];
            } else {
                imageElement1.src = imagesSrc[1];
                imageElement2.src = imagesSrc[2];
                imageElement3.src = imagesSrc[0];
            }
            overlay.classList.remove('active');
            clearTimeout(transition);
        }, 500);
    })
}

window.addEventListener('resize', () => {
    windowSize = window.innerWidth;

    if (windowSize < 769) {
        imageElement1.src = imagesSrcFirst[0];
        imageElement2.src = imagesSrcFirst[1];
        imageElement3.src = imagesSrcFirst[2];
    }
})

export default window.onload = function () {
    setInterval(change, 2000);
};