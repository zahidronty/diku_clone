<template>
  <div :class="style.main">
   <Header @modal="modal" />
   <p class="text-5xl my-12 font-semibold text-blue-900"> Employees </p>
  </div>
</template>

<script>
 import Header from "@/components/Header.vue";
 export default {
   name: "SectionOne",
   components:{Header},
    date(){
      return{
        style:{
          main:"pt-12 px-24",
        }
      }
    },
   methods:{
     modal(x){
       this.$emit('modal',x)
     },
   },
 };
</script>

<style>
  .homeSectionOne {
    background-color: #e8eae9;
  }
</style>
