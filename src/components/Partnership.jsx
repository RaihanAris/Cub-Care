"use client";
import React from "react";
import { Carousel } from "flowbite-react";

const Partnership = () => {
  return (
    <>
      <div
        className="partnership pt-36 pb-20 bg-teal-100 relative"
        id="partnership"
      >
        <div className="container px-10 mx-auto">
          <h1 className="text-center text-3xl font-bold text-pink-500 pb-4">
            Our <span className="text-teal-500">Partnership</span>
          </h1>
          <p className="max-w-lg text-center text-sm mx-auto font-semibold pb-8">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            autem quos excepturi culpa debitis rerum ipsum itaque quas dolorem
          </p>
          <div className="flex flex-wrap w-full justify-center items-center">
            <p className="text-sm text-center md:w-1/2 px-10 max-w-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium voluptate totam, nam vero magnam architecto animi,
              quibusdam, nemo quasi quisquam voluptatem? Magni eius deleniti
              earum, quae ullam quod ratione quaerat reprehenderit officia
              harum! Sed nihil illo voluptatibus veritatis asperiores animi.
            </p>
            <div className="w-full mx-auto pt-5 pb-5 py-5 md:w-1/2">
              <div className="h-40 sm:h-60 xl:h-80 2xl:h-96">
                <Carousel pauseOnHover>
                  <img src="features/CubNest/12.png" alt="..." />
                  <img src="features/CubNest/13.png" alt="..." />
                  <img src="features/CubNest/14.png" alt="..." />
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Partnership;
