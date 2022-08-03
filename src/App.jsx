import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import CardCarrousel from "./components/CardCarrousel";
import data from "./data/data";
import Extra from "./components/Extra";

///////////////////////////////////////////////////////////////////////////
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

export default function App() {
  //console.log(info);

  return (
    <>
      <div className=" bg-infoRedColor ">
        <Navbar></Navbar>
      </div>
      <section>
        <Extra></Extra>
      </section>
      <section className="grid lg:grid-cols-3">
        {data.map((item) => {
          return <Card item={item}></Card>;
        })}
      </section>
    </>
  );
}
