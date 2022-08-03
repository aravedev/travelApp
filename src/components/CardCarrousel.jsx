import React from "react";
import data from "../data/dataCarrousel";

////////////////////////

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, EffectFade } from "swiper";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

////////////////////////

export default function CardCarrousel() {
  console.log(data);
  return (
    <>
      <div className="flex justify-center">
        <Swiper
          modules={[Navigation, EffectFade]}
          navigation
          effect={"fade"}
          speed={800}
          slidesPerView={1}
        >
          {data.map((e) => (
            <SwiperSlide className="w-full">
              <div className="flex justify-center">
                <div className="flex flex-col md:flex-row md:items-center border border-gray-500">
                  <div className="md:w-1/2">
                    <img
                      className="max-w-full h-full object-cover "
                      src={`${e.imageUrl}`}
                      alt=""
                    />
                  </div>
                  <div className="md:w-1/2 text-center text-4xl md:p-4 font-light font-mono">
                    <p>
                      <span className="text-5xl">"</span>
                      {e.description}
                      <span className="text-5xl">"</span>
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
