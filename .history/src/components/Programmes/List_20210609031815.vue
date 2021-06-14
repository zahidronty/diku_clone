<template>
 <div @mouseover="isMove=true" @mouseleave="isMove=false" class="w-full border-b-2 border-secondary py-2 flex items-center justify-between">
  <div class="w-2/3">
   <p class="text-secondary text-lg font-semibold">Norwegian Artistic Research Programme</p>
   <p class="text-medium">Funding for the artistic research project for the creative and performing Art</p>
  </div>
  <div class="flex">
  <p class=" font-semibold text-blue-900 mr-3"> Application deadline:</p>
  <span> 9/24/21</span>
  </div>
  <i :class="{move:isMove}" class="w-auto text-3xl text-secondary text-right fa fa-arrow-right" aria-hidden="true"></i>

 </div>
</template>

<script>
export default {
 name: "List",
 data(){
  return{
   isMove:false,
  }
 },
};
</script>

<style>
 .move{
  translateX: 5px;
 }
</style>
