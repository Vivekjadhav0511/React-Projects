import React from "react";
import { assets } from "../assets/assets";

function Home() {
  return (
    <>
      <div className="">
        <div className=" text-white my-36 ">
          <p className="text-white text-8xl font-bold  ">
            BUY & <br /> SELL <span className=" text-[#FF960B]">Crypto</span>
          </p>
          <p className="my-4 tracking-wider">
            World's biggest cryptocurrancy exchange avaliable on web as well{" "}
            <br /> as mobile phone{" "}
          </p>
          <button className=" p-2 px-4 font-bold my-4 bg-[#FF960B] rounded-lg ">
            Explore More
          </button>
          <div className=" p-2 absolute right-36 ">
            <div className="flex gap-6">
              <div className="flex gap-4 border p-2  px-4 rounded-l font-bold justify-center items-center">
                <img src={assets.bitcoin} className="h-8  " alt="" />
                <div className="">
                  <p className="">9999</p>
                  <div className="">Bitcoin</div>
                </div>
              </div>
              <div className="flex gap-4 border p-2  px-4 rounded-l font-bold  justify-center items-center">
                <img src={assets.ethereum} className="h-8  " alt="" />
                <div className="">
                  <p className="">9999</p>
                  <div className="">Ethereum</div>
                </div>
              </div>
              <div className="flex gap-4 border p-2 px-4 rounded-l font-bold  justify-center items-center">
                <img src={assets.dogecoin} className="h-8  " alt="" />
                <div className="">
                  <p className="">9999</p>
                  <div className="">Dogecoin</div>
                </div>
              </div>
             
            </div>
          </div>
        </div>
      </div>

      
    </>
  );
}

export default Home;
