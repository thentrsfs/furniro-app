import {create} from 'zustand';
import { NavState } from '@/types/types';

export const useNavStore = create<NavState>((set) => ({
    isOpen: false,
    openNav: () => set({ isOpen: true }),
    closeNav: () => set({ isOpen: false }),
}))