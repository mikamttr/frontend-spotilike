<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavLogo from './components/NavLogo.vue';
</script>

<template>
  <div class="navbar">
    <NavLogo />

    <form class="search-form" action="">
      <input class="search-input" type="search" name="search" id="search" placeholder="Search for artists or albums">
    </form>

    <nav>
      <RouterLink to="/login">Login</RouterLink>
      <RouterLink to="/signup">Sign Up</RouterLink>
    </nav>
  </div>

  <RouterView />
</template>

<style scoped>
.navbar {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
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
</style>
