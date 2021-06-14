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
    <div class="flex">
      <div>
      <p :class="style.label">Topic</p>
    <div :class="style.buttonContainer">
      <p :class="style.button">Artistic research</p>
    </div>
     </div>

    </div>
    

    <p :class="style.label">Search for Event</p>
    <div :class="style.searchContainer">
      <input v-model="searchData" :class="style.searchInput" placeholder="Search"/>
      <i @click="clear()" :class="[{'fas fa-search':!searchData},{'fa fa-times':searchData},style.searchIcon]"></i>
    </div>

    <div :class="style.listBox">
      <div :class="style.listContainer">
        <div v-for="programData in programmesData" :key="programData.id">
          <List  
            :title="programData.title"
            :subtitle="programData.subtitle"
            :deadline="programData.deadline"
            :id="programData.id"
          />
        </div>
      </div>
      <div :class="style.blueShadow"/>
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
        sortBy:'Application deadline',
        isSort: false,
        sortSelect: 1,
        programmesData:[],
        style:{
          main: "relative z-10 pt-24 px-24 flex flex-col bg-red-50",
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
          listBox: "relative mt-24",
          listContainer: "relative z-30 mb-2 mr-2 shadow-lg",
          blueShadow: "blueShadow h-3/4 absolute z-0 right-0 bottom-0 bg-blue-900",
        }
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