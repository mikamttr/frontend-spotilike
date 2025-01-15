<template>
    <div class="wrapper">
        <h1>Détails de l'artiste</h1>
        <p>Id : {{ id }}</p>
        <br>
        <p>image</p>
        <p>Nom d’artiste</p>
        <p>Biographie</p>
    </div>
</template>

<script setup>
defineProps({
    id: {
        type: String,
        required: true,
    },
});
</script>