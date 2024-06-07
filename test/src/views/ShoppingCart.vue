<template>
    <div>
        <CartItems v-for="item in cart" :item="item"/>
    </div>
</template>

<script setup>
import { useCartStore } from '@/stores/ShoppingCart';
import CartItems from '../components/CartItems.vue'

const cart = useCartStore().cart


</script>

<style lang="scss" scoped>

</style>