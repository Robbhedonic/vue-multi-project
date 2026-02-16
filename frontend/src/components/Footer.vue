<template>
  <v-footer color="primary" app>
    <v-container>
      <v-row align="center" justify="space-between">
        <v-col cols="12" sm="6">
          <span
            >&#169; R.C.C. <br />New Thinking Technology <br />All rights
            reserved</span
          >
        </v-col>
        <v-col cols="12" sm="6" class="text-right">
          <v-btn
            icon
            href="https://www.linkedin.com/in/roberto-carcamo-colivoro-0344b118a/"
          >
            <v-icon>mdi-linkedin</v-icon>
          </v-btn>
          <v-btn icon href="https://github.com/Robbhedonic">
            <v-icon>mdi-github</v-icon>
          </v-btn>
          <v-btn icon href="https://www.instagram.com/">
            <v-icon>mdi-instagram</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: "FooterPage",
};
</script>

<style scoped>
.v-footer {
  padding: 20px 0;
}
</style>
