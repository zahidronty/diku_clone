<template>
  <div class="pt-24 pb-24 px-24 flex flex-col h-full bg-red-50">
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
    <div class="flex flex-wrap py-3 w-3/4">
      <p class="py-3 px-2 bg-secondary text-xl text-white mr-3 mb-4">Application deadline
        <i class=" text-xl ml-2 fas fa-arrow-down"></i>
      </p>
    </div>

    <div class="relative">
      <input v-model="searchData" class="searchBox absolute z-50 px-6 text-xl text-blue-500 placeholder-blue-500 py-3 focus:outline-none" placeholder="Search"/>
      <i v-if="!searchData" class="icon fas fa-search text-blue-900 text-2xl"></i>
      <i v-if="searchData"  @click="clear()" class="icon fa fa-times text-blue-900 text-2xl" aria-hidden="true"></i>
    </div>

    <SectionThree class=bg-red-50"/>
  </div>
</template>

<script>
  import SectionThree from "@/components/Programmes/SectionThree.vue"
  export default {
    name: "SectionTwo",
    components: {SectionThree},
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
  
</style>