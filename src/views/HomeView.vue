<template>
  <main class="wrapper">
    <h1>Parcourir</h1>

    <h2><router-link to="/artists">Artistes</router-link></h2>
    <h2><router-link to="/albums">Albums</router-link></h2>
    <h2><router-link to="/genres">Genres</router-link></h2>
    <h2 v-if="isAdminUser"><router-link to="/admin">Admin</router-link></h2>
  </main>
</template>

<script setup>
import { computed } from "vue";
import { isAdmin } from "@/utils/jwt";

const isAdminUser = computed(() => {
  const token = localStorage.getItem("access_token");
  return token ? isAdmin(token) : false;
});
</script>
