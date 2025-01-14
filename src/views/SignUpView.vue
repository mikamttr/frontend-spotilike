<template>
  <div class="signup-container">
    <form class="signup-form">
      <h2>S'inscrire</h2>

      <div class="form-group">
        <label for="username">Nom d'utilisateur</label>
        <input type="text" id="username" placeholder="Nom d'utilisateur" v-model="username" />
      </div>

      <div class="form-group">
        <label for="email">Adresse email</label>
        <input type="email" id="email" placeholder="Adresse email" v-model="email" />
      </div>

      <div class="form-group">
        <label for="password">Mot de passe</label>
        <input type="password" id="password" placeholder="Mot de passe" v-model="password" />
      </div>

      <div class="form-group">
        <label for="confirm-password">Confirmer mot de passe</label>
        <input type="password" id="confirm-password" placeholder="Confirmer mot de passe" v-model="confirmPassword" />
      </div>

      <button type="submit" class="signup-button">S'inscrire</button>

      <div class="additional-links">
        <p>
          Vous avez déjà un compte ?
          <router-link to="/login">Se connecter</router-link>
        </p>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";

const username = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");
</script>

<style scoped>
.signup-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;
}

.signup-form {
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

.signup-button {
  background-color: #1ed760;
  color: black;
  border: none;
  border-radius: 5rem;
  padding: 0.7rem;
  width: 100%;
  font-size: 1rem;
  cursor: pointer;
}

.signup-button:hover {
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