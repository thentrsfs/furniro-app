'use client'
import Image from "next/image"
import { useState } from "react";
import { products } from "@/data/products";


const Products = () => {

    const eightProducts = products.slice(0, 8);
    const [displayedProducts, setDisplayedProducts] = useState(eightProducts);
    const [showMore, setShowMore] = useState(false);
    const handleButtonClick = () => {
        setDisplayedProducts(products);
        setShowMore(true);
    }

  return (<div className="flex flex-col items-center gap-8">
         <div className="w-full grid gap-10 lg:grid-cols-4 bg-white">
                {displayedProducts.map((item) => (
                  <div className="flex flex-col relative bg-light-bg group" key={item.id}>
                    {item.sale && (
                      <div className="absolute top-4 right-4 rounded-full bg-red-accent p-6 font-medium leading-[150%]"><span className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">{item.sale}%</span></div>
                    )}
                    {item.new && (
                      <div className="absolute top-4 right-4 rounded-full bg-green-accent p-6 font-medium leading-[150%]">
                        <span className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">New</span>
                      </div>
                    )}
                  <Image src={item.image} alt={item.title} width={285} height={301} className="w-full" />
                  <div className="flex flex-col gap-2 p-4">
                  <h4 className="text-font-color font-semibold text-2xl leading-[120%]">{item.title}</h4>
                  <p className="font-medium leading-[150%] text-gray-3">{item.subtitle}</p>
                  <div className="flex justify-between items-center">
                  <p className="text-xl font-semibold leading-[150%] text-font-color">${new Intl.NumberFormat('de-DE', { minimumFractionDigits: 2 }).format(item.price)}</p>
                  {item.sale && (
                    <p className="text-gray-4 leading-[150%] line-through">
                      {item.oldPrice !== undefined
                        ? `$${new Intl.NumberFormat('de-DE', { minimumFractionDigits: 2 }).format(item.oldPrice)}`
                        : ''}
                    </p>
                  )}
                  <div className="absolute inset-0 bg-black/55 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-white text-golden font-semibold leading-[150%] py-3 px-20 cursor-pointer">Add to cart</button>
                    <div className="flex">
                      <div className="flex gap-2 items-center">
                      <Image src='/icons/share.svg' alt="share icon" width={24} height={24}/>
                      <span className="font-semibold leading-[150%]">Share</span>
                      </div>
                      <div className="flex gap-2 items-center">
                      <Image src='/icons/compare.svg' alt="compare icon" width={24} height={24}/>
                      <span className="font-semibold leading-[150%]">Compare</span>
                      </div>
                      <div className="flex gap-2 items-center">
                      <Image src='/icons/heart-white.svg' alt="heart icon" width={24} height={24}/>
                      <span className="font-semibold leading-[150%]">Like</span>
                      </div>
                    </div>
                  </div>
                  </div>
                  </div>
                  </div>
                ))}
               </div>
                 <button onClick={handleButtonClick} className={`${showMore ? 'hidden' : 'block'} bg-white cursor-pointer border border-golden text-golden font-semibold leading-[150%] py-3 px-20`}>Show More</button>
                 </div>
  )
}

export default Products