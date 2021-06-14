<template>
 <div class="relative w-full h-full mt-24 bg-red-50 flex">
      <div class="absolute list mr-6 p-8 bg-white">
        <List class=""/> 
        <List class=""/> 
        <List class=""/> 
        <List class=""/> 
        <List class=""/> 
        <List class=""/> 
        <List class=""/> 
      </div>
      <div class="blueShadow right-0 bg-blue-900">aSasasdasd</div>
      
    </div>
</template>

<script>
import List from "@/components/Programmes/List.vue"
export default {
 name: 'SectionThree',
 components: {List}
}
</script>

<style>
.list{
    width:90%;
    height:auto;
    
    
  }
  .blueShadow{
    width:90%;
   height: 100%;
   position:absolute;


    
  }
</style>
