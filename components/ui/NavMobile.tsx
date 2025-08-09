'use client'
import Link from 'next/link';
import Image from 'next/image';
import { useCartStore } from '@/stores/useCartStore';
import { useNavStore } from '@/stores/useNavStore';

const NavMobile = () => {
    const {openNav, closeNav, isOpen} = useNavStore();
    const {openCart, items} = useCartStore();
    if(isOpen) return (
        <>
         <div
        onClick={closeNav}
        className="fixed inset-0 bg-black/50 z-15"
      />
    <nav className="fixed top-0 left-0 w-3/5 h-full bg-white z-50 shadow-lg px-6 py-6 flex flex-col gap-6">
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 relative">
        <Image src="/icons/logo.svg" alt="logo" fill />
      </div>
      <h1 className="text-2xl font-semibold font-montserrat text-black">Furniro</h1>
    </div>

    <button onClick={closeNav} className="text-2xl text-gray-light">
      ✕
    </button>
  </div>

  <div className='w-full h-px bg-gray-light' />

  {/* Nav links */}
  <ul className="flex flex-col gap-6 text-lg font-medium text-font-color">
    <li>
      <Link onClick={closeNav} href="/" className="hover:text-primary transition-colors">Home</Link>
    </li>
    <li>
      <Link onClick={closeNav} href="/shop" className="hover:text-primary transition-colors">Shop</Link>
    </li>
    <li>
      <Link onClick={closeNav} href="/about" className="hover:text-primary transition-colors">About</Link>
    </li>
    <li>
      <Link onClick={closeNav} href="/contact" className="hover:text-primary transition-colors">Contact</Link>
    </li>
  </ul>
</nav>
    </>
  )
}

export default NavMobile