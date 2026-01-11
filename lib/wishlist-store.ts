import { create } from "zustand"
//remember to tìm hiểu về zustand
type WishlistItem = {
  id: number
  name: string
  price: number
  image: string
}

type WishlistStore = {
  items: WishlistItem[]
  toggleWishlist: (item: WishlistItem) => void
  isInWishlist: (id: number) => boolean
}

export const useWishlistStore = create<WishlistStore>((set, get) => ({
  items: [],

  toggleWishlist: (item) =>
    set(state => {
      const exists = state.items.find(i => i.id === item.id)
      return {
        items: exists
          ? state.items.filter(i => i.id !== item.id)
          : [...state.items, item],
      }
    }),

  isInWishlist: (id) => {
    return get().items.some(i => i.id === id)
  },
}))
