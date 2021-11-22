<template>
  <v-app>
    <v-navigation-drawer
      color="white"
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <div style="height:60px;">
        <v-img src="images/logo.png"></v-img>
      </div>
      <v-divider></v-divider>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
          class="regular-poppins"
        >
          <v-list-item-action>
            <v-icon color="#f5ad33">{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title  v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      color="#f5ad33"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />


      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn
        icon
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <Nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >
      <v-list>
        <v-list-item>
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Log Out</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: true,
      items: [
        {
          icon: 'mdi-desktop-mac-dashboard',
          title: 'Home',
          to: '/home'
        },
        {
          icon: 'mdi-select-group',
          title: 'Brand Categories',
          to: '/categories'
        },
        {
          icon: 'mdi-chart-ppf',
          title: 'Brands',
          to: '/brands'
        },
        {
          icon: 'mdi-tag',
          title: 'Offers',
          to: '/OffersList'
        },
        {
          icon: 'mdi-store-marker-outline',
          title: 'Merchants',
          to: '/merchant'
        },
        {
          icon: 'mdi-message-flash-outline',
          title: 'Referrals',
          to: '/referrals'
        },
        {
          icon: 'mdi-account-group-outline',
          title: 'Users',
          to: '/users'
        },
        {
          icon: ' mdi-cog-sync-outline',
          title: 'Message Config',
          to: '/message_config'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Dashboard'
    }
  }
}
</script>
