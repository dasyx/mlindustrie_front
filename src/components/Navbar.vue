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
import { useStorage } from "@vueuse/core";

const userIsLogged = ref(false);
const user = ref("");
const societe = ref("ML INDUSTRIE");
const titre = ref("Des formations fiables et efficaces");
const active = ref(false);
const windowDimensions = ref({ width: 0, height: 0 });
const presentations = ref([{ name: "presentation", url: "/ml_plaquette.pdf" }]);

// Exclusion des téléchargements "cartographie tarifs" et "tarifs"
const downloads = ref([{ name: "cnil", url: "/cnil.pdf" }]);

const filteredDownloads = computed(() => downloads.value);
const store1 = useStore();
const userToken = useStorage("user-token", null, sessionStorage);
const userId = useStorage("user-id", null, sessionStorage);
const showModal = ref(false);

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

const deleteAccount = () => {
  showModal.value = true;
};

const cancelDelete = () => {
  showModal.value = false;
};

const confirmDelete = () => {
  const token = sessionStorage.getItem("user-token");
  if (token) {
    axios
      .delete(`${store.api_localhost}/user/${userId.value}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        logoutUser();
      })
      .catch((error) => {
        console.log(error);
      });
  }
  showModal.value = false;
};

const logoutUser = () => {
  sessionStorage.removeItem("user-token");
  userIsLogged.value = false;
  location.reload();
};

const handleResize = () => {
  if (window) {
    windowDimensions.value.width = window.innerWidth;
    windowDimensions.value.height = window.innerHeight;
  }
};

const swingOnLoad = () => {
  const element = document.getElementById("animateLogo");
  element.classList.add("swing");
};

const showMobileMenu = () => {
  active.value = !active.value;
};

onMounted(() => {
  checkUserStatus();
  window.addEventListener("resize", handleResize);
  handleResize();
  swingOnLoad();
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});

watchEffect(() => {
  userIsLogged.value = !!userToken.value;
});
</script>
