import React, { useEffect, useState } from 'react'
import Item from './Item';
// import new_Collections from './Assets/new_collections';
const NewCollections = () => {

  const [new_Collections,setNew_Collections] = useState([]);

  useEffect(()=>{
      fetch('http://localhost:4000/newcollections')
      .then((res)=>res.json())
      .then((data)=>setNew_Collections(data))
  },[])

  return (
    <div>
        <div className="new-collections flex flex-col gap-3 items-center mt-10">
          <h1 className='text-3xl font-bold border-b-2 border-b-gray-300 uppercase font-custom-robot'>new collecitons</h1>
          <div className="collections mt-5 grid grid-cols-1 sm:grid-cols-2   lg:grid-cols-3   gap-8   ">
            {new_Collections.map((item,i) => {
              return <Item   key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
          </div>
        </div>
    </div>
  )
}

export default NewCollections;