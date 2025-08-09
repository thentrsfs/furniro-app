import {create} from 'zustand';
import { ProductState } from '@/types/types';
import { products } from '@/data/products';

export const useProductStore = create<ProductState>((set, get) => ({
    categories: ['Sofas', 'Chairs', 'Beds'],
    selectedCategory: null,
    sortBy: 'Relevance',
    sortOptions: ['Relevance', 'Name', 'Price: low to high', 'Price: high to low', ],
    itemsToShow: 8,
    currentPage: 1,
    setSelectedCategory: (category: string | null) => set({ selectedCategory: category }),
    setSortBy: (sortBy: string) => set({ sortBy }),
    setItemsToShow: (itemsToShow: number) => set({ itemsToShow }),
    setCurrentPage: (page: number) => set({ currentPage: page }),
    getFilteredProducts: () => {
    const { selectedCategory } = get();
    if (!selectedCategory) return products;
    return products.filter((product) => product.category === selectedCategory);
  },
  getSortedProducts: () => {
    const { sortBy } = get();
    const filtered = get().getFilteredProducts();
    const sorted = [...filtered];

    if (sortBy === 'Name') {
      sorted.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === 'Price: low to high') {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'Price: high to low') {
      sorted.sort((a, b) => b.price - a.price);
    }
    return sorted;
  }, 
  getStartIndex: () => {
    const { currentPage, itemsToShow } = get();
    return (currentPage - 1) * itemsToShow + 1;
  },
  getEndIndex: () => {
    const { currentPage, itemsToShow } = get();
    return Math.min(currentPage * itemsToShow, get().getTotalResults());
  },
  getTotalResults: () => {
    return get().getSortedProducts().length;
  }
}));