<template>
    <div class="wrapper">
        <h1>{{ title }}</h1>
        <p>{{ description }}</p>
    </div>
</template>

<script>
export default {
    name: 'GenreDetail',
    props: {
        id: {
            type: String,
            required: true,
        },
    },
    computed: {
        // Access query parameters passed from GenreCard
        title() {
            return this.$route.query.title || 'Unknown Genre';
        },
        description() {
            return this.$route.query.description || 'No description provided.';
        },
    },
};
</script>