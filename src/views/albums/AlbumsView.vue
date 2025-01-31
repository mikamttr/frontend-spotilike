<!-- Albums list page -->
<template>
  <div class="wrapper">
    <h1>Albums</h1>
    <div class="album-grid">
      <AlbumCard v-for="album in albums" :key="album.id" :id="album.id" :title="album.title" :artist="album.artist"
        :image="album.image" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import AlbumCard from "@/components/card/AlbumCard.vue";

const albums = ref([]);

// Fetch albums from the API
onMounted(async () => {
  try {
    const response = await axios.get('http://127.0.0.1:5049/api/albums/');
    // Populate the albums array with data from the API
    albums.value = response.data.Albums.map(album => ({
      id: album.id,
      title: album.title,
      artist: album.artist,
      image: album.image,
    }));
  } catch (error) {
    console.error("Error fetching albums:", error);
  }
});
</script>

<style scoped>
.album-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
</style>
