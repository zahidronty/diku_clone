<template>
  <div class="pt-12 px-24">
   <Header @modal="modal" />
   <p class="text-5xl my-24 font-semibold text-blue-900"> Employees </p>
  </div>
</template>

<script>
 import Header from "@/components/Header.vue";
 export default {
   name: "SectionOne",
   components:{Header},
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
