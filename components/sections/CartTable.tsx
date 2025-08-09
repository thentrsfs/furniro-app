'use client'
import Image from "next/image"
import Link from "next/link";
import GoldenButton from "../ui/GoldenButton";
import {useCartStore} from '@/stores/useCartStore';

const CartTable = () => {
    const {items, removeItem, subtotal, total, shipping, tax, formatPrice} = useCartStore();

    if(items.length === 0) return (
        <section className='flex flex-col items-center justify-center h-[60vh] gap-4 px-6 text-center'>
            <h3 className='text-font-color text-2xl font-semibold'>Your cart is currently empty. Please add some items to your cart.</h3>
        </section>
    );
  return (
       <section className="grid lg:grid-cols-3 gap-6 w-full 2xl:px-50 lg:px-20 lg:py-15 px-6 py-8">

  {/* Items grid */}
  <div className="lg:col-span-2">

    {/* Header row (hidden on mobile) */}
    <div className="hidden lg:grid grid-cols-[1fr_2fr_1fr_1fr_1fr_40px] gap-4 items-center bg-yellow-light h-10 font-semibold text-black">
      <div></div>
      <div>Product</div>
      <div>Price</div>
      <div>Quantity</div>
      <div>Subtotal</div>
      <div></div>
    </div>

    {/* Items */}
    <div className="flex flex-col gap-4 mt-4">
      {items.map((item) => (
        <div
          key={item.id}
          className="grid lg:grid-cols-[1fr_2fr_1fr_1fr_1fr_40px] grid-cols-6 gap-4 border-b border-gray-200 pb-4 last:border-none items-center"
        >
          {/* Image */}
          <div className="relative lg:w-20 lg:h-20 h-60 w-full max-lg:col-span-6">
            <Image src={item.image} alt="product image" fill className="object-cover" />
          </div>

          {/* Product name */}
          <div className="text-font-color max-lg:text-xl max-lg:col-span-3">{item.name}</div>

          {/* Price */}
          <div className="text-font-color max-lg:text-xl max-lg:ml-auto max-lg:col-span-2">${formatPrice(item.price)}</div>

          {/* Quantity */}
          <div className="max-lg:ml-auto max-lg:col-span-1">
            <span className="border border-gray-light px-3 py-1 text-font-color rounded max-lg:text-xl ">{item.quantity}</span>
          </div>

          {/* Subtotal */}
          <div className="text-font-color hidden lg:block">${formatPrice(item.price * item.quantity)}</div>

          {/* Remove button */}
          <div className="max-lg:col-span-6 max-lg:flex max-lg:justify-center">
            <button onClick={() => removeItem(item.id)} className="cursor-pointer py-1">
              <Image src="/icons/remove.svg" alt="remove" width={24} height={24} className="w-auto hidden lg:block" />
              <span className="text-red-500 text-xl lg:hidden border border-red-500 px-3 py-1">Remove</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* Cart totals */}
  <div className="flex flex-col gap-6 bg-yellow-light py-4 px-8 self-start">
    <h3 className="text-black text-2xl font-semibold text-center">Cart Totals</h3>
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <span className="text-black">Subtotal :</span>
        <span className="text-gray-600">{formatPrice(subtotal())}</span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-black">Shipping:</span>
        <span className="text-gray-600">{formatPrice(shipping)}</span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-black">Tax:</span>
        <span className="text-gray-600">{formatPrice(tax)}</span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-black">Total :</span>
        <span className="text-golden font-semibold">{formatPrice(total())}</span>
      </div>
    </div>
    <Link href="/checkout">
      <GoldenButton className="py-2 px-6 mt-4 w-full">Checkout</GoldenButton>
    </Link>
  </div>
</section>

  )
}

export default CartTable