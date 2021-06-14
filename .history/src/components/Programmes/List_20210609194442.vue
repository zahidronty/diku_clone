<template>
 <div @mouseover="isMove=true" @mouseleave="isMove=false" class="w-full border-b-2 border-secondary z-80 px-6 py-2 flex items-center justify-between bg-white">
  <div class="w-2/3">
   <p class="text-secondary text-lg font-semibold"> {{title}} </p>
   <p class="text-medium"> {{subtitle}} </p>
  </div>
  <div class="flex">
   <p class=" font-semibold text-blue-900 mr-3"> Application deadline:</p> <span> {{deadline}} </span>
  </div>
  <i :class="{move:isMove}" class="w-auto text-3xl text-secondary text-right fa fa-arrow-right" aria-hidden="true"></i>
 </div>
</template>

<script>
 import moment from 'moment'

 export default {
  name: "List",
  props:['title', 'subtitle', 'deadline'],
  data(){
   return{
    isMove:false,
   }
  },
  computed:{
   deadline(){
    
   }
  }
 };
</script>

<style>
 .move{
  transform: translateX(5px);
 }
</style>
