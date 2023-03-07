<template>
    <div class="user">
      
      <h3>Users</h3>
      <router-link to="/">Home</router-link>
      <br>
      <router-link to="/user">User</router-link>
      
      <hr>
      
      <UserCards 
        v-for="(user, key) in users"
        :key="key"
        :name="user.name"
        :email="user.email"
        :number="user.number"
        :eventDate="user.eventDate"
      />
    </div>
    
  </template>

<script>

import UserCards from '@/components/UserCards.vue';
import { mapGetters, mapActions } from 'vuex';
export default{
    components: {
      UserCards
    },
    mounted(){
        this.fetchUsers()
    },
    computed:{
      ...mapGetters({
               users: 'users'
           })
    },
    methods: {
      ...mapActions({
               fetchUsers: 'fetchUsers'
           })
    }
}
</script>

  
  