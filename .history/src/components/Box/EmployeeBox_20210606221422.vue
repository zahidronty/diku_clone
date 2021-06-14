<template>
<div class="relative h-48 mx-2">
   <div class="shadows bg-blue-900" :class="{ expand: isExpand }"/>
   <div class="focus:outline-none absolute text-left bg-white ring-4 ring-blue-900 mr-3 px-8" 
    :class="{ expand: isExpand }"
   >
     <div class="flex w-full">
      <img class="mr-6 mb-4 w-32 justify-center" :src= picture />
      <div class="h-full px-3">
       <p @click="isExpand=true" class="text-2xl font-bold text-blue-900">{{firstName}} <span>{{lastName}}</span></p>
       <p class="mt-2 text-xl underline font-normal text-blue-900">{{department}}</p>
       <p class="text-lg font-bold text-blue-900 mb-6">{{position}}</p>
       <p class="text-lg inline underline text-secondary font-bold" 
        @mouseover="isActive = true"
        @mouseleave="isActive = false"
        @click ="isExpand = true"
       >
        More information
        <i class="fas fa-arrow-right text-md" :class="{ move: isActive }"></i>
       </p>
      </div>
     </div>
   </div>
  </div>
</template>

<script>
 export default{
  name: "EmployeeBox",
  props: ['picture', 'firstName', 'lastName', 'department', 'position'],
  data() {
   return {
    isActive: false,
    isExpand:false,
   };
  },
 }
</script>

<style>
 .main{
  position: absolute;
 }
 .shadows {
  width: 90%;
  height: 100%;
  position: absolute;
  right: 0;
  bottom: 0;
}
.move {
  transform: translateX(10px);
  transition-duration: 1s;
  transition-timing-function: ease-in-out;
}
.expand{
  width: 85vw;
  z-index: 10;
}
</style>
