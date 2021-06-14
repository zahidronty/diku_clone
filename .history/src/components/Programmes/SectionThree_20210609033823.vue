<template>
 <div class="relative w-full mt-24 bg-red-50">
      <div class=" absolute list mr-6 p-8 bg-white">
        <List class=""/> 
        <List class=""/> 
        <List class=""/> 
        <List class=""/> 
        <List class=""/> 
        <List class=""/> 
        <List class=""/> 
      </div>
      <div class="blueShadow  absolute right-0 h-full bg-blue-900">aSasasdasd</div>
      
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
    width:99%;
    
    
  }
  .blueShadow{
    width:100%;
    
  }
</style>
