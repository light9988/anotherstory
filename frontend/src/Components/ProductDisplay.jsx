import React, { useContext } from 'react';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { ShopContext } from '../Context/ShopContext';

const ProductDisplay = (props) => {
    const { product } = props;
    const { addToCart } = useContext(ShopContext);
    return (
        <div className='productdisplay flex flex-col lg:flex-row  my-0  justify-center sm:gap-10 '>

            <div className="productdisplay-left flex flex-1 gap-4 justify-center ">
                <div className='productdisplay-img  h-auto max-h-[500px] ml-5 '>
                    <img className='productdispplay-main-img' src={product.image} alt="" />
                </div>
                <div className="productdisplay-img-list flex flex-col space-y-3 max-h-[500px]">
                    <img height={100} width={80} src={product.image} alt="" />
                    <img height={100} width={80} src={product.image} alt="" />
                    <img height={100} width={80} src={product.image} alt="" />
                    <img height={100} width={80} src={product.image} alt="" />
                    <img height={100} width={80} src={product.image} alt="" />
                </div>
            </div>


            <div className="productdisplay-right flex flex-1 flex-col font-custom-poppin mb-10 sm:px-10">
                <h1 className='text-2xl font-bold'>{product.name}</h1>
                {/* <div className="productdisplay-right-star flex space-x-2 my-2">
                    <img src={star_icon} height={20} width={20} alt="" />
                    <img src={star_icon} height={20} width={20} alt="" />
                    <img src={star_icon} height={20} width={20} alt="" />
                    <img src={star_icon} height={20} width={20} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(122)</p>
                </div> */}

                <div className="productdisplay-right-prices flex gap-5 p-4">
                    <div className="productdisplay-right-price-old line-through text-lg font-medium text-gray-500"> ${product.old_price} </div>
                    <div className="productdisplay-right-price-new text-xl font-semibold"> ${product.new_price} </div>
                </div>


                <div className="productdisplay-right-size ">
                    <h1 className='text-lg font-medium text-black py-2 capitalize'>select size</h1>
                    <div className="productdisplay-right-size flex cursor-pointer gap-5  font-semibold">
                        <div className='hover:text-gray-500 transition-colors duration-100 border-2 bg-gray-100 p-4'>S</div>
                        <div className='hover:text-gray-500 transition-colors duration-100 border-2 bg-gray-100 p-4'>M</div>
                        <div className='hover:text-gray-500 transition-colors duration-100 border-2 bg-gray-100 p-4'>L</div>
                        <div className='hover:text-gray-500 transition-colors duration-100 border-2 bg-gray-100 p-4'>XL</div>
                        <div className='hover:text-gray-500 transition-colors duration-100 border-2 bg-gray-100 p-4'>XXL</div>
                    </div>
                </div>

                <button onClick={() => { addToCart(product.id) }}
                    className='w-60 bg-black  p-4 rounded-3xl border-2  my-5 text-white font-semibold hover:bg-yellow-500 '>Add to cart</button>

                <p className="productdisplay-right-category py-2"> <span>Category: </span>{product.category}</p>
                <p className="productdisplay-right-category"> <span>Tags: </span>Fashion </p>

                <div className='text-lg font-medium text-black py-2'>
                    Discription:
                </div>
                <div className="productdisplay-right-discription">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis facilis autem rerum
                    deserunt eum? Reprehenderit expedita, dolorem nihil voluptates autem repellat excepturi
                    ugit vitae sed enim libero accusamus, neque inventore.
                </div>

            </div>
        </div>
    )
}

export default ProductDisplay