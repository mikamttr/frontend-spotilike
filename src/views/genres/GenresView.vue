<template>
  <div class="wrapper">
    <h1>Genres</h1>
    <div class="genre-cards-container">
      <GenreCard v-for="(genre, index) in genres" :key="genre.id" :genre="genre" :index="index" />
    </div>
  </div>
</template>

<script>
import GenreCard from '@/components/card/GenreCard.vue';
import axios from 'axios';

export default {
  name: 'GenresView',
  components: { GenreCard },
  data() {
    return {
      genres: [],
    };
  },
  mounted() {
    axios.get('http://127.0.0.1:5049/api/genres/')
      .then((response) => {
        this.genres = response.data.Genres;
      })
      .catch((error) => {
        console.error('Error fetching genres:', error);
      });
  },
};
</script>


<style>
.genre-cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
}
</style>
