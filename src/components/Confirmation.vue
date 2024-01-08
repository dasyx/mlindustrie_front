<template>
  <div class="confirmation-container">
    <img src="/logos/logo_mlindustrie.webp" alt="logo" />
    <h1>Confirmation de l'inscription</h1>
    <p>{{ message }}</p>
    <button class="button is-link is-light" @click="goHome">
      Se connecter
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRoute, useRouter } from "vue-router";

// Déclaration d'une référence réactive pour le message
const message = ref("Confirmation en cours...");

const route = useRoute();
const router = useRouter(); // Utilisation du hook useRoute pour accéder aux paramètres de route

onMounted(async () => {
  // Récupération du token de confirmation depuis l'URL
  const token = route.params.token;

  try {
    // Requête au serveur pour valider le token
    const response = await axios.get(
      `http://localhost:3000/user/confirm/${token}`
    );
    // Mise à jour du message avec la réponse du serveur
    message.value = response.data.message;
  } catch (error) {
    // Gestion des erreurs (token invalide, problème serveur, etc.)
    message.value =
      error.response?.data?.message ||
      "Une erreur est survenue lors de la confirmation.";
  }
});
// Function to navigate back to the home page
const goHome = () => {
  router.push("/login");
};
</script>

<style>
.confirmation-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}
.confirmation-container img {
  width: 100px;
  margin-bottom: 20px;
}
.confirmation-container h1 {
  font-size: 2rem;
  margin-bottom: 20px;
}
.confirmation-container p {
  font-size: 1.2rem;
  margin-bottom: 20px;
}
</style>
