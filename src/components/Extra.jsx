import React from "react";
import data from "../data/dataCarrousel";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

export default function Extra() {
  return (
    <Swiper spaceBetween={50} slidesPerView={1}>
      {data.map((e) => (
        <SwiperSlide className="w-full grid justify-center md:grid-flow-row items-center">
          <div className="flex justify-center items-center">
            <div className="flex flex-col lg:flex-row lg:items-center ">
              <div className="lg:w-1/2 ">
                <img className="h-screen " src={`${e.imageUrl}`} alt="" />
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
  );
}
