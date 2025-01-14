<template>
  <div class="wrapper">
    <h1>Artistes</h1>
    <div class="artist-grid">
      <ArtistCard v-for="artist in artists" :key="artist.id" :name="artist.name" :image="artist.image" />
    </div>
  </div>
</template>

<script setup>
import ArtistCard from "@/components/ArtistCard.vue";

const artists = [
  { id: 1, name: "GIMS", image: "path/to/gims.jpg" },
  { id: 2, name: "Gazo", image: "path/to/gazo.jpg" },
  { id: 3, name: "Ninho", image: "path/to/ninho.jpg" },
  { id: 4, name: "SDM", image: "path/to/sdm.jpg" },
  { id: 5, name: "SCH", image: "path/to/sch.jpg" },
  { id: 6, name: "Vitaa", image: "path/to/vitaa.jpg" },
  { id: 7, name: "Slimane", image: "path/to/slimane.jpg" },
  { id: 8, name: "Lefa", image: "path/to/lefa.jpg" },
  { id: 9, name: "Zola", image: "path/to/zola.jpg" },
  { id: 10, name: "Heuss L'enfoiré", image: "path/to/heuss.jpg" },
  { id: 11, name: "Youssoupha", image: "path/to/youssoupha.jpg" },
];
</script>

<style scoped>
.artist-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
</style>
