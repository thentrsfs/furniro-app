'use client'
import Image from "next/image"
import { useProductStore } from "@/stores/useProductStore"
import { products } from "@/data/products"
import { useState } from "react"
const FilterSortBar = () => {
  const {sortBy, setSortBy, itemsToShow, setItemsToShow, sortOptions, categories , selectedCategory, setSelectedCategory, getStartIndex, getEndIndex,  getSortedProducts} = useProductStore();

  const sortedProducts = getSortedProducts();
   const startIndex = getStartIndex();
    const endIndex = getEndIndex();
    const total = sortedProducts.length;
  const [showOptions, setShowOptions] = useState(false);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    setShowOptions(false);
  };

  return (
    <div className='bg-yellow-light lg:h-24 flex items-center justify-between lg:px-20 2xl:px-50 px-6 py-4'>
  <div className='flex items-center max-lg:gap-4'>
  <div className='flex items-center lg:gap-4 relative'>
    <Image onClick={ () => setShowOptions(!showOptions)} className="cursor-pointer" src='/icons/filter.svg' alt="filter" width={21} height={18}/>
    <span className='text-xl text-black hidden lg:block'>Filter</span>
{
  showOptions && (
    <div className='absolute flex flex-col top-8 left-0 bg-white shadow-lg z-10'>
      <h3 className='px-4 py-2 text-black font-medium text-lg border-b'>Categories</h3>
      {categories.map((category) => (
        <button
    key={category}
    className={`px-4 py-2 cursor-pointer ${selectedCategory === category ? 'bg-golden text-white' : 'text-black  hover:bg-golden hover:text-white'}`}
    onClick={() => handleCategoryClick(category)}
  >
    {category}
  </button>
      ))}
      <button className='px-4 py-2 cursor-pointer transition-all duration-300 hover:underline underline-offset-2 text-black' onClick={() => {setSelectedCategory(null); setShowOptions(false)}}>Clear Filter</button>
    </div>
  )
}
  </div>
  <div className='w-[2px] h-7 bg-gray-light mx-6 hidden lg:block'/>
  <p className='text-black hidden lg:block'>Showing {startIndex}–{endIndex} of {total} results</p>
  <p className="text-black text-sm w-25 lg:hidden">{startIndex}-{endIndex} of {total}</p>
  </div>
  <div className='flex items-center lg:gap-6 gap-4'>
<div className="flex lg:gap-4 gap-2 items-center">
  <span className='lg:text-lg text-black text-sm'>Show</span>
 <select name="show-items" id="show-items" value={itemsToShow} onChange={(e) => setItemsToShow(Number(e.target.value))} className='bg-white  appearance-none text-gray-light px-2 lg:pl-4 lg:h-13 h-8 flex items-center justify-center'>
  {Array.from({length: Math.min(sortedProducts.length, 20)}, (_, index) => (index + 1)).filter((num) => num <= sortedProducts.length).map((num) => (
    <option key={num} value={num}>{num}</option>
  ))}
 </select>
    </div>
<div className="flex lg:gap-4 gap-2 items-center">
  <span className='lg:text-lg text-black text-sm'>Sort by</span>
 <div className="relative w-full">
    <select className='bg-white appearance-none text-gray-light lg:pl-4 px-2 lg:pr-8 lg:h-13 h-10 w-full flex items-center justify-center' value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
     {sortOptions.map((option) => (
       <option key={option} value={option}>{option}</option>
     ))}
    </select>
    <div className="pointer-events-none hidden absolute inset-y-0 right-0 lg:flex items-center px-2 text-gray-light">
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="stroke-gray-light lucide lucide-chevron-down-icon lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
 </div>
</div>
</div>
  </div>
    </div>
  )
}

export default FilterSortBar