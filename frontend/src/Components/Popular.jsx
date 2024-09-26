import React, { useEffect, useState } from 'react'
// import data_product from './Assets/data';
import Item from './Item';
import './Popular.css';

const Popular = () => {

  const [data_product, setData_product] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/popularinwoman')
      .then((res) => res.json())
      .then((data) => setData_product(data))
  }, [])

  return (
    <div className='popular'>
            {/* <h1>Popular this Season</h1> */}
      <h2>Exclusive Offer for You</h2>
      <div className="popular-item">
        {data_product.map((item, i) => {
          return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        })}
      </div>
    </div>
  );
}

export default Popular