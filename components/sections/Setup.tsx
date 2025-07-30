import Image from "next/image"

const Setup = () => {
  return (
   <section className="relative w-full gap-12 flex flex-col justify-between items-center">
          <div className="flex flex-col items-center gap-1">
<h3 className="font-semibold text-gray-2 text-xl leading-[150%]">Share your setup with</h3>
<h2 className="text-font-color font-bold text-[40px] leading-[120%]">#FurniroFurniture</h2>
</div>
<div className="grid grid-cols-4 md:grid-cols-12 auto-rows-[12vh] gap-4 mt-[-60px]">
<div className="col-span-1 row-span-3"><Image src='/setup-images/rectangle32.svg' alt="image1" width={300} height={300} className="w-full h-full object-cover" /></div>
<div className="col-span-3 row-span-3 pt-20"><Image src='/setup-images/rectangle38.svg' alt="image2" width={300} height={300} className="w-full h-full object-cover" /></div>
<div className="col-span-3 row-span-6 "><Image src='/rooms/dinningroom1.svg' alt="image3" width={300} height={300} className="w-full h-full " /></div>
<div className="col-span-3 row-span-4 pt-26"><Image src='/rooms/bedroom1.svg' alt="image4" width={300} height={300} className="w-full h-full object-cover" /></div>
<div className="col-span-2 row-span-4"><Image src='/rooms/dinningroom2.svg' alt="image5" width={300} height={300} className="w-full h-full object-cover" /></div>
<div className="col-span-2 row-span-3"><Image src='/setup-images/rectangle37.svg' alt="image6" width={300} height={300} className="w-full h-full object-cover" /></div>
<div className="col-span-2 row-span-3 pb-20"><Image src='/setup-images/rectangle39.svg' alt="image7" width={300} height={300} className="w-full h-full object-cover" /></div>
<div className="col-span-2 row-span-2"><Image src='/setup-images/rectangle41.svg' alt="image8" width={300} height={300} className="w-full h-full object-cover" /></div>
<div className="col-span-3 row-span-2"><Image src='/setup-images/rectangle44.svg' alt="image9" width={300} height={300} className="w-full h-full object-cover pb-20 pr-20" /></div>
</div>
        </section>
  )
}

export default Setup