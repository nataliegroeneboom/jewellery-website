<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
        <router-link to="/products"><v-btn flat><span>Products</span></v-btn></router-link>
        <router-link to="/about"><v-btn flat><span>About</span></v-btn></router-link>
        <router-link to="/"><v-btn flat><span>Home</span></v-btn></router-link>
        <router-link to="/register"><v-btn flat><span>Register</span></v-btn></router-link>
      <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';


export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {
      //
    }
  }
}
</script>
