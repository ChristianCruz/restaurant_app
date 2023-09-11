"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const data = [
  {
    id: 1,
    title: "Oven-Fresh, Hot, Crispy Pizzas!",
    image: "/slide1.jpg",
  },
  {
    id: 2,
    title: "we deliver your order wherever you are in NY",
    image: "/slide2.jpg",
  },
  {
    id: 3,
    title: "the best pizza to share with your family",
    image: "/slide3.jpg",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
      4000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row  bg-orange-100 ">
      {/* Text Container */}
      <div className="flex-1 flex items-center justify-center flex-col gap-8 text-red-500">
        <h1 className="text-5xl text-center uppercase p-4 md:p-10 md:text-6xl xl:text-7xl font-black">
          {data[currentSlide].title}
        </h1>
        <button className="bg-red-500 text-white py-4 px-8 font-semibold rounded">
          Order Now
        </button>
      </div>
      {/* Image Container */}
      <div className="w-full flex-1 relative ">
        <Image
          src={data[currentSlide].image}
          alt=""
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Slider;
