import React, { useContext, useState } from 'react';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { ShopContext } from '../Context/ShopContext';
import './ProductDisplay.css';

const ProductDisplay = (props) => {
    const { product } = props;
    const { addToCart } = useContext(ShopContext);
    const [selectedSize, setSelectedSize] = useState('');
    const handleSizeClick = (size) => {
        setSelectedSize(size);
    };
    
        // if (!product) {
    //     return <div>Loading...</div>;
    // }

    return (
        <div className='productdisplay'>
            <div className="productdisplay-left">
                <div className='productdisplay-img'>
                    <img className='productdisplay-main-img' src={product.image} alt="" />
                </div>
                <div className="productdisplay-img-list">
                    {Array(5).fill(null).map((_, index) => (
                        <img key={index} height={100} width={80} src={product.image} alt="" />
                    ))}
                </div>
            </div>

            <div className="productdisplay-right">
                <h1 className='productdisplay-right-name'>{product.name}</h1>

                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old"> ${product.old_price} </div>
                    <div className="productdisplay-right-price-new"> ${product.new_price} </div>
                </div>

                <div className="productdisplay-right-size">
                    <h1 className='productdisplay-right-size-title'>select size</h1>
                    <div className="productdisplay-right-size-options">
                        {['S', 'M', 'L', 'XL', 'XXL'].map(size => (
                            <div
                                key={size}
                                onClick={() => handleSizeClick(size)}
                                className={`size-option ${selectedSize === size ? 'selected-size' : ''}`}
                            >
                                {size}
                            </div>
                        ))}
                    </div>
                </div>

                <button onClick={() => { addToCart(product.id) }} className=''>
                    Add to cart
                </button>

                <p className="productdisplay-right-category"> <span>Category: </span>{product.category}</p>
                <p className="productdisplay-right-category"> <span>Tags: </span>Fashion </p>

                <div className='productdisplay-right-discription-title'> Description:</div>
                <div className="productdisplay-right-discription">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis facilis autem rerum
                    deserunt eum? Reprehenderit expedita, dolorem nihil voluptates autem repellat excepturi
                    ugit vitae sed enim libero accusamus, neque inventore.
                </div>
            </div>
        </div>
    );
}

export default ProductDisplay;