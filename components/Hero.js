import Link from "next/link";
import React from "react";

const Hero = ({ heading, message }) => {
  return (
    <div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img">
      {/* Overlay*/}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/60 z-[2]" />
      <div className="p-5 text-white z-[2]  mt-[-10rem]">
        <h2 className="text-5xl font-bold text-center">{heading}</h2>
        <p className="py-5 text-xl font-semibold">{message}</p>
        <div className="text-center">
          {" "}
          <Link href="/Contact">
            <button className="px-8 py-2 border font-semibold text-white hover:bg-yellow-500 hover:text-black ease-in duration-300 ">
              Hire Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
