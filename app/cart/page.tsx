import HeaderImage from '@/components/sections/HeaderImage';
import ShopFeatures from '@/components/ui/ShopFeatures';
import CartTable from '@/components/sections/CartTable';

const CartPage = () => {
  return (
    <div className='bg-white'>
       <HeaderImage header='Cart'/>
       <CartTable />
<ShopFeatures/>
    </div>
  )
}

export default CartPage