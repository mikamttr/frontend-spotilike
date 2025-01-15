<template>
    <div class="wrapper">
        <h1>Détails de l'album</h1>
        <div v-if="album">
            <p>ID : {{ album.id }}</p>
            <p>Titre : {{ album.title }}</p>
            <p>Artiste : {{ album.artist }}</p>
            <img :src="album.image" alt="Image de l'album" />
            <p>Date de sortie : {{ formatReleaseDate(album.release_date) }}</p>

            <h3>Morceaux :</h3>
            <ul>
                <li v-for="song in songs" :key="song.track_id">
                    <strong>{{ song.track_title }}</strong><br />
                    Artiste : {{ song.artists }} <br />
                    Durée : {{ formatDuration(song.duration) }}
                </li>
            </ul>
        </div>
        <div v-else>
            <p>Chargement des détails de l'album...</p>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const props = defineProps({
    id: {
        type: String,
        required: true,
    },
});

const album = ref(null);
const songs = ref([]);

// Récupère les détails de l'album
const fetchAlbumDetails = async () => {
    try {
        const response = await axios.get(`http://127.0.0.1:5049/api/albums/${props.id}`);
        album.value = response.data.Album;
    } catch (error) {
        console.error("Erreur lors de la récupération des détails de l'album :", error);
    }
};

// Récupère les morceaux de l'album
const fetchSongs = async () => {
    try {
        const response = await axios.get(`http://127.0.0.1:5049/api/albums/${props.id}/songs`);
        songs.value = response.data.Songs;
    } catch (error) {
        console.error("Erreur lors de la récupération des morceaux :", error);
    }
};

// Formatage de la durée du morceau
const formatDuration = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds}`;
};

// Formatage de la date
const formatReleaseDate = (dateString) => {
    const options = {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', options);
};

onMounted(() => {
    fetchAlbumDetails();
    fetchSongs();
});
</script>

<style scoped></style>
