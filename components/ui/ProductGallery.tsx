'use client'
import Image from "next/image"
import { useState } from "react";

const ProductGallery = ({images}: {images: string[]}) => {
    const [activeImage, setActiveImage] = useState(images[0]);
  return (
    <div className="flex max-lg:flex-col-reverse gap-6">
        <div className="grid grid-cols-2 lg:flex flex-col gap-4 lg:max-h-[28rem] overflow-y-hidden lg:overflow-y-auto overflow-x-hidden scrollbar-hidden">
            {images.map((image,index) => (
                <div key={index} onMouseEnter={() => setActiveImage(image)} className="lg:w-26 lg:h-26 h-26 md:h-40 w-full relative cursor-pointer">
                    <Image 
                        key={index}
                        src={image} 
                        alt={`Product image ${index + 1}`} 
                        fill 
                        className={`cursor-pointer ${activeImage === image ? ' border-black' : 'border-gray-light'} border object-cover`}
                        onClick={() => setActiveImage(image)}
                    />
                </div>
            ))}
        </div>
        <div className="lg:w-[32rem] lg:h-[28rem] h-80 w-full relative">
            <Image 
                src={activeImage} 
                alt="Active product image" 
                fill 
                className="object-cover"
            />
        </div>
    </div>
  )
}

export default ProductGallery