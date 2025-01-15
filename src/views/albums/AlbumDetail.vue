<template>
    <div class="wrapper">
        <h1>Détails de l'album</h1>
        <div v-if="album">
            <div class="album-detail">
                <div class="album-header">
                    <img class="album-cover" :src="album.image" alt="Image de l'album" />
                    <div class="album-info">
                        <h1>{{ album.title }}</h1>
                        <p class="artist">{{ album.artist }}</p>
                        <p class="release-date">{{ formatReleaseDate(album.release_date) }}</p>
                        <p class="track-count">{{ songs.length }} titres</p>
                    </div>
                </div>
                <ul class="track-list">
                    <li v-for="song in songs" :key="song.track_id" class="track-item">
                        <h3 class="track-title">{{ song.track_title }}</h3>
                        <div class="track-info">
                            <span class="artists-list">{{ song.artists }}</span>
                            <span class="track-duration">{{ formatDuration(song.duration) }}</span>
                        </div>
                    </li>
                </ul>
            </div>
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

<style scoped>
.album-detail {
    color: #ffffff;
    background: #2b2b2b;
    padding: 20px;
    border-radius: 7px;
}

.album-header {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}

.album-cover {
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 10px;
    margin-right: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
}

.album-info {
    flex-grow: 1;
}

.album-info h1 {
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 10px;
}

.artist {
    font-size: 18px;
    color: #9e9e9e;
    margin-bottom: 5px;
}

.release-date,
.track-count {
    font-size: 14px;
    color: #9e9e9e;
}

.track-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.track-item {
    padding: 10px 0;
    border-bottom: 1px solid #444;
    cursor: pointer;
    transition: 300ms ease;
}

.track-item:hover {
    opacity: .6;
}

.track-title {
    font-size: 16px;
}

.track-info {
    display: flex;
    justify-content: space-between;
    padding-right: 15px;
    color: #9e9e9e;
}

.track-duration {
    font-size: 14px;
}
</style>
