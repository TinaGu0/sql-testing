<template>
    <div>
        <h1>{{ poke.name }}</h1>
        <button @click="addToCart(), insertItem()">Purchase</button>
    </div> 
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useCartStore } from '@/stores/ShoppingCart';

//@ts-ignore
import { supabase } from '../lib/supabase.js';

const props = defineProps(['poke'])

const cartStore = useCartStore();
const cart = useCartStore().cart
const id = useCartStore().id

function addToCart() {
    let selectedPoke = props.poke.name
    console.log(selectedPoke)
    cartStore.addToCart(props.poke);
    console.log(`${props.poke.name} added to cart`);
}

async function insertItem() {
    const { data: updateData, error: updateError } = await supabase
    .from('userCart')
    .update([
      { cartItems: JSON.stringify([cart]) },
    ])
    .eq('id', id)
    if (updateError) {
    console.error(updateError);

  } else {
    console.log('cart item added', updateData);
  }
};


</script>


<style lang="scss" scoped>

</style>