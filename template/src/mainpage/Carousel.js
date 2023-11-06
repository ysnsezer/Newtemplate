import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "../carousel.css";

export default function App() {
  return (
    <>
      <Swiper className="mySwiper" style={{height:"600px"}} loop={true}  spaceBetween={80} r
        slidesPerView={1} >
        <SwiperSlide className="SwiperSlide"><img src="headerslider.png" alt="Card Image" /></SwiperSlide>
        <SwiperSlide className="SwiperSlide"><img src="photo1.avif" alt="Card Image" /></SwiperSlide>
        <SwiperSlide className="SwiperSlide"><img src="photo2.avif" alt="Card Image" /></SwiperSlide>
        <SwiperSlide className="SwiperSlide"><img src="photo3.avif" alt="Card Image" /></SwiperSlide>
       

      </Swiper>
    </>
  );
}
