import React from 'react'
import arrow_icon from '../Assets/breadcrum_arrow.png'

const Breadcrum = (props) => {
    const { product } = props;
    return (
        <div className='breadcrum flex items-center p-5 text-sm font-medium capitalize'>
            HOME <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" /> {product.name}
        </div>
    )
}

export default Breadcrum