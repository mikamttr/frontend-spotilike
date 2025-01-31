<!-- Artist card component -->
<template>
    <div class="artist-card" @click="navigateToDetail(id)">
        <img :src="image" class="artist-image" />
        <div class="artist-info">
            <h3 class="artist-name">{{ name }}</h3>
            <p class="artist-role">Artiste</p>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

defineProps({
    name: {
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
    router.push({ name: 'artistDetail', params: { id } });
}
</script>

<style scoped>
.artist-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: 1rem;
    cursor: pointer;
    transition: 300ms ease;
}

.artist-card:hover {
    opacity: .6;
}

.artist-image {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
}

.artist-info {
    margin-top: 0.5rem;
}

.artist-name {
    font-size: 1rem;
    font-weight: bold;
    margin: 0;
}

.artist-role {
    font-size: 0.8rem;
    color: #888;
    margin: 0;
}
</style>