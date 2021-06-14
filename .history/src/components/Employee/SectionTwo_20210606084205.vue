<template>
<div class="w-screen h-full bg-red-50 py-24">
   <div class="pt-12 px-24">
    <p class="text-2xl text-blue-900 font-semibold">Here you will find an overview of employees at Diku.</p>
    <div class="relative">
     <input class="w-full my-12 px-6 text-xl placeholder-blue-500 py-3 focus:outline-none" placeholder="Search by name, department and work area"/>
     <i class="icon fas fa-search text-blue-900 text-2xl"></i>
    </div>
   </div>
   <div class="flex flex-wrap px-24">
  <div class="py-4 w-1/2" v-for="user of users" :key="user.id">
  <div
    @mouseover="isActive = true"
    @mouseleave="isActive = false"
    class="relative h-48 mx-2"
  >
   <div class="shadows absolute right-0 bottom-0 bg-blue-900"></div>
   <button class="buttons absolute text-left bg-white ring-4 ring-blue-900 mr-3 px-8">
     <div class="flex w-full">
      <img class="mr-6 mb-4 w-1/4 justify-center" :src=user.picture />
      <div class="h-full px-3">
       <p class="text-2xl font-bold text-blue-900">{{user.first_name}} <span>{{user.last_name}}</span></p>
       <p class="mt-2 text-xl underline font-normal text-blue-900">{{user.department}}</p>
       <p class="text-lg font-bold text-blue-900 mb-6">{{user.position}}</p>
       <p class="text-lg inline underline text-secondary font-bold">
        More information
        <i class="fas fa-arrow-right text-md" :class="{ move: isActive }"></i>
       </p>
      </div>
     </div>
     
     
   </button>
  </div>
  </div>
  </div>
</div>
</template>

<script>
 
 export default {

   name: "SectionTwo",
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
  right: 20px ;
  bottom: 55px; 
 }
</style>