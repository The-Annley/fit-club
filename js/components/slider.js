import { Navigation, Pagination } from "swiper/modules";
const programs = new Swiper(".programs__slider", {
  modules: [Navigation, Pagination],
  slidesPerView: "auto",
});
