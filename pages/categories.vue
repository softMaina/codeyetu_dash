<template>
  <v-sheet>
    <v-data-table
      :headers="headers"
      :items="brand_categories"
      class="elevation-1 thin-poppins"
    >
      <template v-slot:top>
        <v-toolbar
          flat
        >
          <v-toolbar-title>Brand Categories</v-toolbar-title>
          <v-divider
            class="mx-4"
            inset
            vertical
          ></v-divider>
          <v-spacer></v-spacer>
          <v-dialog
            v-model="dialog"
            max-width="500px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="primary"
                dark
                class="mb-2"
                v-bind="attrs"
                v-on="on"
              >
                <div class="medium-poppins">
                  Add Brand Category
                </div>
              </v-btn>
            </template>
            <v-card class="thin-poppins">
              <v-card-title>
                <span class="text-h5">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col
                      cols="12"
                      sm="12"
                      md="12"
                    >
                      <v-text-field
                        v-model="editedItem.title"
                        label="Title"
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="12"
                      md="12"
                    >
                      <v-text-field
                        v-model="editedItem.description"
                        label="Description"
                      ></v-text-field>
                    </v-col>

                    <v-col
                      cols="12"
                      sm="12"
                      md="12"
                    >
                      <v-file-input
                        truncate-length="15"
                        label="Upload Category Image"
                        v-model="editedItem.logo"
                      ></v-file-input>
                    </v-col>

                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="blue darken-1"
                  text
                  @click="close"
                >
                  Cancel
                </v-btn>
                <v-btn
                  color="blue darken-1"
                  text
                  @click="save"
                >
                  Save
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon
          small
          class="mr-2"
          @click="editItem(item)"
        >
          mdi-pencil
        </v-icon>
        <v-icon
          small
          @click="deleteItem(item)"
        >
          mdi-delete
        </v-icon>
      </template>

    </v-data-table>
  </v-sheet>
</template>

<script>
import {mapGetters} from "vuex";


export default {
  name: "categories",
  data: () => ({
    dialog: false,
    dialogDelete: false,
    editing: false,
    headers: [
      {
        text: 'Title',
        align: 'start',
        sortable: false,
        value: 'title',
      },
      {text: 'Description', value: 'description'},
      {text: 'Background Image', value: 'image'},
      {text: 'Actions', value: 'actions', sortable: false},
    ],
    editedIndex: -1,
    editedItem: {
      title: null,
      description: null,
      logo: null,


    },
    defaultItem: {
      title: '',
      description: 0,
      logo: 0,

    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'New Brand Category' : 'Edit Brand Category'
    },
    ...mapGetters({
      brand_categories: 'brands/brand_categories',
    }),
  },

  watch: {
    dialog(val) {
      val || this.close()
    },
    dialogDelete(val) {
      val || this.closeDelete()
    },
  },

  created() {
    this.fetchBrands();
  },

  methods: {
    async fetchBrands() {
      await this.$store.dispatch('brands/fetchBrands');
      await this.$store.dispatch('brands/fetchCategories');
    },

    editItem(item) {
      this.editing = true
      this.editedIndex = this.brand_categories.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem(item) {
      this.editedIndex = this.desserts.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    deleteItemConfirm() {
      this.desserts.splice(this.editedIndex, 1)
      this.closeDelete()
    },

    close() {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    closeDelete() {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    async save() {



      let data = JSON.stringify({
        'title': this.editedItem.title,
        'description': this.editedItem.description,

      })

      if (this.editedItem.logo) {
        let formData = new FormData();

        // files
        formData.append("file", this.editedItem.logo, this.editedItem.logo.name);


        formData.append("data", data);
        console.log(data)
        // check if editing
        if(this.editing){
           let id = this.editedItem.id
          await this.$store.dispatch('brands/editBrandCategory', {data: formData, id: id});
           this.editing=false
        }else{
          await this.$store.dispatch('brands/addBrandCategory', formData);
        }

      } else {
        console.log("You must upload a background Image");
      }

      this.close()
    },
  }
}
</script>

<style scoped>

</style>
