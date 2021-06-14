<template>
 <div class="w-screen h-full bg-red-50 py-8">
    <div class="pt-8 px-24">
     <p class="text-2xl text-blue-900 font-semibold">Here you will find an overview of employees at Diku.</p>
     
    </div>
    <div class="flex flex-wrap mt-52 px-24">
   <div class="py-4 w-1/2" v-for="user in filteredUsers.slice(0, this.userLimit)" :key="user.id">
    <EmployeeBox 
     @departmentSearch="departmentSearch"
     :picture="user.picture" 
     :firstName="user.first_name" 
     :lastName="user.last_name"
     :department="user.department"
     :position="user.position"
     :phone="user.phone"
     :email="user.email"
    />
   </div>
   <button v-if="isMore" @click="more" class="focus:outline-none w-screen text-center text-xl text-blue-900 ">
    <div class="font-semibold">View More</div>
    <i class=" text-2xl animate-bounce fas fa-arrow-down"></i>
   </button>
  </div>
 </div>
</template>

<script>
 import EmployeeBox from "@/components/Box/EmployeeBox.vue";

 export default {
  name: "SectionTwo",
  components:{EmployeeBox},
  
  data() {
   return {
    users: [],
    searchData:'',
    keys:'user.id',
    filteredUser:[],
    userLimit:10,
    isSearch: false,
    departments:[],
    isMore:true,
    isSuggest:false,
   };
  },

  computed: {
   filteredUsers(){
    let resultDepartment;
    if (!this.searchData){
     this.filteredUser = this.users
     this.isSearch = false
     return this.filteredUser
    }
    else if(this.searchData){
     resultDepartment = this.users.filter(user => user.department.match(this.searchData));
     let filterByFirstName = this.users.filter(user => user.first_name.match(this.searchData));
     let merge1 = resultDepartment.concat(filterByFirstName)
     let filterByLastName= this.users.filter(user => user.last_name.match(this.searchData));
     let merge2 = merge1.concat(filterByLastName)
     this.filteredUser = merge2;
     this.isSearch = true;
     return this.filteredUser
    }
   },
  },
  
  mounted() {
   fetch('https://api.npoint.io/d7dc5e6dbaf118fd1699')
   .then(res => res.json())
   .then(data => this.users = data)
   .catch(err => console.log(err.message))
    
  },

  methods: {
   departmentSearch(data){
    this.searchData = data;
    this.keys = "user.department";
   },

   departmentsSort(){
    var departmentsAll=[];
    this.users.forEach(
     element => {
      if (!departmentsAll.includes(element.department)){
       departmentsAll.push(element.department)
      }
     } 
    )
    this.departments = departmentsAll;
    this.isSuggest = true;
   },

   suggestSelected(e){
    this.searchData = e.srcElement.childNodes[0].data;
    this.isSuggest = false;
   },
   
   more(){
    this.userLimit += 10;
    if (this.filteredUser.length - this.userLimit ){
     this.isMore = false
    }
   },

   suggest(e) {
    setTimeout(() => {
        this.isSuggest = false;
      }, 300);
    
   },

   clear(){
    this.searchData=''
    this.isMore = true;
   },
  },
 };
</script>

<style scoped>
 .searchBox{
  width: 99%;
 }
 .icon{
  position: absolute;
  right: 40px ;
  bottom: -50px; 
  z-index:60;
 }
</style>