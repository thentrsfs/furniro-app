'use client'
import { useCartStore } from '@/stores/useCartStore';
import GoldenButton from './GoldenButton';
import Link from 'next/link';
import Image from 'next/image';

const ShoppingCart = () => {
  const {items, isOpen, closeCart, subtotal, removeItem, formatPrice } = useCartStore();
  if (!isOpen || items.length === 0) return null; // Don't render if the cart is not open
  return (<>
     <div
        onClick={closeCart}
        className="fixed inset-0 bg-black/50 z-15"
      />
    <div className="flex flex-col absolute right-0 top-0 bg-white w-100 h-auto z-20 text-black p-8 gap-4">
      <div className='flex justify-between'>
      <h1 className='font-semibold text-black text-2xl'>Shopping Cart</h1>
    <button className='cursor-pointer' onClick={closeCart}>
        <Image src="/icons/remove-x.svg" alt="close" width={24} height={24} className="w-auto" />
    </button>
    </div>
    <div className='w-full h-px bg-gray-light'/>
    {items.map((item) => (
       <div key={item.id} className='flex items-center justify-between'>
      <div className='flex items-center gap-6'>
      <Link href={`/products/${item.id}`} className='w-25 h-20 relative'>
        <Image src={item.image} alt="cart" fill className="object-cover" />
      </Link>
      <div className='flex flex-col'>
        <Link href={`/products/${item.id}`}>
<h3 className='text-font-color'>{item.name}</h3>
</Link>
<div className='flex gap-4'>
  <span>{item.quantity}</span>
  <span>x</span>
  <span className='text-golden font-medium'>${formatPrice(item.price)}</span>
</div>
</div>
      </div>
      <button onClick={() => removeItem(item.id)} className='cursor-pointer'>
        <Image src="/icons/remove.svg" alt="remove" width={24} height={24} className="w-auto" />
      </button>
           </div>
    ))}
           <div className='w-full h-px bg-gray-light'/>
           <div className='grid grid-cols-2 mt-auto items-center'>
            <span className='text-font-color'>Subtotal</span>
            <span className='text-golden font-medium text-lg'>${formatPrice(subtotal())}</span>
           </div>
           <Link href="/cart">
           <GoldenButton onClick={closeCart} className='py-2 w-full'>Checkout</GoldenButton></Link>
    </div>
    </>
  )
}

export default ShoppingCart