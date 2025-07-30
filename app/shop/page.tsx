import Image from 'next/image';
import Products from '@/components/ui/Products';

const ShopPage = () => {
  return (
    <div className='bg-white'>
    <section className="relative shadow-2xl shadow-yellow-light">
<Image src='/backgrounds/shop-bg.svg' alt="shop-bg" width={1440} height={328} className='w-full'/>
<div className='absolute inset-0 bg-white/45 backdrop-blur-[2.5px]'></div>
<div className='absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-black  flex flex-col'>
<h2 className='font-medium text-[48px]'>Shop</h2>
<div className='flex items-center gap-2 font-medium'><span>Home</span> <span className='font-light text-3xl'>{'>'}</span> <span className='font-light'>Shop</span></div>
</div>
    </section>
<section className='bg-yellow-light h-25 flex items-center justify-between lg:px-20 2xl:px-50'>
  <div className='flex items-center'>
  <div className='flex items-center gap-4'>
    <Image src='/icons/filter.svg' alt="filter" width={21} height={18}/>
    <span className='text-xl text-black'>Filter</span>
    <Image src='/icons/sort.svg' alt="sort" width={18} height={18} className='ml-4'/>
  </div>
  <div className='w-[2px] h-7 bg-gray-light mx-6'></div>
  <p className='text-black '>Showing 1–16 of 32 results</p>
  </div>
  <div className='flex items-center gap-6'>
<div className="flex gap-4 items-center">
  <span className='text-lg text-black'>Show</span>
  <div className='bg-white text-gray-light w-13 h-13 flex items-center justify-center'>16</div>
</div>
<div className="flex gap-4 items-center">
  <span className='text-lg text-black'>Sort by</span>
  <div className='bg-white text-gray-light w-26 h-13 flex items-center justify-center'>Default</div>
</div>
  </div>
    </section>
    <section className='flex flex-col items-center w-full 2xl:px-50 lg:px-20 gap-8 lg:py-15'>
<Products />
    </section>
    </div>
  )
}

export default ShopPage