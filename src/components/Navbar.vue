<template>
  <header>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a id="animateLogo" class="navbar-item" onload="swingOnLoad()" href="/">
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
          :class="active ? 'is-active' : ''"
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
        :class="active ? 'is-active' : ''"
      >
        <div class="navbar-start">
          <a
            v-for="presentation in presentations"
            :key="presentation.name"
            class="navbar-item hoverEffect"
            :href="presentation.url"
            presentation
          >
            {{ presentation.name }}
          </a>
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link" href="#navbarHeader">Plus</a>

            <div class="navbar-dropdown">
              <router-link
                v-if="userIsLogged"
                to="/formation"
                class="navbar-item hoverEffect"
                >Programme de formation</router-link
              >
              <router-link to="/certification" class="navbar-item hoverEffect"
                >Certifications</router-link
              >
              <router-link to="/qualite" class="navbar-item hoverEffect"
                >Qualité</router-link
              >

              <!-- Liens de téléchargements conditionnels pour "cartographie tarifs" et "tarifs" -->
              <a
                v-if="userIsLogged"
                class="navbar-item hoverEffect"
                href="tarifs/cartographie_tarifs.pdf"
                download
              >
                Cartographie tarifs
              </a>
              <a
                v-if="userIsLogged"
                class="navbar-item hoverEffect"
                href="tarifs/tarifs_REG_2024.pdf"
                download
              >
                Tarifs
              </a>

              <!-- Autres liens de téléchargement -->
              <a
                v-for="download in filteredDownloads"
                :key="download.name"
                class="navbar-item hoverEffect"
                :href="download.url"
                download
              >
                {{ download.name }}
              </a>

              <a
                class="navbar-item hoverEffect"
                href="https://www.ouformer.com/organisme-de-formation/ML-Industrie"
                target="_blank"
                >Calendrier Inter</a
              >
              <hr class="navbar-divider" />
              <a class="navbar-item" href="#footer">En savoir plus</a>
            </div>
          </div>
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
              <a class="navbar-item navbar-item_contact" href="/contact">
                <i class="fas fa-envelope"></i><span>contact</span>
              </a>
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

        <div v-if="showModal" class="modal">
          <div class="modal-background"></div>
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
import store from "../modules/store.json";
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
const checkUserStatus = () => {
  const token = sessionStorage.getItem("user-token");
  if (token) {
    axios
      .get(`${store.api_localhost}/user/${userId.value}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        user.value = response.data;
      })
      .catch(() => {
        sessionStorage.removeItem("user-token");
      });
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
const confirmDelete = () => {
  const token = sessionStorage.getItem("user-token");
  if (token) {
    axios
      .delete(`${store.api_localhost}/user/${userId.value}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log(response.data);
        logoutUser();
      })
      .catch((error) => {
        console.log(error);
      });
  }
  showModal.value = false;
};

// Déconnexion de l'utilisateur
const logoutUser = () => {
  sessionStorage.removeItem("user-token");
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

<style scoped>
/* Style par défaut pour les petits écrans */
.user-controls {
  display: flex;
  flex-direction: column;
}

/* Media query pour les écrans de plus de 768px */
@media screen and (min-width: 768px) {
  .user-controls {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start; /* Changez à flex-start pour aligner à gauche */
  }

  .user-controls > * {
    margin-right: 20px; /* Espacement entre les éléments */
  }

  .button-group {
    display: flex;
    gap: 10px; /* Contrôle l'espacement entre les boutons */
    margin-left: 20px;
  }
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5); /* Griser l'arrière-plan */
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
}
.modal-content p {
  margin-bottom: 20px;
}
.modal-content button {
  margin: 0 10px;
}
</style>
