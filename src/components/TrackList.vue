<!-- Tracklist component -->
<template>
    <ul class="track-list">
        <li v-for="song in songs" :key="song.track_id" class="track-item">
            <label class="playbutton">
                <input checked="checked" type="checkbox">
                <svg viewBox="0 0 384 512" height="1em" xmlns="http://www.w3.org/2000/svg" class="play">
                    <path
                        d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z">
                    </path>
                </svg>
                <svg viewBox="0 0 320 512" height="1em" xmlns="http://www.w3.org/2000/svg" class="pause">
                    <path
                        d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z">
                    </path>
                </svg></label>
            <div style="width: 100%;">
                <h3 class="track-title">{{ song.track_title }}</h3>
                <div class="track-info">
                    <span class="artists-list">{{ song.artists }}</span>
                    <span class="track-duration">{{ formatDuration(song.duration) }}</span>
                </div>
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
    display: flex;
    align-items: center;
    gap: 1.5rem;
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

.playbutton {
    --color: #a5a5b0;
    --size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    cursor: pointer;
    font-size: var(--size);
    user-select: none;
    fill: var(--color);
    margin-left: 1rem
}

.playbutton .play {
    position: absolute;
    display: none;
    animation: keyframes-fill .5s;
}

.playbutton .pause {
    position: absolute;
    animation: keyframes-fill .5s;
}

.playbutton input:checked~.play {
    display: block;
}

.playbutton input:checked~.pause {
    display: none;
}

.playbutton input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
}

@keyframes keyframes-fill {
    0% {
        transform: rotate(-180deg) scale(0);
        opacity: 0;
    }

    50% {
        transform: rotate(-10deg) scale(1.2);
    }
}
</style>
