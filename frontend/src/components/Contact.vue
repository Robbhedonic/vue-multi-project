<template>
  <v-container>
    <h2>Contact Me</h2>
    <v-form @submit.prevent="submitForm">
      <v-text-field label="Name" v-model="form.name" required></v-text-field>
      <v-text-field label="Email" v-model="form.email" required></v-text-field>
      <v-textarea label="Message" v-model="form.message" required></v-textarea>
      <v-btn type="submit">Send Message</v-btn>
    </v-form>
  </v-container>
</template>

<script>
export default {
  name: "ContactPage",
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: "",
      },
    };
  },
  methods: {
    submitForm() {
      // Handle form submission here
      console.log(this.form);
    },
  },
};
</script>
