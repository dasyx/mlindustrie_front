<template>
  <Header />
  <!-- Début de la section formations-->
  <section id="section_historique" class="hero is-medium is-bold">
    <!--Affichage de l'encart de présentation + certification-->
    <div class="hero-body">
      <h1 class="title" onload="bgHover()">
        Le spécialiste des formations techniques
      </h1>
      <h2 class="title">Pour l'industrie sur mesure, dans toute la France</h2>
      <hr class="accessory" />
      <div class="container container_certification">
        <div class="container_certification__flex-left"></div>
        <!-- Section des avis clients -->
        <section id="section_clients" class="is-medium is-bold">
          <div class="hero-body">
            <h2 class="title">Ce que disent nos clients</h2>
            <hr class="styled-hr" />
            <div class="container container_clients">
              <div class="client_reviews">
                <div class="client_review">
                  <div class="client_avatar">
                    <span
                      class="avatar_circle"
                      style="background-color: #4a90e2"
                      >N</span
                    >
                  </div>
                  <div class="review_content">
                    <blockquote class="review_text">
                      <i class="fas fa-quote-left quote-icon"></i>
                      <p>
                        <em>
                          "Centre de formation très sérieux, la formatrice a
                          bien pris le temps pour le cours avant test et a su
                          répondre à toutes les questions concernant la
                          formation, je recommande à 100%"
                        </em>
                      </p>
                      <i class="fas fa-quote-right quote-icon"></i>
                    </blockquote>
                    <span class="client_name">- Nordine El Yakou</span>
                  </div>
                </div>

                <div class="client_review">
                  <div class="client_avatar">
                    <span
                      class="avatar_circle"
                      style="background-color: #ff6f61"
                      >C</span
                    >
                  </div>
                  <div class="review_content">
                    <blockquote class="review_text">
                      <i class="fas fa-quote-left quote-icon"></i>
                      <p>
                        <em
                          >"ML Industrie, organisme de formation très sérieux,
                          professionnel, réactif et qui trouve toujours une
                          solution pour accompagner ses clients et les
                          partenaires. Je recommande fortement"</em
                        >
                      </p>
                      <i class="fas fa-quote-right quote-icon"></i>
                    </blockquote>
                    <span class="client_name">- Charlotte Boucourt</span>
                  </div>
                </div>

                <div class="client_review">
                  <div class="client_avatar">
                    <span
                      class="avatar_circle"
                      style="background-color: #6bc1e1"
                      >B</span
                    >
                  </div>
                  <div class="review_content">
                    <blockquote class="review_text">
                      <i class="fas fa-quote-left quote-icon"></i>
                      <p>
                        <em
                          >"Très bon organisme de formation, disponible,
                          sérieux. ML Industrie se distingue par la qualité de
                          ses formateurs et des moyens mis en oeuvre afin de
                          mener au mieux votre formation."</em
                        >
                      </p>
                      <i class="fas fa-quote-right quote-icon"></i>
                    </blockquote>
                    <span class="client_name">- Baptiste Le Goaziou</span>
                  </div>
                </div>

                <div class="client_review">
                  <div class="client_avatar">
                    <span
                      class="avatar_circle"
                      style="background-color: #f3c623"
                      >J</span
                    >
                  </div>
                  <div class="review_content">
                    <blockquote class="review_text">
                      <i class="fas fa-quote-left quote-icon"></i>
                      <p>
                        <em
                          >"Je suis gérant d'une entreprise de chaufffage à
                          Isneauville. Ayant eu besoin urgent de formation
                          Electricien pour mes collaborateurs, j'ai découvert ce
                          centre de formation à Isneauville, qui a su me trouver
                          une solution immédiate, efficace. Merci M. Levast pour
                          vos efforts. Je recommande à 100%."</em
                        >
                      </p>
                      <i class="fas fa-quote-right quote-icon"></i>
                    </blockquote>
                    <span class="client_name">- Julien Fréry</span>
                  </div>
                </div>

                <div class="client_review">
                  <div class="client_avatar">
                    <span
                      class="avatar_circle"
                      style="background-color: #9b59b6"
                      >A</span
                    >
                  </div>
                  <div class="review_content">
                    <blockquote class="review_text">
                      <i class="fas fa-quote-left quote-icon"></i>
                      <p>
                        <em
                          >"Oganisme de formation très professionnel, réactif et
                          de très bon conseils. Tarifs très compétitifs/ Bon
                          rapport qualité prix. Je recommande."</em
                        >
                      </p>
                      <i class="fas fa-quote-right quote-icon"></i>
                    </blockquote>
                    <span class="client_name">- Agathe Simon</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- Fin de la section des avis clients -->

        <div class="container_certification__flex-right">
          <h2 id="firstParagraph">
            {{ firstParagraph_pt1 }}<span>2019</span>{{ firstParagraph_pt2 }}
          </h2>
          <h2 id="secondParagraph">
            {{ secondParagraph_pt1 }}<span>68</span>{{ secondParagraph_pt2 }}
          </h2>
          <h2 id="thirdParagraph">
            {{ thirdParagraph_pt1 }}<span>166</span>{{ thirdParagraph_pt2
            }}<span>574</span>{{ thirdParagraph_pt3 }}{{ thirdParagraph_pt4 }}
          </h2>
          <h2 id="fourthParagraph">{{ fourthParagraph }}<span>94%.</span></h2>
          <h2 id="fifthParagraph">{{ fifthParagraph }}<span>99%.</span></h2>
          <h2 id="sixthParagraph">
            {{ sixthParagraph_pt1 }}<span>350</span>{{ sixthParagraph_pt2 }}
          </h2>
        </div>
      </div>
    </div>
    <i class="gg-arrow-long-right animate animateArrow"></i>
  </section>
  <!--Fin de l'affichage de l'encart de présentation + certification-->
  <section id="section_formations" class="hero is-medium is-bold">
    <div class="hero-body">
      <div class="container cont_formations reveal fade-bottom">
        <div class="flex_txt">
          <h2 class="title">Nos formations techniques</h2>

          <img src="../../public/img/formations.webp" alt="formations" />

          <div class="column">
            <div>
              <h3>Usinage conventionnel</h3>
              <h3>Usinage commande numérique</h3>
              <h3>Pneumatique</h3>
              <h3>Hydraulique</h3>
              <h3>Automatisme</h3>
              <h3>Soudure</h3>
              <h3>Mécanique</h3>
              <h3>Electricité</h3>
              <h3>Electronique</h3>
              <h3>Chaudronnerie</h3>
              <h3>Organisation industrielle</h3>
              <h3>Robotique</h3>
              <h3>AIPR</h3>
              <h3>Habilitation électrique</h3>
              <h3>Incendie</h3>
              <h3>ATEX</h3>
            </div>
          </div>
        </div>
        <div class="habilitation">
          <div class="aipr">
            <img
              class="flex_img-formations"
              src="../../public/img/airp-image.webp"
              width="600"
              height="500"
              alt="texte_formations"
            />
          </div>
          <div class="sst">
            <img
              class="flex_img-formations"
              src="../../public/img/sst.webp"
              width="150"
              height="125"
              alt="texte_formations"
            />
            <p>Habilitation SST</p>
          </div>
          <div class="certimetal">
            <img
              class="flex_img-formations"
              src="../../public/img/certimetal.webp"
              width="150"
              height="125"
              alt="texte_formations"
            />
            <p>Certifications professionnelles de la métallurgie</p>
          </div>
        </div>
      </div>
    </div>
    <i class="gg-arrow-long-right animate animateArrow"></i>
  </section>
  <!-- Fin de la section formations-->
  <!-- Début de la section atouts-->
  <section id="section_atouts" class="hero is-medium is-bold">
    <div class="hero-body">
      <div
        id="container_formations"
        class="container cont_formations reveal fade-bottom"
      >
        <div id="img_container">
          <img
            id="wide_img1"
            class="flex_img"
            src="../../public/img/atouts2.webp"
            alt="atouts"
          />
        </div>
        <div id="atouts" class="flex_txt">
          <h2 class="title">Nos atouts</h2>

          <img src="../../public/img/atouts.webp" alt="texte_atouts" />

          <div class="column">
            <ul>
              <li>Réactif</li>
              <li>Professionnel</li>
              <li>Efficace</li>
              <li>Adaptable</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <i class="gg-arrow-long-left animate animateArrow"></i>
  </section>
  <!-- Fin de la section atouts-->
  <!-- Début de la section formateurs-->
  <section id="section_formateurs" class="hero is-medium is-bold">
    <div class="hero-body">
      <div
        id="container_formations"
        class="container cont_formations reveal fade-bottom"
      >
        <div id="formateurs" class="flex_txt">
          <h2 class="title">Nos formateurs</h2>

          <img src="../../public/img/formateurs.webp" alt="formateurs" />

          <div class="column">
            <ul>
              <li>Fiables</li>
              <li>Compétents</li>
              <li>Disponibles</li>
              <li>A l'écoute de vos besoins</li>
            </ul>
          </div>
        </div>
        <div id="img_container">
          <img
            id="wide_img2"
            class="flex_img"
            src="../../public/img/formateurs2.webp"
            alt="texte_formateurs"
          />
        </div>
      </div>
    </div>
    <i class="gg-arrow-long-right animate"></i>
  </section>
  <!-- Fin de la section formateurs-->
  <!-- Début de la section certifications-->
  <section id="section_certifications" class="hero is-medium is-bold">
    <div class="hero-body">
      <div
        id="container_formations"
        class="container cont_formations reveal fade-bottom"
      >
        <div id="img_container">
          <img
            class="flex_img"
            src="../../public/img/diplome.webp"
            alt="certifications"
          />
        </div>
        <div id="certifications" class="flex_txt">
          <h2 class="title">Nos certifications</h2>

          <img
            src="../../public/img/certifications.webp"
            alt="texte_certifications"
          />

          <div class="column">
            <ul>
              <li>Tests</li>
              <li>Evaluations</li>
              <li>Diplômes</li>
              <li>Certificats</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <i class="gg-arrow-long-left animate"></i>
  </section>
  <!-- Fin de la section certifications-->
  <!-- Début de la section partenaires-->
  <aside><h2>Nos partenaires</h2></aside>
  <section class="hero is-medium is-bold carousel">
    <h2 class="carousel-title">Nos partenaires</h2>
    <input
      id="position1"
      for="position1"
      type="radio"
      name="position"
      aria-label="position1"
    />
    <input
      id="position2"
      for="position2"
      type="radio"
      name="position"
      aria-label="position2"
    />
    <input
      id="position3"
      for="position3"
      type="radio"
      name="position"
      aria-label="position3"
    />
    <input
      id="position4"
      for="position4"
      type="radio"
      name="position"
      aria-label="position4"
      checked
    />
    <input
      id="position5"
      for="position5"
      type="radio"
      name="position"
      aria-label="position5"
    />
    <div id="carousel">
      <a class="item partner_dl" href="https://davidlevast.com" target="_blank">
        <img
          src="../../public/logos/logo_davidlevast.webp"
          alt="logo_david_levast"
        />
      </a>
      <a class="item partner_bart" href="#carousel">
        <img src="../../public/logos/bart.webp" alt="logo_bart_metallerie" />
      </a>

      <a class="item partner_asa" href="#carousel" target="_blank">
        <img src="../../public/logos/asa.webp" alt="logo_asa_conception" />
      </a>
      <a
        class="item partner_prisma"
        href="http://www.prisma-robotique.com/"
        target="_blank"
      >
        <img
          src="../../public/logos/prisma-robotique-logo.webp"
          alt="logo_formation_industrie"
        />
      </a>
      <a class="item partner_artemys" href="#carousel">
        <img src="../../public/logos/artemys.webp" alt="logo_artemys" />
      </a>
      <a class="item partner_usinage" href="#carousel" target="_blank">
        <img
          src="../../public/logos/usinage_formations.webp"
          alt="logo_usinage_formations"
        />
      </a>
    </div>
  </section>
  <!-- Fin de la section partenaires-->
  <Footer />
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
// import { createHead } from '@vueuse/head'

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  /* setup() {
    createHead({
      title: 'ML INDUSTRIE, La formation industrielle et technique',
      meta: [
        {
          name: 'description',
          content: "ML Industrie est le spécialiste de la formation industrielle et technique. Basés en Normandie, nous sommes experts dans les domaines suivants: la formation mécanique, ainsi que la formation électricité, mais aussi la formation hydraulique.",
        },
      ],
    })
  }, */
  data() {
    return {
      firstParagraph_pt1: "",
      firstParagraph_pt2: "",
      secondParagraph_pt1: "",
      secondParagraph_pt2: "",
      thirdParagraph_pt1: "",
      thirdParagraph_pt2: "",
      thirdParagraph_pt3: "",
      thirdParagraph_pt4: "",
      fourthParagraph: "",
      fifthParagraph: "",
      sixthParagraph_pt1: "",
      sixthParagraph_pt2: "",
      window: {
        width: 0,
        height: 0,
      },
    };
  },
  created() {
    window.addEventListener("scroll", this.pageScroll);
    window.addEventListener("scroll", this.reveal);
  },
  unmounted() {
    window.removeEventListener("scroll", this.pageScroll);
    window.removeEventListener("resize", this.handleResize);
  },
  mounted() {
    this.typeWriter1(), // window.addEventListener('resize', this.handleResize);
      this.handleResize();
    this.respNav();
    this.reveal();
    this.bgHover();
  },
  methods: {
    pageScroll() {
      const allAnime = document.querySelectorAll(".animate");
      for (let i = 0; i < allAnime.length; i++) {
        allAnime[i].classList.add("animateArrow");
      }
      const allAnimeDown = document.querySelectorAll(".animateDown");
      for (let i = 0; i < allAnimeDown.length; i++) {
        allAnimeDown[i].classList.add("animateArrowDown");
      }
    },
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
    },
    bgHover() {
      const title_effect = document.querySelector(".title");
      title_effect.classList.add("bgHover");
    },
    reveal() {
      const reveals = document.querySelectorAll(".reveal");

      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        } else {
          reveals[i].classList.remove("active");
        }
      }
    },
    // Si la résolution est trop faible, les flêches seront retirées de l'affichage
    respNav() {
      const img = document.querySelectorAll(".flex_img");

      if (this.window.width <= 475) {
        // document.getElementById('leftArrow').remove('leftArrow');
        // document.getElementById('rightArrow').remove('rightArrow');
        // Gestionnaire d'affichage sur les images
        // En fonction de la résolution d'écran
        for (let i = 0; i < img.length; i++) {
          img[i].classList.add("flex_img_lowRes");
        }
      } else {
        for (let i = 0; i < img.length; i++) {
          img[i].classList.add("flex_img");
        }
      }
      // Si la résolution est trop faible, on retire le titre des partneraires highRes
      if (this.window.width < 1201) {
        document
          .getElementById("partner_highRes")
          .classList.add("partner_highRes_none");
      }
    },
    // Gestion de l'affichage différé de la bio entreprise
    typeWriter1: function () {
      const v = this;
      setTimeout(function () {
        v.firstParagraph_pt1 =
          "ML INDUSTRIE, spécialiste de la formation industrielle, a été créée en ";
      }, 800);
      setTimeout(function () {
        v.firstParagraph_pt2 =
          " et est implantée actuellement sur la région rouennaise.";
      }, 800);
      setTimeout(function () {
        v.secondParagraph_pt1 = "La société collabore avec ";
      }, 1400);
      setTimeout(function () {
        v.secondParagraph_pt2 =
          " formateurs dans plusieurs domaines techniques.";
      }, 1400);
      setTimeout(function () {
        v.thirdParagraph_pt1 = "Investie et en plein essor avec ";
      }, 2200);
      setTimeout(function () {
        v.thirdParagraph_pt2 = " formations à son catalogue, elle forme ";
      }, 2200);
      setTimeout(function () {
        v.thirdParagraph_pt3 = " stagiaires par an.";
      }, 2200);
      setTimeout(function () {
        v.fourthParagraph = "Le taux de satisfaction des stagiaires est de ";
      }, 2200);
      setTimeout(function () {
        v.fifthParagraph = "Le taux de satisfaction des entreprises est de ";
      }, 2200);
      setTimeout(function () {
        v.sixthParagraph_pt1 = "Avec au total plus de ";
      }, 2200);
      setTimeout(function () {
        v.sixthParagraph_pt2 =
          " jours de formations. Le délai d'accès à nos formations est de 1 semaine.";
      }, 2200);
    },
  },
};
</script>

