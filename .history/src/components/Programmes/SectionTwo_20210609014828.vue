<template>
  <div class="pt-24 pb-24 px-24 flex flex-col bg-red-50">
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

    <p class="mt-12 font-semibold text-xl text-blue-900 mb-3">Topic</p>
    <div class="flex flex-wrap py-3 w-3/4">
      <p class="py-3 px-2 bg-secondary text-xl text-white mr-3 mb-4">Artistic research</p>
    </div>

    <p class="mt-12 font-semibold text-xl text-blue-900 mb-3">Sort By</p>
    <div class="flex flex-wrap py-3 w-3/4">
      <p class="py-3 px-2 bg-secondary text-xl text-white mr-3 mb-4">Application deadline
        <i class=" text-xl ml-2 fas fa-arrow-down"></i>
      </p>
    </div>

    <div class="relative mt-12 ">
      <input v-model="searchInput" class="searchBox absolute z-50 px-6 text-xl m-1 text-blue-500 placeholder-blue-500 py-3 focus:outline-none" placeholder="Search"/>
      <i class="icon fas fa-search text-blue-900 text-2xl" :class="{ show: !isSearchBox, hide: isSearchBox }"></i>
      <i @click="clear" class="icon fa fa-times text-blue-900 text-2xl" aria-hidden="true" :class="{ show: isSearchBox, hide: !isSearchBox }"></i>
    </div>

        
  </div>
</template>

<script>
  import { watchEffect, ref, defineComponent } from "vue";

  

  export default {
    name: "SectionTwo",
    setup () {
      const searchInput = ref('')

      watchEffect(() => {
        console.log(searchInput.value)
        if (!searchInput.value){
          this.isSearchBox = false
        }
      })      
      return {
        searchInput
      }
  },


    data(){
      return{
        
        isSearchBox: false,
      } 
    },
    watch: {
      searchEmpty(){
        if(this.searchData){
          this.isSearchBox = false;
          console.log("hello")
        }
      }
    },

    methods: {
      
      searchBox(e){
        this.isSearchBox = true
        if(this.searchData.length ==0){
          this.isSearchBox = false;
          console.log(this.searchData.length)
        }
        
        console.log(e)
        
      },

      clear(){
        this.searchData=''
        this.isSearchBox = true;
      },
    }
  };
</script>

<style>
  .show{
  display: block;
 }
 .hide{
  display: none;
 }
</style>