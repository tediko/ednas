const slides = document.querySelectorAll('[data-slide]');

export default slides.forEach(slide => {  
    let link = slide.querySelector('a');
    slide.addEventListener('click', () => {
        link.click();
    })
});
