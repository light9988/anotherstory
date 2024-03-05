import React, { useEffect, useState } from 'react'
// import data_product from './Assets/data';
import Item from './Item';

const Popular = () => {

  const [data_product, setData_product] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/popularinwoman')
      .then((res) => res.json())
      .then((data) => setData_product(data))
  }, [])


  return (
    <div className='popular flex flex-col gap-3 items-center mt-10 ' >
      {/* <h1 className='text-3xl font-bold border-b-2 border-b-gray-300 uppercase font-custom-robot'>Popular this Season</h1> */}
      <h2 className='text-3xl '>Exclusive Offer for You</h2>


      <div className="popular-item mt-5 grid grid-cols-1 sm:grid-cols-2   lg:grid-cols-3 xl:grid-cols-4 gap-8   ">
        {data_product.map((item, i) => {
          return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        })}
      </div>
    </div>
  )
}

export default Popular