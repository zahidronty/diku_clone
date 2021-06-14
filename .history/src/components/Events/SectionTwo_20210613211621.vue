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
    <div :class="style.Boxes">
      <div class="w-1/3 mb-24">
  <Box class=""
      :props = "{
        primary:BoxBottomRight.primary,
        secondary:BoxBottomRight.secondary,
        tertiary:BoxBottomRight.tertiary,
        topBottom:true,
        rightLeft:false,
        contentFor: 'events'
      }"
    /> </div>
    </div>
    <div class="relative">
      <div class="bg-secondary w-1/2 h-1/2"></div>
    </div>
    
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
        style:{
          main: "pt-24 px-24 flex flex-col bg-red-50",
            Boxes:"h-1/2 flex",
          label: "mt-4 font-semibold text-xl text-blue-900",
          buttonContainer: "relative flex flex-wrap py-3 w-full",
          button: "py-3 px-2 text-xl text-white bg-secondary mr-3 mb-4 hover:bg-blue-900",
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