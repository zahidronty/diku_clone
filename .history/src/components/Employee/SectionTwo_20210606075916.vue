<template>
<div class="w-screen h-full bg-red-50 py-24">
   <div class="pt-12 px-24">
    <p class="text-2xl text-blue-900 font-semibold">Here you will find an overview of employees at Diku.</p>
    <div class="relative">
     <input class="w-full my-12 px-6 text-xl placeholder-blue-500 py-3 focus:outline-none" placeholder="Search by name, department and work area"/>
     <i class="icon fas fa-search text-blue-900 text-2xl"></i>
    </div>
   </div>
  <div class="bg-green-300 h-64 py-48 flex flex-wrap w-full " v-for="user of users" :key="user.id">
  <div
    @mouseover="isActive = true"
    @mouseleave="isActive = false"
    class="relative h-48"
  >
   <div class="shadows absolute bottom-0 bg-blue-900"></div>
   <button class="buttons absolute right-0 text-left font-semibold text-3xl bg-white ring-4 ring-blue-900 ml-3 px-8">
     <p class="text-blue-900 font-bold mb-1"> Hello </p>
     <p class="secondaryColor font-bold"> sdsf </p>
     <p class="text-xl font-normal mt-4 inline">
       sdada
       <i class="fas fa-arrow-right text-md" :class="{ move: isActive }"></i>
     </p>
   </button>
  </div>
  <div
    @mouseover="isActive = true"
    @mouseleave="isActive = false"
    class="relative w-1/3 h-48"
  >
   <div class="shadows absolute bottom-0 bg-blue-900"></div>
   <button class="buttons absolute right-0 text-left font-semibold text-3xl bg-white ring-4 ring-blue-900 ml-3 px-8">
     <p class="text-blue-900 font-bold mb-1"> Hello </p>
     <p class="secondaryColor font-bold"> sdsf </p>
     <p class="text-xl font-normal mt-4 inline">
       sdada
       <i class="fas fa-arrow-right text-md" :class="{ move: isActive }"></i>
     </p>
   </button>
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