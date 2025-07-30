import Image from "next/image"
import Link from "next/link"
const Header = () => {
  return (
    <div className="w-full flex items-center justify-between bg-white text-black px-8 py-4 lg:px-20 lg:py-5 2xl:px-50">
        <div className="flex gap-2">
      <Image src="/icons/logo.svg" alt="logo" width={50} height={33} />
      <h1 className="font-bold text-[34px] font-montserrat">Furniro</h1>
      </div>
      <nav>
        <ul className="flex gap-18 font-medium">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/shop">Shop</Link>
          </li>
          <li>
            <Link href="#">About</Link>
          </li>
          <li>
            <Link href="#">Contact</Link>
          </li>
        </ul>
      </nav>

      <nav>
        <ul className="flex gap-10 items-center">
          <li>
            <Link href="#"><Image src='/icons/user.svg' alt="user" width={24} height={24}/></Link>
          </li>
          <li>
            <Link href="#"><Image src='/icons/search.svg' alt="search" width={24} height={24}/></Link>
          </li>
          <li>
            <Link href="#"><Image src='/icons/heart.svg' alt="heart" width={24} height={24}/></Link>
          </li>
          <li>
            <Link href="#"><Image src='/icons/cart.svg' alt="cart" width={24} height={24}/></Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header