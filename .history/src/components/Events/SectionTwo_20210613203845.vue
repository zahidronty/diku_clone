<template>
  <div :class="style.main">
    <p :class="style.label">Education level</p>

    <div :class="style.buttonContainer">
      <div :class="style.button">Elementary school and kindargarten </div>
      <div :class="style.button">Upper secondary education </div>
      <div :class="style.button">Higher vocational education </div>
      <div :class="style.button">Higher education </div>
      <div :class="style.button">Adult learning </div>
      <div :class="style.button">Voccational education </div>
    </div>
    <div :class="style.twoButtonsContainer">
      <div>
        <p :class="style.label">Topic</p>
        <div :class="style.buttonContainer">
          <p :class="style.button">Artistic research</p>
        </div>
      </div>
      <div>
        <div :class="style.buttonContainer">
          <p :class="style.previousButton">Show previous events</p>
        </div>
      </div>
    </div>
    
    <p :class="style.label">Search for Event</p>
    <div :class="style.searchContainer">
      <input v-model="searchData" :class="style.searchInput" placeholder="Search"/>
      <i @click="clear()" :class="[{'fas fa-search':!searchData},{'fa fa-times':searchData},style.searchIcon]"></i>
    </div>
    <div class="w-screen my-24 z-120 bg-white">
  <Box class=""
      :props = "{
        primary:BoxBottomRight.primary,
        secondary:BoxBottomRight.secondary,
        tertiary:BoxBottomRight.tertiary,
        topBottom:true,
        rightLeft:false,
        contentFor: 'home'
      }"
    /> </div>
    
  </div>
</template>

<script>

  import Box from "@/components/Box/Box.vue";

  export default {
    name: "SectionTwo",
    components: {Box},
    data(){
      return{
        BoxBottomRight: {
          primary:'Resources and',
          secondary: 'tools',
          tertiary: '',
        },
        searchData: '',
        sortBy:'Application deadline',
        isSort: false,
        sortSelect: 1,
        style:{
          main: "z-10 pt-24 px-24 flex flex-col bg-red-50",
          label: "mt-4 font-semibold text-xl text-blue-900",
          buttonContainer: "relative flex flex-wrap py-3 w-full",
          button: "py-3 px-2 text-xl text-white bg-secondary mr-3 mb-4 hover:bg-blue-900",
          sortByButtonContainer: "relative z-30 flex flex-col w-64 py-3",
          sortByButton: "w-full px-2 py-3 bg-secondary text-xl text-white hover:bg-blue-900",
          sortIcon: "text-xl ml-2 fas fa-arrow-down",
          sortOptionContainer: "absolute top-16 z-90 w-full bg-secondary text-xl text-white",
          sortOption: "py-3 px-2 hover:bg-blue-900",
          searchContainer: "relative mt-2",
          searchInput: "w-full absolute z-10 px-6 text-xl text-blue-500 placeholder-blue-500 py-3 focus:outline-none",
          searchIcon: "absolute right-10 top-3 z-50 text-blue-900 text-2xl",
            twoButtonsContainer:"flex justify-between",
          previousButton:"py-3 px-2 mt-12 text-xl text-secondary ring-2 ring-blue-900 bg-white mr-3 mb-4 hover:bg-secondary hover:text-white"

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