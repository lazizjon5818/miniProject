import React from 'react'
import { BsApple } from "react-icons/bs";
import iphone from '../../assets/image/heroBG.png'
import { IoMdArrowForward } from "react-icons/io";

function HeroBG() {
  return (
    <div className="mt-12"> 
      <div className='container h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center px-6 md:px-12 py-6 bg-black'>
        <div className="flex flex-col gap-4 text-center md:text-left">
          <BsApple className='text-white text-3xl mx-auto md:mx-0' />
          <span className='text-white text-xl'>iPhone 16 Series</span>
          <span className='text-4xl md:text-5xl text-white font-bold leading-tight'>
            Up to 10% off voucher
          </span>
          <div className="flex justify-center md:justify-start items-center gap-2 cursor-pointer mt-4">
            <span className='border-b-2 border-white text-white'>Shop now</span>
            <IoMdArrowForward className="text-white text-lg" />
          </div>
        </div>

        <div className="grid place-items-center">
          <img src={iphone} alt="phone" className="h-64 md:h-80 lg:h-full object-contain" />
        </div>
      </div>
    </div>
  )
}

export default React.memo(HeroBG);
