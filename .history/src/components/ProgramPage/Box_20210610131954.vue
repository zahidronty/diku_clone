<template>
 <div class="relative w-full">
 
  <div class="absolute top-0 left-0 mr-24 bg-white p-4 ring-4 ring-blue-900">
      <p class="font-semibold text-xl mb-4 ">Rights of Appeal</p>
      <p>{{jobs}}</p>
  </div>
 </div>
</template>

<script>
export default {
 name:'Box',
 props:['jobs']
}
</script>

<style scoped>
 .boxShadow{
   width:95%;
   height: 94%;
   position:absolute;    
   
 }
 .boxMain{
  position:absolute;
 }
</style>

