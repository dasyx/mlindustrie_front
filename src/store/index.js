import { createStore } from "vuex";

export default createStore({
  state: {
    lowResCataButton: "Télécharger",
    cata: "En construction",
    annuaire: "Annuaire",
    candidature: "Candidature",
    livret: "Livret Accueil",
    programme: "Programme Formation",
    cgv: "CGV",
    reglement: "Réglement Intérieur",
    reglement_g: "Réglement Général",
    progLink: require("../../src/assets/programme_formation.pdf").default,
    cataLink: require("../../src/assets/tarifs.pdf").default,
    livretLink: require("../../src/assets/livret_accueil.pdf").default,
    contactLink: require("../../src/assets/annuaire_contacts.pdf").default,
    candidatLink: require("../../src/assets/dossier_candidature.pdf").default,
    cgvLink: require("../../src/assets/cgv.pdf").default,
    regLink: require("../../src/assets/reglement_interieur.pdf").default,
    reggLink: require("../../src/assets/reglement_general.pdf").default,
  },
  mutations: { 
  }
});