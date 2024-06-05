<template>
    <div>  
        <DisplayItems v-for="poke in pokemon" :poke="poke"/>
    </div>
</template>

<script setup lang="ts">
//@ts-ignore
import DisplayItems from '../components/DisplayItems.vue'
import { ref, onMounted } from 'vue'

onMounted (() => { getData() })

const pokemon = ref([]);
  async function getData() {
    try {
      let res = await fetch("https://pokeapi.co/api/v2/pokemon");
      let data = await res.json();
      pokemon.value = data.results;
    } catch (error) {
      console.error("massive skill issue", error);
    }
  };

</script>

<style lang="scss" scoped>

</style>