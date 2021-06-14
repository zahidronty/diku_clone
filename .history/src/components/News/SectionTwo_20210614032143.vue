<template>
  <div :class="style.main">
    <div :class="style.searchContainer">
      <input v-model="searchData" :class="style.searchInput" placeholder="Search"/>
      <i @click="clear()" :class="[{'fas fa-search':!searchData},{'fa fa-times':searchData},style.searchIcon]"></i>
    </div>
    <BulletinBox :props="{
        color:'blue',
        picName:'Bulletine1.jpg',
        picLeftRight:'right',
        pic: true,
        type: 'Report',
        title: BulletineBox1.title,
        subtitle: BulletineBox1.subtitle,
        info: BulletineBox1.info
      }" 
    />

    <BulletinBox :props="{
       color:'red',
       type: 'News',
       shadowLeftRight:'left',
       pic: false,
       title: BulletineBox3.title,
       subtitle: BulletineBox3.subtitle,
       info: BulletineBox3.info
     }" 
    />
  </div>
</template>

<script>
  import BulletinBox from "@/components/BulletinBox/BulletinBox.vue";
  export default {
    name: "SectionTwo",
    components: {BulletinBox},
    data(){
      return{
        BulletineBox1:{
          title:"Diku's report series 06/2021",
          subtitle:"Crisis and creativity. Consequences of the Covid-19 pandemic for international educational cooperation",
          info:"Norway and Sri Lanka are working together through the Nor-Lanka-project in order to strengthen the Blue Economy. Diku will fund the project until 2023.",
        },
        BulletineBox3:{
          title:"White Paper on student mobility: A summary",
          subtitle:"",
          info:"The overall goal of this White Paper, published October 2020, is to contribute to a cultural change in the higher education sector where international student mobility becomes a natural and integral part of all study programmes. Here you will find a summary of the paper.",
        },
        resources:[
          {
            primary:"Diku's project database",
            secondary: 'Searchable database of all projects granted support by Diku.',
          },
          {
            primary:'EEA and Norway Grants',
            secondary: 'Establish cooperation and network in education with Norwegian partners.',
          },
          {
            primary:'Norwegian Centres for Excellence in Education (SFU)',
            secondary: "Academic communities with the status of 'Centre for Excellence in Education' (SFU) demonstrate excellent quality and innovative practices in education.",
          },
          {
            primary:'Student welfare organisations',
            secondary: 'Here you will find information on student welfare organisations for students in Norway.',
          },
        ],
        searchData: '',
        style:{
          main: "pt-24 pb-24 px-24 flex flex-col bg-red-50",
          label: "mt-4 font-semibold text-xl text-blue-900",
          buttonContainer: "relative flex flex-wrap py-3 w-full",
          button: "py-3 px-2 text-xl text-white bg-secondary mr-3 mb-4 hover:bg-blue-900",
          searchContainer: "relative mt-2 mb-12",
          searchInput: "w-full absolute z-10 px-6 text-xl text-blue-500 placeholder-blue-500 py-3 focus:outline-none",
          searchIcon: "absolute right-10 top-3 z-20 text-blue-900 text-2xl",
          twoButtonsContainer:"flex justify-between",
          previousButton:"py-3 px-2 mt-12 text-xl text-secondary ring-2 ring-blue-900 bg-white mr-3 mb-4 hover:bg-secondary hover:text-white"

        }
      } 
    },
    methods: {
      clear(){
        this.searchData = ''
      },

    }
  };
</script>
