<template>
 <div class="w-screen h-full bg-red-50 py-8">
    ss
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