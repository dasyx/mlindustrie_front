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
import { useStorage } from "@vueuse/core"; // s'assurer d'avoir @vueuse/core installé
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";

const router = useRouter();
const user = ref({
  email: "",
  password: "",
});
const loader = ref(false);

// Remplacer cela par vos clés de stockage réelles et structure de données
const userToken = useStorage("user-token", null, sessionStorage);
const userId = useStorage("user-id", null, sessionStorage);

const registerUser = async () => {
  loader.value = true;

  try {
    const response = await axios.post(store.api_host + "/user/login", {
      email: user.value.email,
      password: user.value.password,
    });

    if (response.status === 200 || response.status === 201) {
      console.log("Storing User Data:", response.data); // Ensure data is present

      userToken.value = response.data.token || ""; // Ensure fallback
      userId.value = response.data.id || ""; // Ensure fallback

      console.log("Stored Token:", userToken.value); // Verify storage
      console.log("Stored User ID:", userId.value); // Verify storage

      router.push({ name: "Login" });
    } else {
      console.log("Erreur d'envoi de formulaire");
    }
  } catch (error) {
    console.log(error);
  } finally {
    loader.value = false;
  }
};

const goHome = () => {
  router.push("/");
};
</script>
