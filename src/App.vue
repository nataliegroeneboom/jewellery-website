<template>


 <v-app>
      <page-header/>
      <v-content>
        <v-spacer></v-spacer>
        <v-container fluid>
          <router-view></router-view>
          </v-container>
      </v-content>
    </v-app>



</template>

<script>
import HelloWorld from './components/HelloWorld';
import PageHeader from './components/Header';


export default {
  name: 'App',
  components: {
    HelloWorld,
    PageHeader
  },
  data () {
    return {
      //
    }
  }
}
</script>
