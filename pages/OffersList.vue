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
              >
                <div class="medium-poppins">
                Post Offer
                </div>
              </v-btn>
            </v-row>

          </template>
          <template v-slot:default="dialog">
            <v-card class="thin-poppins">
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
                <v-row>
                  <v-col cols="6">
                    <v-switch
                      v-model="editedItem.c_to_b"
                      label="Is C2B"
                    ></v-switch>
                  </v-col>
                  <v-col cols="6">
                    <v-switch
                      v-model="editedItem.is_available"
                      label="Make available immediately"
                    ></v-switch>

                  </v-col>

                </v-row>

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
          <v-card elevation="5" class="d-flex flex-column justify-center align-center pa-5 ma-5 rounded-lg"
                  tile height="450" width="450">
            <v-img
              height="200" width="200" aspect-ratio="16/9" contain
              :src="`${$axios.defaults.baseURL}` + offer.brand.logo"
            ></v-img>
            <v-card-text justify="center" align="center">
              <p class="text-justify medium-poppins">{{offer.caption}}</p>
            </v-card-text>
            <v-card-actions style="width: 100%;">
              <v-row >
              <v-btn outlined elevation="0" large color="secondary"  @click="editItem(offer)">
                <div class="medium-poppins">
                Edit
                </div>
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn elevation="0" large @click.native="deleteOffer(offer)" color="primary">
                <div class="medium-poppins">
                Delete
                </div>
              </v-btn>
              </v-row>
            </v-card-actions>
          </v-card>
        </v-col>

    </v-row>
  </v-sheet>

</template>

<script>

import {mapGetters} from "vuex";

export default {
  name: "OffersList",
  components: {},
  data: () => ({
    editing: false,
    dialog: false,
    editedItem: {
      caption: null,
      discount: null,
      offer_rate: null,
      offer_target: null,
      c_to_b: true,
      brand_id: null,
      is_available: true,
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

    editItem(item) {
      this.editing = true
      this.editedIndex = this.offers.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem(item) {
      this.editedIndex = this.offers.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    deleteItemConfirm() {
      this.offers.splice(this.editedIndex, 1)
      this.closeDelete()
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
        'brand_id': this.editedItem.brand_id,
        'offer_rate': parseInt(this.editedItem.offer_rate),
        'offer_target': parseInt(this.editedItem.offer_target),
        "c_to_b": this.editedItem.c_to_b,
        'discount': this.editedItem.discount,
        'is_available': this.editedItem.is_available
      }
      console.log(data)
      if(this.editing){
        await this.$store.dispatch('brands/editOffer', {data: data, id: this.editedItem.offer_id});

      }else {
        await this.$store.dispatch('brands/addOffer', data);

      }
      this.close()
    },

    async deleteOffer(offer){

      await this.$store.dispatch('brands/deleteOffer', offer.offer_id)
    }
  }
}
</script>

<style scoped>

</style>
