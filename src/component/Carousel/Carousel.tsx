import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Text, Title, Heading } from "../Typhography/Typography";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const CarouselContent = [
  {
    title: "Support Ukraine",
    subtitle: " government service and defence companies",
    imgSrc: "/assets/army.jpg",
  },
  {
    title: " Public letter",
    subtitle: "  from Supervisory Board",
    imgSrc: "/assets/exim.jpg",
  },
  {
    title: "Supervisory Board of Credit Agric",
    subtitle: "Started it works",
    imgSrc: "/assets/fasad-banka-slides.jpg",
  },

  {
    title: "China Export & Credit Insurance Corporation",
    subtitle:
      "Credit Agric entered into the framework Agreement of Cooperation.",
    imgSrc: "/assets/ukreximbank-entered-into-the-slides.jpg",
  },
];
const Carousel = () => {
  return (
    <div>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        navigation={true}
        autoplay={{
          delay: 10500,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        {CarouselContent.map((content, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full">
              <div className="absolute top-0 left-0 bg-black h-screen w-full opacity-60"></div>
              <Heading
                variant="large"
                className="absolute 2xl:top-[10rem] top-[7rem] right-0 left-0 bottom-0 m-auto text-white font-space"
              >
                {content.title}
              </Heading>
              <Text
                variant="large"
                className="absolute 2xl:top-[15rem] top-[11rem] right-0 left-0 bottom-0 m-auto  text-white font-kanit"
              >
                {content.subtitle}
              </Text>
              <img src={content.imgSrc} alt="" className="w-full h-screen" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
