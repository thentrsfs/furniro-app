import {create} from 'zustand';
import { persist } from 'zustand/middleware';
import {CartState} from '../types/types';

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
        items: [],
        shipping: 29.99,
        tax: 8.99,
        isOpen: false,
        openCart: () =>{ if(get().items.length > 0) set({ isOpen: true })},
        closeCart: () => set({ isOpen: false }),
        addItem: (item) => {
            const existingItem = get().items.find(i => i.id === item.id);
            let updatedItems;
            if(existingItem){
                updatedItems = get().items.map(i => i.id === item.id
                    ? {...i, quantity: i.quantity + item.quantity}
                    : i
                )
            } else {
               updatedItems = [...get().items, item];
        }
            set({ items: updatedItems });
        },
        removeItem: (id) => {
            const newItems = get().items.filter(item => item.id !== id);
            set({
                items: newItems
            })
            if (newItems.length === 0) {
                set({ isOpen: false }); // Close cart if no items left
            }
        },
        increaseQuantity: (id) => {
            set({
                items: get().items.map(item => 
                    item.id === id ? {...item, quantity: item.quantity + 1} : item
                )
            })
        },
        decreaseQuantity: (id) => {
            set({
                items: get().items.map(item => 
                    item.id === id ? {...item, quantity: Math.max(item.quantity - 1, 1)} : item
                ).filter(item => item.quantity > 0)
            })
        },
        clearCart: () => set({ items: [] }),
        subtotal: () => get().items.reduce((total, item) => total + item.price * item.quantity, 0),
        total: () => {
            return get().subtotal() + get().shipping + get().tax;
        },
        formatPrice: (price: number) => new Intl.NumberFormat('de-DE', {minimumFractionDigits: 2}).format(price),

    })
    ,
    {
        name: 'cart-storage', 
    }
  ))
   