import React from "react";

export default function Navbar() {
  return (
    <>
      <div className="container w-full mx-auto ">
        <nav className=" h-14 w-full flex justify-center items-center space-x-2">
          <img
            src="/images/globe 2.png"
            className="text-black bg-inherit w-6 h-6"
            alt=""
          />
          <h2 className="text-base text-white">my travel journal</h2>
        </nav>
      </div>
    </>
  );
}
