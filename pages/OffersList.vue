<template>
  <v-sheet>
    <v-row justify="end" class=" mt-2 mr-4">
      <v-col cols="auto">
        <v-dialog
          v-model="dialog"
          transition="dialog-bottom-transition"
          max-width="600"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-row>
              <v-btn
                color="primary"
                v-bind="attrs"
                v-on="on"
              >Add Offer</v-btn>
            </v-row>

          </template>
          <template v-slot:default="dialog">
            <v-card>
              <v-toolbar
                color="primary"
                dark
              >Add Offer</v-toolbar>
              <v-card-text>
                <v-row class="mt-4">

                    <v-select
                      :items="brands"
                      name="brand"
                      item-text="title"
                      item-value="brand_id"
                      v-model="editedItem.brand_id"
                      label="Brand With Offer"
                      outlined
                    ></v-select>

                </v-row>
                <v-row>

                  <v-text-field
                    v-model="editedItem.discount"
                    label="Discount"

                    outlined
                  ></v-text-field>

                </v-row>
                <v-row>

                  <v-text-field
                    v-model="editedItem.caption"
                    label="Offer Caption"

                    outlined
                  ></v-text-field>

                </v-row>
                <v-row>

                  <v-text-field
                    v-model="editedItem.offer_rate"
                    label="Offer Rate"
                    outlined
                  ></v-text-field>

                </v-row>

                <v-row>

                  <v-text-field
                    label="No Of Referrals"
                    v-model="editedItem.offer_target"
                    outlined
                  ></v-text-field>
                </v-row>


<!--                <v-row>-->

<!--                  <v-switch-->
<!--                </v-row>-->

              </v-card-text>
              <v-card-actions class="justify-end">
                <v-btn
                  text
                  @click="dialog.value = false"
                >Cancel</v-btn>
                <v-btn
                  text
                  @click="save"
                >Save</v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </v-dialog>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
        <v-col cols="4" v-for="offer in offers" :key="offer.offer_id" >
          <v-card class="d-flex flex-column pa-2 ma-2 rounded-lg"
                  tile height="450" width="450">
            <v-img
              height="200" width="200" aspect-ratio="16/9" contain
              :src="`${$axios.defaults.baseURL}` + offer.brand.logo"
            ></v-img>
            <v-card-text justify="center" align="center">
              <p class="text-justify">{{offer.caption}}</p>
            </v-card-text>
            <v-card-actions>
              <v-btn outlined elevation="2" color="primary">Edit</v-btn>
              <v-spacer></v-spacer>
              <v-btn elevation="2" color="secondary">Delete</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

    </v-row>
  </v-sheet>

</template>

<script>

import {mapGetters} from "vuex";
import brands from "./brands";
export default {
  name: "OffersList",
  components: {},
  data: () => ({
    dialog: false,
    editedItem: {
      caption: null,
      discount: null,
      offer_rate: null,
      offer_target: null,
      c_to_b: null,
      brand_id: null
    },
  }),
  created() {
    this.fetchOffers();
  },
  computed: {
    ...mapGetters({
      offers: 'brands/offers',
      brands: 'brands/brands',
    }),
  },
  methods: {
    async fetchOffers(){
      await this.$store.dispatch('brands/fetchOffers');
      await this.$store.dispatch('brands/fetchBrands');
      console.log(this.offers);
    },

    close () {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    async save () {
      let data = {
        'caption': this.editedItem.caption,
        'brand_id': 1,
        'offer_rate': parseInt(this.editedItem.offer_rate),
        'offer_target': parseInt(this.editedItem.offer_target),
        "c_to_b":true
      }
      console.log(data)
      await this.$store.dispatch('brands/addOffer', data);
      this.close()
    },
  }
}
</script>

<style scoped>

</style>
