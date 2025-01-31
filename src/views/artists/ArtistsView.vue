<!-- Artists list page -->
<template>
  <div class="wrapper">
    <h1>Artistes</h1>
    <div class="artist-grid">
      <ArtistCard v-for="artist in artists" :key="artist.id" :id="artist.id" :name="artist.name"
        :image="artist.image" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import ArtistCard from "@/components/card/ArtistCard.vue";

const artists = ref([]);

// Fetch artists from the API
onMounted(async () => {
  try {
    const response = await axios.get('http://127.0.0.1:5049/api/artists/');
    // Populate the artists array with data from the API
    artists.value = response.data.Artists.map(artist => ({
      id: artist.id,
      name: artist.name,
      image: artist.avatar,
      biography: artist.biography
    }));
  } catch (error) {
    console.error("Error fetching artists:", error);
  }
});
</script>

<style scoped>
.artist-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
</style>