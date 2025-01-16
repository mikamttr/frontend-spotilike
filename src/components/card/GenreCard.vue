<template>
    <div :style="cardStyle" class="genre-card" @click="goToGenreDetail">
        <h3>{{ genre.title }}</h3>
    </div>
</template>

<script>
export default {
    name: 'GenreCard',
    props: {
        genre: {
            type: Object,
            required: true,
        },
        index: {
            type: Number,
            required: true,
        },
    },
    computed: {
        cardStyle() {
            const colors = [
                "#1E2A38", // Dark Blue
                "#2D3E50", // Charcoal Grey
                "#3C6E71", // Slate Green
                "#B03A2E", // Firebrick Red
                "#8E44AD", // Purple
                "#2980B9", // Strong Blue
                "#16A085", // Teal
                "#D35400", // Orange
                "#27AE60", // Green
                "#F39C12", // Yellow-Orange
            ];
            return {
                backgroundColor: colors[this.index % colors.length],
                color: "white",
                padding: "20px",
                borderRadius: "8px",
                textAlign: "center",
                width: "200px",
                margin: "10px",
                cursor: "pointer",
            };
        },
    },
    methods: {
        goToGenreDetail() {
            this.$router.push({
                name: 'genreDetail',
                params: { id: this.genre.id }, // Pass ID as route param
                query: { title: this.genre.title, description: this.genre.description }, // Additional data as query params
            });
        },
    },
};
</script>

<style scoped>
.genre-card {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    transition: 300ms ease;
}

.genre-card:hover {
    opacity: .6;
}
</style>