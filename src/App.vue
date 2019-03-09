<template>


 <v-app>
      <page-header/>
      <transition
       v-on:before-enter="beforeEnter"
       v-on:enter="enter"
 
      >
       <event v-if="startAnimation"/>   
      </transition>
      <v-content>
        <v-spacer></v-spacer>
        <v-container fluid>
          <router-view></router-view>
          </v-container>
      </v-content>
    </v-app>



</template>

<script>
require('animate.css/animate.min.css');
import HelloWorld from './components/HelloWorld';
import PageHeader from './components/Header';
import Event from './components/Events';


export default {
  name: 'App',
  data:() =>({
    startAnimation: false
  }),
  components: {
    HelloWorld,
    PageHeader,
    Event
  },
  data () {
    return {
      //
    }
  },
  methods: {
        beforeEnter: function (el) {
      el.style.opacity = 0    
      Velocity(el, { translateX: '700px' }) 
      },
    enter: function (el, done) {
      Velocity(el, { opacity: 1})
      Velocity(el, { translateX: '0px'}, { duration: 800 })
      Velocity(el, { complete: done })
    },
  
  },
  mounted: function(){
this.startAnimation = true
  }
}
</script>


<style lang="scss">
.application--wrap{
  min-height: inherit;
}
</style>
