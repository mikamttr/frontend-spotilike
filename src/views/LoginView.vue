<template>
  <div class="login-container">
    <form class="login-form">
      <h2>Se Connecter</h2>

      <div class="form-group">
        <label for="email">Adresse email ou nom d'utilisateur</label>
        <input type="text" id="email" placeholder="Adresse email ou nom d'utilisateur" v-model="email" />
      </div>

      <div class="form-group">
        <label for="password">Mot de passe</label>
        <input type="password" id="password" placeholder="Mot de passe" v-model="password" />
      </div>

      <button type="submit" class="login-button">Se Connecter</button>

      <div class="additional-links">
        <p>Vous n'avez pas de compte ?</p>
        <router-link to="/signup">S'inscrire à Spotilike</router-link>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";

const email = ref("");
const password = ref("");
</script>

<style scoped>
.login-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;
}

.login-form {
  background-color: #1e1e1e;
  padding: 2rem 3rem;
  border-radius: 8px;
  text-align: center;
  width: 400px;
}

h2 {
  margin-bottom: 1rem;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  margin-left: .5rem;
  text-align: left;
}

input {
  width: 100%;
  padding: 0.5rem 1rem;
  border: 1px solid #333;
  border-radius: 5rem;
  background-color: #2c2c2c;
  color: white;
  font-size: 0.9rem;
}

input::placeholder {
  color: #888;
}

.login-button {
  background-color: #1ed760;
  color: black;
  border: none;
  border-radius: 5rem;
  padding: 0.7rem;
  width: 100%;
  font-size: 1rem;
  cursor: pointer;
}

.login-button:hover {
  background-color: #1db954;
}

.additional-links {
  margin-top: 1rem;
  font-size: 0.9rem;
}

.additional-links a {
  color: #1ed760;
  text-decoration: none;
}

.additional-links a:hover {
  text-decoration: underline;
}
</style>
