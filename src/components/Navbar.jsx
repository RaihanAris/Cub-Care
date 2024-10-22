import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="navbar border-b fixed top-0 left-0 w-full bg-white z-50">
        <div className="container flex items-center justify-between px-10 py-3 mx-auto">
          <h1 className="text-2xl font-extrabold whitespace-nowrap">
            Cub Care.
          </h1>
          <ul
            className={`flex flex-col text-center w-auto absolute bg-white top-full mt-[1px] rounded-b-2xl shadow-xl left-1/2 -translate-x-1/2 gap-6 w-[80%] px-32 py-4 font-medium ${
              isOpen ? "" : "hidden"
            } lg:flex lg:static lg:flex-row lg:-translate-x-0 lg:shadow-none lg:gap-10 lg:px-0 lg:w-auto`}
          >
            <li>
              <a href="#home" className="hover:text-teal-500">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-teal-500">
                About
              </a>
            </li>
            <li>
              <a href="#features" className="hover:text-teal-500">
                Features
              </a>
            </li>
            <li>
              <a href="#partnership" className="hover:text-teal-500">
                Partnership
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-teal-500">
                Contact
              </a>
            </li>
          </ul>
          <div className="login-menu flex items-center justify-between gap-5">
            <h1 className="text-sm rounded-lg font-medium bg-teal-400 px-3 py-2 text-white hover:bg-teal-500 cursor-pointer">
              Login
            </h1>
            <h1 className="lg:hidden" onClick={toggleMenu}>
              <i className="ri-menu-line text-lg"></i>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
