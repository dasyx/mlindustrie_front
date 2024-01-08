<template>
  <a class="displayDownload" :href="cataLink" download="fichier">{{ lowResCataButton }}</a>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "PdfFileComponent",
  computed: {
    ...mapState({
      lowResCataButton: "lowResCataButton",
      cataLink: "cataLink",
    }),
  },
  /* data() {
    return {
      pdfLink: require("../../src/assets/cgv.pdf").default,
    };
  }, */
  mounted() {
  },
  methods: {
  },
};
</script>
