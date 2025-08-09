'use client';
import ProductGallery from '@/components/ui/ProductGallery';
import StarRating from '@/components/ui/StarRating';
import Image from 'next/image';
import Products from '@/components/sections/Products';
import Toast from '../ui/Toast';
import Link from 'next/link';
import { useState } from 'react';
import { useCartStore } from '@/stores/useCartStore';
import { Product } from '@/types/types';
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import GoldenButton from '../ui/GoldenButton';

const ProductSection = ({product} : {product: Product}) => {
  const {addItem, formatPrice } = useCartStore();
  const [quantity, setQuantity] = useState(1);
  const [showToast, setShowToast] = useState(false);

  const handleAddToCart = () => {
    addItem({
      id: product.id.toString(),
      name: product.title,
      price: product.price,
      quantity: quantity,
      image: product.images[0]
    });
    setQuantity(1);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };
  return (
     <div className='bg-white'>
        <div className='bg-yellow-light lg:h-24 py-4 flex items-center lg:px-20 2xl:px-50 px-6'>
            <div className='flex items-center gap-4'>
                <Link href='/' className='text-gray-light flex items-center gap-4'>Home <span className='text-black text-2xl'>{'>'}</span></Link>
                <Link href='/shop' className='text-gray-light flex items-center gap-4'>Shop <span className='text-black text-2xl'>{'>'}</span></Link>
                 <div className='w-[2px] h-7 bg-gray-light mx-6'/>
                <span className='text-black'>{product?.title}</span>
            </div>
        </div>
    <section className='grid lg:grid-cols-2 gap-6 lg:px-20 2xl:px-50 lg:py-15 px-6 py-8 relative'>
       <ProductGallery images={product?.images || []}/>
       <div className='flex flex-col gap-4'>
        <h1 className='text-4xl text-font-color'>{product?.title}</h1>
        <span className='text-2xl font-medium text-gray-light'>${formatPrice(product.price)}</span>
<StarRating rating={4} />
        <p className='text-font-color max-w-[30rem]'>{product?.description}</p>
        <div className='flex items-center gap-4'>
          <div className='flex items-center gap-4 border border-gray-light p-3 text-black'>
            <button onClick={() => setQuantity((prev) => Math.max(1, prev - 1))} className='text-xl cursor-pointer'>-</button>
            <span className='text-lg w-2 text-center'>{quantity}</span>
            <button onClick={() => setQuantity((prev) => prev + 1)} className='text-xl cursor-pointer'>+</button>
          </div>
          <GoldenButton className='text-lg py-3 px-10' onClick={handleAddToCart}>Add to cart</GoldenButton>
        </div>
        <hr className='border-gray-light mt-6 max-w-[30rem]' />
        <div className='flex flex-col gap-2 mt-3'>
          <div className="flex items-center gap-3">
            <span className='text-gray-light w-20'>SKU</span>
            <span className='text-gray-light'>:</span>
            <span className='text-font-color'>{product?.sku}</span>
          </div>
          <div className="flex items-center gap-3">
            <span className='text-gray-light w-20'>Category</span>
            <span className='text-gray-light'>:</span>
            <span className='text-font-color'>{product?.category}</span>
          </div>
          <div className="flex items-center gap-3">
            <span className='text-gray-light w-20'>Tags</span>
            <span className='text-gray-light'>:</span>
            <span className='text-font-color'>{product?.tags.join(', ')}</span>
          </div>
          <div className="flex items-center gap-3">
            <span className='text-gray-light w-20'>Share</span>
            <span className='text-gray-light'>:</span>
            <span className='text-font-color flex items-center gap-2'>
              <FaFacebook />
              <FaTwitter />
              <FaLinkedin />
            </span>
          </div>
        </div>
       </div>
          {showToast && <Toast message={'Product added to cart'} />}
    </section>
    <div className='w-full h-[1px] bg-gray-light'/>
    <section className='flex flex-col items-center gap-8 lg:px-20 2xl:px-50 lg:py-15 px-6 py-8'>
      <div className='flex max-lg:flex-col items-center justify-center lg:text-2xl text-gray-light gap-4 lg:gap-14'>
        <h4 className='text-black'>Description</h4>
        <h4>Additional informations</h4>
        <h4>Reviews</h4>
      </div>
      <div className='text-gray-light max-w-[60rem] flex flex-col gap-4'>
        <p>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
        <p>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p></div>
        <div className='flex justify-between w-full gap-10'>
          <div className='w-[45rem] lg:h-[30rem] h-[15rem] relative'>
          <Image src={product?.images[0] || ''} alt="Product image" className='object-cover' fill />
          </div>
          <div className='w-[45rem] lg:h-[30rem] h-[15rem] relative'>
          <Image src={product?.images[1] || ''} alt="Product image" className='object-cover' fill />
          </div>
        </div>
    </section>
    <div className='w-full h-[1px] bg-gray-light'/>
    <section className='flex flex-col items-center gap-8 lg:px-20 2xl:px-50 lg:py-15 px-6 py-8'>
      <h2 className='text-3xl text-font-color'>Related Products</h2>
      <div className='flex items-center justify-between w-full'>
        <Products isHomePage={false} related={true} category={product.category} />
      </div>

    </section>
    
    </div>
  )
}

export default ProductSection