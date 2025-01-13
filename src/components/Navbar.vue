<template>
  <header>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a id="animateLogo" class="navbar-item" @load="swingOnLoad" href="/">
          <img
            src="../../public/logos/logo_mlindustrie.webp"
            alt="logo_mlindustrie"
          />
          <img
            src="../../public/img/accompagne.webp"
            alt="logo_mlindustrie_accompagne"
          />
          <hr class="displayHr" />
          <p id="lowResH1"></p>
        </a>
        <a
          id="burger"
          role="button"
          class="navbar-burger"
          :class="{ 'is-active': active }"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarHeader"
          @click="showMobileMenu"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navbarHeader"
        class="navbar-menu"
        :class="{ 'is-active': active }"
      >
        <div class="navbar-start">
          <a
            v-for="presentation in presentations"
            :key="presentation.name"
            class="navbar-item hoverEffect"
            :href="presentation.url"
          >
            {{ presentation.name }}
          </a>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div v-if="!userIsLogged" class="buttons">
              <a id="btn-inscription" class="button is-primary" href="/signup">
                <strong>S'inscrire</strong>
              </a>
              <a class="button is-light" href="/login">Se connecter</a>
            </div>
            <div v-else class="user-controls">
              <span v-if="user">Bonjour {{ user.name }}</span>
              <div class="button-group">
                <button class="button is-light" @click="logoutUser">
                  Se déconnecter
                </button>
                <button class="button is-danger" @click="deleteAccount">
                  Supprimer le compte
                </button>
              </div>
            </div>
          </div>
        </div>

        <div v-if="showModal" class="modal is-active">
          <div class="modal-background" @click="cancelDelete"></div>
          <div class="modal-content">
            <p>
              Vous êtes sur le point de supprimer votre compte utilisateur.
              Cette action est irréversible.
            </p>
            <button class="button is-danger" @click="confirmDelete">
              Confirmer
            </button>
            <button class="button" @click="cancelDelete">Annuler</button>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed, watchEffect } from "vue";
import { useStore } from "vuex";
import axios from "axios";
import { useStorage } from "@vueuse/core";

// Variables et références
const userIsLogged = ref(false);
const user = ref("");
const active = ref(false);
const presentations = ref([{ name: "Présentation", url: "/ml_plaquette.pdf" }]);
const store = useStore();
const userToken = useStorage("user-token", null, sessionStorage);
const userId = useStorage("user-id", null, sessionStorage);
const showModal = ref(false);

// Vérifier le statut de l'utilisateur
const checkUserStatus = async () => {
  const token = sessionStorage.getItem("user-token");
  if (token) {
    try {
      const response = await axios.get(
        `${store.api_host}/user/${userId.value}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      user.value = response.data;
      userIsLogged.value = true;
    } catch (error) {
      console.error(
        "Erreur lors de la vérification du statut utilisateur :",
        error
      );
      sessionStorage.removeItem("user-token");
    }
  }
};

// Afficher la confirmation de suppression
const deleteAccount = () => {
  console.log("deleteAccount appelé"); // Vérification du clic
  showModal.value = true;
  console.log("showModal:", showModal.value); // Vérification
};

// Annuler la suppression
const cancelDelete = () => {
  showModal.value = false;
};

// Confirmer la suppression
const confirmDelete = async () => {
  console.log("confirmDelete appelé"); // Vérification
  const token = sessionStorage.getItem("user-token");
  if (token) {
    try {
      await axios.delete(`${apiBaseUrl}/user/${userId.value}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("Votre compte a été supprimé avec succès.");
      logoutUser();
    } catch (error) {
      console.error("Erreur lors de la suppression du compte :", error);
      alert("Une erreur est survenue lors de la suppression du compte.");
    }
  }
  showModal.value = false;
};

// Déconnexion de l'utilisateur
const logoutUser = () => {
  sessionStorage.removeItem("user-token");
  sessionStorage.removeItem("user-id");
  userIsLogged.value = false;
  location.reload();
};

// Gestion de la taille de l'écran
const handleResize = () => {
  active.value = false;
};

// Afficher ou cacher le menu mobile
const showMobileMenu = () => {
  active.value = !active.value;
};

// Lifecycle hooks
onMounted(() => {
  console.log("Navbar chargé"); // Vérification
  checkUserStatus();
  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});

watchEffect(() => {
  userIsLogged.value = !!userToken.value;
});
</script>
