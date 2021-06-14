<template>
  <div :class="style.main">
    <div :class="style.searchContainer">
      <input v-model="searchData" :class="style.searchInput" placeholder="Search"/>
      <i @click="clear()" :class="[{'fas fa-search':!searchData},{'fa fa-times':searchData},style.searchIcon]"></i>
    </div>
    
    
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
        News:[
          {
           title:"White Paper on student mobility: A summary",
           info:"The overall goal of this White Paper, published October 2020, is to contribute to a cultural change in the higher education sector where international student mobility becomes a natural and integral part of all study programmes. Here you will find a summary of the paper.",
           pic: false,
           picName:'',
          },
          {
           title:"Information to project coordinators for projects financed by Diku",
           info:"Diku understands that the corona situation will have a significant impact on the implementation of many of the projects we finance.",
           pic: false,
           picName:'',
          },
          {
           title:"Four new Centres for Excellence in Education",
           info:"Four new academic environments have been awarded the status Centre for Excellence in Education (SFU), with host institutions in Bergen, Oslo and Horten. The centres will receive a total of 137 million NOK over five years.",
           pic: true,
           picName:'',
          },
          {
           title:"Norwegian and international students need more meeting places",
           info:"International students in Norway find it far easier getting to know other international students than Norwegian students, a new report by Diku shows. It recommends that Norwegian universities do more to endorse exchanges between international and domestic students to advance intercultural learning for their student population as a whole.",
           pic: true,
           picName:'',
          },
          {
           title:"White Paper on student mobility: A summary",
           info:"",
           pic: false,
           picName:'',
          },
          {
           title:"White Paper on student mobility: A summary",
           info:"",
           pic: false,
           picName:'',
          },
          {
           title:"White Paper on student mobility: A summary",
           info:"",
           pic: false,
           picName:'',
          },


        ],
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
