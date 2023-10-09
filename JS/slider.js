import Swiper from '../thirdparty/swiper/swiper-bundle.min.mjs';
import Pagination from '../thirdparty/swiper/modules/pagination.min.mjs';
import Navigation from '../thirdparty/swiper/modules/navigation.min.mjs';

const slider = document.querySelector('.swiper-container');

let mySwiper = new Swiper(slider, {
    modules: [Pagination, Navigation],
    loop: true,
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});