<style>
.container_clients {
  padding: 2rem;
  border-radius: 8px;
  margin-bottom: 2rem;
}

.client_reviews {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
}

/* Positionner l'avatar à gauche de chaque avis */
.client_review {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  background: rgba(255, 255, 255, 0.8);
  color: #3d3c3c;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: left;
  flex: 1 1 calc(33.333% - 1.5rem);
  max-width: calc(33.333% - 1.5rem);
}

.client_avatar {
  width: 100px;
  border-radius: 50%;
  background-color: #4a90e2;
  font-weight: bold;
  font-size: 1.5rem;
  margin: 0; /* Supprimer le centrage de l'avatar */
}

.quote-icon {
  font-size: 1.5rem;
  color: #d1d1d1;
}

.review_text {
  font-style: italic;
  margin: 0.5rem 0;
  flex: 1; /* Prendre toute la largeur disponible */
}

.client_name {
  display: block;
  margin-top: 1rem;
  font-weight: bold;
}

#section_clients h2 {
  text-align: left;
}
/* Positionnement du hr juste en dessous du h2 */
.styled-hr {
  width: 100px;
  height: 4px;
  background-color: #fff;
  border: none;
  margin: -4.5rem 0 1rem 0; /* Réduction de l'espacement supérieur */
}

.avatar_circle {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #4a90e2;
  color: #ffffff;
  font-size: 1.5rem;
  text-transform: uppercase;
}

/* Deux colonnes dès 1400px et moins */
@media (max-width: 1400px) {
  .client_review {
    flex: 1 1 calc(50% - 1.5rem);
    max-width: calc(50% - 1.5rem);
  }
}

/* Une colonne dès 1024px et moins */
@media (max-width: 1024px) {
  .client_review {
    flex: 1 1 100%;
    max-width: 100%;
  }
}

/* Pleine largeur dès 768px et moins */
@media (max-width: 768px) {
  .client_review {
    flex: 1 1 95%; /* Chaque avis occupe 95% de la largeur */
    max-width: 95%; /* Garantit que les avis ne débordent pas */
    margin: 0 auto 1rem auto; /* Centre les avis avec une marge en bas */
  }

  .client_reviews {
    gap: 1rem; /* Réduit l'espacement entre les avis */
  }
}

.certif_qualiopi {
  margin-top: 2rem;
}
</style>
