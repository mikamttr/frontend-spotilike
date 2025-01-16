<template>
    <div class="wrapper">
        <div v-if="album">
            <div class="album-detail">
                <div class="album-header">
                    <img class="album-cover" :src="album.image" alt="Album Cover" />
                    <div class="album-info">
                        <h1>{{ album.title }}</h1>
                        <p class="artist">{{ album.artist }}</p>
                        <p class="release-date">{{ formatReleaseDate(album.release_date) }}</p>
                        <p class="track-count">{{ songs.length }} tracks</p>
                    </div>
                </div>
                <Tracklist :songs="songs" />
            </div>
        </div>
        <div v-else>
            <p>Loading album details...</p>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import Tracklist from '@/components/TrackList.vue';

const props = defineProps({
    id: {
        type: String,
        required: true,
    },
});

const album = ref(null);
const songs = ref([]);

// Fetch album details
const fetchAlbumDetails = async () => {
    try {
        const response = await axios.get(`http://127.0.0.1:5049/api/albums/${props.id}`);
        album.value = response.data.Album;
    } catch (error) {
        console.error("Error fetching album details:", error);
    }
};

// Fetch album songs
const fetchSongs = async () => {
    try {
        const response = await axios.get(`http://127.0.0.1:5049/api/albums/${props.id}/songs`);
        songs.value = response.data.Songs;
    } catch (error) {
        console.error("Error fetching songs:", error);
    }
};

// Format release date
const formatReleaseDate = (dateString) => {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
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
</style>
