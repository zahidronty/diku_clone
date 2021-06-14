<template>
  <div :class="style.main">
   <div :class="style.inputContainer">
    <div :class="style.sortByButtonContainer">
      <p @click="isSortYear=true" :class="style.sortByButton">{{sortBy}}
        <i :class="style.sortIcon"></i>
      </p>
      <div v-if="isSortYear" :class="style.sortOptionContainer">
        <div v-for="year of years">
        <p @click="sortYear(1)" :class="[style.sortOption,{orangeSort: sortSelect==1}]">{year}</p>
        
      </div>
    </div>
    <div :class="style.sortByButtonContainer">
      <p @click="isSortPublication=true" :class="style.sortByButton">{{sortBy}}
        <i :class="style.sortIcon"/>
      </p>
      <div v-if="isSortPublication" :class="style.sortOptionContainer">
        <p @click="sortPublication(1)" :class="[style.sortOption,{orangeSort: sortSelect==1}]">Application deadline</p>
        <p @click="sortPublication(2)" :class="[style.sortOption,{orangeSort: sortSelect==2}]">Programe Name</p>
        <p @click="sortPublication(3)" :class="[style.sortOption,{orangeSort: sortSelect==3}]">Action Name </p>
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
  export default {
    name: "SectionTwo",
    data(){
      return{
        searchData: '',
        sortByYear:'Year',
        isSortYear: false,
        isSortPublication: false,
        sortSelect: 1,
        years:['2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020','2021','All'],
        style:{
          main: "relative z-10 pt-12 pb-24 px-24 flex flex-col bg-red-50",
          inputContainer: "flex",
          sortByButtonContainer: "flex flex-col py-3 mr-6",
          sortByButton: "flex justify-between w-52 px-2 py-3 bg-secondary text-xl text-white hover:bg-blue-900",
          sortIcon: "text-xl ml-2 fas fa-arrow-down",
          sortOptionContainer: "absolute top-28 z-90 w-52 bg-secondary text-xl text-white",
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

      sortYear(type){
        if(type == '1'){
          this.sortByYear ='Application deadline'
          this.sortSelect = 1
          this.programmesData.sort(function compare(a, b) {
            var dateA = new Date(a.deadline);
            var dateB = new Date(b.deadline);
            return dateA - dateB;
          });
        }else if(type == '2'){
          this.sortByYear ='Programe Name'
          this.sortSelect = 2
        }else{
          this.sortByYear ='Action Name'
          this.sortSelect = 3
        }
        this.isSort = false
      },
      sortPublication(type){
        if(type == '1'){
          this.sortByYear ='Application deadline'
          this.sortSelect = 1
          this.programmesData.sort(function compare(a, b) {
            var dateA = new Date(a.deadline);
            var dateB = new Date(b.deadline);
            return dateA - dateB;
          });
        }else if(type == '2'){
          this.sortByYear ='Programe Name'
          this.sortSelect = 2
        }else{
          this.sortByYear ='Action Name'
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