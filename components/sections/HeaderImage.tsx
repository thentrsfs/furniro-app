import Image from 'next/image'

const HeaderImage = ({header, from='Home'} : {header: string, from?: string}) => {
  return (
     <div className="relative">
<Image src='/backgrounds/shop-bg.svg' alt="shop-bg" width={1440} height={328} className='w-full'/>
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