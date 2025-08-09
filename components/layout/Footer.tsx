'use client'
import Link from "next/link"

const Footer = () => {
  return (
    <div className="w-full bg-white flex flex-col divide-y divide-[#d9d9d9] lg:px-20 2xl:px-50 lg:py-12 p-6 border-t-px border-gray-light text-black">
    <div className="grid lg:grid-cols-4 grid-cols-2 gap-12 lg:pb-12 pb-6">
        <div className="flex flex-col lg:gap-10 gap-4">
            <h3 className="font-bold lg:text-2xl text-xl">Furniro</h3>
            <p className="text-gray-light lg:text-md text-sm">400 University Drive Suite 200 Coral <br />Gables,
<br />FL 33134 USA</p>
        </div>
        <nav className="font-medium flex flex-col lg:gap-10 gap-4">
            <h3 className="text-gray-light">Links</h3>
            <ul className="flex flex-col lg:gap-8 gap-4">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/shop">Shop</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>
        </nav>
        <nav className="font-medium flex flex-col lg:gap-10 gap-4">
            <h3 className="text-gray-light">Help</h3>
            <ul className="flex flex-col lg:gap-8 gap-4">
                <li>Payment Options</li>
                <li>Returns</li>
                <li>Privacy Policies</li>               
            </ul>
        </nav>
        <div className="font-medium flex flex-col lg:gap-10 gap-4">
            <h3 className="text-gray-light">Newsletter</h3>
            <div className="text-sm flex max-lg:flex-col gap-4">
            <input type="text" className="placeholder:font-normal focus:outline-none border-b w-full" placeholder="Enter Your Email Address" />
            <button className="border-b self-start">SUBSCRIBE</button>
            </div>
        </div>
    </div>
    <p className="lg:pt-12 pt-6">2025 furniro. All rights reverved</p>
    </div>
  )
}

export default Footer