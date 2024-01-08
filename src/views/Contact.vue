<template>
    <Header />
    <section class="hero hero-body contact_locate">
      <h1>Où et comment nous trouver</h1>
      <hr>
      <MyMap class="contact_map"/>
    </section>
    <Footer />
  </template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import { createHead } from '@vueuse/head';
import MyMap from '../components/MyMap.vue';

export default {
  name: 'Contact',
  components: {
    Header,
    Footer,
    MyMap
},
  setup() {
    createHead({
      title: 'ML INDUSTRIE - Page Contact ',
      meta: [
        {
          name: 'description',
          content: "Vous pouvez nous contacter à tout moment pour une demande d'informations au sujet de nos formations techniques et industrielles. Nous vous répondrons dans les plus brefs délais",
        },
      ],
    })
  },
}
</script>