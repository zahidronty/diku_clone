<template>
  <div :class="style.main">
   <div :class="style.inputContainer">
    <div :class="style.sortByButtonContainer">
      <p @click="isSort=true" :class="style.sortByButton">{{sortBy}}
        <i :class="style.sortIcon"></i>
      </p>
      <div v-if="isSort" :class="style.sortOptionContainer">
        <p @click="sortA(1)" :class="[style.sortOption,{orangeSort: sortSelect==1}]">Application deadline</p>
        <p @click="sortA(2)" :class="[style.sortOption,{orangeSort: sortSelect==2}]">Programe Name</p>
        <p @click="sortA(3)" :class="[style.sortOption,{orangeSort: sortSelect==3}]">Action Name </p>
      </div>
    </div>
    <div :class="style.sortByButtonContainer">
      <p @click="isSort=true" :class="style.sortByButton">{{sortBy}}
        <i :class="style.sortIcon"></i>
      </p>
      <div v-if="isSort" :class="style.sortOptionContainer">
        <p @click="sortA(1)" :class="[style.sortOption,{orangeSort: sortSelect==1}]">Application deadline</p>
        <p @click="sortA(2)" :class="[style.sortOption,{orangeSort: sortSelect==2}]">Programe Name</p>
        <p @click="sortA(3)" :class="[style.sortOption,{orangeSort: sortSelect==3}]">Action Name </p>
      </div>
    </div>
    <div :class="style.searchContainer">
      <input v-model="searchData" :class="style.searchInput" placeholder="Search"/>
      <i @click="clear()" :class="[{'fas fa-search':!searchData},{'fa fa-times':searchData},style.searchIcon]"></i>
    </div>
</div>
    

   
  </div>
</template>

<script>

  import List from "@/components/Programmes/List.vue"
  import moment from 'moment'

  export default {
    name: "SectionTwo",
    components: {List},
    data(){
      return{
        searchData: '',
        sortBy:'Year',
        isSort: false,
        sortSelect: 1,
        programmesData:[],
        style:{
          main: "relative z-10 pt-12 pb-24 px-24 flex flex-col bg-red-50",
          inputContainer: "flex",
          sortByButtonContainer: "flex flex-col py-3 mr-6",
          sortByButton: "w-36 px-2 py-3 bg-secondary text-xl text-white hover:bg-blue-900",
          sortIcon: "text-xl ml-2 fas fa-arrow-down",
          sortOptionContainer: "absolute top-16 z-90 w-full bg-secondary text-xl text-white",
          sortOption: "py-3 px-2 hover:bg-blue-900",
          searchContainer: "relative mt-3 flex-grow",
          searchInput: "w-full px-6 text-xl text-blue-500 placeholder-blue-500 py-3 focus:outline-none",
          searchIcon: "absolute right-10 top-3 z-50 text-blue-900 text-2xl",
          
        }
      } 
    },

    methods: {
      clear(){
        this.searchData = ''
      },

      sortA(type){
        if(type == '1'){
          this.sortBy ='Application deadline'
          this.sortSelect = 1
          this.programmesData.sort(function compare(a, b) {
            var dateA = new Date(a.deadline);
            var dateB = new Date(b.deadline);
            return dateA - dateB;
          });
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
<style scoped>
  .blueShadow{
    width:95%;
    height: 94%;
  }
  .orangeSort{
    background-color:pink;
  }
</style>