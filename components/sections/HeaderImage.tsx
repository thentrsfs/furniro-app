'use client'
import Image from 'next/image'
import { useState } from 'react'

const HeaderImage = ({header, from='Home'} : {header: string, from?: string}) => {
  const [loading, setLoading] = useState(true);
  
  return (
     <div className="relative">
       {loading && (
            <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-10 h-10 border-4 border-golden border-t-transparent rounded-full animate-spin"></div>
        </div>
          )}
<Image src='/backgrounds/shop-bg.svg' onLoadingComplete={() => setLoading(false)} alt="shop-bg" width={1440} height={328} className='w-full'/>
<div className='absolute inset-0 bg-white/45 backdrop-blur-[2.5px]'></div>
<div className='absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-black flex flex-col items-center lg:gap-4 gap-1'>
<h2 className='font-medium lg:text-5xl text-2xl'>{header}</h2>
<div className='flex items-center gap-2'>
  <span className='font-medium'>{from}</span>
  <div className='relative w-6 h-6'>
  <Image src='/icons/chevron-right-black.svg' alt="chevron-right-black" fill/>
  </div>
  <span className='font-light'>{header}</span>
</div>
</div>
    </div>
  )
}

export default HeaderImage