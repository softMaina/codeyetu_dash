<template>

  <v-col cols="4" >
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
  </v-col>

</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "Offers",
  data: () => ({
    editing: false,
    editedItem: {
      caption: null,
      offer_rate: null,
      offer_target: null,
      c_to_b: null,
      discount: null,
      brand_id: null,
      is_available: null,
    },
  }),
  created() {
    this.fetchOffers();
  },
  computed: {
    ...mapGetters({
      offers: 'brands/offers'
    }),
  },
  methods: {
    async fetchOffers(){
      await this.$store.dispatch('brands/fetchOffers');
    },
    async save () {
      let data = {
        'name': this.editedItem.name,
        'shop': this.editedItem.shop,
        'location': this.editedItem.location,
        'contact': this.editedItem.contact
      }
      console.log(data)
      await this.$store.dispatch('brands/addMerchant', data);
      this.close()
    },
  }
}
</script>

<style scoped>

</style>
