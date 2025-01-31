<template>
  <div class="login-container">
    <form class="login-form" @submit.prevent="handleLogin">
      <h2>Se Connecter</h2>

      <div class="form-group">
        <label for="email">Adresse email</label>
        <input type="text" id="email" placeholder="Adresse email" v-model="email" />
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
import axios from "axios";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const router = useRouter();

const handleLogin = async () => {
  try {
    const response = await axios.post("http://127.0.0.1:5049/api/users/login", {
      email: email.value,
      password: password.value,
    });
    const { access_token } = response.data;

    // Save token in local storage
    localStorage.setItem("access_token", access_token);

    // Redirect to home page and refresh the window
    window.location.href = "/";
    console.log(access_token);
  } catch (error) {
    console.error("Login failed:", error);
    alert("Invalid email or password");
  }
};
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
