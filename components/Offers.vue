<template>
      <v-card class="d-flex flex-column pa-2 ma-2 rounded-lg"
              tile>
        <v-img
          lazy-src="https://picsum.photos/id/11/10/6"
          max-height="150"
          max-width="250"
          src="https://picsum.photos/id/11/500/300"
        ></v-img>
        <v-card-text justify="center" align="center">
          <p class="text-justify">Airtel Kenya</p>
        </v-card-text>
        <v-card-actions>
          <v-btn outlined elevation="2" color="primary">Edit</v-btn>
          <v-spacer></v-spacer>
          <v-btn elevation="2" color="secondary">Delete</v-btn>
        </v-card-actions>
      </v-card>
</template>

<script>
export default {
  name: "Offers"
}
</script>

<style scoped>

</style>
