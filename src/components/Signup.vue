<template>
  <Navbar />
  <div class="form_container">
    <form v-if="!successMessage" @submit.prevent="registerUser">
      <div class="form_header">
        <p>Formulaire d'inscription</p>
        <br />
        <p>aux</p>
        <br />
        <p>Formations ML Industrie</p>
      </div>
      <div class="field">
        <label for="name" class="label">Nom</label>
        <div class="control has-icons-left has-icons-right">
          <input
            v-model="user.name"
            class="input"
            type="text"
            placeholder="Veuillez saisir votre nom d'utilisateur"
            required
          />
          <span class="icon is-small is-left">
            <i class="fas fa-user"></i>
          </span>
        </div>
      </div>

      <div class="field">
        <label for="email" class="label">Email</label>
        <div class="control has-icons-left has-icons-right">
          <input
            v-model="user.email"
            class="input"
            type="email"
            placeholder="Veuillez saisir une adresse email valide"
            required
          />
          <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
          </span>
        </div>
      </div>

      <div class="field">
        <label for="password" class="label">Mot de passe</label>
        <div class="control has-icons-left has-icons-right">
          <input
            id="password"
            v-model="user.password"
            class="input"
            type="password"
            name="password"
            placeholder="Veuillez créer votre mot de passe (8 caractères minimum)"
            minlength="8"
            required
          />
          <span class="icon is-small is-left">
            <i class="fas fa-lock"></i>
          </span>
        </div>
      </div>

      <div class="field is-grouped">
        <div class="control">
          <button class="button is-link" type="submit">
            <span
              v-if="loader"
              class="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
            Envoyer
          </button>
        </div>
        <div class="control">
          <button class="button is-link is-light" @click="goHome">
            Annuler
          </button>
        </div>
      </div>
    </form>
    <!-- Success Message -->
    <div v-if="successMessage" class="notification is-success">
      {{ successMessage }}
      <div class="control">
        <button
          class="button is-link is-light"
          style="margin-top: 1rem"
          @click="goHome"
        >
          <span class="icon">
            <i class="fas fa-arrow-left"></i>
          </span>
          <span>Retour</span>
        </button>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import store from "../modules/store.json";
import { useRouter } from "vue-router";
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";

const router = useRouter();
const user = ref({
  name: "",
  email: "",
  password: "",
});
const loader = ref(false);
const successMessage = ref("");

const validateInput = () => {
  if (!user.value.name.trim()) {
    alert("Le champ 'Nom' est requis.");
    return false;
  }
  if (!user.value.email.match(/^\S+@\S+\.\S+$/)) {
    alert("Veuillez entrer une adresse email valide.");
    return false;
  }
  if (user.value.password.length < 8) {
    alert("Le mot de passe doit contenir au moins 8 caractères.");
    return false;
  }
  return true;
};

const registerUser = async () => {
  if (!validateInput()) return;

  loader.value = true;

  try {
    const response = await axios.post(store.api_host + "/user/signup/", {
      name: user.value.name,
      email: user.value.email,
      password: user.value.password,
    });

    if (response.status === 201) {
      // Récupération du token et des informations utilisateur
      const { token, user: userData } = response.data;

      // Stocker le token et les données utilisateur dans sessionStorage
      sessionStorage.setItem("auth-token", token);
      sessionStorage.setItem("user-name", userData.name);
      sessionStorage.setItem("user-email", userData.email);

      successMessage.value = "Inscription réussie et connexion automatique !";

      // Redirection vers le tableau de bord
      setTimeout(() => {
        router.push("/dashboard");
      }, 2000);
    } else {
      console.log("Erreur d'envoi de formulaire");
    }
  } catch (error) {
    console.error(error);
    if (error.response?.status === 400) {
      alert("Email déjà utilisé.");
    } else {
      alert("Une erreur est survenue, veuillez réessayer.");
    }
  } finally {
    loader.value = false;
  }
};

const goHome = () => {
  router.push("/");
};
</script>

<style scoped>
.notification {
  display: flex;
}
</style>
