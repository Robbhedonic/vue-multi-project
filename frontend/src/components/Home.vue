<template>
  <v-container class="home">
    <v-row>
      <v-col cols="12" md="6">
        <h1>Hi, I'm Roberto</h1>
        <h3>A passionate Frontend developer</h3>
        <p>
          I'm a motivated student currently seeking an internship opportunity to
          apply my skills and continue learning in a dynamic environment.
        </p>
        <v-btn color="primary" href="#contact"> Contact Me </v-btn>
      </v-col>
      <v-col cols="12" md="6">
        <v-img :src="'assets/img/profile1.png'" aspect-ratio="1"></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HomePage",
};
</script>
