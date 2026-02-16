<template>
  <v-container>
    <h2>About Me</h2>
    <v-row>
      <v-col cols="12" md="6">
        <v-img :src="'assets/img/jungle.png'" alt="About image"></v-img>
      </v-col>
      <v-col cols="12" md="6">
        <p>I am a Frontend Developer...</p>
        <v-btn href="assets/pdf/Roberto.Carcamo-CV.pdf" download>
          Download CV
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "AboutMe",
};
</script>
