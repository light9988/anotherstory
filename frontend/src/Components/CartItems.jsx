import React, { useRef } from 'react';
import { ShopContext } from '../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png'
import { useContext } from 'react';
import Modal from './Modal';

const CartItems = () => {
    const { getTotalCartAmount, all_product, cartItems, removeFromCart, addToCart, deleteFromCart } = useContext(ShopContext);

    const dialogRef = useRef();

    return (
        <div className="cartitems font-custom-robot">
            <div className="cartitems-format-main grid grid-cols-8 font-semibold   ">
                <p className='flex justify-center'>Products</p>
                <p className='col-start-2 col-span-3 flex justify-center '>Title</p>
                <p className='flex justify-center' >Price</p>
                <p className='flex justify-center '>Quantity</p>
                <p className='flex justify-center '>Total</p>
                <p className='flex justify-center'>Delete</p>
            </div>
            <hr />
            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return <div className="cartitems-format items-center border-b-2
                    border-gray-400 py-2 grid grid-cols-8 ">
                        <img src={e.image} width={80} height={80} alt="" className="cartitems-product-icon mx-auto" />
                        <p className='flex justify-center col-start-2 col-span-3 '>{e.name}</p>
                        <p className='flex justify-center '>${e.new_price}</p>
                        <p className='flex items-center mx-auto '>
                            <button onClick={() => { removeFromCart(e.id) }} className="cartitems-quantity bg-gray-300 mx-1 p-1 ">-</button>
                            {cartItems[e.id]}
                            <button onClick={() => { addToCart(e.id) }} className="cartitems-quantity bg-gray-300 mx-1 p-1  ">+</button>
                        </p>

                        <p className='flex justify-center'>${e.new_price * cartItems[e.id]}</p>
                        <img className="cursor-pointer  mx-auto " width={10} height={10} src={remove_icon} alt="" onClick={() => { deleteFromCart(e.id) }} />
                    </div>


                }
                return null;
            })}
            <div className="cartitems-down my-5 px-4">
                <div className="cartitems-total py-5">
                    <h1 className='text-2xl font-bold py-2'>Cart Total</h1>
                    <div className='flex flex-col space-y-3 mx-5'>
                        <div className="flex  justify-between ">
                            <p className='  '>Subtotal</p>
                            <p className=' '>${getTotalCartAmount()} </p>
                        </div>
                        <hr />
                        <div className="flex  justify-between">
                            <p className='  '>Shipping Fee</p>
                            <p className='  '>Free</p>
                        </div>
                        <hr />
                        <div className="flex  justify-between">
                            <h3 className=' '>Total</h3>
                            <h3 className=' '>${getTotalCartAmount()} </h3>
                        </div>
                    </div>
                    <button className='w-60 bg-black p-4 rounded-3xl text-white my-5 font-semibold hover:bg-yellow-500  transition-colors duration-100 mx-5'onClick={() => dialogRef.current.showModal()}>PROCEED TO CHECKOUT</button>
                    <Modal dialogRef={dialogRef} />
                </div>
                <div className="cartitems-promocode flex flex-col">
                    <p>If you have a promo code, enter it here...</p>
                    <div className="cartitems-promobox">
                        <input className='p-2 bg-gray-200' type="text" placeholder="Promo Code" />
                        <button className='bg-black p-2 text-white'>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartItems