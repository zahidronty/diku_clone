<template>
<div class="relative h-48 mx-2">
   <div class="shadows absolute right-0 bottom-0 bg-blue-900"></div>
   <button class="buttons absolute text-left bg-white ring-4 ring-blue-900 mr-3 px-8">
     <div class="flex w-full">
      <img class="mr-6 mb-4 w-1/4 justify-center" :src={{picture}} />
      <div class="h-full px-3">
       <p class="text-2xl font-bold text-blue-900">{{firstName}} <span>{{lastName}}</span></p>
       <p class="mt-2 text-xl underline font-normal text-blue-900">{{user.department}}</p>
       <p class="text-lg font-bold text-blue-900 mb-6">{{user.position}}</p>
       <p class="text-lg inline underline text-secondary font-bold"
        @mouseover="isActive = true"
        @mouseleave="isActive = false"
       >
        More information
        <i class="fas fa-arrow-right text-md" :class="{ move: isActive }"></i>
       </p>
      </div>
     </div>
   </button>
  </div>
</template>

<script>
 export default{
  name: "EmployeeBox",
  data() {
   return {
    isActive: false,
   };
  },
 }
 
</script>

<style>
 .shadows {
  width: 90%;
  height: 90%;
}
.move {
  transform: translateX(10px);
  transition-duration: 1s;
  transition-timing-function: ease-in-out;
}
</style>
