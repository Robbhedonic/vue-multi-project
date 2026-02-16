<template>
  <v-app-bar app color="primary" dark elevate-on-scroll flat>
    <v-toolbar-title class="d-flex align-center">
      <!-- <img src="assets/img/logo.jpeg" alt="Logo" class="img-logo-nav mr-2" /> -->
      <span class="font-weight-bold text-h6">My Portfolio</span>
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <!-- Desktop Navigation Links -->
    <div class="d-none d-md-flex">
      <v-btn
        v-for="link in links"
        :key="link.to"
        :href="link.to"
        text
        class="mx-1"
      >
        <v-icon start>{{ link.icon }}</v-icon>
        {{ link.text }}
      </v-btn>
    </div>

    <!-- Mobile Navigation Toggle -->
    <v-btn icon @click="toggleDrawer">
      <v-icon>{{ drawerOpen ? "mdi-menu-open" : "mdi-menu" }}</v-icon>
    </v-btn>

    <!-- Mobile Navigation Drawer -->
    <v-navigation-drawer v-model="drawerOpen" app temporary>
      <v-list dense>
        <v-list-item v-for="link in links" :key="link.to" :href="link.to">
          <v-list-item-icon>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ link.text }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Theme Toggle -->
    <v-btn icon @click="toggleTheme">
      <v-icon>
        {{ darkMode ? "mdi-white-balance-sunny" : "mdi-moon-waxing-crescent" }}
      </v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      links: [
        { text: "Home", to: "/", icon: "mdi-home" },
        { text: "About", to: "/about", icon: "mdi-account" },
        { text: "Skills", to: "/skills", icon: "mdi-code-tags" },
        { text: "Portfolio", to: "/portfolio", icon: "mdi-image" },
        { text: "Contact", to: "/contact", icon: "mdi-email" },
      ],
      drawerOpen: false,
    };
  },
  computed: {
    darkMode() {
      return this.$vuetify.theme.dark;
    },
  },
  methods: {
    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
    toggleDrawer() {
      this.drawerOpen = !this.drawerOpen;
    },
  },
};
</script>

<style scoped>
.img-logo-nav {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
}
</style>
