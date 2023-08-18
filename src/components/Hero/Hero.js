"use client";
import HeroCategories from "./HeroCategories/HeroCategories";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Hero() {
  return (
    <div className="container">
      <div className="md:flex gap-4 items-start">
        <div className="hidden md:block w-60 border rounded-b shadow-lg">
          <HeroCategories />
        </div>

        <div className="slider rounded-b overflow-hidden">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            autoplay={true}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src="/banner1.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/banner2.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/banner2.jpg" alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
