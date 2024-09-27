import { useEffect, useState } from "react";
import remove_icon from '../assets/cross_icon.png';
import './ListProduct.css'

const ListProduct = () => {

    const [allProducts, setAllProducts] = useState([]);

    const fetchInfo = async () => {
        await fetch('http://localhost:4000/allproducts')
            .then(res => res.json())
            .then((data) => {
                setAllProducts(data);
            })
    }

    //fetching at once to showing all product available
    useEffect(() => {
        fetchInfo();
    }, [])

    //remove the product from the list by clicking on the cross icon
    const remove_product = async (id) => {
        await fetch(`http://localhost:4000/removeproduct/`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'content-Type': 'application/json'
            },
            body: JSON.stringify({ id: id })
        })
        await fetchInfo();
    }

    return (
        <div className="list-product-container">
            <div className="list-product-header">
                <h1 className="list-product-header-title">All Product List</h1>
                <div className="list-product-header-menu">
                    <p className='list-product-header-menu-list'>Products</p>
                    <p className='list-product-header-menu-list' id="list-product-header-menu-list-title">Title</p>
                    <p className='list-product-header-menu-list'>Old Price</p>
                    <p className='list-product-header-menu-list'>New Price</p>
                    <p className='list-product-header-menu-list'>Category</p>
                    <p className='list-product-header-menu-list'>Remove</p>
                </div>

                <div className="list-product-body">
                    {allProducts.map((product, i) => {
                        return (
                            <div key={i} className="list-product-item">
                                <img src={product.image} className="list-product-image" alt="" />
                                <p className='list-product-column' id="list-product-column-name">{product.name}</p>
                                <p className='list-product-column'>${product.old_price}</p>
                                <p className='list-product-column'>${product.new_price}</p>
                                <p className='list-product-column'>${product.category}</p>
                                <img
                                    className="list-product-column"
                                    id="list-product-remove"
                                    src={remove_icon}
                                    alt=""
                                    onClick={() => { remove_product(product.id) }}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* <div className="list-product-footer">
                <h2 className="list-product-footer-content">More</h2>
            </div> */}
        </div>
    );
}

export default ListProduct;