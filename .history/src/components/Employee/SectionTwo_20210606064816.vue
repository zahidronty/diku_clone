<template>
<div class="w-screen bg-red-50">
   <div class="pt-12 px-24">
   asd
   </div>
  </div>
  <div v-for="user of users" :key="user.id">
  </div>
</template>

<script>
 import Header from "@/components/Header.vue";
 import BoxTopLeft from "@/components/BoxTopLeft.vue";
 import BoxTopRight from "@/components/BoxTopRight.vue";
 
 export default {

   name: "SectionTwo",

   components:{
    BoxTopLeft,
    BoxTopRight,
   },

   data() {
    return {
     users: []
    };
   },

   mounted() {
    fetch('http://localhost:3000/users')
    .then(res => res.json())
    .then(data => this.users = data)
    .catch(err => console.log(err.message))
   }
 };
</script>
