
import React from 'react';
import { products } from '@/data/products';
import ProductSection from '@/components/sections/ProductSection';

const ProductPage = async ({params} : {params: Promise<{ id: string }>}) => {
    const { id } = await params;
    const product = products.find((item) => item.id.toString() === id);

    if (!product) {
        return <div className='text-center bg-white px-6 py-50 border-t border-gray-light text-red-500 text-2xl'>Product not found</div>;
    }
  return (
   <ProductSection product={product} />
  )
}

export default ProductPage