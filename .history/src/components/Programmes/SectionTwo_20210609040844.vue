<template>
  <div class="pt-24 pb-24 px-24 flex flex-col h-auto bg-red-50">
    <p class="w-2/3 font-bold text-2xl text-blue-900">
     Diku is Norway’s official agency for international programmes and measures related to education. It is commissioned by several national and international public organisations to administer programmes at all levels of education
    </p>

    <p class="mt-12 font-semibold text-xl text-blue-900">Education level</p>

    <div class="flex flex-wrap py-3 w-3/4">
      <div class="py-3 px-2 bg-secondary text-xl text-white mr-3 mb-4">Elementary school and kindargarten </div>
      <div class="py-3 px-2 bg-secondary text-xl text-white mr-3 mb-4">Upper secondary education </div>
      <div class="py-3 px-2 bg-secondary text-xl text-white mr-3 mb-4">Adult learning </div>
      <div class="py-3 px-2 bg-secondary text-xl text-white mr-3 mb-4">Higher vocational education </div>
      <div class="py-3 px-2 bg-secondary text-xl text-white mr-3 mb-4">Higher education </div>
    </div>

    <p class="mt-3 font-semibold text-xl text-blue-900 mb-3">Topic</p>
    <div class="flex flex-wrap py-3 w-3/4">
      <p class="py-3 px-2 bg-secondary text-xl text-white mr-3 mb-4">Artistic research</p>
    </div>

    <p class="mt-3 font-semibold text-xl text-blue-900 mb-3">Sort By</p>
    <div class="flex flex-col w-3/4">
      <p class="px-2 bg-secondary text-xl text-white mr-3 mb-4">Application deadline
        <i class=" text-xl ml-2 fas fa-arrow-down"></i>
      </p>
      <p class="px-2 bg-secondary text-xl text-white mr-3 mb-4">Application deadline  </p>
      <p class="px-2 bg-secondary text-xl text-white mr-3 mb-4">Programe Name</p>
      <p class="px-2 bg-secondary text-xl text-white mr-3 mb-4">Action Name </p>
    </div>

    <div class="relative">
      <input v-model="searchData" class="searchBox absolute z-50 px-6 text-xl text-blue-500 placeholder-blue-500 py-3 focus:outline-none" placeholder="Search"/>
      <i v-if="!searchData" class="icon fas fa-search text-blue-900 text-2xl"></i>
      <i v-if="searchData"  @click="clear()" class="icon fa fa-times text-blue-900 text-2xl" aria-hidden="true"></i>
    </div>

    <div class="relative mt-24 h-screen">
      <div class="absolute left-3 list mb-2 p-8 bg-white">
        <List class=""/> 
        <List class=""/> 
        <List class=""/> 
        <List class=""/> 
        <List class=""/> 
        <List class=""/> 
        <List class=""/> 
      </div>
      <div class="blueShadow right-0 bottom-0 bg-blue-900"/>
    </div>
  </div>
</template>

<script>
  import SectionThree from "@/components/Programmes/SectionThree.vue"
  import List from "@/components/Programmes/List.vue"
  export default {
    name: "SectionTwo",
    components: {SectionThree,List},
    data(){
      return{
        searchData: '',
      } 
    },
    methods: {
      clear(){
        this.searchData = ''
      },
    }
  };
</script>
<style>
  .list{
    width:98%;
    height:98%;
    z-index:20;  
  }
  .blueShadow{
   width:95%;
   height: 94%;
   position:absolute;    
  }
</style>