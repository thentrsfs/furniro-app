import Image from "next/image"
import Link from "next/link"
import { useKeenSlider } from "keen-slider/react";
import GoldenButton from "../ui/GoldenButton";
import { rooms } from "@/data/rooms";
import { useState } from "react";
const Rooms = () => {
     const [currentSlide, setCurrentSlide] = useState(0);
      const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        loop: true,
        slideChanged(s) {
          setCurrentSlide(s.track.details.rel);
        },
        slides: {
          perView: 1
        },
      });
    
      const next = () => instanceRef.current?.next();
      
  return (
        <section className="bg-[#FCF8F3] relative w-full h-[650px] gap-12 flex max-lg:flex-col lg:justify-between items-center 2xl:pl-50 lg:pl-20">
          <div className="flex flex-col gap-5 max-lg:p-6">
            <h4 className="text-font-color font-bold lg:text-[40px] text-3xl leading-[120%]">50+ Beautiful rooms 
inspiration</h4>
<p className="font-medium text-gray-2 leading-[150%] lg:w-[75%]">Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
<Link href="/shop">
<GoldenButton className="py-3 px-10 font-semibold self-start">Explore More</GoldenButton>
</Link>
          </div>
   <div className="lg:w-4/6 w-full overflow-hidden relative navigation-wrapper">
          <div ref={sliderRef} className="keen-slider">
            {rooms.map((room) => (
              <div className="keen-slider__slide" key={room.id}>
                <div className="flex gap-6">
                  <Image
                    src={room.images[0]}
                    alt={`${room.title} image 1`}
                    width={600}
                    height={350}
                    className="lg:h-[580px] lg:w-[55%] w-full object-cover"
                  />
                  <div className="lg:flex flex-col w-[45%] gap-12 hidden">
                  <Image
                    width={600}
                    height={350}
                    src={room.images[1]}
                    alt={`${room.title} image 2`}
                    className=" lg:h-[480px] object-cover"
                  />
                   <div className="flex gap-6 px-2">
            {rooms.map((_, index) => (
              <button key={index} className={` rounded-full shadow p-[5px] ${index === currentSlide ? 'bg-golden outline outline-golden outline-offset-6' : 'bg-gray-5 hover:bg-golden'}`} onClick={() => instanceRef.current?.moveToIdx(index)}></button>
            ))}
          </div>
                  </div>
                </div>
                {/* Overlay info */}
                <div className="flex absolute lg:bottom-4 lg:left-4 top-50 left-6 ">
                <div className="flex flex-col gap-1 bg-white/72 backdrop-blur-xs py-8 px-6 ">
                  <div className="font-medium leading-[150%] text-gray-2 flex items-center gap-2">0{room.id} <div className="h-[1px] w-6 inline bg-gray-2"></div> {room.title}</div>
                  <p className="text-[28px] leading-[120%] text-font-color font-semibold">{room.subtitle}</p>
                </div>
                <button onClick={next} className="bg-golden self-end p-3 cursor-pointer hover:bg-[hsl(42,59%,55%)]">
                  <Image src="/icons/arrow-right.svg" alt="arrow" width={24} height={24}/>
                </button>
              </div>
              </div>
            ))}
          </div>
          <button
            onClick={next}
            className="absolute hidden lg:block top-1/2 right-5 -translate-y-1/2 bg-white border rounded-full shadow p-3 hover:bg-gray-100"
          >
            <Image src='/icons/chevron-right.svg' alt="chevron right" width={24} height={24} className='w-auto' />
          </button>
                   
        </div>
        </section>
  )
}

export default Rooms