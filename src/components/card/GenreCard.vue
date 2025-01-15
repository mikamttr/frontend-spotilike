<template>
    <div :style="cardStyle" class="genre-card">
        <h3>{{ genre.title }}</h3>
    </div>
</template>

<script>
export default {
    name: "GenreCard",
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
        colors() {
            return [
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

        },
        cardStyle() {
            const colorIndex = this.index % this.colors.length;
            const color = this.colors[colorIndex];
            return {
                backgroundColor: color,
                color: "white",
                padding: "20px",
                borderRadius: "8px",
                textAlign: "center",
                width: "200px",
                margin: "10px",
            };
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