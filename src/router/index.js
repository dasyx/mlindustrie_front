import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
// import Catalogue from '../views/Catalogue.vue'
import Programme from "../views/Programme.vue";
import Contact from "../views/Contact.vue";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import Signup from "../components/Signup.vue";
import Login from "../components/Login.vue";
import Qualite from "../components/Qualite.vue";
import Formation from "../components/Formation.vue";
// import Login from '../components/Login.vue'
import PdfFileComponent from "../components/PdfFileComponent.vue";
import Maintenance from "../components/Maintenance.vue";
import Certification from "../views/Certification.vue";
import Confirmation from "../components/Confirmation.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  /* {
    path: '/catalogue',
    name: 'Catalogue',
    component: CatalogueLa
  }, */
  {
    path: "/certification",
    name: "Certification",
    component: Certification,
  },
  {
    path: "/qualite",
    name: "Qualite",
    component: Qualite,
  },
  {
    path: "/programme",
    name: "Programme",
    component: Programme,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/header",
    name: "Header",
    component: Header,
  },
  {
    path: "/footer",
    name: "Footer",
    component: Footer,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/pdf",
    name: "PdfFileComponent",
    component: PdfFileComponent,
  },
  {
    path: "/maintenance",
    name: "Maintenance",
    component: Maintenance,
  },
  {
    path: "/formation",
    name: "Formation",
    component: Formation,
  },
  {
    path: "/confirm/:token",
    name: "Confirmation",
    component: Confirmation,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
