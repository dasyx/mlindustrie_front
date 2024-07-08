<template>
  <footer id="footer" class="footer">
    <div class="content has-text-centered">
      <div class="columns">
        <div class="column">
          <h4>Qui sommes-nous ?</h4>
          <p class="has-text-center">SAS ML INDUSTRIE au capital de 5 000€</p>
          <p class="has-text-center">
            Le 109, 1 Rue Berthe Morisot 76100 ROUEN
          </p>
          <p class="has-text-center">Tél. 0767825380</p>
          <a href="mailto:contact@mlindustrie.fr" class="footer_contact"
            ><p class="has-text-center">Email. mlindustrie76@gmail.com</p></a
          >
          <p class="has-text-center">
            RCS ROUEN 879 564 896 – APE 7022Z – SIRET 879 564 896 000 14
          </p>
          <p class="has-text-center"></p>
        </div>
        <div class="column">
          <h4>Documents</h4>
          <ul class="linkList">
            <li>
              <a
                class="displayDownload"
                :href="cataLink"
                aria-label="Télécharger catalogue"
                download="fichier"
                >{{ cata }}</a
              >
            </li>
            <li>
              <a
                class="displayDownload"
                :href="contactLink"
                aria-label="Télécharger contact"
                download="fichier"
                >{{ annuaire }}</a
              >
            </li>
            <li>
              <a
                class="displayDownload"
                :href="candidatLink"
                aria-label="Télécharger partie candidat"
                download="fichier"
                >{{ candidature }}</a
              >
            </li>
            <li>
              <a
                class="displayDownload"
                :href="livretLink"
                aria-label="Télécharger livret candidat"
                download="fichier"
                >{{ livret }}</a
              >
            </li>
            <li>
              <a
                class="displayDownload"
                :href="progLink"
                aria-label="Télécharger programme formation"
                download="fichier"
                >{{ programme }}</a
              >
            </li>
          </ul>
        </div>
        <div class="column">
          <h4>Mentions Légales</h4>
          <ul>
            <li>
              <router-link to="/legals" class=""> RGPD </router-link>
            </li>
            <li>
              <a
                class="displayDownload"
                :href="cgvLink"
                aria-label="Télécharger mentions légales"
                download="fichier"
                >{{ cgv }}</a
              >
            </li>
            <li>
              <a
                class="displayDownload"
                :href="regLink"
                aria-label="Télécharger règlement intérieur"
                download="fichier"
                >{{ reglement }}</a
              >
            </li>
            <li>
              <a
                class="displayDownload"
                :href="reggLink"
                aria-label="Télécharger règlement général"
                download="fichier"
                >{{ reglement_g }}</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="copyright has-text-white bottom">
      <div class="is-fluid">
        <div class="columns">
          <div class="column has-text-left">
            <p>Copyright © MLINDUSTRIE {{ date }}</p>
          </div>
          <div class="column has-text-right">
            <a
              href="https://www.linkedin.com/company/34702535/"
              aria-label="Accèder à LinkedIn"
              target="_blank"
              ><i id="linkedin" class="fa fa-linkedin-square"></i
            ></a>
            <a href="mailto:contact@mlindustrie.fr" aria-label="Ecrire un email"
              ><i id="mail_icon" class="fa-regular fa-envelope-open"></i
            ></a>
          </div>
        </div>
      </div>
    </div>
    <BackToTop />
  </footer>
</template>

<script>
import { mapState } from "vuex";
import BackToTop from "./BackToTop.vue";

export default {
  components: { BackToTop },
  computed: {
    ...mapState({
      // cataLink: 'cataLink',
      contactLink: "contactLink",
      candidatLink: "candidatLink",
      livretLink: "livretLink",
      progLink: "progLink",
      cgvLink: "cgvLink",
      regLink: "regLink",
      reggLink: "reggLink",
      livret: "livret",
      cata: "cata",
      annuaire: "annuaire",
      candidature: "candidature",
      // programme: 'programme',
      cgv: "cgv",
      reglement: "reglement",
      reglement_g: "reglement_g",
    }),
  },
  data() {
    return {
      date: new Date().getFullYear(),
    };
  },
  mounted() {},
  methods: {
    /* msgOpt() {
      if (this.textValue === '') {
        this.textValue = 'CGV'
      }
    }, */
  },
};
</script>
