import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";
import { Box, Flex } from "@chakra-ui/layout";

export default function Caraousel() {
  return (
    <>
      <Flex borderRadius='xl' justify='center' overflow='hidden' mt='4'>
        <Swiper
          slidesPerView={1}
          loop={true}
          pagination={{
            clickable: true,
          }}
          // navigation={true}
          modules={[Pagination, Navigation]}
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
