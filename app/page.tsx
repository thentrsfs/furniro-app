'use client'
import "keen-slider/keen-slider.min.css";
import Image from "next/image"
import BrowseRange from "@/components/sections/BrowseRange";
import OurProducts from "@/components/sections/OurProducts";
import Rooms from "@/components/sections/Rooms";
import Setup from "@/components/sections/Setup";

export default function Home() {
  
  return (
  <div className="relative bg-white flex flex-col items-center gap-14 pb-12">
        <Image src='/backgrounds/scandinavian-bg.svg' priority alt="scandinavian-interior-mockup-wall-decal-background" width={1440} height={718} className="w-full relative" />
        <div className="absolute top-40 right-20 2xl:right-50 2xl:top-60 gap-2 lg:px-11 justify-around lg:pt-8 lg:pb-2 flex flex-col rounded-[10px] lg:w-[643px] lg:h-[443px] bg-yellow-light">
          <div className="flex flex-col gap-2">
<p className="text-font-color font-semibold tracking-[3px]">New Arrival</p>
<h2 className="text-golden font-bold text-[52px] leading-[65px]">Discover Our <br /> New Collection</h2>
<p className="text-font-color text-lg font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
</div>
<button className="bg-golden text-white font-bold py-6 px-20 self-start ">BUY NOW</button>
        </div>
       <BrowseRange/>
       <OurProducts/>
       <Rooms/>
       <Setup/>
    </div>
  );
}
