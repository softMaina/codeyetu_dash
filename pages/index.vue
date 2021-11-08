<template>

  <v-img height="100%" src="images/bg.png" class="align-center" fit aspect-ratio="16/9">
    <div class="d-flex justify-center ">
      <v-card class="rounded-lg thin-poppins" width="30%" height="45%" elevation="5">
        <v-card-title class="secondary text-center justify-center">
          <div class="white--text ">
            Admin Login
          </div>

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
            <div class="regular-poppins">
              Login
            </div>

          </v-btn>


        </v-card-text>
      </v-card>
    </div>
  </v-img>


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
    ...mapGetters({})
  },
  methods: {
    validate() {
      this.$refs.form.validate()
    },
    reset() {
      this.$refs.form.reset()
    },
    resetValidation() {
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
<style scoped>

</style>
