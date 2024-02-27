import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
export default function Navbar() {
  const [nav, setNav] = useState();
  function handleClick() {
    setNav(!nav);
  }
  function closeNav() {
    setNav(!nav);
  }
  return (
    <header className="w-full h-[100px] flex justify-center items-center px-5 z-10 relative">
      <h1 className="font-bold text-orange-700 text-2xl ">PRICIOUX</h1>
      <nav className="w-full h-full flex justify-evenly px-10  items-center">
        <ul
          className="hidden lg:flex gap-10 text-2xl text-center text-gray-600 font-medium uppercase
       cursor-pointer "
        >
          <li className="hover:text-orange-500  hover:border-b-2 border-orange-500 transition-all duration-300 ease-in-out">
            Home
          </li>
          <li className="  hover:text-orange-500 hover:border-b-2 border-orange-500 transition-all duration-300 ease-in-out">
            <a href="#service">services</a>
          </li>
          <li className=" hover:text-orange-500  hover:border-b-2 border-orange-500 transition-all duration-300 ease-in-out">
            <a href="#about">About</a>
          </li>
          <li className=" hover:text-orange-500 hover:border-b-2 border-orange-500 transition-all duration-300 ease-in-out">
            <a href="#gallery">gallery</a>
          </li>

          <li className="  hover:text-orange-500 hover:border-b-2 border-orange-500 transition-all duration-300 ease-in-out">
            <a href="#contact">contact</a>
          </li>
        </ul>
      </nav>
      <div
        className=" z-10 cursor-pointer w-[200px] h-[50px] flex justify-center rounded-sm items-center text-white bg-orange-500 hover:bg-orange-300  lg:hidden"
        onClick={handleClick}
      >
        {!nav ? (
          <CiMenuFries size={40} />
        ) : (
          <IoMdClose size={40} className="text-white" />
        )}
      </div>
      {/* {mobile menu} */}

      <ul
        className={
          nav
            ? "w-full h-[350px] bg-white absolute flex flex-col pl-2 ease-linear cursor-pointer gap-5 text-gray-600 font-medium  pt-10 uppercase top-0 left-0 lg:hidden text-2xl "
            : "hidden"
        }
        onClick={closeNav}
      >
        <li className=" hover:text-orange-500  hover:border-b-2 border-orange-500 transition-all duration-300 ease-in-out">
          Home
        </li>
        <li className=" hover:text-orange-500 hover:border-b-2 border-orange-500 transition-all duration-300 ease-in-out">
          <a href="#service ">Service</a>
        </li>
        <li className=" hover:text-orange-500  hover:border-b-2 border-orange-500 transition-all duration-300 ease-in-out">
          <a href="#about">About</a>
        </li>

        <li className="  hover:text-orange-500 hover:border-b-2 border-orange-500 transition-all duration-300 ease-in-out">
          <a href="#gallery">gallery</a>
        </li>
        <li className=" hover:text-orange-500 hover:border-b-2 border-orange-500 transition-all duration-300 ease-in-out">
          <a href="#contact">contact</a>
        </li>
      </ul>
    </header>
  );
}
