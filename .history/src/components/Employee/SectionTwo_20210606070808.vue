<template>
<div class="w-screen bg-red-50">
   <div class="pt-12 px-24">
    <p class="text-2xl text-blue-900 font-semibold">Here you will find an overview of employees at Diku.</p>
    <div class="relative">
     <input class="w-full my-12 py-3"/>
     <i class="icon fas fa-search text-2xl"></i>
    </div>
  </div>
  </div>
  <div v-for="user of users" :key="user.id">

  </div>
</template>

<script>
 
 import BoxTopLeft from "@/components/Box/BoxTopLeft.vue";
 import BoxTopRight from "@/components/Box/BoxTopRight.vue";
 
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

<style>
 .icon{
  position: absolute;
  right:0 ;
  bottom: 10; 
 }
</style>