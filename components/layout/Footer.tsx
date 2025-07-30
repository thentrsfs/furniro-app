
const Footer = () => {
  return (
    <div className=" w-full bg-white flex flex-col divide-y divide-[#d9d9d9] lg:px-20 2xl:px-50 lg:py-12 border-t border-gray-light text-black">
    <div className="flex justify-between lg:pb-12">
        <div className="flex flex-col gap-10">
            <h3 className="font-bold text-2xl">Furniro</h3>
            <p className="text-gray-light">400 University Drive Suite 200 Coral <br />Gables,
<br />FL 33134 USA</p>
        </div>
        <nav className="font-medium flex flex-col gap-10">
            <h3 className="text-gray-light">Links</h3>
            <ul className="flex flex-col gap-8">
                <li>Home</li>
                <li>Shop</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
        <nav className="font-medium flex flex-col gap-10">
            <h3 className="text-gray-light">Help</h3>
            <ul className="flex flex-col gap-8">
                <li>Payment Options</li>
                <li>Returns</li>
                <li>Privacy Policies</li>               
            </ul>
        </nav>
        <div className="font-medium flex flex-col gap-10">
            <h3 className="text-gray-light">Newsletter</h3>
            <div className="text-sm flex gap-4">
            <input type="text" className="placeholder:font-normal focus:outline-none border-b" placeholder="Enter Your Email Address" />
            <button className="border-b">SUBSCRIBE</button>
            </div>
        </div>
    </div>
    <p className="pt-12">2025 furniro. All rights reverved</p>
    </div>
  )
}

export default Footer