<template>
  <v-app-bar app>
    <v-toolbar-title>
      <img src="assets/img/logo.jpeg" alt="Logo" class="img-logo-nav" />
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>mdi-menu</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "HeaderPage",
};
</script>

<style scoped>
.img-logo-nav {
  width: 50px;
  height: auto;
}
</style>
