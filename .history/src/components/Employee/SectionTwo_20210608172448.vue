<template>
 <div class="w-screen h-full bg-red-50 py-8">
    <div class="pt-8 px-24">
     <p class="text-2xl text-blue-900 font-semibold">Here you will find an overview of employees at Diku.</p>
     <div class="relative mt-12 ">
      <input @click="departmentsSort" v-model="searchData" class="searchBox absolute z-50 px-6 text-xl m-1 text-blue-500 placeholder-blue-500 py-3 focus:outline-none" placeholder="Search by name, department and work area"/>
      <ul class="absolute top-0 pt-24 z-30 pb-3 bg-white w-full border-2 border-blue-900" :class="{show: isSuggest, hide: !isSuggest }"  >
       <li class="mx-6 border-b-2 border-secondary text-secondary text-lg font-semibold pl-6 " @click="suggestSelected" v-for="department in departments" :key="department">{{department}}</li>
      </ul>
      <i class="icon fas fa-search text-blue-900 text-2xl" :class="{ show: !isSearch, hide: isSearch }"></i>
      <i @click = "clear" class="icon fa fa-times text-blue-900 text-2xl" aria-hidden="true" :class="{ show: isSearch, hide: !isSearch }"></i>
     </div>
    </div>
    <div class="flex flex-wrap mt-52 px-24">
   <div class="py-4 w-1/2" v-for="user in filteredUsers.slice(0, this.userLimit)" :key="key">
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
   <button @click="more" :class="{ hide:!isMore, show: isMore}" class="focus:outline-none w-screen text-center text-xl text-blue-900 ">
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
  props:['isSuggest',],
  data() {
   return {
    users: [],
    searchData:'',
    key:'user.id',
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
   fetch('http://localhost:3000/users')
   .then(res => res.json())
   .then(data => this.users = data)
   .catch(err => console.log(err.message))
    
  },

  methods: {
   departmentSearch(data){
    this.searchData = data;
    this.key = "user.department";
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
    console.log(this.departments)
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

   clear(){
    this.searchData=''
    this.isMore = true;
   }
  },
 };
</script>

<style>
 .searchBox{
  width: 90%;
 }
 .icon{
  position: absolute;
  right: 40px ;
  bottom: -50px; 
  z-index:60;
 }
 .show{
  display: block;
 }
 .hide{
  display: none;
 }
 
 
</style>