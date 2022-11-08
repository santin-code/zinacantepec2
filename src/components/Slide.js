import React, { useRef, useState } from "react";
import "./slide.css";
import { Swiper, SwiperSlide } from "swiper/react";

import { slide } from "../data";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";

const Slide = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {slide.map(({ imagen, id }, index) => {
          return (
            <>
              {" "}
              <SwiperSlide className="swiper__slide" key={index}>
                {" "}
                <img src={imagen} alt="l" className="slide__imagen" />{" "}
              </SwiperSlide>{" "}
            </>
          );
        })}
      </Swiper>
    </>
  );
};

export default Slide;
