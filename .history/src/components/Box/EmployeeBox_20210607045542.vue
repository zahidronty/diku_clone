<template>
<div class="relative h-48 mx-2">
   <div class="shadows absolute right-0 bottom-0 bg-blue-900" :class="{ expandShadowLeft: isExpandLeft, expandShadowRight: isExpandRight }"/>
   <button class="flex focus:outline-none buttons absolute text-left bg-white ring-4 ring-blue-900 mr-3 px-8" 
    :class="{ expandMainLeft: isExpandLeft, expandMainRight: isExpandRight }" 
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
        @click ="expand"
       >
        More information
        <i class="fas fa-arrow-right text-md" :class="{ move: isActive }"></i>
       </p>
      </div>
     </div>
     <div class=""  >
      <i @click="shrink" :class="{ showIcon: isExpandLeft || isExpandRight }" class="hidden fa fa-times text-5xl text-blue-900" aria-hidden="true"></i>
     </div>
   </button>
  </div>
</template>

<script>
 export default{
  name: "EmployeeBox",
  props: ['picture', 'firstName', 'lastName', 'department', 'position'],
  data() {
   return {
    isActive: false,
    isExpandLeft:false,
    isExpandRight:false,
   };
  },
  methods: {
   expand(e){
    ( e.screenX > 500 ? 
      this.isExpandRight = true 
      :this.isExpandLeft = true 
    );
   },
   shrink(e){
    this.isExpandRight = false; 
    this.isExpandLeft = false; 
   }
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
 .expandShadowLeft{
  width: 85vw;
  z-index: 10;
  transition: width 1s;
  left:0;
 }
 .expandMainLeft{
   width: 84vw;
   z-index: 10;
   transition: width 1s;
   left:0;
 }
 .expandShadowRight{
  width: 81vw;
  z-index: 10;
  transition: width 1s;
  right:0;
 }
 .expandMainRight{
   width: 83vw;
   z-index: 10;
   transition: width 1s;
   right:0;
 }
 .showIcon{
  visibility: visible;
  background-color:red;
  color: blue;
 }
</style>
