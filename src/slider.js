import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

export const swiper = new Swiper(".swiper", {
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