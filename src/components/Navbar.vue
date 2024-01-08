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
          <!-- <a class="navbar-item hoverEffect" href="/"> Accueil </a> -->
          <router-link to="/certification" class="navbar-item hoverEffect">
            Certifications
          </router-link>

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link" href="#navbarHeader"> Plus </a>

            <div class="navbar-dropdown">
              <router-link
                v-if="userIsLogged"
                to="/formation"
                class="navbar-item hoverEffect"
              >
                Programme de formation
              </router-link>
              <router-link to="/qualite" class="navbar-item hoverEffect">
                Qualité
              </router-link>
              <!--  <a
                class="navbar-item hoverEffect"
                :href="cataLink"
                aria-label="Télécharger catalogue"
                download="fichier"
                >{{ cata }} En construction...
              </a> -->
              <a
                v-for="download in downloads"
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
              >
                Calendrier Inter</a
              >
              <hr class="navbar-divider" />
              <a class="navbar-item" href="#footer"> En savoir plus</a>
            </div>
          </div>
        </div>
        <!-- Affichage du titre principal de la page-->
        <div class="navbar-item navbar-item_title hoverEffect">
          <p v-if="windowDimensions.width >= 767">
            {{ societe }}
          </p>
          <p v-if="windowDimensions.width >= 767">
            {{ titre }}
          </p>
        </div>
        <!-- Fin -->
        <div class="navbar-end">
          <div class="navbar-item">
            <div v-if="!userIsLogged" class="buttons">
              <a id="btn-inscription" class="button is-primary" href="/signup">
                <strong>S'inscrire</strong>
              </a>
              <a class="button is-light" href="/login"> Se connecter </a>
            </div>
            <button v-else class="button is-light" @click="logoutUser">
              Se déconnecter
            </button>
            <span v-if="user">Bonjour {{ user.name }}</span>

            <a class="navbar-item navbar-item_contact" href="/contact">
              <i class="fas fa-envelope"></i><span>contact</span>
            </a>
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

const userIsLogged = ref(false);
const user = ref("");
const isActive = ref("");
const societe = ref("ML INDUSTRIE");
const titre = ref("Des formations fiables et efficaces");
const active = ref(false);
const showNavbar = ref(true);
const windowDimensions = ref({ width: 0, height: 0 });
const downloads = ref([
  { name: "cartographie tarifs", url: "tarifs/cartographie_tarifs.pdf" },
  { name: "tarifs", url: "tarifs/tarifs_REG_2024.pdf" },
  { name: "cnil", url: "/cnil.pdf" },
]);

const store1 = useStore();
const cataLink = computed(() => store1.state.cataLink);

const userToken = useStorage("user-token", null, sessionStorage);
const userId = useStorage("user-id", null, sessionStorage);

// Récupération du token et vérification du statut de connexion de l'utilisateur
const checkUserStatus = () => {
  const token = sessionStorage.getItem("user-token"); // Remplacer 'userToken' par la clé réelle utilisée
  if (token) {
    // Appel API ou autre méthode pour valider le token et récupérer les infos de l'utilisateur
    axios
      .get(`${store.api_host}/user/${userId.value}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log(response.data);
        user.value = response.data; // Supposer que le serveur renvoie les données de l'utilisateur
      })
      .catch(() => {
        // Gérer l'erreur, par exemple en effaçant le token invalide
        // localStorage.removeItem("user-token");
      });
  }
};

const logoutUser = () => {
  sessionStorage.removeItem("user-token"); // Clear the token
  userIsLogged.value = false; // Update the logged-in state
  // Implement any additional logout logic or redirection if necessary
  location.reload();
};

const handleResize = () => {
  if (window) {
    // Make sure window is defined
    windowDimensions.value.width = window.innerWidth;
    windowDimensions.value.height = window.innerHeight;
  }
};

const swingOnLoad = () => {
  const element = document.getElementById("animateLogo");
  element.classList.add("swing");
};

const respNav = () => {
  if (windowDimensions.value.width <= 767) {
    isActive.value = true;
    document.getElementById("lowResH1").innerHTML =
      societe.value + ", " + titre.value;
  }
  if (windowDimensions.value.width >= 768) {
    isActive.value = false;
    document.querySelector(".displayHr").remove("displayHr");
  }
};

const showMobileMenu = () => {
  console.log("is-active");
  active.value = !active.value;
};

onMounted(() => {
  checkUserStatus(); // Vérifier le statut de connexion lors du montage du composant
  window.addEventListener("resize", handleResize);
  handleResize();
  respNav();
  swingOnLoad();
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});

watchEffect(() => {
  userIsLogged.value = !!userToken.value; // This will be true if userToken is not null or empty
});
</script>
