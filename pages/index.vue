<template>
  <v-layout justify-center align-center>
      <v-card class="rounded-xl" width="30%"  height="30%" elevation="2">
        <v-card-title class="secondary text-center">
          Admin Login
        </v-card-title>
      <v-card-text>
        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
        ></v-text-field>

        <v-text-field
          type="password"
          v-model="password"
          label="Password"
          required
        ></v-text-field>

        <v-btn
          height="50"
          color="primary"
          class="mr-4"
          block
          @click="login"
        >
          Login
        </v-btn>


      </v-card-text>
      </v-card>


  </v-layout>
</template>
<script>

import {mapGetters} from 'vuex'

export default {
  layout: "auth",
  data: () => ({
    valid: true,
    password: '',
    passwordRules: [
      v => !!v || 'Password is required',
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
  }),
  computed: {
    ...mapGetters({

    })
  },
  methods: {
    validate () {
      this.$refs.form.validate()
    },
    reset () {
      this.$refs.form.reset()
    },
    resetValidation () {
      this.$refs.form.resetValidation()
    },
    async login() {
      let data = {
        'email': this.email,
        'password': this.password
      }
      await this.$store.dispatch('_auth/login', data)

    }
  },


}
</script>
