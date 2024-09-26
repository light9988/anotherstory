import React, { useEffect, useState } from 'react'
import Item from './Item';
// import new_Collections from './Assets/new_collections';
import './NewCollections.css';

const NewCollections = () => {

  const [new_Collections,setNew_Collections] = useState([]);

  useEffect(()=>{
      fetch('http://localhost:4000/newcollections')
      .then((res)=>res.json())
      .then((data)=>setNew_Collections(data))
  },[])

  return (
    <div>
        <div className="new-collections">
          <h1>new collections</h1>
          <div className="collections">
            {new_Collections.map((item,i) => {
              return <Item   key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
          </div>
        </div>
    </div>
  )
}

export default NewCollections;