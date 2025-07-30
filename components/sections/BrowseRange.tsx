import { rangeThumbnails } from "@/data/thumbnails";
import Image from "next/image"

const BrowseRange = () => {
  return (
    <section className="flex flex-col items-center w-full 2xl:px-50 lg:px-20 gap-8">
        <div className="flex flex-col items-center">
        <h3 className="text-[32px] font-bold text-font-color">Browse The Range</h3>
        <p className="text-[20px] text-gray">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="w-full flex justify-between">
          {rangeThumbnails.map((item) => (
            <div className="flex flex-col items-center gap-4" key={item.title}>
            <Image src={item.src} alt={item.alt} width={381} height={480} className="" />
            <p className="text-font-color font-semibold text-2xl">{item.title}</p>
            </div>
          ))}
        </div>
        </section>
  )
}

export default BrowseRange
 