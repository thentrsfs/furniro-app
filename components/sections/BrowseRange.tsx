'use client'
import { rangeThumbnails } from "@/data/thumbnails";
import { useState } from "react";
import Image from "next/image"

const BrowseRange = () => {
  const [loading, setLoading] = useState(true);
  return (
    <section className="flex flex-col items-center w-full 2xl:px-50 lg:px-20 gap-8 px-6">
        <div className="flex flex-col items-center gap-2">
        <h3 className="lg:text-[32px] text-2xl font-bold text-font-color">Browse The Range</h3>
        <p className="lg:text-xl text-lg text-gray text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="w-full flex gap-4 justify-between">
          {rangeThumbnails.map((item) => (
            <div className="flex flex-col items-center gap-4" key={item.title}>
               {loading && (
            <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-10 h-10 border-4 border-golden border-t-transparent rounded-full animate-spin"></div>
        </div>
          )}
            <Image src={item.src} alt={item.alt} onLoadingComplete={() => setLoading(false)} width={381} height={480} className="" />
            <p className="text-font-color font-semibold lg:text-2xl text-lg">{item.title}</p>
            </div>
          ))}
        </div>
        </section>
  )
}

export default BrowseRange
 