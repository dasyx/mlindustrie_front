<template>
  <Navbar />
  <div class="form_container">
    <form @submit.prevent="registerUser">
      <div class="form_header">
        <p>Formulaire de connexion</p>
        <br />
        <p>aux</p>
        <br />
        <p>Formations ML Industrie</p>
      </div>

      <div class="field">
        <label for="email" class="label">Email</label>
        <div class="control has-icons-left has-icons-right">
          <input
            v-model="user.email"
            class="input"
            type="email"
            placeholder="Veuillez saisir une adresse email valide"
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
            placeholder="Veuillez créer votre mot de passe"
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
  </div>
  <Footer />
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import store from "../modules/store.json";
import { useRouter } from "vue-router";
import { useStorage } from "@vueuse/core"; // Assurez-vous que @vueuse/core est installé
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";

// Déclarations des références et constantes
const router = useRouter();
const user = ref({
  email: "",
  password: "",
});
const loader = ref(false);

// Stockage des données utilisateur
const userToken = useStorage("user-token", null, sessionStorage);
const userId = useStorage("user-id", null, sessionStorage);
const userName = useStorage("user-name", null, sessionStorage); // Pour stocker le nom de l'utilisateur

// Fonction pour gérer la connexion
const registerUser = async () => {
  loader.value = true;

  try {
    // Envoi des informations de connexion
    const response = await axios.post(store.api_host + "/user/login/", {
      email: user.value.email,
      password: user.value.password,
    });

    if (response.status === 200 || response.status === 201) {
      // Stocker les données utilisateur en cas de succès
      userToken.value = response.data.token || ""; // Stocker le token
      userId.value = response.data.id || ""; // Stocker l'ID
      userName.value = response.data.name || ""; // Stocker le nom de l'utilisateur

      console.log("Connexion réussie !");
      console.log("Token :", userToken.value);
      console.log("Nom de l'utilisateur :", userName.value);

      // Rediriger vers la page d'accueil ou une autre route
      router.push({ name: "Home" });
    } else {
      console.error("Erreur de connexion : Réponse inattendue");
    }
  } catch (error) {
    console.error("Erreur de connexion :", error);
  } finally {
    loader.value = false;
  }
};

// Fonction pour revenir à la page d'accueil
const goHome = () => {
  router.push("/");
};
</script>

<style scoped>
.notification {
  display: flex;
}
</style>
