<template>
  <v-container>
    <h2>My Technical Skills</h2>
    <v-row>
      <v-col cols="12" md="6" v-for="(skill, index) in skills" :key="index">
        <v-card>
          <v-card-title>{{ skill.name }}</v-card-title>
          <v-card-subtitle>{{ skill.level }}%</v-card-subtitle>
          <v-progress-linear
            :value="skill.level"
            color="blue"
          ></v-progress-linear>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "SkillsPage",
  data() {
    return {
      skills: [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 80 },
        { name: "JavaScript", level: 70 },
        { name: "Vue.js", level: 60 },
        { name: "React.js", level: 50 },
        { name: "Node.js", level: 40 },
      ],
    };
  },
};
</script>
