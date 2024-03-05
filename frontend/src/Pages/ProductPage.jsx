import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts';

const ProductPage = () => {
    const {all_product} = useContext(ShopContext);
    const {productId} = useParams();
    const product = all_product.find((e) => e.id === Number(productId));

    return (
        <div className='mx-auto max-w-[1280px] '>
            <Breadcrum product={product} />
            <ProductDisplay product={product} />
            <DescriptionBox/>
            <RelatedProducts/>
        </div>
    )
}

export default ProductPage;
