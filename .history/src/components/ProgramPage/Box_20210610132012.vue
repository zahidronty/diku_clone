<template>
 
 
  <div class="mr-24 bg-white p-4 ring-4 ring-blue-900">
      <p class="font-semibold text-xl mb-4 ">Rights of Appeal</p>
      <p>{{jobs}}</p>
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

