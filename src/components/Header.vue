<template>
   <v-toolbar fixed class="cyan">
       <v-toolbar-title class='mr-4'>Jewellery Website</v-toolbar-title>
       
        <v-toolbar-items><v-btn @click="navigateTo({name:'products'})" flat dark><span>Products</span></v-btn></v-toolbar-items> 
        <v-toolbar-items><v-btn @click="navigateTo({name:'about'})" flat dark><span>About</span></v-btn></v-toolbar-items>
        <v-toolbar-items><v-btn @click="navigateTo({name:'home'})" flat dark><span>Home</span></v-btn></v-toolbar-items>
        <v-spacer></v-spacer>
        <v-toolbar-items><v-btn @click="navigateTo({name:'register'})" flat dark>Register</v-btn></v-toolbar-items>
          <v-spacer></v-spacer>
       <v-toolbar-items> 
           <v-btn flat dark @click="navigateTo({name:'login'})">Login</v-btn>
       </v-toolbar-items>
        <v-spacer></v-spacer>
      
       
   </v-toolbar>
</template>

<script>

export default {
    methods: {
        navigateTo(route) {
            this.$router.push(route);
        }
    }
}
</script>

<style scoped>


</style>