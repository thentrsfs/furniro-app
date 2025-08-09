'use client'
import Image from "next/image"
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { products } from "@/data/products";
import { useCartStore } from "@/stores/useCartStore";
import { useProductStore } from "@/stores/useProductStore";
import Link from "next/link";

const Products = ({ isHomePage,isMobile, related, category }: { isHomePage: boolean, isMobile?: boolean, related?: boolean, category?: string }) => {

  const pathname = usePathname();
  const { itemsToShow, selectedCategory, setSelectedCategory, getStartIndex, getEndIndex, getSortedProducts, getFilteredProducts, setCurrentPage, currentPage } = useProductStore();
  const {formatPrice} = useCartStore();
  
  const [homeVisibleCount, setHomeVisibleCount] = useState(itemsToShow);

  // Decide items per page (for pagination only)
  const itemsPerPage = isMobile ? 4 : itemsToShow;
  
  const filteredProducts = getFilteredProducts();

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const sortedProducts = getSortedProducts();

  const startIndex = getStartIndex();
  const endIndex = getEndIndex();

  const categoryProducts = products.filter((product) => product.category === category);

  const displayedProducts = isHomePage
    ? sortedProducts.slice(0, homeVisibleCount)
    : related
    ? categoryProducts
    : sortedProducts.slice(startIndex - 1, endIndex);

  const handleShowMore = () => {
    setHomeVisibleCount((prev) => Math.min(prev + itemsPerPage, products.length));
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Reset to first page when category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  // Reset category filter if leaving shop
  useEffect(() => {
    if (pathname !== '/shop' && selectedCategory) {
      setSelectedCategory(null);
    }
  }, [pathname]);

  return (<div className="flex flex-col items-center gap-15 w-full">
    <div className="w-full grid gap-10 md:grid-cols-2 lg:grid-cols-4 bg-white">
      {displayedProducts.map((item) => (
        <div className="flex flex-col relative bg-light-bg group" key={item.id}>
          {item.sale && (
            <div className="absolute top-4 right-4 rounded-full bg-red-accent p-6 font-medium leading-[150%] z-1"><span className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">{item.sale}%</span></div>
          )}
          {item.new && (
            <div className="absolute top-4 right-4 rounded-full bg-green-accent p-6 font-medium leading-[150%] z-1">
              <span className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">New</span>
            </div>
          )}
          <Link href={`/products/${item.id}`} className="w-full lg:h-[20rem] h-60 relative overflow-hidden">
          <Image fill src={item.images[0]} alt={item.title} className="w-full object-cover" />
          </Link>
          <div className="flex flex-col gap-2 p-4">
            <Link className="z-10" href={`/products/${item.id}`} >
            <h4 className="text-font-color font-semibold lg:text-2xl text-lg leading-[120%]">{item.title}</h4>
            </Link>
            <p className="font-medium leading-[150%] text-gray-3 lg:text-md text-sm">{item.subtitle}</p>
            <div className="flex lg:justify-between gap-2 items-center">
              <p className="lg:text-xl font-semibold leading-[150%] text-font-color">${formatPrice(item.price)}</p>
              {item.sale && (
                <p className="text-gray-4 leading-[150%] line-through ">
                  {item.oldPrice !== undefined
                    ? `$${formatPrice(item.oldPrice)}`
                    : ''}
                </p>
              )}
              <div className="absolute pointer-events-none lg:pointer-events-auto inset-0 bg-black/55 opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 z-2"></div>
              <div className="absolute lg:pointer-events-auto pointer-events-none inset-0 flex flex-col gap-6 items-center justify-center opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 z-3">
                <Link href={`/products/${item.id}`}><button className="bg-white text-golden font-semibold leading-[150%] py-3 px-20 cursor-pointer" >Show Details</button>
                </Link>
                <div className="flex gap-6 justify-center w-full ">
                  <button className="flex gap-1 cursor-pointer items-center">
                    <Image src='/icons/share.svg' alt="share icon" width={14} height={16} className="w-auto" />
                    <span className="font-semibold leading-[150%]">Share</span>
                  </button>
                  <button className="flex gap-1 cursor-pointer items-center">
                    <Image src='/icons/compare.svg' alt="compare icon" width={16} height={16} className="w-auto" />
                    <span className="font-semibold leading-[150%]">Compare</span>
                  </button>
                  <button className="flex gap-1 cursor-pointer items-center">
                    <Image src='/icons/heart-white.svg' alt="heart icon" width={16} height={16} className="w-auto" />
                    <span className="font-semibold leading-[150%]">Like</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
     {/* Show More button (only home) */}
    {isHomePage && homeVisibleCount < products.length && <button onClick={handleShowMore} className={`${isHomePage && homeVisibleCount < products.length ? 'block' : 'hidden'} bg-white cursor-pointer border border-golden text-golden font-semibold leading-[150%] py-3 px-20`}>Show More</button>}

     {/* Pagination (shop only) */}
    {
      !isHomePage && !related && totalPages > 1 && (
        <div className="flex flex-wrap gap-6 justify-center text-black">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`w-12 h-12 rounded-lg ${currentPage === index + 1 ? 'bg-golden text-white' : 'bg-yellow-light'} cursor-pointer`}
            >
              {index + 1}
            </button>
          ))}
          {currentPage < totalPages && <button
            onClick={handleNextPage}
            className={'w-20 h-12 rounded-lg bg-yellow-light leading-[150%] cursor-pointer'}
          >
            Next
          </button>}
        </div>
      )
    }
  </div>
  )
}

export default Products