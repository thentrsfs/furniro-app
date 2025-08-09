export type Product = {
    id: number,
    sku: string,
    tags: string[],
    title: string,
    subtitle: string,
    price: number,
    category: string,
    description: string,
    images: string[],
    new: boolean,
    sale?: number
    oldPrice?: number
}

export type Thumbnail = {
  src: string;
  alt: string;
  title: string;
};

export type Room = {
  id: number;
  title: string;
  subtitle: string;
  images: string[];
}

export type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export type CartState = {
  items: CartItem[];
  shipping: number;
  tax: number;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
  clearCart: () => void;
  subtotal: () => number;
  total: () => number;
  formatPrice: (price: number) => string;
};

export type NavState = {
  isOpen: boolean;
  openNav: () => void;
  closeNav: () => void;
}

export type ProductState = {
  categories: string[];
  selectedCategory: string | null;
  itemsToShow: number;
  sortBy: string;
  sortOptions: string[];
  currentPage: number;
  setSelectedCategory: (category: string | null) => void;
  setItemsToShow: (itemsToShow: number) => void;
  setSortBy: (sortBy: string) => void;
  setCurrentPage: (page: number) => void;
  getFilteredProducts: () => Product[];
  getSortedProducts: () => Product[];
  getStartIndex: () => number;
  getEndIndex: () => number;
  getTotalResults: () => number;
}

export type ContactFormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export type CheckoutFormState = {
  firstName: string;
  lastName: string;
  email: string;
  companyName: string;
  country: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
}
