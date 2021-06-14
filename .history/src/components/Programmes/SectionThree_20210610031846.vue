<template>
 <div class="relative h-full mt-24 bg-red-50 flex">
      <div class="absolute list mr-12 mb-24 p-8 bg-white">
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
    z-index:20;
  }
  .blueShadow{
    width:98%;
    height: 600px;
    position:absolute;
  }
</style>
