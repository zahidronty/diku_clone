<template>
<div class="w-screen h-full bg-red-50 py-8">
   <div class="pt-8 px-24">
    <p class="text-2xl text-blue-900 font-semibold">Here you will find an overview of employees at Diku.</p>
    <div class="relative">
     <input v-model="searchData"  class="w-full my-12 px-6 text-xl text-blue-500 placeholder-blue-500 py-3 focus:outline-none" placeholder="Search by name, department and work area"/>
     <i class="icon fas fa-search text-blue-900 text-2xl"></i>
    </div>
   </div>
   <div class="flex flex-wrap px-24">
  <div class="py-4 w-1/2" v-for="user in filteredUsers" :key="key">
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
    key:'user.id',
    filteredUser:[]
   };
  },

  computed: {
   filteredUsers(){
    let resultDepartment;
    if (!this.searchData){
     return this.users
    }
    else if(this.searchData){
     resultDepartment = this.users.filter(user => user.department.match(this.searchData));
     this.filteredUser = resultDepartment;
     console.log(this.filteredUser);
     filteredFirstName();
     return resultDepartment
    }
   },
   filteredFirstName(){
    resultFirstName = this.users.filter(user => user.first_name.match(this.searchData));
     
   }
  },
  
  mounted() {
   fetch('http://localhost:3000/users')
   .then(res => res.json())
   .then(data => this.users = data)
   .catch(err => console.log(err.message))
  },

  methods: {
   departmentSearch(data){
    console.log(data)
    this.searchData = data;
    this.key = "user.department";
   }
  }
 };
</script>

<style>
 .icon{
  position: absolute;
  right: 20px ;
  bottom: 55px; 
 }
 
</style>