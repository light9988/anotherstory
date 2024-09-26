import React from 'react'
import { Link } from 'react-router-dom';
import './Item.css';

const Item = (props) => { 
    return (
      <div className='item-container'>
  
          <Link to={`/product/${props.id}`}>
              <img src={props.image} className='item-image' onClick={() => window.scroll(0, 0)} alt="" />
          </Link>
          
          <p className='item-name'>{props.name}</p>
          <div className="item-prices">
              <div className="item-price-new">
                  ${props.new_price}
              </div>
              <div className="item-price-old">
                  ${props.old_price}
              </div>
          </div>
      </div>
    )
  }
  
export default Item;
  