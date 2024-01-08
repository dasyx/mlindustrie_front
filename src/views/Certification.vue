<template>
  <Header />
  <div class="container is-fluid">
    <div class="content">
      <h1 class="title is-1 has-text-centered">
        Nos Certifications & Habilitations
      </h1>
    </div>
    <!-- Section pour Habilitation métallurgique -->
    <div class="block">
      <h2 class="title is-2 has-text-left">Certimetal</h2>
    </div>
    <div class="columns">
      <div
        v-for="file1 in files1"
        :key="file1.name"
        class="column is-one-third"
      >
        <div
          class="card"
          :style="{ backgroundImage: 'url(' + file1.backgroundImage + ')' }"
        >
          <div class="card-content">
            <p class="title is-4 has-text-centered">
              {{ file1.name }}
            </p>
            <a :href="file1.url" class="button is-primary" download
              >Télécharger</a
            >
          </div>
        </div>
      </div>
    </div>
    <!-- Section pour SST 1 -->
    <div class="block">
      <h2 class="title is-2 has-text-left">SST 1</h2>
    </div>
    <div class="columns">
      <div
        v-for="file2 in files2"
        :key="file2.name"
        class="column is-one-third"
      >
        <div
          class="card"
          :style="{ backgroundImage: 'url(' + file2.backgroundImage + ')' }"
        >
          <div class="card-content">
            <p class="title is-4 has-text-centered">
              {{ file2.name }}
            </p>
            <a :href="file2.url" class="button is-primary" download
              >Télécharger</a
            >
          </div>
        </div>
      </div>
    </div>
    <!-- Section pour Centre d'examen -->
    <div class="block">
      <h2 class="title is-2 has-text-left">Centre d'examen</h2>
    </div>
    <div class="columns">
      <div
        v-for="file3 in files3"
        :key="file3.name"
        class="column is-one-third"
      >
        <div
          class="card"
          :style="{ backgroundImage: 'url(' + file3.backgroundImage + ')' }"
        >
          <div class="card-content">
            <p class="title is-4 has-text-centered">
              {{ file3.name }}
            </p>
            <a :href="file3.url" class="button is-primary" download
              >Télécharger</a
            >
          </div>
        </div>
      </div>
    </div>
    <!-- Section pour Actions de formation -->
    <div class="block">
      <h2 class="title is-2 has-text-left">Actions de formation</h2>
    </div>
    <div class="columns">
      <div
        v-for="file4 in files4"
        :key="file4.name"
        class="column is-one-third"
      >
        <div
          class="card"
          :style="{ backgroundImage: 'url(' + file4.backgroundImage + ')' }"
        >
          <div class="card-content">
            <p class="title is-4 has-text-centered">
              {{ file4.name }}
            </p>
            <a :href="file4.url" class="button is-primary" download
              >Télécharger</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Programme",
  components: {
    // eslint-disable-next-line vue/no-reserved-component-names
    Header,
    // eslint-disable-next-line vue/no-reserved-component-names
    Footer,
  },
  data() {
    return {
      methods: {
        applyBlur(cardName) {
          this.$refs[`card${cardName}`].style.filter = "blur(8px)";
        },
        removeBlur(cardName) {
          this.$refs[`card${cardName}`].style.filter = "none";
        },
      },
      files1: [
        {
          name: "Certimetal",
          url: "/certifications/certimetal.pdf",
          backgroundImage: "/images/certimetal.png",
        },
      ],
      files2: [
        {
          name: "SST 1",
          url: "/certifications/sst1.pdf",
          backgroundImage: "/images/sst1.png",
        },
      ],
      files3: [
        {
          name: "Centre d'examen",
          url: "/certifications/centre_examen.pdf",
          backgroundImage: "/images/centre_examen.png",
        },
      ],
      files4: [
        {
          name: "Actions de formation",
          url: "/certifications/action_formation.pdf",
          backgroundImage: "/images/action_formation.png",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  background: $blue_background;
  padding: 3rem 1.5rem;
}
.title {
  margin: 0 auto;
  padding: 1rem;
  margin: 1.5em 0;
  color: #000;
  background-color: #fff;
  font-weight: bold;
  text-align: center;
  width: 100%; // Assurez-vous que le texte et son fond coloré s'étendent sur toute la largeur
}
.card {
  background-size: cover;
  flex: 1;
  transition: filter 0.3s ease;
}
.card-content {
  flex-grow: 1; // Permet au contenu de la carte de remplir l'espace disponible
  display: flex;
  flex-direction: column;
  justify-content: space-between; // Espacer uniformément le contenu
  z-index: 2; // Assurez-vous que le contenu est au-dessus de l'arrière-plan flou
  position: relative; // Nécessaire pour le z-index
}
.card-content a {
  position: relative; // S'assurer que le bouton reste net
  z-index: 3;
}

@media (max-width: 611px) {
  .columns .column {
    flex: 0 0 100%; // Chaque colonne prendra 50% de la largeur du parent
  }
}
@media (min-width: 612px) and (max-width: 1400px) {
  .columns .column {
    flex: 0 0 50%; // Chaque colonne prendra 50% de la largeur du parent
  }
}
@media (min-width: 1401px) {
  .columns .column {
    flex: 0 0 25%; // Chaque colonne prendra 33.3333% de la largeur du parent
  }
}
</style>
