<template>
  <Navbar />
  <header class="prog_header">
    <div class="prog_header__title">
      <h1>Programme de formation</h1>
    </div>
    <div class="prog_header__img">
      <img src="../../public/logos/logo_mlindustrie.webp" />
    </div>
  </header>
  <main class="container is-fluid container_programme">
    <!-- DEBUT DE LA BARRE D'ACCES RAPIDE -->
    <nav
      class="navbar navbar_programme"
      role="navigation"
      aria-label="main navigation"
    >
      <hr class="prog_separator" />
      <hr />
      <h3>Accès rapide</h3>
      <div class="navbar__item">
        <a class="navbar__link" href="#centre_formation"
          >I. Centre de formation</a
        >
      </div>
      <div class="navbar__item">
        <a class="navbar__link" href="#action_formation"
          >II. Action de formation</a
        >
      </div>
      <div class="navbar__item">
        <a class="navbar__link" href="#calendrier"
          >III. Calendrier prévisionnel</a
        >
      </div>
      <hr id="bottomSeparator" class="prog_separator" />
      <hr />
    </nav>
    <!-- FIN DE LA BARRE D'ACCES RAPIDE -->

    <!-- DEBUT DE LA SECTION CENTRE DE FORMATION -->
    <section id="centre_formation" class="centre">
      <div class="centre__left">
        <h4><span>I.</span>Centre de formation</h4>
        <p>Raison sociale : ML Industrie</p>
        <p>Adresse ; 23 Impasse du Petit Pont</p>
        <p>Code postal : 76230</p>
        <br />
        <p>Téléphone : 07.67.82.53.80</p>
        <p>Numéro SIRET : 87956489600014</p>
        <p>Nom de la personne à contacter : LEVAST Matthieu</p>
        <p>Organisme privé</p>
      </div>
      <div class="centre__right">
        <br />
        <br />
        <p>Localité : ISNEAUVILLE</p>
        <br />
        <p>Email : mlindustrie76@gmail.com</p>
      </div>
    </section>
    <!-- FIN DE LA SECTION CENTRE DE FORMATION -->

    <!-- DEBUT DE LA SECTION ACTION DE FORMATION -->
    <section id="action_formation" class="centre">
      <div class="centre__left">
        <h4><span>II.</span>Action de formation</h4>

        <br />
        <br />
        <h6>Tarif :</h6>
        <ul class="programme_tarifs">
          <li>TOTAL HT ................................ 2 250,00€</li>
          <li>TVA ........................................... 450,00€</li>
          <li>TOTAL TTC ............................... 2 700,00€</li>
        </ul>
        <br />
        <h6>Méthode pédagogique :</h6>
        <p>
          Le module alternera éléments d’enseignement didactiques et théoriques
          avec une prise en main progressive des modules à travers des cas
          pratiques et des exemples exposant les principales problématiques que
          la stagiaire rencontrera dans la gestion du sujet de manière à
          acquérir une réelle autonomie opérationnelle.
        </p>
        <br />
        <h6>Outils pédagogiques :</h6>
        <ul>
          <li>
            L’ensemble du cours est repris sous forme de projection par
            vidéoprojecteur
          </li>
          <li>Chaque stagiaire prépare un ordinateur avec un simulateur</li>
          <li>
            En début de formation à chaque participant est appelé par le
            formateur pour un bilan personnalisé des besoins.
          </li>
        </ul>
        <br />
        <h6>Contrôle des connaissances :</h6>
        <p>
          Chaque stagiaire devra effectuer un test de connaissance sous la forme
          d’un questionnaire QCM reprenant les principaux points de la
          formation.
        </p>
        <h6>Contrôle des prérequis avant formation :</h6>
        <p>
          Aucune connaissance n’est pré́-requise pour cette formation. Pour
          autant, dans le cadre de notre politique de certification Qualiopi,
          chaque stagiaire devra effectuer un test QCM avant le début de la
          formation afin d’identifier les forces et faiblesses de l’apprenant
          sur les différents sujets portant sur la formation afin d’adapter
          cette dernière au public formé.
        </p>
        <h6>Handicap</h6>
        <p>
          Lors de l’inscription à nos formations, nous étudions avec le candidat
          en situation de handicap et à travers un questionnaire les actions que
          nous pouvons mettre en place pour favoriser son apprentissage.
        </p>
        <p>
          Pour cela, nous pouvons également nous appuyer sur un réseau de
          partenaires nationaux préalablement identifiés.
        </p>
        <br />
        <h6 class="programme_last-title">PROGRAMME</h6>
        <br />
      </div>
    </section>
    <!-- FIN DE LA SECTION ACTION DE FORMATION -->

    <!-- DEBUT DE LA SECTION CALENDRIER PREVISIONNEL -->
    <section id="calendrier" class="centre">
      <div class="centre__left">
        <h4><span>III.</span>Calendrier Prévisionnel</h4>
        <p></p>
      </div>
    </section>
    <!-- FIN DE LA SECTION CALENDRIER PREVISIONNEL -->
  </main>
</template>

<script>
import Navbar from "../components/Navbar.vue";

export default {
  components: { Navbar },
  data() {
    return {
      societe: "ML INDUSTRIE",
      titre: "Un réseau de formations fiable et efficace",
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
    respNav() {
      if (this.window.width <= 767) {
      }
      if (this.window.width >= 768) {
      }
    },
  },
};
</script>
