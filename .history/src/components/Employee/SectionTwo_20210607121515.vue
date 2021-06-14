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
   <button @click="more" class="focus:outline-none w-screen text-center text-xl text-blue-900 ">
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
    key:'user.id',
    filteredUser:[],
    userLimit:10,
   };
  },

  computed: {
   filteredUsers(){
    let resultDepartment;
    if (!this.searchData){
     this.filteredUser = this.users
     return this.filteredUser
    }
    else if(this.searchData){
     resultDepartment = this.users.filter(user => user.department.match(this.searchData));
     let filterByFirstName = this.users.filter(user => user.first_name.match(this.searchData));
     let merge1 = resultDepartment.concat(filterByFirstName)
     let filterByLastName= this.users.filter(user => user.last_name.match(this.searchData));
     let merge2 = merge1.concat(filterByLastName)
     this.filteredUser = merge2;
     console.log(merge2);
     
     return this.filteredUser
    }
   },
   filteredFirstName(x){
    let resultFirstName = this.users.filter(user => user.first_name.match(this.searchData));
   // this.filteredUser = x.push(resultFirstName);
    console.log(resultFirstName);
    return resultFirstName
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
   },

   more(){
    this.userLimit += 10; 
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