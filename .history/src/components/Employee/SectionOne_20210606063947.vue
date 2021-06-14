<template>
   <div>

  <div class="pt-12 px-24">
   <Header @modal="modal" />
   <p class="text-5xl my-24 font-semibold text-blue-900"> Employees </p>
  <div>
  <div class="w-screen bg-red-50">sad</div>
  <div v-for="user of users" :key="user.id">
    
   </div>
  </div>
</template>

<script>
 import Header from "@/components/Header.vue";
 
 export default {
   name: "SectionOne",
   components:{Header},
   data() {
    return {
     users: []
    };
   },
   methods:{
     modal(x){
       this.$emit('modal',x)
     },
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
  .homeSectionOne {
    background-color: #e8eae9;
  }
</style>
