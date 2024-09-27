import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Assets/dropdown_icon.png';
import Item from '../Components/Item';
import './ShopCategory.css';

const ShopCategory = (props) => {
    const { all_product } = useContext(ShopContext);

    return (
        <div className='shopcategory-container'>
            <img className='shopcategory-banner' src={props.banner} alt="" />
            <div className="shopcategory-indexSort">
                <p><span className='font-medium'>Showing 1-12 out of 100 products</span></p>
                <div className="shopcategory-sort">
                    sort by <img className='mx-auto' src={dropdown_icon} alt="" />
                </div>
            </div>

            <div className="shopcategory-products">
                {all_product.map((item, i) => {
                    if (props.category === item.category) {
                        return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                    } else {
                        return null;
                    }
                })}
            </div>

            <div className="shopcategory-loadmore">
                Explore more
            </div>
        </div>
    );
}

export default ShopCategory;