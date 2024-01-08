<template>
  <Header />
  <div class="title-container">
    <h1 class="title is-1 has-text-centered">Qualité</h1>
  </div>
  <div class="container is-fluid">
    <div class="columns is-multiline">
      <div v-for="file in files" :key="file.name" class="column is-one-third">
        <div
          class="card"
          :style="{ backgroundImage: 'url(' + file.backgroundImage + ')' }"
        >
          <div class="card-content">
            <p class="title custom-text">
              {{ file.name }}
            </p>
            <a :href="file.url" class="button is-primary" download
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
  name: "Qualite",
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
      files: [
        {
          name: "Process Inscription",
          url: "/qualite/2 - Process inscription.pdf",
          backgroundImage: "/images/1.png",
        },
        {
          name: "Process Formation",
          url: "/qualite/3 - Process formation.pdf",
          backgroundImage: "/images/2.png",
        },
        {
          name: "Critère 1 - CGV",
          url: "/qualite/Critère 1 - CGV.pdf",
          backgroundImage: "/images/3.png",
        },
        {
          name: "Critère 1 - Droit à l'image",
          url: "/qualite/Critère 1 - Droit à l'image.pdf",
          backgroundImage: "/images/4.png",
        },
        {
          name: "Critère 1 - Indicateurs de résultats",
          url: "/qualite/Critère 1 - Indicateurs de résultats.pdf",
          backgroundImage: "/images/5.png",
        },
        {
          name: "Critère 1 - Présentation d'une formation",
          url: "/qualite/Critère 1 - Présentation d'une formation.pdf",
          backgroundImage: "/images/6.png",
        },
        {
          name: "Critère 2 - Accueil des étudiants en situation de handicap - bilan",
          url: "/qualite/Critère 2 - Accueil des étudiants en situation de handicap - bilan.pdf",
          backgroundImage: "/images/7.png",
        },
        {
          name: "Critère 2 - Accueil des étudiants en situation de handicap - entretien",
          url: "/qualite/Critère 2 - Accueil des étudiants en situation de handicap - entretien.pdf",
          backgroundImage: "/images/8.png",
        },
        {
          name: "Critère 2 - Accueil des étudiants en situation de handicap - formalisation",
          url: "/qualite/Critère 2 - Accueil des étudiants en situation de handicap - formalisation.pdf",
          backgroundImage: "/images/9.png",
        },
        {
          name: "Critère 2 - Adaptation de l'accompagnement",
          url: "/qualite/Critère 2 - Adaptation de l'accompagnement.pdf",
          backgroundImage: "/images/10.png",
        },
        {
          name: "Critère 2 - Analyse du besoin du bénéficiaire",
          url: "/qualite/Critère 2 - Analyse du besoin du bénéficiaire.pdf",
          backgroundImage: "/images/11.png",
        },
        {
          name: "Critère 2 - Dossier de candidature",
          url: "/qualite/Critère 2 - Dossier de candidature.pdf",
          backgroundImage: "/images/12.png",
        },
        {
          name: "Critère 2 - Grille d'identification des besoins de formation",
          url: "/qualite/Critère 2 - Grille d'identification des besoins de formation.pdf",
          backgroundImage: "/images/13.png",
        },
        {
          name: "Critère 2 - Indicateurs de suivi",
          url: "/qualite/Critère 2 - Indicateurs de suivi.pdf",
          backgroundImage: "/images/14.png",
        },
        {
          name: "Critère 2 - Modalités pédagogiques",
          url: "/qualite/Critère 2 - Modalités pédagogiques.pdf",
          backgroundImage: "/images/15.png",
        },
        {
          name: "Critère 2 - Règlement général",
          url: "/qualite/Critère 2 - Règlement général.pdf",
          backgroundImage: "/images/16.png",
        },
        {
          name: "Critère 3 - Annuaire des contacts",
          url: "/qualite/Critère 3 - Annuaire des contacts.pdf",
          backgroundImage: "/images/17.png",
        },
        {
          name: "Critère 3 - CGU",
          url: "/qualite/Critère 3 - CGU.pdf",
          backgroundImage: "/images/18.png",
        },
        {
          name: "Critère 3 - Conformité et mise à disposition de locaux de formation professionnelle et ERP",
          url: "/qualite/Critère 3 - Conformité et mise à disposition de locaux de formation professionnelle et ERP.pdf",
          backgroundImage: "/images/19.png",
        },
        {
          name: "Critère 3 - Eviter les situations d'échec",
          url: "/qualite/Critère 3 - Eviter les situations d'échec.pdf",
          backgroundImage: "/images/20.png",
        },
        {
          name: "Critère 3 - Favoriser l'engagement des étudiants",
          url: "/qualite/Critère 3 - Favoriser l'engagement des étudiants.pdf",
          backgroundImage: "/images/21.png",
        },
        {
          name: "Critère 3 - Guide d'entretien des abandons",
          url: "/qualite/Critère 3 - Guide d'entretien des abandons.pdf",
          backgroundImage: "/images/22.png",
        },
        {
          name: "Critère 3 - Livret d'accueil",
          url: "/qualite/Critère 3 - Livret d'accueil.pdf",
          backgroundImage: "/images/23.png",
        },
        {
          name: "Critère 3 - Règlement intérieur",
          url: "/qualite/Critère 3 - Règlement intérieur.pdf",
          backgroundImage: "/images/24.png",
        },
        {
          name: "Critère 3 - Suivi de l'adaptation à l'accompagnement et à l'apprentissage",
          url: "/qualite/Critère 3 - Suivi de l'adaptation à l'accompagnement et à l'apprentissage.pdf",
          backgroundImage: "/images/25.png",
        },
        {
          name: "Critère 4 - Les différents pôles",
          url: "/qualite/Critère 4 - Les différents pôles.pdf",
          backgroundImage: "/images/26.png",
        },
        {
          name: "Critère 4 - Organigramme",
          url: "/qualite/Critère 4 - Organigramme.pdf",
          backgroundImage: "/images/27.png",
        },
        {
          name: "Critère 5 - Formations sur le handicap",
          url: "/qualite/Critère 5 - Formations sur le handicap.pdf",
          backgroundImage: "/images/28.png",
        },
        {
          name: "Critère 5 - Plan de développement des compétences",
          url: "/qualite/Critère 5 - Plan de développement des compétences.pdf",
          backgroundImage: "/images/29.png",
        },
        {
          name: "Critère 3 - Handicap",
          url: "/qualite/Critère 3 - Handicap.pdf",
          backgroundImage: "/images/30.png",
        },
        {
          name: "Critère 5 - Questionnaire d'identification des besoins de formation",
          url: "/qualite/Critère 5 - Questionnaire d'identification des besoins de formation.pdf",
          backgroundImage: "/images/31.png",
        },
        {
          name: "Critère 7 - Mesures d'amélioration apprenants 2022",
          url: "/qualite/Critère 7 - Mesures d'amélioration apprenants 2022.pdf",
          backgroundImage: "/images/32.png",
        },
        {
          name: "Critère 7 - Mesures d'amélioration apprenants 2023",
          url: "/qualite/Critère 7 - Mesures d'amélioration apprenants 2023.pdf",
          backgroundImage: "/images/33.png",
        },
        {
          name: "Process Abandons",
          url: "/qualite/Process Abandons.pdf",
          backgroundImage: "/images/34.png",
        },
        {
          name: "Process Analyse du besoin",
          url: "/qualite/Process Analyse du besoin.pdf",
          backgroundImage: "/images/35.png",
        },
        {
          name: "Process Handicap",
          url: "/qualite/Process Handicap.pdf",
          backgroundImage: "/images/36.png",
        },
        {
          name: "Process Satisfaction",
          url: "/qualite/Process Satisfaction.pdf",
          backgroundImage: "/images/37.png",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.title-container {
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  background: $blue_background;
}
.title {
  margin: 0 auto;
  padding: 1rem;
  margin: 1.5em 0;
}
.container {
  display: flex;
  flex-direction: column;
  background: $blue_background;
  padding: 3rem 1.5rem;
}
.columns {
  display: flex;
  flex-wrap: wrap;
  align-items: stretch; // Assurez-vous que toutes les cartes s'étendent verticalement
}

.column {
  display: flex;
  flex-direction: column;
}
.card {
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
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
.custom-text {
  color: #000;
  background-color: #fff;
  font-weight: bold;
  text-align: center;
  width: 100%; // Assurez-vous que le texte et son fond coloré s'étendent sur toute la largeur
  padding: 1rem; // Ajoutez un padding pour un meilleur affichage
  margin: 0; // Enlevez les marges pour éviter tout décalage
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
