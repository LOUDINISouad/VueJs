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

<style lang="scss">
.title {
  font-size: 39px;
  color: #160202;
  text-align: center;
  margin-top: 20px;
}
</style>