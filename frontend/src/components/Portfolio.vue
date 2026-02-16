<template>
  <v-container>
    <h2 class="text-center mb-5">Portfolio</h2>
    <v-row>
      <v-col
        v-for="(project, index) in projects"
        :key="index"
        :cols="12"
        :md="4"
        class="d-flex"
      >
        <v-card :href="project.link" target="_blank" class="mx-auto" outlined>
          <v-img :src="project.image" height="200px" />
          <v-card-title>{{ project.title }}</v-card-title>
          <v-card-subtitle>{{ project.description }}</v-card-subtitle>
          <v-card-actions>
            <v-btn color="primary" text>View Demo</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "PortfolioComponent",
  data() {
    return {
      projects: [
        {
          title: "Quiz Application",
          description: "A web application built with JavaScript.",
          image: "assets/img/quiz.jpeg",
          link: "https://robbhedonic.github.io/JavascriptQuiz1/",
        },
        {
          title: "Pokemon App",
          description: "A dynamic web app showing Pokemon data.",
          image: "assets/img/pokemon.jpeg",
          link: "https://robbhedonic.github.io/Pokemon-Application/",
        },
        {
          title: "First Website",
          description: "My first website built with HTML and CSS.",
          image: "assets/img/f-w.jpeg",
          link: "https://robbhedonic.github.io/index.html",
        },
      ],
    };
  },
};
</script>

<style scoped>
.v-card {
  transition: transform 0.3s;
}

.v-card:hover {
  transform: translateY(-5px);
}
</style>
