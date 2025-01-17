<!-- <template>
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
</script> -->

<template>
  <div class="signup-container">
    <form class="signup-form" @submit.prevent="submitForm">
      <h2>S'inscrire</h2>

      <div class="form-group">
        <label for="username">Nom d'utilisateur</label>
        <input type="text" id="username" placeholder="Nom d'utilisateur" v-model="username" required />
      </div>

      <div class="form-group">
        <label for="email">Adresse email</label>
        <input type="email" id="email" placeholder="Adresse email" v-model="email" required />
      </div>

      <div class="form-group">
        <label for="password">Mot de passe</label>
        <input type="password" id="password" placeholder="Mot de passe" v-model="password" required />
      </div>

      <div class="form-group">
        <label for="confirm-password">Confirmer mot de passe</label>
        <input type="password" id="confirm-password" placeholder="Confirmer mot de passe" v-model="confirmPassword"
          required />
      </div>

      <button type="submit" class="signup-button" :disabled="loading">
        S'inscrire
      </button>

      <div v-if="responseMessage" class="response-message" :class="{ error: responseError }">
        {{ responseMessage }}
      </div>

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
import { ref, computed } from "vue";

const username = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const responseMessage = ref("");
const responseError = ref(false);
const loading = ref(false);

const passwordError = computed(() => password.value !== confirmPassword.value && confirmPassword.value !== "");

// Handle form submission
const submitForm = async () => {
  // Check if passwords match before making the API call
  if (passwordError.value) {
    responseMessage.value = "Les mots de passe ne correspondent pas.";
    responseError.value = true;
    return;
  }

  loading.value = true;
  responseMessage.value = "";

  try {
    const response = await fetch("http://127.0.0.1:5049/api/users/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username.value,
        email: email.value,
        password: password.value,
      }),
    });

    const data = await response.json();

    // Handle response
    if (!response.ok) {
      if (data.detail) {
        if (data.detail.includes("already exists")) {
          responseMessage.value =
            "L'email ou le nom d'utilisateur existe déjà.";
        } else {
          responseMessage.value = data.detail;
        }
      } else {
        responseMessage.value = "Une erreur est survenue. Veuillez réessayer.";
      }
      responseError.value = true;
    } else {
      responseMessage.value = "Utilisateur créé avec succès !";
      responseError.value = false;

      // Clear form fields on successful signup
      username.value = "";
      email.value = "";
      password.value = "";
      confirmPassword.value = "";
    }
  } catch (error) {
    responseMessage.value = "Erreur de réseau. Veuillez réessayer.";
    responseError.value = true;
  } finally {
    loading.value = false;
  }
};
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

.error-message {
  color: #ff4949;
  font-size: 0.9em;
  text-align: start;
  padding: .25rem .5rem;
}

.response-message {
  margin-top: 15px;
  font-size: 1em;
  color: #169e16;
}

.response-message.error {
  color: #ff4949;
}

.signup-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>