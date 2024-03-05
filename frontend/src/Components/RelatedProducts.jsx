import React from 'react'
import data_product from '../Assets/data'
import Item from './Item'
import { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';

const RelatedProducts = () => {
  return (
    <div className='realtedproducts flex flex-col gap-3 items-center my-10'>
      <h1 className='text-3xl font-bold  '>Similar Prodcuts</h1>

      <div className="realtdproducts-item mt-5 grid grid-cols-1 sm:grid-cols-2   lg:grid-cols-3 gap-8">
        {data_product.map((item, i) => {
          return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        })}
      </div>

    </div>
  )
}

// const RelatedProducts = () => {
//   const { all_product, currentCategory } = useContext(ShopContext);

//   const relatedProducts = all_product.filter(item => item.category === currentCategory);

//   const limitedProducts = relatedProducts.slice(0, 6);

//   return (
//     <div className='relatedproducts flex flex-col gap-3 items-center my-10'>
//       <h1 className='text-3xl font-bold'>Similar Products</h1>

//       <div className="relatedproducts-items mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {limitedProducts.map((item, i) => (
//           <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
//         ))}
//       </div>
//     </div>
//   );
// };

export default RelatedProducts