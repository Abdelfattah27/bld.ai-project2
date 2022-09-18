import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "./CustomizeSwiper.css";
function MySwiper({ children }) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={60}
      slidesPerView={5}
      slidesPerGroup={4}
      navigation
    >
      {children}
    </Swiper>
  );
}

export default MySwiper;
