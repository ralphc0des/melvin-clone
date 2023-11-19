import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ExchangeRate from "../ExchangeComponent/ExchangeRate";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import NewsComponent from "../NewsComponent/NewsComponent";

// import required modules

const Slider = () => {
  return (
    <div className="mt-[10rem]">
      <Swiper
         slidesPerView={1}
         centeredSlides={false}
         slidesPerGroupSkip={1}
         grabCursor={true}
         keyboard={{
           enabled: true,
         }}
         breakpoints={{
           769: {
             slidesPerView: 2,
             slidesPerGroup: 2,
           },
         }}
         scrollbar={true}
         navigation={true}
         pagination={{
           clickable: true,
         }}
         className="mySwiper"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
       
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide>
          <NewsComponent articles={[]} />
        </SwiperSlide>
        <SwiperSlide>
          <NewsComponent articles={[]} />
        </SwiperSlide>
        <SwiperSlide>
          <NewsComponent articles={[]} />
        </SwiperSlide>
        <SwiperSlide>
          <NewsComponent articles={[]} />
        </SwiperSlide>
        <SwiperSlide>
          <NewsComponent articles={[]} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default Slider;
