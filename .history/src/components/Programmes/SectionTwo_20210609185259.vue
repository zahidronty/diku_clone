<template>
  <div class="pt-24 pb-24 px-24 flex flex-col  bg-red-50">
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
    <div class="relative z-30 flex flex-col w-64">
      <p @click="isSort=true" class="w-full px-2 py-3 bg-secondary text-xl text-white hover:bg-blue-900 ">{{sortBy}}
        <i class=" text-xl ml-2 fas fa-arrow-down"></i>
      </p>
      <div v-if="isSort" class="absolute top-12 z-90 w-full bg-secondary text-xl text-white ">
        <p @click="sort(1)" :class="{orangeSort: sortSelect==1}"  class="py-3 px-2 hover:bg-blue-900 ">Application deadline</p>
        <p @click="sort(2)" :class="{orangeSort: sortSelect==2}"  class="py-3 px-2 hover:bg-blue-900 ">Programe Name</p>
        <p @click="sort(3)" :class="{orangeSort: sortSelect==3}"  class="py-3 px-2 hover:bg-blue-900 ">Action Name </p>
      </div>
    </div>

    <div class="relative mt-20">
      <input v-model="searchData" class="searchBox absolute z-10 px-6 text-xl text-blue-500 placeholder-blue-500 py-3 focus:outline-none" placeholder="Search"/>
      <i v-if="!searchData" class="icon fas fa-search text-blue-900 text-2xl"></i>
      <i v-if="searchData"  @click="clear()" class="icon fa fa-times text-blue-900 text-2xl" aria-hidden="true"></i>
    </div>

  
    <div class="relative mt-24">
      <div class="mb-12 mr-8">
        <List v-for="programData in programmesData" :key="programData.id" 
          :title="programData.title"
          :subtitle="programData.subtitle"
          :deadline="programData.deadline"
        /> 
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
        sortBy:'Application deadline',
        isSort: false,
        sortSelect: 1,
        programmesData:[],
      } 
    },
    mounted(){
      fetch('https://api.npoint.io/6e3818d3fae2f180e31e')
      .then(res => res.json())
      .then(data => {this.programmesData = data})
      .catch(err => console.log(err.message))
    },

    methods: {
      clear(){
        this.searchData = ''
      },

      sort(type){
        if(type == '1'){
          this.sortBy ='Application deadline'
          this.sortSelect = 1
        }else if(type == '2'){
          this.sortBy ='Programe Name'
          this.sortSelect = 2
        }else{
          this.sortBy ='Action Name'
          this.sortSelect = 3
        }
        this.isSort = false
      }
    }
  };
</script>
<style>
  .inner_box {
    position: absolute;
    bottom: 0px;
    width:98%;
    height:100%;
  }
  .inner_box.ghost{
    visibility: hidden;
    width: 100%;
    bottom: 0px;
    left: 0;
    position: relative;
}

  .blueShadow{
   width:95%;
   height: 94%;
   position:absolute;    
   z-index:-1;
  }
  .orangeSort{
    background-color:pink;
  }
</style>