<template>
  <v-sheet>
    <v-row justify="end" class=" mt-2 mr-4">
      <v-col cols="auto">
        <v-dialog
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
                <v-row>

                    <v-select
                      :items="items"
                      label="Outlined style"
                      outlined
                    ></v-select>

                </v-row>
                <v-row>

                  <v-text-field
                    label="Offer Description"
                    outlined
                  ></v-text-field>

                </v-row>
                <v-row>

                  <v-text-field
                    label="Offer Rate"
                    outlined
                  ></v-text-field>

                </v-row>

                <v-row>

                  <v-text-field
                    label="No Of Referrals"
                    outlined
                  ></v-text-field>

                </v-row>

              </v-card-text>
              <v-card-actions class="justify-end">
                <v-btn
                  text
                  @click="dialog.value = false"
                >Cancel</v-btn>
                <v-btn
                  text
                  @click="dialog.value = false"
                >Save</v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </v-dialog>
      </v-col>
    </v-row>
    <v-row>
      <Offers/>
    </v-row>
  </v-sheet>

</template>

<script>
import Offers from "../components/Offers";
export default {
  name: "OffersList",
  components: {Offers},
  data: () => ({
    items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
  }),
}
</script>

<style scoped>

</style>
