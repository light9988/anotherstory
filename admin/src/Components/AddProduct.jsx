import { useState } from 'react'
import upload_area from '../assets/upload_area.svg'
import './AddProduct.css';

const AddProduct = () => {

    const [image, setImage] = useState(false);
    // const [image, setImage] = useState([]);

    const [productDetails, setProductDetails] = useState({
        name: '',
        quantity:'',
        category: 'women',
        image: '',
        new_price: '',
        old_price: '',
    });

    const imageHandler = (e) => {
        setImage(e.target.files[0]);
    }
    // const imageHandler = (e) => {
    //     setImage([...image, ...e.target.files]);
    // }


    const changeHandler = (e) => {
        setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
    }

    const Add_Product = async () => {
        console.log(productDetails);

        //SEND DATA TO THE BACKEND

        let responseData;
        let product = productDetails;

        let formData = new FormData();
        formData.append('product', image);
        // image.forEach(img => {
        //     formData.append('product', img);
        // });


        await fetch('http://localhost:4000/upload', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
            },
            body: formData,
        }).then(res => res.json()).then((data) => { responseData = data })

        //SENDED DATA SAVE IN THE DATABASE

        if (responseData.success) {
            product.image = responseData.image_url;
            console.log(product);
            await fetch('http://localhost:4000/addproduct', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'content-Type': 'application/json'
                },
                body: JSON.stringify(product),
            }).then(res => res.json()).then((data) => {
                data.success ? alert('Product Added') : alert('Product not added');
            })
        }

    }

    return (
        <div className="add-product-container">
            <div className="add-product-title">
                <p>Product title</p>
                <input 
                    value={productDetails.name} 
                    onChange={changeHandler} 
                    className='add-product-input' 
                    type="text" 
                    name="name" 
                    placeholder="Type here" 
                />
            </div>

            <div className='add-product-row'>
                <div className="add-product-title">
                    <p>Price</p>
                    <input 
                        value={productDetails.old_price} 
                        onChange={changeHandler} 
                        className='add-product-input' 
                        type="number" 
                        name="old_price" 
                        placeholder="Type here" 
                    />
                </div>

                <div className="add-product-title">
                    <p>Offer Price</p>
                    <input 
                        value={productDetails.new_price} 
                        onChange={changeHandler} 
                        className='add-product-input' 
                        type="number" 
                        name="new_price" 
                        placeholder="Type here" 
                    />
                </div>

                <div className="add-product-title">
                    <p>Quantity</p>
                    <input 
                        value={productDetails.quantity} 
                        onChange={changeHandler} 
                        className='add-product-input' 
                        type="number" 
                        name="quantity" 
                        placeholder="Type here" 
                    />
                </div>
            </div>

            <div className="add-product-select">
                <p>Product Category</p>
                <select 
                    value={productDetails.category} 
                    onChange={changeHandler} 
                    name="category" 
                    className=""
                >
                    <option value="women">Women</option>
                    <option value="men">Men</option>
                    <option value="kid">Kid</option>
                </select>
            </div>

            <div className='upload-image-container'>
                <label htmlFor="file-input">
                    <img 
                        className='file-upload' 
                        src={image ? URL.createObjectURL(image) : upload_area} 
                        alt="" 
                    />
                    <input 
                        onChange={imageHandler} 
                        type="file" 
                        name="image" 
                        id="file-input" 
                        hidden 
                    />
                </label>
            </div>

            <button 
                onClick={() => { Add_Product() }}
                className='add-product-button'
            >
                Add Product
            </button>
        </div>
    );
}

export default AddProduct;

//     return (
//         <div className="h-1/3 flex flex-col gap-7 p-16 bg-gray-200 ml-5 my-5
//     w-auto sm:w-[500px] lg:w-[750px] xl:w-[1280px] ">
//             <div className="space-y-2 ">
//                 <p>Product title</p>
//                 <input value={productDetails.name} onChange={changeHandler} className='text-sm p-2 w-[100%]' type="text" name="name" placeholder="Type here" />
//             </div>

//             <div className='flex flex-col md:flex-row   gap-5'>

//                 <div className=" space-y-2">
//                     <p>Price</p>
//                     <input value={productDetails.old_price} onChange={changeHandler} className='text-sm p-2 ' type="number" name="old_price" placeholder="Type here" />
//                 </div>

//                 <div className="space-y-2 ">
//                     <p>Offer Price</p>
//                     <input value={productDetails.new_price} onChange={changeHandler} className='text-sm p-2  ' type="number" name="new_price" placeholder="Type here" />
//                 </div>

//                 <div className="space-y-2 ">
//                     <p>Quantity</p>
//                     <input value={productDetails.quantity} onChange={changeHandler} className='text-sm p-2  ' type="number" name="quantity" placeholder="Type here" />
//                 </div>

//             </div>


//             <div className="space-y-2">
//                 <p>Product Catgory</p>
//                 <select value={productDetails.category} onChange={changeHandler} name="category" className="">
//                     <option value="women">Women</option>
//                     <option value="men">Men</option>
//                     <option value="kid">Kid</option>
//                 </select>
//             </div>

//             <div className=' w-[80px] md:w-[150px]  '>
//                 <label htmlFor="file-input">
//                     <img className=' cursor-pointer ' src={image ? URL.createObjectURL(image) : upload_area} alt="" />
//                     <input onChange={imageHandler} type="file" name="image" id="file-input" hidden />
//                 </label>
//             </div>

//             <button onClick={() => { Add_Product() }}
//                 className='w-60 bg-black text-white p-4 rounded-3xl my-5 font-semibold hover:bg-yellow-500  transition-colors duration-100'>Add Product</button>

//         </div>
//     )
// }

// export default AddProduct