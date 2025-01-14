<template>
    <router-link to="/" class="nav-logo">
        <img alt="logo" class="logo" src="@/assets/spotilike-logo.png" width="40" height="40" />
        <h1>Spotilike</h1>
    </router-link>
</template>

<style scoped>
.nav-logo {
    display: flex;
    cursor: pointer;
    color: #eee;
}

.logo {
    display: block;
    margin: 0 1rem 0 0;
}
</style>