"use client";
import React from "react";
import { Carousel } from "flowbite-react";

const Contact = () => {
  return (
    <>
      <div className="contact pt-36 pb-20  relative" id="contact">
        <div className="container px-10 mx-auto">
          <h1 className="text-center text-3xl font-bold text-pink-500 pb-4">
            Need <span className="text-teal-500">Help?</span>
          </h1>
          <p className="max-w-lg text-center text-sm mx-auto font-semibold pb-8">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            autem quos excepturi culpa debitis rerum ipsum itaque quas dolorem
          </p>
          <div className="w-fit mx-auto text-center border-2 rounded-xl border-pink-400 p-5">
            <h1 className="text-lg font-semibold py-2">
              Our Contact for Help!
            </h1>
            <div className="py-2">
              <p>
                <i className="ri-phone-line pr-1"></i>Call Center
              </p>
              <a href="" className="text-sm">
                +6285162641655
              </a>
            </div>

            <div className="py-2">
              <p>
                <i className="ri-mail-line pr-1"></i>Aduan dan Masukan
              </p>
              <a href="" className="text-sm">
                CubCare@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
