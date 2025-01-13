<template>
  <header>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a id="animateLogo" class="navbar-item" href="/">
          <img
            src="../../public/logos/logo_mlindustrie.webp"
            alt="logo_mlindustrie"
          />
          <img
            src="../../public/img/accompagne.webp"
            alt="logo_mlindustrie_accompagne"
          />
          <hr class="displayHr" />
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
            <!-- Affichage des boutons ou du nom de l'utilisateur -->
            <div v-if="!userIsLogged" class="buttons">
              <a id="btn-inscription" class="button is-primary" href="/signup">
                <strong>S'inscrire</strong>
              </a>
              <a class="button is-light" href="/login">Se connecter</a>
            </div>
            <div v-else class="user-controls">
              <span>Bonjour, {{ userName }}</span>
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
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import axios from "axios";
import { useStorage } from "@vueuse/core";

// État utilisateur
const userIsLogged = ref(false);
const userName = useStorage("user-name", "Invité", sessionStorage);
const userToken = useStorage("auth-token", null, sessionStorage);
const userId = useStorage("user-id", null, sessionStorage);
const active = ref(false);

// Présentations
const presentations = ref([{ name: "Présentation", url: "/ml_plaquette.pdf" }]);

// Vérifier l'état utilisateur
const checkUserStatus = async () => {
  const token = userToken.value;
  const storedUserId = userId.value;

  userIsLogged.value = !!token;

  if (token && storedUserId) {
    try {
      const response = await axios.get(`/user/${storedUserId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.data && response.data.name) {
        userName.value = response.data.name;
      } else {
        console.warn("Nom d'utilisateur non trouvé dans la réponse.");
      }
    } catch (error) {
      console.error("Erreur lors de la récupération de l'utilisateur :", error);
      clearUserSession();
    }
  } else {
    clearUserSession();
  }
};

// Réinitialiser la session utilisateur
const clearUserSession = () => {
  sessionStorage.removeItem("auth-token");
  sessionStorage.removeItem("user-name");
  sessionStorage.removeItem("user-id");
  userIsLogged.value = false;
  userName.value = "Invité";
};

// Supprimer un compte utilisateur
const deleteAccount = async () => {
  if (!userToken.value) return;

  try {
    await axios.delete(`/user/${userId.value}`, {
      headers: { Authorization: `Bearer ${userToken.value}` },
    });
    clearUserSession();
    location.reload(); // Recharge la page après suppression
  } catch (error) {
    console.error("Erreur lors de la suppression du compte :", error);
  }
};

// Déconnexion
const logoutUser = () => {
  clearUserSession();
  location.reload(); // Recharge la page après déconnexion
};

// Menu mobile
const showMobileMenu = () => {
  active.value = !active.value;
};

// Chargement initial
onMounted(() => {
  checkUserStatus();
});
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.user-controls {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.buttons {
  display: flex;
  gap: 0.5rem;
}

button {
  cursor: pointer;
}
</style>
