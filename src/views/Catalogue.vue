<template>
  <Header />
  <p class="tarifs_table"><em>Tarifs ML Industrie 2022 (MAJ 01/01/2022)</em></p>
  <div class="lowRes_catalogue_container">
    <p class="lowRes_catalogue_txt">
      L'affichage de notre calatogue de formations est optimisé pour tablettes
      et ordinateurs.
    </p>
    <p class="lowRes_catalogue_txt">
      Dans un souci de lisibilité, veuillez cliquer sur le boutton ci-dessous
      pour le visionner ou le télécharger
    </p>
    <button class="lowRes_catalogue_btn">
      <PdfFileComponent />
    </button>
  </div>
  <table class="table is-bordered is-hoverable">
    <tr>
      <th colspan="3"></th>
      <th colspan="2"></th>
      <th colspan="3" class="has-text-centered is-vcentered" id="th_grey-bg">
        ANIMATION
      </th>
    </tr>
    <tr>
      <th colspan="3"></th>
      <th colspan="2"></th>
      <th colspan="3" class="has-text-centered is-vcentered th_orange-bg">
        2022
      </th>
    </tr>
    <tr>
      <th></th>
      <th colspan="4" class="has-text-centered is-vcentered th_blue-bg">
        CARACTERISTIQUES 2022
      </th>
      <th colspan="3" class="has-text-centered is-vcentered th_orange-bg">
        Coût en € HT/jour hors frais pour :
      </th>
    </tr>
    <tr class="th th-large">
      <th class="has-text-centered is-vcentered" id="large">
        TYPE DE FORMATION
      </th>
      <th class="has-text-centered is-vcentered th_blue-bg">
        Effectif maxi par groupe
      </th>
      <th class="has-text-centered is-vcentered th_blue-bg">
        Nombre de personnes par configuration matérielle
      </th>
      <th class="has-text-centered is-vcentered th_blue-bg">
        Coût par configuration
      </th>
      <th class="has-text-centered is-vcentered th_blue-bg">
        Coût en €, HT/jour sans matériel et hors frais
      </th>
      <th class="has-text-centered is-vcentered th_orange-bg">
        1 à 2 personnes
      </th>
      <th class="has-text-centered is-vcentered th_orange-bg">
        2 à 4 personnes
      </th>
      <th class="has-text-centered is-vcentered th_orange-bg">
        4 à 6 personnes
      </th>
    </tr>
    <tr>
      <td>Ingénierie pédagogique</td>
      <td></td>
      <td></td>
      <td></td>
      <td>800 €</td>
      <td>800 €</td>
      <td>800 €</td>
      <td>800 €</td>
    </tr>
    <tr>
      <td>Ingénierie opérationnelle</td>
      <td></td>
      <td></td>
      <td></td>
      <td>800 €</td>
      <td>800 €</td>
      <td>800 €</td>
      <td>800 €</td>
    </tr>
    <tr>
      <td>Automates programmables généralités</td>
      <td>6</td>
      <td>2</td>
      <td>30 €</td>
      <td>800 €</td>
      <td>830 €</td>
      <td>860 €</td>
      <td>890 €</td>
    </tr>
    <tr>
      <td>Automates programmables - Le langage de programmation</td>
      <td>6</td>
      <td>2</td>
      <td>30 €</td>
      <td>800 €</td>
      <td>830 €</td>
      <td>860 €</td>
      <td>890 €</td>
    </tr>
    <tr>
      <td>Automates programmables - Maintenance</td>
      <td>6</td>
      <td>2</td>
      <td>50 €</td>
      <td>800 €</td>
      <td>850 €</td>
      <td>900 €</td>
      <td>950 €</td>
    </tr>
    <tr>
      <td>Automates programmables - Programmation</td>
      <td>6</td>
      <td>2</td>
      <td>50 €</td>
      <td>800 €</td>
      <td>850 €</td>
      <td>900 €</td>
      <td>950 €</td>
    </tr>
    <tr>
      <td>Automates programmables - Supervision</td>
      <td>6</td>
      <td>2</td>
      <td>245 €</td>
      <td>900 €</td>
      <td>1145 €</td>
      <td>1145 €</td>
      <td>1145 €</td>
    </tr>
    <tr>
      <td>Automates programmables - Interface homme machine (IHM)</td>
      <td>6</td>
      <td>2</td>
      <td>70 €</td>
      <td>800 €</td>
      <td>870 €</td>
      <td>940 €</td>
      <td>1010 €</td>
    </tr>
    <tr>
      <td>Automates programmables - Réseaux</td>
      <td>6</td>
      <td>2</td>
      <td>70 €</td>
      <td>800 €</td>
      <td>870 €</td>
      <td>940 €</td>
      <td>1010 €</td>
    </tr>
    <tr>
      <td>
        Automates programmables - Module métier (carte d'axe, comptage,
        pressage...)
      </td>
      <td>4</td>
      <td>2</td>
      <td>245 €</td>
      <td>800 €</td>
      <td>1045 €</td>
      <td>1290 €</td>
      <td></td>
    </tr>
    <tr>
      <td>Robotique - Conduite de robot</td>
      <td>4</td>
      <td>4</td>
      <td>245 €</td>
      <td>900 €</td>
      <td>1145 €</td>
      <td>1145 €</td>
      <td></td>
    </tr>
    <tr>
      <td>Robotique - Exploitation et modification de trajectoire</td>
      <td>4</td>
      <td>4</td>
      <td>245 €</td>
      <td>900 €</td>
      <td>1145 €</td>
      <td>1145 €</td>
      <td></td>
    </tr>
    <tr>
      <td>Robotique - Programmation</td>
      <td>4</td>
      <td>4</td>
      <td>245 €</td>
      <td>900 €</td>
      <td>1145 €</td>
      <td>1145 €</td>
      <td></td>
    </tr>
    <tr>
      <td>Robotique - Maintenance électrique</td>
      <td>4</td>
      <td>4</td>
      <td>245 €</td>
      <td>900 €</td>
      <td>1145 €</td>
      <td>1145 €</td>
      <td></td>
    </tr>
    <tr>
      <td>Commande numérique - Exploitation</td>
      <td>6</td>
      <td>2</td>
      <td>105 €</td>
      <td>850 €</td>
      <td>955 €</td>
      <td>1060 €</td>
      <td>1165 €</td>
    </tr>
    <tr>
      <td>Commande numérique - Programmation pîèce ISO</td>
      <td>6</td>
      <td>2</td>
      <td>105 €</td>
      <td>850 €</td>
      <td>955 €</td>
      <td>1060 €</td>
      <td>1165 €</td>
    </tr>
    <tr>
      <td>Commande numérique - Programmation pièce paramètrée</td>
      <td>6</td>
      <td>2</td>
      <td>105 €</td>
      <td>850 €</td>
      <td>955 €</td>
      <td>1060 €</td>
      <td>1165 €</td>
    </tr>
    <tr>
      <td>Commande numérique - Maintenance CN</td>
      <td>6</td>
      <td>2</td>
      <td>105 €</td>
      <td>900 €</td>
      <td>1005 €</td>
      <td>1110 €</td>
      <td>1215 €</td>
    </tr>
    <tr>
      <td>Commande numérique - Maintenance automate</td>
      <td>6</td>
      <td>2</td>
      <td>105 €</td>
      <td>900 €</td>
      <td>1005 €</td>
      <td>1110 €</td>
      <td>1215 €</td>
    </tr>
    <tr>
      <td>Variation de vitesse / Motion control</td>
      <td>6</td>
      <td>1 à 3</td>
      <td>245 €</td>
      <td>900 €</td>
      <td>1145 €</td>
      <td>1145 €</td>
      <td>1145 €</td>
    </tr>
    <tr>
      <td>Technique industrielle - Mécanique</td>
      <td>6</td>
      <td>6</td>
      <td>245 €</td>
      <td>800 €</td>
      <td>1045 €</td>
      <td>1045 €</td>
      <td>1045 €</td>
    </tr>
    <tr>
      <td>Technique industrielle - Electrotechnique</td>
      <td>6</td>
      <td>1 à 2</td>
      <td>30 €</td>
      <td>800 €</td>
      <td>830 €</td>
      <td>860 €</td>
      <td>890 €</td>
    </tr>
    <tr>
      <td>Technique industrielle - Electronique</td>
      <td>6</td>
      <td>2</td>
      <td>105 €</td>
      <td>800 €</td>
      <td>905 €</td>
      <td>1010 €</td>
      <td>1115 €</td>
    </tr>
    <tr>
      <td>Technique industrielle - Electropneumatique</td>
      <td>6</td>
      <td>1 à 3</td>
      <td>70 €</td>
      <td>800 €</td>
      <td>870 €</td>
      <td>940 €</td>
      <td>940 €</td>
    </tr>
    <tr>
      <td>Technique industrielle - Hydraulique</td>
      <td>6</td>
      <td>6</td>
      <td>245 €</td>
      <td>850 €</td>
      <td>1095 €</td>
      <td>1095 €</td>
      <td>1095 €</td>
    </tr>
    <tr>
      <td>Technique industrielle - Hydraulique proportionnelle</td>
      <td>6</td>
      <td>6</td>
      <td>245 €</td>
      <td>850 €</td>
      <td>1095 €</td>
      <td>1095 €</td>
      <td>1095 €</td>
    </tr>
    <tr>
      <td>Technique industrielle - Méthodologie de dépannage</td>
      <td>6</td>
      <td>1 à 6</td>
      <td>155 €</td>
      <td>800 €</td>
      <td>955 €</td>
      <td>1110 €</td>
      <td>1265 €</td>
    </tr>
    <tr>
      <td>Technique industrielle - Régulation</td>
      <td>6</td>
      <td>1 à 6</td>
      <td>245 €</td>
      <td>900 €</td>
      <td>1145 €</td>
      <td>1145 €</td>
      <td>1145 €</td>
    </tr>
    <tr>
      <td>Technique industrielle - Dessin industriel niveau 1</td>
      <td>6</td>
      <td>1</td>
      <td>30 €</td>
      <td>800 €</td>
      <td>860 €</td>
      <td>920 €</td>
      <td>980 €</td>
    </tr>
    <tr>
      <td>Technique industrielle - Dessin industriel niveau 2</td>
      <td>6</td>
      <td>1</td>
      <td>70 €</td>
      <td>800 €</td>
      <td>940 €</td>
      <td>1080 €</td>
      <td>1220 €</td>
    </tr>
    <tr>
      <td>Organisation industrielle</td>
      <td>6</td>
      <td></td>
      <td></td>
      <td>900 €</td>
      <td>900 €</td>
      <td>900 €</td>
      <td>900 €</td>
    </tr>
    <tr>
      <td>Informatique Bureautique</td>
      <td>6</td>
      <td>1</td>
      <td>30 €</td>
      <td>800 €</td>
      <td>860 €</td>
      <td>920 €</td>
      <td>980 €</td>
    </tr>
  </table>
  <Footer />
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import PdfFileComponent from "../components/PdfFileComponent.vue";
import { onMounted } from "vue";

export default {
  name: "Home",
  components: { Header, Footer, PdfFileComponent },
  data() {
    return {
      window: {
        width: 0,
        height: 0,
      },
    };
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
    this.respNav();
  },
  unmounted() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
    },
    //Si la résolution de l'affichage est trop faible on empêche l'affichage du catalogue
    //Et on affiche à la place un bouton pour télécharger le fichier pdf de celui-ci
    respNav() {
      if (this.window.width <= 549) {
        document.querySelector("table").remove("table");
      }
      if (this.window.width >= 550) {
        document
          .querySelector(".lowRes_catalogue_container")
          .remove("lowRes_catalogue_container");
      }
    },
  },
  setup() {
    onMounted(() => {
      const selectTd = document.querySelectorAll("td");
      for (let i = 0; i < selectTd.length; i++) {
        selectTd[i].classList.add("has-text-centered");
        // Alignement centré pour chaque valeur du tableau
      }
      const selectTr = document.querySelectorAll("tr :nth-child(1)");
      for (let i = 0; i < selectTr.length; i++) {
        selectTr.forEach(() => {
          selectTr[i].classList.add("has-text-left");
          // Alignement à gauche pour chaque formation
        });
      }
    });
  },
};
</script>
