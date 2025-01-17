<template>
    <header class="navbar">
        <router-link to="/" class="nav-logo">
            <img alt="logo" class="logo" src="@/assets/spotilike-logo.png" width="40" height="40" />
            <h1>Spotilike</h1>
        </router-link>

        <div class="custom-container">
            <RouterLink to="/">
                <button class="home-button" aria-label="Home">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-house" viewBox="0 0 16 16">
                        <path
                            d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
                    </svg>
                </button>
            </RouterLink>

            <form class="search-form">
                <input class="search-input" type="search" name="search" id="search"
                    placeholder="Search for artists or albums" />
            </form>
        </div>

        <nav class="nav-links" v-if="!isLoggedIn">
            <RouterLink to="/login">Login</RouterLink>
            <RouterLink to="/signup">Sign Up</RouterLink>
        </nav>

        <div class="user-dropdown" v-else>
            <UserDropdown />
        </div>
    </header>
</template>

<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import UserDropdown from "./UserDropdown.vue";

const isLoggedIn = ref(false);

// Watch for token changes and automatically update login state
const updateLoginState = () => {
    const token = localStorage.getItem("access_token");
    isLoggedIn.value = !!token;
};

// Initial check
updateLoginState();

// Listen for storage changes (cross-tab functionality)
window.addEventListener("storage", updateLoginState);
</script>

<style scoped>
.navbar {
    display: grid;
    grid-template-columns: 30% 40% 30%;
    position: relative;
}

.user-dropdown {
    position: absolute;
    top: .5rem;
    right: 0;
}

.nav-logo {
    display: flex;
    cursor: pointer;
    color: #eee;
    max-width: fit-content;
}

.nav-links {
    text-align: right;
}

.logo {
    display: block;
    margin: 0 1rem 0 0;
}

.search-form {
    max-width: 375px;
    width: 100%;
}

.search-input {
    width: 100%;
    height: 2.5rem;
    margin-inline: 1rem;
    border-radius: 50px;
    border: none;
    padding: 0 1rem;
}

.search-input:focus-visible {
    outline: 3px solid hsl(160, 100%, 37.1%);
}

.custom-container {
    display: flex;
    align-items: center;
}

nav {
    font-size: 12px;
    text-align: center;
    font-size: 1rem;
    padding: 1rem 0;
}

nav a.router-link-exact-active {
    color: var(--color-text);
}

nav a.router-link-exact-active:hover {
    background-color: transparent;
}

nav a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
    border: 0;
}

.home-button {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    border: none;
    cursor: pointer;
    transition: 300ms ease;
}

.home-button:hover {
    opacity: .8;
}
</style>