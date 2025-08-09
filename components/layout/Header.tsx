'use client'
import Image from "next/image"
import Link from "next/link"
import {useCartStore} from '@/stores/useCartStore';
import { useNavStore } from "@/stores/useNavStore";

const Header = () => {
  const {openCart, items} = useCartStore();
  const {openNav, closeNav, isOpen} = useNavStore();
  return (
    <div className="w-full flex items-center justify-between bg-white text-black px-6 py-4 lg:px-20 lg:py-5 2xl:px-50">
      <div className="flex items-center gap-4">
        <Image onClick={openNav} src='/icons/menu.svg' alt="menu" width={24} height={24} className='lg:hidden' />
        <Link href={"/"} className="flex items-center gap-2">
        <div className="lg:w-15 lg:h-15 w-8 h-8 relative hidden lg:block">
      <Image src="/icons/logo.svg" alt="logo" fill />
      </div>
      <h1 className="font-semibold lg:text-3xl text-xl font-montserrat">Furniro</h1>
      </Link>
      </div>
      <nav className="hidden lg:block">
        <ul className="flex lg:gap-18 ">
          <li className="group">
            <Link href="/">Home</Link>
            <div className="h-px w-1 group-hover:w-full opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black"/>
          </li>
          <li className="group">
            <Link href="/shop">Shop</Link>
            <div className="h-px w-1 group-hover:w-full opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black"/>
          </li>
          <li className="group">
            <Link href="/about">About</Link>
            <div className="h-px w-1 group-hover:w-full opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black"/>
          </li>
          <li className="group">
            <Link href="/contact">Contact</Link>
            <div className="h-px w-1 group-hover:w-full opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black"/>
          </li>
        </ul>
      </nav>
      <nav>
        <ul className="flex lg:gap-10 gap-4 items-center">
          <li>
            <Link href="#"><div className="w-5 h-5 lg:w-6 lg:h-6 relative"><Image src='/icons/user.svg' alt="user" fill/></div></Link>
          </li>
          <li>
            <Link href="#"><div className="w-5 h-5 lg:w-6 lg:h-6 relative"><Image src='/icons/search.svg' alt="search" fill/></div></Link>
          </li>
          <li>
            <Link href="#"><div className="w-5 h-5 lg:w-6 lg:h-6 relative"><Image src='/icons/heart.svg' alt="heart" fill/></div></Link>
          </li>
          <li>
            <button onClick={openCart} className="flex items-center cursor-pointer relative"><div className="w-5 h-5 lg:w-6 lg:h-6 relative"><Image src='/icons/cart.svg' alt="cart" fill/></div> {items.length > 0 && <span className="absolute -top-2 -right-2 bg-golden text-white text-xs font-semibold px-2 py-[1.5px] rounded-full">
              {items.length}
            </span>}</button>
           
          </li>
      
        </ul>
      </nav>
    </div>
  )
}

export default Header