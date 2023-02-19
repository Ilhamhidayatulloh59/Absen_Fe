import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Keyboard, Pagination, EffectCoverflow } from "swiper";
import { Box, Flex } from "@chakra-ui/layout";

export default function Caraousel() {
  return (
    <>
      <Flex >
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        keyboard={{
          enabled: true,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        loop={true}
        modules={[Keyboard, EffectCoverflow, Pagination]}
        className="mySwiper"
      >
          <SwiperSlide>
            <img src="https://darussalamkasomalang.sch.id/images/banner/banneraja.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://darussalamkasomalang.sch.id/images/banner/banner1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://darussalamkasomalang.sch.id/images/banner/banner2.jpg" />
          </SwiperSlide>
        </Swiper>
      </Flex>
    </>
  );
}
