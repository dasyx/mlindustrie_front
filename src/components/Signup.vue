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
          />
          <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
          </span>
        </div>
      </div>

      <!-- <div class="field">
      <label for="phone" class="label">Téléphone</label>
      <div class="control has-icons-left has-icons-right">
        <input
          id="phone"
          v-model="user.phone"
          class="input"
          type="text"
          name="phone"
          placeholder="Veuillez saisir votre numéro de téléph"
        />
        <span class="icon is-small is-left">
          <i class="fas fa-phone"></i>
        </span>
      </div>
    </div> -->

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
    <!-- Add the success message -->
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
            <!-- Font Awesome arrow icon -->
          </span>
          <span>Retour</span>
        </button>
      </div>
    </div>
    <!-- End of success message -->
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
// Add a ref for the success message
const successMessage = ref("");

const registerUser = async () => {
  loader.value = true;

  try {
    const response = await axios.post(
      store.api_host + "/user/signup/",
      {
        name: user.value.name,
        email: user.value.email,
        password: user.value.password,
      },
      {}
    );

    if (response.status === 200 || response.status === 201) {
      // Set the success message to inform the user
      successMessage.value =
        "Inscription réussie ! Veuillez consulter vos mails pour vous connecter, vérifiez également vos spams.";

      console.log(response);
    } else {
      console.log("Erreur d'envoi de formulaire");
    }
  } catch (error) {
    console.log(error);
  } finally {
    loader.value = false;
  }
};
// Function to navigate back to the home page
const goHome = () => {
  router.push("/");
};
</script>

<style scoped>
.notification {
  display: flex;
}
</style>
