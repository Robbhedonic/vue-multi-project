<template>
  <v-app>
    <!-- NavBar -->
    <NavBar />

    <!-- Main content area -->
    <v-main>
      <router-view />
    </v-main>

    <!-- Footer -->
    <Footer />
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    NavBar,
    Footer,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  text-align: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

v-main {
  flex: 1 0 auto;
}

footer {
  flex-shrink: 0;
}
</style>
