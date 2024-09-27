import React from 'react'
import data_product from '../Assets/data'
import Item from './Item'
import { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import './RelatedProducts.css';

const RelatedProducts = ({product}) => {
  const { all_product } = useContext(ShopContext);
  const relatedProducts = all_product.filter(
    (item) => item.category === product.category && item.id !== product.id
  );

  return (
    <div className='realtedproducts'>
      <h1>Similar Products</h1>
      <div className="realtdproducts-item">
        {relatedProducts.map((item, i) => {
          return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        })}
      </div>

    </div>
  )
}
export default RelatedProducts