import React from 'react'
import exclusive_image from '../Assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className='flex m-auto my-16 md:my-32 py-20 w-[75%] md:w-[65%] bg-gradient-to-r from-red-500 via-red-200 to-yellow-400'>
      <div className="offers-left flex-1 flex flex-col justify-center gap-y-5  sm:pl-[10%]">
        <h1 className='text-6xl font-bold'>Exclusive</h1>
        <p className='text-5xl uppercase font-medium tracking-[8px]'>Offers for you</p>
        <p className='text-xl font-bold tracking-[3px] capitalize'>Only On best seller products</p>
        <button className='border-2 border-gray-300 rounded-full px-2 py-1 w-56 text-white cursor-pointer mt-5 font-medium'>Check Now</button>
      </div>
      <div className="offers-right flex flex-1 items-center justify-end">
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  )
}

export default Offers