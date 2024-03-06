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
        <div className="flex flex-col items-center w-[80%]">
            <h1 className="text-3xl font-bold p-5">All Product List</h1>
            <div className=" grid grid-cols-8 font-semibold gap-1 md:gap-2 lg:gap-10 py-1  ">
                <p className='flex justify-center'>Products</p>
                <p className='col-start-2 col-span-3 flex justify-center '>Title</p>
                {/* <p className='flex justify-center' >Quantity</p> */}
                <p className='flex justify-center' >Old Price</p>
                <p className='flex justify-center '>New Price</p>
                <p className='flex justify-center '>Category</p>
                <p className='flex justify-center'>Remove</p>
            </div>

            <div className="my-5 py-5  bg-gray-50 overflow-y-scroll h-1/3">
                {allProducts.map((product, i) => {
                    return <div key={i} className="items-center border-b-2 gap-1 md:gap-2 lg:gap-10
                border-gray-400 py-2 grid grid-cols-8  ">
                        <img src={product.image} width={80} height={80} alt="" className=" mx-auto" />
                        <p className='flex justify-center col-start-2 col-span-3 '>{product.name}</p>
                        {/* <p className='flex justify-center  '>{product.quantity}</p> */}
                        <p className='flex justify-center '>${product.old_price}</p>
                        <p className='flex justify-center '>${product.new_price}</p>
                        <p className='flex justify -center'>${product.category}</p>
                        <img className="cursor-pointer  mx-auto " width={10} height={10} src={remove_icon} alt="" onClick={() => { remove_product(product.id) }} />
                    </div>
                })}
            </div>

        </div>
    )
}

export default ListProduct

// return (
//     <div className="list-product-container">
//         {/* <div className="list-product-header"> */}
//         <h2 className="list-product-header-title">All Product List</h2>
//         <div className="list-product-header-menu">
//             <p className="list-product-column">Products</p>
//             <p className="list-product-column">Title</p>
//             <p className='flex justify-center' >Quantity</p>
//             <p className="list-product-column">Old Price</p>
//             <p className="list-product-column">New Price</p>
//             <p className="list-product-column">Category</p>
//             <p className="list-product-column">Remove</p>
//         </div>
//         {/* </div> */}
    
//         <div className="list-product-body">
//             {allProducts.map((product, i) => {
//                 return <div key={i} className="list-product-item">
//                     <img className="list-product-image" src={product.image} alt="" />
//                     <p className="list-product-column">{product.name}</p>
//                     <p className='flex justify-center  '>{product.quantity}</p>
//                     <p className="list-product-column">${product.old_price}</p>
//                     <p className="list-product-column">${product.new_price}</p>
//                     <p className="list-product-column">${product.category}</p>
//                     <img className="list-product-column" id="list-product-remove" src={remove_icon} alt="" onClick={() => { remove_product(product.id) }} />
//                 </div>
//             })}
//         </div>
//     </div>
// )
// }

// export default ListProduct