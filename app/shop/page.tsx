import Products from '@/components/sections/Products';
import FilterSortBar from '@/components/ui/FilterSortBar';
import HeaderImage from '@/components/sections/HeaderImage';
import ShopFeatures from '@/components/ui/ShopFeatures';

const ShopPage = () => {
  return (
    <div className='bg-white'>
   <HeaderImage header='Shop'/>
<FilterSortBar />
    <section className='flex flex-col items-center w-full 2xl:px-50 lg:px-20 gap-8 lg:py-15 px-6 py-8'>
<Products isHomePage={false} />
    </section>
    <ShopFeatures />
    </div>
  )
}

export default ShopPage