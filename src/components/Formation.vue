<template>
  <Header />
  <div class="container is-fluid">
    <div class="content">
      <h1 class="title is-1 has-text-centered">Programme de formation</h1>
    </div>
    <!-- Section pour automatisme SCHNEIDER -->
    <div class="block">
      <h2 class="title is-2 has-text-left">Automatisme SCHNEIDER</h2>
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
    <!-- Section pour automatisme SIEMENS -->
    <div class="block">
      <h2 class="title is-2 has-text-left">Automatisme SIEMENS</h2>
    </div>
    <div class="columns">
      <div
        v-for="file5 in files5"
        :key="file5.name"
        class="column is-one-third"
      >
        <div
          class="card"
          :style="{ backgroundImage: 'url(' + file5.backgroundImage + ')' }"
        >
          <div class="card-content">
            <p class="title is-4 has-text-centered">
              {{ file5.name }}
            </p>
            <a :href="file5.url" class="button is-primary" download
              >Télécharger</a
            >
          </div>
        </div>
      </div>
    </div>
    <!-- Section pour consignation des fluides LOTO -->
    <div class="block">
      <h2 class="title is-2 has-text-left">Consignation des fluides LOTO</h2>
    </div>
    <div class="columns">
      <div class="column is-one-third">
        <div class="card" style="background-image: url('/images/fluid1.png')">
          <div class="card-content">
            <p class="title is-4 has-text-centered">
              Consignation des fluides LOTO
            </p>
            <a
              href="/formations/Programme_Consignation_des_fluides_LOTO.pdf"
              class="button is-primary"
              download
              >Télécharger</a
            >
          </div>
        </div>
      </div>
    </div>
    <!-- Section pour Electronique -->
    <div class="block">
      <h2 class="title is-2 has-text-left">Electronique</h2>
    </div>
    <div class="columns">
      <div
        v-for="file7 in files7"
        :key="file7.name"
        class="column is-one-third"
      >
        <div
          class="card"
          :style="{ backgroundImage: 'url(' + file7.backgroundImage + ')' }"
        >
          <div class="card-content">
            <p class="title is-4 has-text-centered">
              {{ file7.name }}
            </p>
            <a :href="file7.url" class="button is-primary" download
              >Télécharger</a
            >
          </div>
        </div>
      </div>
    </div>
    <!-- Section pour Electricité -->
    <div class="block">
      <h2 class="title is-2 has-text-left">Electricité</h2>
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
    <!-- Section pour éléctrobobinier -->
    <div class="block">
      <h2 class="title is-2 has-text-left">Electrobobinier</h2>
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
    <!-- Section pour Habilitation électrique -->
    <div class="block">
      <h2 class="title is-2 has-text-left">Habilitation électrique</h2>
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
    <!-- Section pour mécanique -->
    <div class="block">
      <h2 class="title is-2 has-text-left">Mécanique</h2>
    </div>
    <div class="columns">
      <div class="column is-one-third">
        <div class="card" style="background-image: url('/images/meca1.png')">
          <div class="card-content">
            <p class="title is-4 has-text-centered">Mécanique niveau 1</p>
            <a
              href="/formations/Programme_Mecanique_niveau_1.pdf"
              class="button is-primary"
              download
              >Télécharger</a
            >
          </div>
        </div>
      </div>
    </div>
    <!-- Section pour SST -->
    <div class="block">
      <h2 class="title is-2 has-text-left">SST</h2>
    </div>
    <div class="columns">
      <div
        v-for="file6 in files6"
        :key="file6.name"
        class="column is-one-third"
      >
        <div
          class="card"
          :style="{ backgroundImage: 'url(' + file6.backgroundImage + ')' }"
        >
          <div class="card-content">
            <p class="title is-4 has-text-centered">
              {{ file6.name }}
            </p>
            <a :href="file6.url" class="button is-primary" download
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
          name: "Habilitation électrique H0B0",
          url: "/formations/Programme_HABILITATION_ELECTRIQUE_B0H0.pdf",
          backgroundImage: "/images/elec1.png",
        },
        {
          name: "Habilitation électrique BSBE HE",
          url: "/formations/Programme_HABILITATION_ELECTRIQUE_BSBE_HE.pdf",
          backgroundImage: "/images/elec2.png",
        },
        {
          name: "Habilitation électrique BTHT",
          url: "/formations/Programme_HABILITATION_ELECTRIQUE_BTHT.pdf",
          backgroundImage: "/images/elec3.png",
        },
      ],
      files2: [
        {
          name: "Electricité niveau 1",
          url: "/formations/Programme_ELECTRICITE_NIVEAU_1.pdf",
          backgroundImage: "/images/elec1a.png",
        },
      ],
      files3: [
        {
          name: "Electrobobinier",
          url: "/formations/Programme_ELECTROBOBINIER.pdf",
          backgroundImage: "/images/elecbob1.png",
        },
      ],
      files4: [
        {
          name: "Automatisme Schneider Unity Pro",
          url: "/formations/Programme_AUTOMATE_SCHNEIDER_UNITY_PRO.pdf",
          backgroundImage: "/images/auto1.png",
        },
        {
          name: "Automatisme Schneider So Machine",
          url: "/formations/Programme_Automate_SCHNEIDER_SoMachine.pdf",
          backgroundImage: "/images/auto2.png",
        },
      ],
      files5: [
        {
          name: "Automatisme Siemens TIA Portal Maintenance",
          url: "/formations/Programme_Automate_SIEMENS_TIA_PORTAL_MAINTENANCE.pdf",
          backgroundImage: "/images/siemens1.png",
        },
        {
          name: "Automatisme Siemens TIA Portal Niveau 3",
          url: "/formations/Programme_Automate_SIEMENS_TIA_PORTAL_NIVEAU_3.pdf",
          backgroundImage: "/images/siemens2.png",
        },
      ],
      files6: [
        {
          name: "SST",
          url: "/formations/Programme_SST_INITIAL.pdf",
          backgroundImage: "/images/sst3.png",
        },
        {
          name: "SST",
          url: "/formations/Programme_SST_MAC.pdf",
          backgroundImage: "/images/sst2.png",
        },
      ],
      files7: [
        {
          name: "Electronique",
          url: "/formations/Programme_ELECTRONIQUE.pdf",
          backgroundImage: "/images/electronique1.png",
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
