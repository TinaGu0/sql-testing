import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: [] as { name: string }[],
    id: '' as string,
  }),
  actions: {
    addToCart(pokemon: { name: string }) {
      this.cart.push(pokemon);
    },
    insertId(userId:string) {
        this.id === (userId)
    }
  },
});