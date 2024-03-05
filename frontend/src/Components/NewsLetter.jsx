import React from 'react'

const NewsLetter = () => {
  return (
    <div className='w-[100%] md:w-[90%] flex flex-col items-center justify-center m-auto px-0 py-20 my-16
    gap-8 bg-gray-100 text-black'>
      <h2 className='text-xl font-bold capitalize'>Get 25% off your first order</h2>
      <p className='text-lg font-medium '>subscribe to receive the latest news and promotions</p>
      <div className='flex p-1 items-center bg-white rounded-3xl font-custom-robot gap-3'>
        <input className=' rounded-3xl p-1' type="email" placeholder='Your Email Address' />
        <button className='text-sm cursor-pointer bg-gray-300 rounded-3xl w-28 p-1 focus:outline-none hover:bg-black hover:text-white'>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter 