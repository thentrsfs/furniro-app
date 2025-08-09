'use client'
import "keen-slider/keen-slider.min.css";
import Image from "next/image"
import Link from "next/link";
import { useEffect, useState } from "react";
import BrowseRange from "@/components/sections/BrowseRange";
import Products from "@/components/sections/Products";
import Rooms from "@/components/sections/Rooms";
import Setup from "@/components/sections/Setup";
import GoldenButton from "@/components/ui/GoldenButton";

export default function Home() {

  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
  setIsMobile(window.innerWidth < 1024);
}, []);
  
  return (
  <div className="relative bg-white flex flex-col items-center lg:gap-14 pb-12 gap-8">
        <Image src='/backgrounds/scandinavian-bg.svg' priority alt="scandinavian-interior-mockup-wall-decal-background" width={1440} height={718} className="w-full relative " />
        <div className="lg:absolute lg:top-40 lg:right-20 2xl:right-50 2xl:top-60 gap-4 lg:gap-2 lg:px-11 justify-around lg:pt-8 lg:pb-2 flex flex-col rounded-[10px] lg:w-[643px] lg:h-[443px] mx-6 p-6 bg-yellow-light">
          <div className="flex flex-col gap-2">
<p className="text-font-color font-semibold tracking-[3px]">New Arrival</p>
<h2 className="text-golden font-bold lg:text-5xl text-2xl lg:leading-[65px]">Discover Our <br /> New Collection</h2>
<p className="text-font-color lg:text-lg text-sm font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
</div>
<Link href="/shop" >
<GoldenButton className="lg:py-6 lg:px-20 py-3 px-8 font-semibold">SHOP NOW</GoldenButton></Link>
        </div>
       <BrowseRange/>
          <section className="flex flex-col items-center w-full 2xl:px-50 lg:px-20 px-6 gap-8">
               <h3 className="lg:text-[32px] text-2xl font-bold text-font-color">Our Products</h3>
          <Products isHomePage={true} isMobile={isMobile} />
            </section>
       <Rooms/>
       <Setup/>
    </div>
  );
}
