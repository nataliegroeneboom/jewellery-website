<template>
    <v-layout>
        
        <v-flex xs5 offset-xs3 class="elevation-2">
            <div class="white">
                <v-toolbar flat dense class="cyan" dark>
                    <v-toolbar-title>Register</v-toolbar-title>
                </v-toolbar>
            </div>
   <div class="login pl-4 pr-4 pt-2 pb-2">
         <v-text-field
            label="Email"
            placeholder="email"
            v-model="email"
          ></v-text-field>
          <v-text-field
            label="Password"
            placeholder="password"
            v-model="password"
          ></v-text-field>
    
        <div class="error" v-html="error"></div>
        <v-btn @click="login">Login</v-btn>
    </div>
         </v-flex>   

    </v-layout>
   
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService';
export default {
    data(){
        return {
            email: '',
            password: '',
            error: null
        }
    },
    methods: {
       async login(){
           try{
                await AuthenticationService.login({
               email: this.email,
               password: this.password 
            })
           }catch(error){
               this.error = error.response.data.error
           }
          
            
            
            
        }
    },
}
</script>

<style scoped>
    .error {
        color: red;
    }

</style>