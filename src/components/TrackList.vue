<template>
    <ul class="track-list">
        <li v-for="song in songs" :key="song.track_id" class="track-item">
            <h3 class="track-title">{{ song.track_title }}</h3>
            <div class="track-info">
                <span class="artists-list">{{ song.artists }}</span>
                <span class="track-duration">{{ formatDuration(song.duration) }}</span>
            </div>
        </li>
    </ul>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    songs: {
        type: Array,
        required: true,
    },
});

// Format track duration
const formatDuration = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds}`;
};
</script>

<style scoped>
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
    opacity: 0.6;
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
