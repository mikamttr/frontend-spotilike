<template>
  <div class="wrapper">
    <h1>Albums</h1>
    <div class="album-grid">
      <AlbumCard v-for="album in albums" :key="album.id" :title="album.title" :artist="album.artist"
        :image="album.image" />
    </div>
  </div>
</template>

<script setup>
import AlbumCard from "@/components/AlbumCard.vue";

const albums = [
  { id: 1, title: "APOCALYPSE", artist: "Gazo", image: "path/to/apocalypse.jpg" },
  { id: 2, title: "A LA VIE A LA MORT", artist: "SDM", image: "path/to/alavie.jpg" },
  { id: 3, title: "JVLVIII", artist: "SCH", image: "path/to/jvlviii.jpg" },
  { id: 4, title: "N.O.S", artist: "Ninho", image: "path/to/nos.jpg" },
  { id: 5, title: "PLATINE", artist: "GIMS", image: "path/to/platine.jpg" },
  { id: 6, title: "VITAA & SLIMANE", artist: "Vitaa & Slimane", image: "path/to/vitaa_slimane.jpg" },
  { id: 7, title: "L'ESCALE", artist: "Lefa", image: "path/to/lescale.jpg" },
  { id: 8, title: "MELANCHOLY", artist: "Zola", image: "path/to/melancholy.jpg" },
  { id: 9, title: "SANS RIRE", artist: "Heuss L'enfoiré", image: "path/to/sansrire.jpg" },
  { id: 10, title: "ORIGINAL", artist: "Youssoupha", image: "path/to/original.jpg" },
];
</script>

<style scoped>
.album-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
</style>
