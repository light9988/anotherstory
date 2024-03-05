import React from 'react'
import { Link } from 'react-router-dom';

const Item = (props) => { 
  return (
    <div className='flex flex-col items-start w-[350px] transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer'>

        <Link to={`/product/${props.id}`}>
            <img src={props.image} style={{ height: '500px', width: '350px' }} onClick={window.scroll(0,0)} alt="" />
        </Link>
        
        <p className='my-3 mx-0 text-blaack font-semibold'>{props.name}</p>
        <div className="item-prices flex  gap-5  ">
            <div className="item-price-new text-sm font-semibold text-black">
                ${props.new_price}
            </div>
            <div className="item-price-old text-sm font-normal line-through text-gray-400">
                ${props.old_price}
            </div>
        </div>
    </div>
  )
}

export default Item