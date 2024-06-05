<template>
    <div>
        <h1>{{ poke.name }}</h1>
        <button @click="addToCart()">Purchase</button>
    </div> 
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps(['poke'])

function addToCart() {
    let selectedPoke = props.poke.name
    console.log(selectedPoke)
}


</script>


<style lang="scss" scoped>

</style>