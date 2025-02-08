import React from 'react'

function Sales() {
  return (
    <div className="flex justify-center items-center h-8 bg-black ">
      <div className="text-center text-white text-sm">
        <p>
          Summer sale for all swimsuits and free express delivery - OFF 50%!  
          <span className="border-b cursor-pointer ml-1 hover:text-gray-300">
            Shop Now
          </span>
        </p>
      </div>
    </div>
  )
}

export default React.memo(Sales)
