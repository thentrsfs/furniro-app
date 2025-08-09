import Image from 'next/image';

const ShopFeatures = () => {
  return (
    <section className='w-full bg-yellow-light lg:h-50 grid grid-cols-2 lg:grid-cols-4 items-center justify-between 2xl:px-50 lg:px-20 gap-8 lg:py-15 p-6'>
<div className="flex max-lg:flex-col items-center max-lg:text-center gap-3">
  <Image src='/icons/trophy.svg' alt='trophy icon' className='lg:w-auto w-10' width={24} height={24} />
  <div className="flex flex-col">
    <h4 className='text-font-color font-semibold lg:text-2xl text-lg leading-[150%]'>High Quality</h4>
    <p className='font-medium lg:text-xl leading-[150%] text-gray-3'>Crafted from top materials</p>
  </div>
</div>
<div className="flex max-lg:flex-col items-center max-lg:text-center gap-3">
  <Image src='/icons/warranty.svg' alt='warranty icon' className='lg:w-auto w-10' width={61} height={60} />
  <div className="flex flex-col">
    <h4 className='text-font-color font-semibold lg:text-2xl text-lg leading-[150%]'>Warranty Protection</h4>
    <p className='font-medium lg:text-xl leading-[150%] text-gray-3'>Over 2 years</p>
  </div>
</div>
<div className="flex max-lg:flex-col items-center max-lg:text-center gap-3">
  <Image src='/icons/shipping.svg' alt='shipping icon' className='lg:w-auto w-10' width={61} height={56} />
  <div className="flex flex-col">
    <h4 className='text-font-color font-semibold lg:text-2xl text-lg leading-[150%]'>Free Shipping</h4>
    <p className='font-medium lg:text-xl leading-[150%] text-gray-3'>Order over 150 $</p>
  </div>
</div>
<div className="flex max-lg:flex-col items-center max-lg:text-center gap-3">
  <Image src='/icons/support.svg' alt='support icon' className='lg:w-auto w-10' width={54} height={60} />
  <div className="flex flex-col">
    <h4 className='text-font-color font-semibold lg:text-2xl text-lg leading-[150%]'>24 / 7 Support</h4>
    <p className='font-medium lg:text-xl leading-[150%] text-gray-3'>Dedicated support</p>
  </div>
</div>
    </section>
  )
}

export default ShopFeatures