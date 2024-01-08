import { createApp } from "vue";
import { createHead } from "@vueuse/head";

import router from "./router";
import store from "./store";
import App from "./App.vue";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components,
  directives,
});

const head = createHead();

require("@/assets/main.scss");
require("./styles/main.scss");

const app = createApp(App);
app.use(store).use(head).use(vuetify).use(router);
app.mount("#app");
