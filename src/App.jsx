import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import CardCarrousel from "./components/CardCarrousel";
import data from "./data/data";

export default function App() {
  //console.log(info);

  return (
    <>
      <div className=" bg-infoRedColor ">
        <Navbar></Navbar>
      </div>
      <section>
        {data.map((item) => {
          return <Card item={item}></Card>;
        })}
      </section>
      <section>
        <CardCarrousel></CardCarrousel>
      </section>
    </>
  );
}
