<!-- Artist details page -->
<template>
    <div class="wrapper">
        <div v-if="artist">
            <div class="artist-page">
                <div class="artist-detail">
                    <ArtistCard v-if="artist" :key="artist.id" :id="artist.id" :name="artist.name"
                        :image="artist.avatar" />
                </div>
                <div class="artist-tracks">
                    <Tracklist :songs="songs" />
                </div>
            </div>
        </div>
        <div v-else>
            <p>Loading artist details...</p>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import ArtistCard from "@/components/card/ArtistCard.vue";
import Tracklist from '@/components/TrackList.vue';

const props = defineProps({
    id: {
        type: String,
        required: true,
    },
});

const artist = ref(null);
const songs = ref([]);

// Fetch artist details
const fetchArtistDetails = async () => {
    try {
        const response = await axios.get(`http://127.0.0.1:5049/api/artists/${props.id}`);
        artist.value = response.data.artist;
    } catch (error) {
        console.error("Error fetching artist details:", error);
    }
};

// Fetch artist's songs
const fetchSongs = async () => {
    try {
        const response = await axios.get(`http://127.0.0.1:5049/api/artists/${props.id}/songs`);
        songs.value = response.data.Songs;
    } catch (error) {
        console.error("Error fetching songs:", error);
    }
};

onMounted(() => {
    fetchArtistDetails();
    fetchSongs();
});
</script>

<style scoped>
.artist-page {
    color: #ffffff;
    background: #2b2b2b;
    border-radius: 7px;
    padding: 20px;
}

.artist-detail {
    display: flex;
    align-items: flex-start;
}

.artist-tracks {
    padding: 1rem;
}

.track-count {
    font-size: 14px;
    color: #9e9e9e;
    margin-bottom: 1rem;
}
</style>