import React, { useRef } from 'react';
import { ShopContext } from '../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png'
import { useContext } from 'react';
import Modal from './Modal';
import './CartItems.css';

const CartItems = () => {
    const { getTotalCartAmount, all_product, cartItems, removeFromCart, addToCart, deleteFromCart } = useContext(ShopContext);
    const dialogRef = useRef();

    return (
        <div className="cartitems">
            <div className="cartitems-format-main">
                <p className='cartitems-list'>Products</p>
                <p className='cartitems-list' id="cartitems-list-title">Title</p>
                <p className='cartitems-list'>Price</p>
                <p className='cartitems-list'>Quantity</p>
                <p className='cartitems-list'>Total</p>
                <p className='cartitems-list'>Delete</p>
            </div>
            <hr />
            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return (
                        <div className="cartitems-format" key={e.id}>
                            <img src={e.image} className="cartitems-content" id="cartitems-product-icon" alt="" />
                            <p className="cartitems-content" id="cartitems-content-name">{e.name}</p>
                            <p className="cartitems-content" id="cartitems-content-price">${e.new_price}</p>
                            <p className="cartitems-content" id="cartitems-content-quantity">
                                <button onClick={() => { removeFromCart(e.id) }} className="cartitems-quantity-button">-</button>
                                {cartItems[e.id]}
                                <button onClick={() => { addToCart(e.id) }} className="cartitems-quantity-button">+</button>
                            </p>
                            <p className="cartitems-content" id="cartitems-content-totalprice">${e.new_price * cartItems[e.id]}</p>
                            <img className="cartitems-content" id="cartitems-content-delete" width={10} height={10} src={remove_icon} alt="" onClick={() => { deleteFromCart(e.id) }} />
                        </div>
                    );
                }
                return null;
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1 className='cartitems-total-title'>Cart Total</h1>
                    <div className='cartitems-total-container'>
                        <div className="cartitems-total-list">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-list">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-list">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button className='cartitems-checkout' onClick={() => dialogRef.current.showModal()}>
                        PROCEED TO CHECKOUT
                    </button>
                    <Modal dialogRef={dialogRef} />
                </div>
                {/* <div className="cartitems-promocode">
                    <p>If you have a promo code, enter it here...</p>
                    <div className="cartitems-promobox">
                        <input type="text" placeholder="Promo Code" />
                        <button className='cartitems-promobox-button'>Submit</button>
                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default CartItems;