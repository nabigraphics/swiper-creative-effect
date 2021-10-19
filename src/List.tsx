import "swiper/css";
import "swiper/css/effect-creative";

import React from "react";
import { EffectCreative } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Item from "./Item";

const items = ["#e9f4c9", "#4283e4", "#513c83", "#e7663b"];

const List = () => {
  return (
    <div>
      <Swiper
        effect="creative"
        modules={[EffectCreative]}
        loop
        roundLengths
        slidesPerView={1.42}
        centeredSlides
        slidesOffsetBefore={56}
        creativeEffect={{
          limitProgress: 2,
          prev: {
            opacity: 0,
            scale: 0.8,
            translate: ["-72.2%", 0, 0],
          },
          next: {
            opacity: 0.7,
            scale: 0.8,
            translate: ["72.2%", 0, 0],
          },
        }}
      >
        {items.map((color, index) => (
          <SwiperSlide key={index}>
            <Item color={color}>{index + 1}</Item>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default List;
