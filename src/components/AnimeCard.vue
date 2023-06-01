<template>
  <b-card
    :title="anime.title"
    :img-src="anime.imgUrl"
    :img-alt="`${anime.title}-Image`"
    img-top
    style="max-width: 20rem"
    class="mb-2"
  >
    <b-card-text> Number of episode : {{ anime.episodes }} </b-card-text>
    <b-card-text> Status : {{ anime.status }} </b-card-text>

    <b-button href="#" variant="outline-primary">Edit</b-button>
  </b-card>
</template>

<script>
export default {
  props: {
    anime: {
      type: Object,
      default: function () {
        return {
          title: "",
          episodes: 0,
          status: null,
          imgUrl: "",
        };
      },
    },
  },
};
</script>

<style>
</style>