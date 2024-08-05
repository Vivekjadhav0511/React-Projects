import React from "react";
import { assets } from "../assets/assets";

function Navbar() {
  return (
    <>
      <div className=" sticky top-0 h-[70px] duration-200">
      <div className="   flex justify-between  items-center pt-5">
          <img src={assets.logo} className="h-10" alt="" />
          <div className=" flex gap-14 font-bold space-x-2 text-white">
            <a href="">Market</a>
            <a href="">Home</a>
            <a href="">Feacture</a>
            <a href="">Contact Us</a>
          </div>
          <button className="bg-white p-2 rounded-md"> Choose Currancy</button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
