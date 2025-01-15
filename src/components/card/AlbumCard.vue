<template>
    <div class="album-card" @click="navigateToDetail(id)">
        <img :src="image" class="album-image" />
        <div class="album-info">
            <h3 class="album-title">{{ title }}</h3>
            <p class="album-artist">{{ artist }}</p>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

defineProps({
    title: {
        type: String,
        required: true,
    },
    artist: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    id: {
        type: [Number, String],
        required: true,
    },
});

const router = useRouter();

function navigateToDetail(id) {
    router.push({ name: 'albumDetail', params: { id } });
}
</script>

<style scoped>
.album-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 150px;
    margin: 1rem;
    cursor: pointer;
    transition: 300ms ease;
}

.album-card:hover {
    opacity: .6;
}

.album-image {
    width: 120px;
    height: 120px;
    border-radius: 8px;
    object-fit: cover;
}

.album-info {
    margin-top: 0.5rem;
}

.album-title {
    font-size: 1rem;
    font-weight: bold;
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 150px;
}

.album-artist {
    font-size: 0.8rem;
    color: #888;
    margin: 0;
}
</style>