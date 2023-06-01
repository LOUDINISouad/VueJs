<template>
  <div class="container">
    <h1 class="title">My anime list</h1>
    <anime-cards></anime-cards>
  </div>
</template>

<script>
import AnimeCards from "@/components/AnimeCards.vue";
export default {
  components: {
    AnimeCards,
  },
};
</script>

<style>
</style>